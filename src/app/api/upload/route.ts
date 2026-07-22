import { NextResponse } from "next/server";
import { sendLeadNotification } from "@/lib/email";
import { checkRateLimit, getClientIp, HONEYPOT_MAX_REQUESTS } from "@/lib/rate-limit";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB — attach-only mode for now

function sanitizeFilename(name: string): string {
  const base = name.split(/[\\/]/).pop() ?? "file";
  const cleaned = base.replace(/[^a-zA-Z0-9._-]/g, "_").replace(/^\.+/, "");
  return cleaned.slice(-150) || "file";
}

export async function POST(request: Request) {
  const ip = getClientIp(request);

  try {
    const formData = await request.formData();

    // Honeypot: real users never see or fill this field. Checked — and
    // rate-limited on its own bucket — before the real rate limit, so a bot
    // spamming this field can't burn through a shared IP's real quota.
    const honeypot = String(formData.get("company") ?? "").trim();
    if (honeypot) {
      const honeypotLimit = checkRateLimit(`upload:honeypot:${ip}`, HONEYPOT_MAX_REQUESTS);
      if (!honeypotLimit.allowed) {
        return NextResponse.json(
          { ok: false, error: "Too many requests. Please try again later." },
          { status: 429, headers: { "Retry-After": String(honeypotLimit.retryAfterSeconds) } },
        );
      }
      return NextResponse.json({
        ok: true,
        referenceId: `HMK-${Date.now().toString(36).toUpperCase()}`,
      });
    }

    const rateLimit = checkRateLimit(`upload:${ip}`);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Please try again later." },
        { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } },
      );
    }

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const whatsapp = String(formData.get("whatsapp") ?? "").trim();
    const service = String(formData.get("service") ?? "").trim();
    const instructions = String(formData.get("instructions") ?? "").trim();
    const file = formData.get("file");

    if (!name || !email || !whatsapp || !service) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 },
      );
    }

    if (!file || !(file instanceof File) || file.size === 0) {
      return NextResponse.json({ ok: false, error: "A design file is required." }, { status: 400 });
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Files over 10MB require our large-file upload — support for this is coming shortly.",
        },
        { status: 400 },
      );
    }

    const referenceId = `HMK-${Date.now().toString(36).toUpperCase()}`;
    const safeFileName = sanitizeFilename(file.name);
    const fileBuffer = Buffer.from(await file.arrayBuffer());

    try {
      await sendLeadNotification({
        subject: `New artwork upload — ${referenceId}`,
        fields: {
          Reference: referenceId,
          Name: name,
          Email: email,
          WhatsApp: whatsapp,
          Service: service,
          Instructions: instructions || "(none provided)",
          File: safeFileName,
        },
        attachment: {
          filename: safeFileName,
          content: fileBuffer,
          contentType: file.type || "application/octet-stream",
        },
      });
    } catch (error) {
      console.error("Failed to send upload notification email:", error);
      return NextResponse.json(
        { ok: false, error: "Failed to submit your upload. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json({
      ok: true,
      referenceId,
      received: {
        name,
        email,
        whatsapp,
        service,
        instructions,
        fileName: safeFileName,
        fileSize: file.size,
      },
    });
  } catch {
    return NextResponse.json({ ok: false, error: "Upload failed." }, { status: 500 });
  }
}
