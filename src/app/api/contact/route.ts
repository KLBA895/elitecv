import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");
    const packageName = String(formData.get("package") || "");
    const linkedinUrl = String(formData.get("linkedinUrl") || "");
    const addonsText = String(formData.get("addonsText") || "Keine Zusatzleistungen ausgewählt");
    const totalText = String(formData.get("totalText") || "");
    const type = String(formData.get("type") || "Kontakt");

    const files = formData
      .getAll("files")
      .filter((file): file is File => file instanceof File && file.size > 0);

    const maxSize = 10 * 1024 * 1024;

    for (const file of files) {
      if (file.size > maxSize) {
        return NextResponse.json(
          { ok: false, error: "Datei ist zu gross. Maximal 10 MB erlaubt." },
          { status: 400 }
        );
      }

      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (!allowedTypes.includes(file.type)) {
        return NextResponse.json(
          { ok: false, error: "Ungültiger Dateityp. Nur PDF, DOC und DOCX erlaubt." },
          { status: 400 }
        );
      }
    }

    const attachments = await Promise.all(
      files.map(async (file) => ({
        filename: file.name,
        content: Buffer.from(await file.arrayBuffer()),
        contentType: file.type || "application/octet-stream",
      }))
    );

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
LinkedIn Profil: ${linkedinUrl || "Nicht angegeben"}
Zusatzleistungen:
${addonsText}

Gesamtpreis:
${totalText || "Nicht berechnet"}

Nachricht:
${message}
      `,
      attachments,
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