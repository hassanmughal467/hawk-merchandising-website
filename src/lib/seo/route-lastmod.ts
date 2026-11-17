import { execFileSync } from "node:child_process";
import { existsSync, statSync } from "node:fs";
import path from "node:path";

/**
 * Source files whose latest change should drive sitemap lastmod for each public route.
 * Prefer git commit dates (stable across deploys); fall back to filesystem mtime.
 */
const routeSources: Record<string, readonly string[]> = {
  "/": ["src/app/page.tsx", "src/lib/content/homepage.ts", "src/lib/content/reviews.ts"],
  "/embroidery-digitizing": [
    "src/app/embroidery-digitizing/page.tsx",
    "src/lib/content/service-pages.ts",
  ],
  "/cap-digitizing": ["src/app/cap-digitizing/page.tsx", "src/lib/content/service-pages.ts"],
  "/3d-puff-digitizing": [
    "src/app/3d-puff-digitizing/page.tsx",
    "src/lib/content/service-pages.ts",
  ],
  "/jacket-back-digitizing": [
    "src/app/jacket-back-digitizing/page.tsx",
    "src/lib/content/service-pages.ts",
  ],
  "/vector-art-conversion": [
    "src/app/vector-art-conversion/page.tsx",
    "src/lib/content/service-pages.ts",
  ],
  "/logo-redraw": ["src/app/logo-redraw/page.tsx", "src/lib/content/service-pages.ts"],
  "/custom-patches": ["src/app/custom-patches/page.tsx", "src/lib/content/service-pages.ts"],
  "/woven-patches": ["src/app/woven-patches/page.tsx", "src/lib/content/service-pages.ts"],
  "/pvc-patches": ["src/app/pvc-patches/page.tsx", "src/lib/content/service-pages.ts"],
  "/chenille-patches": ["src/app/chenille-patches/page.tsx", "src/lib/content/service-pages.ts"],
  "/leather-patches": ["src/app/leather-patches/page.tsx", "src/lib/content/service-pages.ts"],
  "/promotional-products": ["src/app/promotional-products/page.tsx"],
  "/portfolio": ["src/app/portfolio/page.tsx", "src/lib/content/portfolio.ts"],
  "/portfolio/videos": ["src/app/portfolio/videos/page.tsx", "src/lib/content/videos.ts"],
  "/pricing": ["src/app/pricing/page.tsx", "src/lib/content/pricing.ts"],
  "/services": ["src/app/services/page.tsx", "src/lib/site.ts"],
  "/about": ["src/app/about/page.tsx", "src/lib/content/about.ts"],
  "/contact": ["src/app/contact/page.tsx", "src/lib/site.ts"],
  "/upload": ["src/app/upload/page.tsx"],
  "/awards": ["src/app/awards/page.tsx"],
  "/free-downloads": ["src/app/free-downloads/page.tsx"],
  "/tips-and-tricks": ["src/app/tips-and-tricks/page.tsx"],
  "/stock-designs": ["src/app/stock-designs/page.tsx"],
  "/terms": ["src/app/terms/page.tsx"],
  "/privacy": ["src/app/privacy/page.tsx"],
  "/free-trial": ["src/app/free-trial/page.tsx"],
};

const lastmodCache = new Map<string, Date>();

function gitCommitDateMs(relativeFile: string): number {
  try {
    const out = execFileSync("git", ["log", "-1", "--format=%cI", "--", relativeFile], {
      encoding: "utf8",
      cwd: process.cwd(),
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    if (!out) return 0;
    const ms = Date.parse(out);
    return Number.isFinite(ms) ? ms : 0;
  } catch {
    return 0;
  }
}

function fsMtimeMs(relativeFile: string): number {
  try {
    const absolute = path.join(process.cwd(), relativeFile);
    if (!existsSync(absolute)) return 0;
    return statSync(absolute).mtimeMs;
  } catch {
    return 0;
  }
}

function defaultPageSources(routePath: string): string[] {
  if (routePath === "/") return ["src/app/page.tsx"];
  return [`src/app${routePath}/page.tsx`];
}

/** Latest content change for a public marketing route (sitemap lastmod). */
export function lastModifiedForRoute(routePath: string): Date {
  const cached = lastmodCache.get(routePath);
  if (cached) return cached;

  const files = routeSources[routePath] ?? defaultPageSources(routePath);
  let latestMs = 0;

  for (const file of files) {
    latestMs = Math.max(latestMs, gitCommitDateMs(file));
  }

  if (!latestMs) {
    for (const file of files) {
      latestMs = Math.max(latestMs, fsMtimeMs(file));
    }
  }

  const date = latestMs ? new Date(latestMs) : new Date();
  lastmodCache.set(routePath, date);
  return date;
}
