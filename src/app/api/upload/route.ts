import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

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

    // Mock persistence / queue (replace with DB or email integration)
    const referenceId = `HMK-${Date.now().toString(36).toUpperCase()}`;
    await new Promise((resolve) => setTimeout(resolve, 650));

    return NextResponse.json({
      ok: true,
      referenceId,
      received: {
        name,
        email,
        whatsapp,
        service,
        instructions,
        fileName: file.name,
        fileSize: file.size,
      },
    });
  } catch {
    return NextResponse.json({ ok: false, error: "Upload failed." }, { status: 500 });
  }
}
