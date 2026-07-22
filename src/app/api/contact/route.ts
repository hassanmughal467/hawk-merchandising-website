import { NextResponse } from "next/server";
import { sendLeadNotification } from "@/lib/email";
import { serviceOptions } from "@/lib/site";
import { checkRateLimit, getClientIp, HONEYPOT_MAX_REQUESTS } from "@/lib/rate-limit";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[0-9+\-\s()]{8,20}$/;

const MAX_NAME = 100;
const MAX_EMAIL = 254;
const MAX_MESSAGE = 5000;
const MAX_SOURCE = 100;

const VALID_SERVICES: readonly string[] = serviceOptions;

function readField(formData: FormData, key: string): string {
  return String(formData.get(key) ?? "").trim();
}

export async function POST(request: Request) {
  const ip = getClientIp(request);

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form submission." }, { status: 400 });
  }

  // Honeypot: real users never see or fill this field. Checked — and
  // rate-limited on its own bucket — before the real rate limit, so a bot
  // spamming this field can't burn through a shared IP's real quota.
  const honeypot = readField(formData, "company");
  if (honeypot) {
    const honeypotLimit = checkRateLimit(`contact:honeypot:${ip}`, HONEYPOT_MAX_REQUESTS);
    if (!honeypotLimit.allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429, headers: { "Retry-After": String(honeypotLimit.retryAfterSeconds) } },
      );
    }
    return NextResponse.json({
      ok: true,
      referenceId: `HMK-${Date.now().toString(36).toUpperCase()}`,
    });
  }

  const rateLimit = checkRateLimit(`contact:${ip}`);
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } },
    );
  }

  const name = readField(formData, "name");
  const email = readField(formData, "email");
  const whatsapp = readField(formData, "whatsapp");
  const service = readField(formData, "service");
  const message = readField(formData, "message");
  const source = readField(formData, "source") || "website";

  if (name.length < 2 || name.length > MAX_NAME) {
    return NextResponse.json({ error: "Enter your full name." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email) || email.length > MAX_EMAIL) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }
  if (!PHONE_RE.test(whatsapp)) {
    return NextResponse.json(
      { error: "Enter a WhatsApp number we can reach you on." },
      { status: 400 },
    );
  }
  if (!VALID_SERVICES.includes(service)) {
    return NextResponse.json({ error: "Select a valid service." }, { status: 400 });
  }
  if (message.length < 10 || message.length > MAX_MESSAGE) {
    return NextResponse.json(
      { error: "Tell us about your project (min. 10 characters)." },
      { status: 400 },
    );
  }
  if (source.length > MAX_SOURCE) {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }

  const referenceId = `HMK-${Date.now().toString(36).toUpperCase()}`;

  try {
    await sendLeadNotification({
      subject: `New ${service} inquiry — ${referenceId}`,
      fields: {
        Reference: referenceId,
        Name: name,
        Email: email,
        WhatsApp: whatsapp,
        Service: service,
        Source: source,
        Message: message,
      },
    });
  } catch (error) {
    console.error("Failed to send contact notification email:", error);
    return NextResponse.json(
      { error: "Failed to send your message. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true, referenceId });
}
