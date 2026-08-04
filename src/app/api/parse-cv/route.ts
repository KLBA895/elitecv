import { NextRequest, NextResponse } from "next/server";
import mammoth from "mammoth";
import { parseBasicCVText } from "@/lib/cv-parser/parser";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { error: "Keine Datei hochgeladen" },
        { status: 400 }
      );
    }

    const MAX_FILE_SIZE = 10 * 1024 * 1024;

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        {
          error:
            "Die Datei ist zu gross. Bitte verwenden Sie eine Datei mit maximal 10 MB.",
        },
        { status: 413 }
      );
    }

    if (
      file.type !==
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      return NextResponse.json(
        { error: "Bitte laden Sie eine Word-Datei (.docx) hoch." },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const result = await mammoth.extractRawText({ buffer });
    const text = result.value;

    if (!text.trim()) {
      return NextResponse.json(
        { error: "Es konnte kein Text erkannt werden." },
        { status: 400 }
      );
    }

    const cvData = parseBasicCVText(text);

    return NextResponse.json({
      extractedText: text,
      cvData,
    });
  } catch (error) {
    console.error("parse-cv error:", error);

    return NextResponse.json(
      { error: "CV konnte nicht ausgelesen werden." },
      { status: 500 }
    );
  }
}