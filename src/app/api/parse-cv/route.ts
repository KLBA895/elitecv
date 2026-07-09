import { NextRequest, NextResponse } from "next/server";
import mammoth from "mammoth";

function parseBasicCVText(text: string) {
  const clean = (value: string) =>
    value.replace(/\s+/g, " ").replace(/[\uFFFD￾]/g, "").trim();

  const lines = text
    .split(/\r?\n/)
    .map((line) => clean(line))
    .filter(Boolean);

  const email =
    text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)?.[0] || "";

  const phone =
    text
      .match(/(\+?\d[\d\s().-]{7,}\d)/)?.[0]
      ?.replace(/\s+/g, " ")
      .trim() || "";

  const linkedinRaw =
    text.match(/(linkedin\.com\/[^\s]+|in\/[^\s]+)/i)?.[0] || "";

  const linkedin = linkedinRaw.replace(/^https?:\/\/(www\.)?/i, "");

  const nameLine =
    lines.find((line) =>
      /^[A-ZÄÖÜ][A-ZÄÖÜa-zäöüàáâèéêìíîòóôùúûçñ]+ [A-ZÄÖÜ][A-ZÄÖÜa-zäöüàáâèéêìíîòóôùúûçñ]+$/.test(line) &&
      !/skills|profile|experience|education|languages|expertise/i.test(line)
    ) || "";

  const nameParts = nameLine.split(/\s+/);

  const firstName =
    nameParts[0]?.length > 1 && nameParts[0]?.length < 30 ? nameParts[0] : "";

  const lastNameRaw = nameParts.slice(1).join(" ");

  const lastName =
    lastNameRaw.length > 1 && lastNameRaw.length < 40 ? lastNameRaw : "";

  const titleLine =
    lines.find((line) =>
      /^(senior business analyst|business analyst|project manager|head of operations|operations manager|principal consultant|consultant|director|coo|cfo|ceo)$/i.test(
        line
      )
    ) || "";

  const targetTitle = titleLine || "";

  const locationLine =
    lines.find(
      (line) =>
        !line.includes("//") &&
        !/analyst|manager|consultant|project|experience|skills/i.test(line) &&
        /\b\d{4}\s+(zürich|zurich|bern|basel|luzern|zug|winterthur|st\. gallen|geneva|genève)\b/i.test(
          line
        )
    ) || "";

  const locationMatch = locationLine.match(
    /\b\d{4}\s+(zürich|zurich|bern|basel|luzern|zug|winterthur|st\. gallen|geneva|genève)\b/i
  );

  const location = locationMatch ? locationMatch[0] : "";

  const lowerLines = lines.map((line) => line.toLowerCase());

  const sectionStart = (names: string[]) =>
    lowerLines.findIndex((line) =>
      names.some((name) => line === name || line.includes(name))
    );

  const findSection = (names: string[]) => {
    const start = sectionStart(names);
    if (start === -1) return "";

    const stopWords = [
      "working experience",
      "work experience",
      "berufserfahrung",
      "arbeitserfahrung",
      "education",
      "ausbildung",
      "languages",
      "sprachen",
      "skills",
      "essential skills",
      "specific software knowledge",
      "expertise",
      "strengths",
      "projects",
      "projekte",
      "profile",
      "profil",
    ];

    let end = lines.length;

    for (let i = start + 1; i < lines.length; i++) {
      if (stopWords.some((word) => lowerLines[i] === word)) {
        end = i;
        break;
      }
    }

    return lines.slice(start + 1, end).join("\n");
  };

  const languageText = findSection(["languages", "sprachen"]);

  const languages = languageText
    .split("\n")
    .map((line, index) => {
      const cleaned = clean(line.replace(/^[-•]\s*/, ""));
      const parts = cleaned.split(/[:\-–—]/).map(clean);

      return {
        id: `lang-${index + 1}`,
        language: parts[0] || "",
        level: parts[1] || "",
      };
    })
    .filter(
      (item) =>
        item.language &&
        !/working experience|essential skills|expertise/i.test(item.language)
    );

  const skillsText = findSection([
    "specific software knowledge",
    "it-kenntnisse",
    "tools",
  ]);

  const itSkills = skillsText
    .split(/\n|,|;/)
    .map((item) => clean(item.replace(/^[-•]\s*/, "")))
    .filter(Boolean)
    .map((item, index) => ({
      id: `it-${index + 1}`,
      name: item,
      level: "",
    }));

  const workText = findSection(["working experience", "work experience"]);
  const workLines = workText.split("\n").map(clean).filter(Boolean);

  const workExperience: any[] = [];
  let currentJob: any | null = null;

  const isDateLine = (line: string) =>
    /^(\d{4})\s*[–-]\s*(\d{4}|heute|today|present)$/i.test(line) ||
    /^(\d{4})$/i.test(line);

  const isBulletLine = (line: string) =>
    line.startsWith("•") || line.startsWith("") || line.startsWith("-");

  for (const line of workLines) {
    if (isDateLine(line)) {
      if (currentJob) workExperience.push(currentJob);

      const dateMatch = line.match(
        /^(\d{4})(?:\s*[–-]\s*(\d{4}|heute|today|present))?/i
      );

      currentJob = {
        id: `work-${workExperience.length + 1}`,
        from: dateMatch?.[1] || "",
        to: dateMatch?.[2] || "",
        functionTitle: "",
        company: "",
        location: "",
        responsibilities: [],
        achievements: [],
      };

      continue;
    }

    if (!currentJob) continue;

    if (!currentJob.functionTitle && !isBulletLine(line)) {
      currentJob.functionTitle = line;
      continue;
    }

    if (!currentJob.company && !isBulletLine(line)) {
      currentJob.company = line;
      continue;
    }

    if (isBulletLine(line)) {
      currentJob.responsibilities.push(clean(line.replace(/^[-•]\s*/, "")));
    }
  }

  if (currentJob) workExperience.push(currentJob);

  return {
    personal: {
      firstName,
      lastName,
      email,
      phone,
      location,
      linkedin,
      targetTitle,
      targetPosition: "",
      targetIndustry: "",
      photo: "",
    },
    profile: {
      rawText: "",
      why: "",
      how: "",
      what: "",
    },
    strengths: [],
    achievements: [],
    workExperience,
    education: [],
    certificates: [],
    languages,
    itSkills,
    projects: [],
  };
}
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