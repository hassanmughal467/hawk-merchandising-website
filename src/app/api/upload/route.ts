import { NextResponse } from "next/server";
import { freeTrialServiceOptions } from "@/lib/content/free-trial";
import { sendLeadNotification } from "@/lib/email";
import { checkRateLimit, getClientIp, HONEYPOT_MAX_REQUESTS } from "@/lib/rate-limit";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB — attach-only mode for now

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

function sanitizeFilename(name: string): string {
  const base = name.split(/[\\/]/).pop() ?? "file";
  const cleaned = base.replace(/[^a-zA-Z0-9._-]/g, "_").replace(/^\.+/, "");
  return cleaned.slice(-150) || "file";
}

function readField(formData: FormData, key: string): string {
  return String(formData.get(key) ?? "").trim();
}

function collectUtmFields(formData: FormData): Record<string, string> {
  const utm: Record<string, string> = {};
  for (const key of UTM_KEYS) {
    const value = readField(formData, key);
    if (value) utm[key] = value;
  }
  return utm;
}

export async function POST(request: Request) {
  const ip = getClientIp(request);

  try {
    const formData = await request.formData();
    const intent = readField(formData, "intent");
    const isFreeTrial = intent === "free-trial";

    // Honeypot: upload form uses `company`; free-trial uses real `company` + honeypot `website`.
    const honeypot = isFreeTrial
      ? readField(formData, "website")
      : readField(formData, "company");
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

    const name = readField(formData, "name");
    const email = readField(formData, "email");
    const service = readField(formData, "service");
    const file = formData.get("file");
    const utm = collectUtmFields(formData);

    if (isFreeTrial) {
      const company = readField(formData, "company");
      const country = readField(formData, "country");
      const fileFormat = readField(formData, "fileFormat");
      const notes = readField(formData, "notes") || readField(formData, "instructions");

      if (!name || !email || !company || !country || !service || !fileFormat) {
        return NextResponse.json(
          { ok: false, error: "Missing required fields." },
          { status: 400 },
        );
      }

      if (!(freeTrialServiceOptions as readonly string[]).includes(service)) {
        return NextResponse.json({ ok: false, error: "Select a valid service." }, { status: 400 });
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

      const fields: Record<string, string> = {
        Reference: referenceId,
        Intent: "Free trial",
        Name: name,
        Email: email,
        Company: company,
        Country: country,
        Service: service,
        "Required file format": fileFormat,
        Notes: notes || "(none provided)",
        File: safeFileName,
      };
      for (const [key, value] of Object.entries(utm)) {
        fields[key] = value;
      }

      try {
        await sendLeadNotification({
          subject: `New free trial request — ${referenceId}`,
          fields,
          attachment: {
            filename: safeFileName,
            content: fileBuffer,
            contentType: file.type || "application/octet-stream",
          },
        });
      } catch (error) {
        console.error("Failed to send free-trial notification email:", error);
        return NextResponse.json(
          { ok: false, error: "Failed to submit your request. Please try again." },
          { status: 500 },
        );
      }

      return NextResponse.json({
        ok: true,
        referenceId,
        received: {
          intent: "free-trial",
          name,
          email,
          company,
          country,
          service,
          fileFormat,
          notes,
          fileName: safeFileName,
          fileSize: file.size,
          utm,
        },
      });
    }

    const whatsapp = readField(formData, "whatsapp");
    const instructions = readField(formData, "instructions");

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
