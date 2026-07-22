// In-memory, per-process rate limiter.
//
// This resets on every server restart/deploy, and each server instance
// keeps its own counters — it will NOT enforce a shared limit across
// multiple instances (serverless functions, multi-region, or a
// load-balanced fleet all see separate counts). That's fine at current
// traffic on a single long-running Node process. If this app ever moves
// to serverless/edge or scales to multiple instances, replace this with
// a shared store such as Upstash Redis (has a built-in sliding-window
// rate limit helper and works well from serverless/edge runtimes).

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5; // real submissions
// Honeypot hits use their own bucket (see getClientIp callers) so a bot
// spamming the honeypot field can't burn through a shared IP's real quota
// (e.g. office/shared wifi). Generous, just to cap a runaway bot loop.
export const HONEYPOT_MAX_REQUESTS = 20;
const CLEANUP_THRESHOLD = 1000;

const store = new Map<string, RateLimitEntry>();

function cleanupExpired(now: number): void {
  if (store.size < CLEANUP_THRESHOLD) return;
  for (const [key, entry] of store) {
    if (entry.resetAt <= now) store.delete(key);
  }
}

export function checkRateLimit(
  key: string,
  maxRequests: number = MAX_REQUESTS,
): { allowed: boolean; retryAfterSeconds: number } {
  const now = Date.now();
  cleanupExpired(now);

  const entry = store.get(key);

  if (!entry || entry.resetAt <= now) {
    store.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, retryAfterSeconds: 0 };
  }

  if (entry.count >= maxRequests) {
    return { allowed: false, retryAfterSeconds: Math.ceil((entry.resetAt - now) / 1000) };
  }

  entry.count += 1;
  return { allowed: true, retryAfterSeconds: 0 };
}

export function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }
  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp.trim();
  return "unknown";
}
