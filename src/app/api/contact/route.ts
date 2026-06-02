import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");
    const packageName = String(formData.get("package") || "");
    const type = String(formData.get("type") || "Kontakt");

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"EliteCV Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO,
      replyTo: email,
      subject: `Neue EliteCV Anfrage: ${type}`,
      text: `
Typ: ${type}

Name: ${name}
E-Mail: ${email}
Paket: ${packageName}

Nachricht:
${message}
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Mail error:", error);

    return NextResponse.json(
      { ok: false, error: "Mail konnte nicht versendet werden." },
      { status: 500 }
    );
  }
}