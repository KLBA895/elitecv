import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json(
        { error: "Keine PDF-Datei erhalten." },
        { status: 400 }
      );
    }

    if (file.type !== "application/pdf") {
      return NextResponse.json(
        { error: "Bitte eine PDF-Datei hochladen." },
        { status: 400 }
      );
    }

    return NextResponse.json({
      text: `PDF erfolgreich hochgeladen: ${file.name}`,
    });
  } catch (error) {
    console.error("PDF upload failed:", error);

    return NextResponse.json(
      { error: "PDF konnte nicht verarbeitet werden." },
      { status: 500 }
    );
  }
}