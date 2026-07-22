import nodemailer from "nodemailer";

type LeadAttachment = {
  filename: string;
  content: Buffer;
  contentType?: string;
};

type SendLeadNotificationInput = {
  subject: string;
  fields: Record<string, string>;
  attachment?: LeadAttachment;
};

let transporter: nodemailer.Transporter | null = null;

function getTransporter(): nodemailer.Transporter {
  if (transporter) return transporter;

  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_APP_PASSWORD;

  if (!user || !pass) {
    throw new Error("EMAIL_USER and EMAIL_APP_PASSWORD must be set.");
  }

  transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: { user, pass },
  });

  return transporter;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendLeadNotification({
  subject,
  fields,
  attachment,
}: SendLeadNotificationInput): Promise<void> {
  // Test mode: skip the real SMTP round-trip entirely (used by the
  // Playwright suite) so automated runs don't hit Gmail or spam the inbox.
  if (process.env.EMAIL_TEST_MODE === "true") {
    return;
  }

  const user = process.env.EMAIL_USER;
  if (!user) {
    throw new Error("EMAIL_USER must be set.");
  }

  const safeSubject = subject.replace(/[\r\n]+/g, " ").slice(0, 200);

  const text = Object.entries(fields)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");

  const html = `<table cellpadding="6" cellspacing="0">${Object.entries(fields)
    .map(
      ([key, value]) =>
        `<tr><td><strong>${escapeHtml(key)}</strong></td><td>${escapeHtml(value).replace(/\n/g, "<br/>")}</td></tr>`,
    )
    .join("")}</table>`;

  await getTransporter().sendMail({
    from: user,
    to: user,
    subject: safeSubject,
    text,
    html,
    attachments: attachment
      ? [
          {
            filename: attachment.filename,
            content: attachment.content,
            contentType: attachment.contentType,
          },
        ]
      : undefined,
  });
}
