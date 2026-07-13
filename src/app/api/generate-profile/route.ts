import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

type GenerateProfileBody = {
  language?: "de" | "en";
  personal?: {
    targetTitle?: string;
    targetPosition?: string;
    targetIndustry?: string;
  };
  workExperience?: Array<{
    company?: string;
    functionTitle?: string;
    from?: string;
    to?: string;
    responsibilities?: string[];
    achievements?: string[];
  }>;
  strengths?: Array<{
    label?: string;
    description?: string;
  }>;
  achievements?: Array<{
    metric?: string;
    text?: string;
  }>;
  skillGroups?: Array<{
    category?: string;
    skills?: string[];
  }>;
  hardSkills?: string[];
  itSkills?: Array<{
    name?: string;
    level?: string;
  }>;
  education?: Array<{
    degree?: string;
    field?: string;
    institution?: string;
  }>;
  certificates?: Array<{
    title?: string;
    issuer?: string;
  }>;
  languages?: Array<{
    language?: string;
    level?: string;
  }>;
};

function cleanStrings(values?: string[]): string[] {
  return Array.isArray(values)
    ? values.map((value) => value.trim()).filter(Boolean)
    : [];
}

export async function POST(request: NextRequest) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OPENAI_API_KEY ist nicht konfiguriert." },
        { status: 500 }
      );
    }

    const body = (await request.json()) as GenerateProfileBody;
    const language = body.language === "en" ? "en" : "de";

    const workExperience = (body.workExperience ?? [])
      .filter(
        (job) =>
          job.functionTitle?.trim() ||
          job.company?.trim()
      )
      .slice(0, 6)
      .map((job) => ({
        role: job.functionTitle?.trim(),
        company: job.company?.trim(),
        period: [job.from, job.to].filter(Boolean).join(" – "),
        responsibilities: cleanStrings(job.responsibilities).slice(0, 3),
        achievements: cleanStrings(job.achievements).slice(0, 2),
      }));

    const profileData = {
      targetTitle:
        body.personal?.targetTitle?.trim() ||
        body.personal?.targetPosition?.trim() ||
        "",
      targetPosition: body.personal?.targetPosition?.trim() || "",
      targetIndustry: body.personal?.targetIndustry?.trim() || "",

      workExperience,

      strengths: (body.strengths ?? [])
        .filter((item) => item.label?.trim())
        .slice(0, 6)
        .map((item) => ({
          label: item.label?.trim(),
          description: item.description?.trim(),
        })),

      achievements: (body.achievements ?? [])
        .filter((item) => item.text?.trim())
        .slice(0, 5)
        .map((item) => ({
          headline: item.metric?.trim(),
          text: item.text?.trim(),
        })),

      skillGroups: (body.skillGroups ?? [])
        .filter((group) => group.category?.trim())
        .slice(0, 6)
        .map((group) => ({
          category: group.category?.trim(),
          skills: cleanStrings(group.skills).slice(0, 8),
        })),

      hardSkills: cleanStrings(body.hardSkills).slice(0, 15),

      itSkills: (body.itSkills ?? [])
        .filter((item) => item.name?.trim())
        .slice(0, 12)
        .map((item) => ({
          name: item.name?.trim(),
          level: item.level?.trim(),
        })),

      education: (body.education ?? [])
        .filter(
          (item) =>
            item.degree?.trim() ||
            item.field?.trim() ||
            item.institution?.trim()
        )
        .slice(0, 3),

      certificates: (body.certificates ?? [])
        .filter((item) => item.title?.trim())
        .slice(0, 6),

      languages: (body.languages ?? [])
        .filter((item) => item.language?.trim())
        .slice(0, 8),
    };

    const instructions =
      language === "en"
        ? `
Write one professional CV profile summary in English.

Rules:
- Return only the finished profile paragraph.
- Length: 65 to 95 words.
- Start with the target role or strongest professional identity.
- Highlight experience, specialization, industries and employer value.
- Use only facts contained in the supplied data.
- Do not invent metrics, employers, experience durations or qualifications.
- Do not use first person.
- Avoid clichés, generic filler and exaggerated claims.
- Do not repeat complete work-experience bullet points.
- Use natural, professional British English.
`
        : `
Erstelle einen professionellen Profiltext für einen Lebenslauf auf Deutsch.

Regeln:
- Gib ausschließlich den fertigen Profilabsatz zurück.
- Länge: 65 bis 95 Wörter.
- Beginne mit der Zielposition oder der stärksten beruflichen Positionierung.
- Hebe Erfahrung, Spezialisierung, Branchen und Mehrwert für Arbeitgeber hervor.
- Verwende ausschließlich Fakten aus den übermittelten Daten.
- Erfinde keine Kennzahlen, Arbeitgeber, Erfahrungsjahre oder Qualifikationen.
- Verwende keine Ich-Form.
- Vermeide Floskeln, leere Aussagen und Übertreibungen.
- Wiederhole keine vollständigen Stichpunkte aus der Berufserfahrung.
- Schreibe professionell, präzise und natürlich.
`;

    const response = await openai.responses.create({
      model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
      instructions: instructions.trim(),
      input: JSON.stringify(profileData),
      max_output_tokens: 250,
    });

    const profileText = response.output_text?.trim();

    if (!profileText) {
      return NextResponse.json(
        {
          error:
            language === "en"
              ? "The AI did not create a profile summary."
              : "Die KI hat keinen Profiltext erstellt.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      profileText,
    });
  } catch (error) {
    console.error("generate-profile error:", error);

    return NextResponse.json(
      {
        error: "Profiltext konnte nicht erstellt werden.",
      },
      { status: 500 }
    );
  }
}