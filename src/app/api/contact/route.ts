import { NextResponse } from "next/server";

export async function POST(request: Request) {
  await new Promise((r) => setTimeout(r, 650));

  try {
    const formData = await request.formData();
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();

    if (name.length < 2 || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
    }

    const referenceId = `HMK-${Date.now().toString(36).toUpperCase()}`;

    // Production: persist to CRM/email and store uploaded files securely.
    return NextResponse.json({ ok: true, referenceId });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
