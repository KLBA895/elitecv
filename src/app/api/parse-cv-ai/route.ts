import { NextRequest, NextResponse } from "next/server";
import mammoth from "mammoth";
import OpenAI from "openai";

export const runtime = "nodejs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  maxRetries: 4,
  timeout: 90_000,
});

const cvImportSchema = {
  type: "object",
  additionalProperties: false,

  required: [
    "personal",
    "profile",
    "strengths",
    "achievements",
    "workExperience",
    "education",
    "certificates",
    "languages",
    "itSkills",
    "projects",
  ],

  properties: {
    personal: {
      type: "object",
      additionalProperties: false,

      required: [
        "firstName",
        "lastName",
        "email",
        "phone",
        "location",
        "linkedin",
        "targetTitle",
        "targetPosition",
        "targetIndustry",
        "photo",
      ],

      properties: {
        firstName: { type: "string" },
        lastName: { type: "string" },
        email: { type: "string" },
        phone: { type: "string" },
        location: { type: "string" },
        linkedin: { type: "string" },
        targetTitle: { type: "string" },
        targetPosition: { type: "string" },
        targetIndustry: { type: "string" },
        photo: { type: "string" },
      },
    },

    profile: {
      type: "object",
      additionalProperties: false,

      required: ["rawText", "why", "how", "what"],

      properties: {
        rawText: { type: "string" },
        why: { type: "string" },
        how: { type: "string" },
        what: { type: "string" },
      },
    },

    strengths: {
      type: "array",

      items: {
        type: "object",
        additionalProperties: false,

        required: ["id", "label", "description", "icon"],

        properties: {
          id: { type: "string" },
          label: { type: "string" },
          description: { type: "string" },
          icon: { type: "string" },
        },
      },
    },

    achievements: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "string" },
          metric: { type: "string" },
          text: { type: "string" },
        },
        required: ["id", "metric", "text"],
        additionalProperties: false,
      },
    },

    workExperience: {
      type: "array",

      items: {
        type: "object",
        additionalProperties: false,

        required: [
          "id",
          "from",
          "to",
          "functionTitle",
          "company",
          "location",
          "responsibilities",
          "achievements",
        ],

        properties: {
          id: { type: "string" },
          from: { type: "string" },
          to: { type: "string" },
          functionTitle: { type: "string" },
          company: { type: "string" },
          location: { type: "string" },

          responsibilities: {
            type: "array",
            items: { type: "string" },
          },

          achievements: {
            type: "array",
            items: { type: "string" },
          },
        },
      },
    },

    education: {
      type: "array",

      items: {
        type: "object",
        additionalProperties: false,

        required: [
          "id",
          "institution",
          "location",
          "from",
          "to",
          "degree",
          "field",
        ],

        properties: {
          id: { type: "string" },
          institution: { type: "string" },
          location: { type: "string" },
          from: { type: "string" },
          to: { type: "string" },
          degree: { type: "string" },
          field: { type: "string" },
        },
      },
    },

    certificates: {
      type: "array",

      items: {
        type: "object",
        additionalProperties: false,

        required: [
          "id",
          "title",
          "issuer",
          "date",
          "from",
          "to",
        ],

        properties: {
          id: { type: "string" },
          title: { type: "string" },
          issuer: { type: "string" },

          /*
           * Einzeltermin, z. B. 05.2022 oder 2022.
           */
          date: { type: "string" },

          /*
           * Zeitraum, falls die Weiterbildung mehrere Monate/Jahre dauerte.
           */
          from: { type: "string" },
          to: { type: "string" },
        },
      },
    },

    languages: {
      type: "array",

      items: {
        type: "object",
        additionalProperties: false,

        required: ["id", "language", "level"],

        properties: {
          id: { type: "string" },
          language: { type: "string" },
          level: { type: "string" },
        },
      },
    },

    itSkills: {
      type: "array",

      items: {
        type: "object",
        additionalProperties: false,

        required: ["id", "name", "level"],

        properties: {
          id: { type: "string" },
          name: { type: "string" },
          level: { type: "string" },
        },
      },
    },

    projects: {
      type: "array",

      items: {
        type: "object",
        additionalProperties: false,

        required: [
          "id",
          "title",
          "role",
          "description",
          "results",
        ],

        properties: {
          id: { type: "string" },
          title: { type: "string" },
          role: { type: "string" },
          description: { type: "string" },

          results: {
            type: "array",
            items: { type: "string" },
          },
        },
      },
    },
  },
} as const;

export async function POST(req: NextRequest) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OPENAI_API_KEY fehlt." },
        { status: 500 }
      );
    }

    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { error: "Keine Datei hochgeladen." },
        { status: 400 }
      );
    }

    const docxMime =
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

    const isDocx =
      file.type === docxMime ||
      file.name.toLowerCase().endsWith(".docx");

    if (!isDocx) {
      return NextResponse.json(
        { error: "Bitte eine Word-Datei im DOCX-Format hochladen." },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const extracted = await mammoth.extractRawText({
      buffer,
    });

    const cvText = extracted.value.trim();

    if (!cvText) {
      return NextResponse.json(
        { error: "Im Dokument wurde kein Text erkannt." },
        { status: 400 }
      );
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      temperature: 0,

      messages: [
        {
          role: "system",
          content: `
Du extrahierst Daten aus Lebensläufen für den Schweizer CV-Generator EliteCV.

Halte dich strikt an folgende Regeln:

- Verwende ausschließlich Informationen aus dem hochgeladenen Lebenslauf.
- Erfinde niemals Arbeitgeber, Funktionen, Aufgaben, Projekte, Resultate,
  Zeiträume, Abschlüsse, Weiterbildungen, Zertifikate, Sprachen,
  Softwarekenntnisse oder Kennzahlen.
- Formuliere die Inhalte nicht neu.
- Übersetze die Inhalte nicht.

- Übernimm alle erkennbaren Berufsstationen.
- Sortiere Berufsstationen chronologisch absteigend, sofern die Reihenfolge
  eindeutig erkennbar ist.
- Trenne Aufgaben von konkreten Resultaten oder Key Achievements.
- Falls kein expliziter targetTitle im Lebenslauf vorhanden ist,
  verwende die aktuellste oder oberste Berufsfunktion aus workExperience
  als targetTitle.
- Verwende dafür ausschließlich die im Lebenslauf enthaltene
  Funktionsbezeichnung.

- Trenne formale Ausbildung von Weiterbildungen und Zertifikaten.
- Übernimm bei Ausbildung, Weiterbildungen und Zertifikaten Monat und Jahr,
  sofern diese im Lebenslauf vorhanden sind.
- Verwende das Format MM.JJJJ, zum Beispiel "05.2022".
- Wenn nur ein Jahr vorhanden ist, verwende nur JJJJ, zum Beispiel "2022".
- Erfinde niemals einen Monat oder ein Jahr.
- Setze bei certificates:
  - date bei einem Einzeltermin, zum Beispiel "05.2022" oder "2022".
  - from und to bei einem Zeitraum, zum Beispiel "09.2021" und "03.2022".
- Setze bei education:
  - from und to möglichst im Format MM.JJJJ.
  - falls nur Jahreszahlen vorhanden sind, verwende JJJJ.

- Übernimm den Profiltext möglichst vollständig in profile.rawText.
- Fülle why, how und what nur, wenn diese Inhalte im Lebenslauf ausdrücklich
  getrennt vorhanden sind. Sonst verwende leere Strings.

- Persönliche Kompetenzen gehören in strengths.
- Falls kein eigener Abschnitt "Erfolge", "Achievements",
  "Key Achievements" oder "Resultate" vorhanden ist,
  extrahiere die 3 bis 6 stärksten nachweisbaren Resultate
  aus den Berufserfahrungen und speichere sie in achievements.
- Verwende ausschließlich konkret belegte Resultate,
  zum Beispiel Kostenreduktion, Umsatzsteigerung, Prozessverbesserung,
  Teamaufbau, erfolgreiche Einführung, Projektabschluss,
  Compliance-Verbesserung oder messbare Qualitätssteigerung.
- Erfinde keine Kennzahlen oder Resultate.
- Wenn keine belastbaren Resultate vorhanden sind,
  gib achievements als leeres Array zurück.

- Falls kein eigener Projektabschnitt vorhanden ist,
  erkenne klar benannte und abgegrenzte Projekte innerhalb der Berufserfahrung.
- Ein Projekt darf nur in projects aufgenommen werden,
  wenn mindestens ein konkreter Projektgegenstand erkennbar ist,
  zum Beispiel eine Systemeinführung, Migration, Transformation,
  ein Rollout, eine Plattformimplementierung oder Prozessdigitalisierung.
- Übernimm Projektname, Rolle, Beschreibung und Resultate nur,
  soweit diese ausdrücklich im Lebenslauf enthalten sind.
- Erfinde keine Projektnamen und leite keine Projekte
  aus allgemeinen Tätigkeitsbeschreibungen ab.

- Software, Systeme und Tools gehören in itSkills.
- Übernimm alle erkennbaren Sprachkenntnisse in languages.
- Unbekannte Werte müssen leere Strings oder leere Arrays sein.
- Jeder Eintrag benötigt eine eindeutige ID wie work-1, edu-1,
  cert-1, lang-1, skill-1, project-1 oder achievement-1.

  - profile.rawText muss eine prägnante berufliche Zusammenfassung sein.
- profile.rawText darf maximal 450 Zeichen umfassen.
- Verwende höchstens 4 kurze Sätze.
- Nenne Berufsfunktion, zentrale Fachgebiete, Arbeitsweise und Mehrwert.
- Wiederhole nicht sämtliche Aufgaben, Kompetenzen oder Berufsstationen.
- Übernimm keine vollständige Aufzählung aus dem Bereich Expertise.
- Fülle why, how und what nur, wenn diese Abschnitte im Ausgangs-CV
  ausdrücklich getrennt vorhanden sind. Andernfalls verwende leere Strings.

  - Wenn im Lebenslauf ein Zeitraum oberhalb einer Gruppe von mehreren
  aufeinanderfolgenden Berufsfunktionen steht und bei den einzelnen
  Funktionen keine eigenen Zeiträume angegeben sind, gilt dieser
  gemeinsame Zeitraum für alle Funktionen dieser Gruppe.
- Übernimm den gemeinsamen Zeitraum in from und to für jede dazugehörige
  Berufsfunktion.
- Wende diese Regel nur an, wenn die Gruppenzugehörigkeit durch Position,
  Reihenfolge oder Formatierung eindeutig erkennbar ist.
- Erfinde keine Zeiträume.

- Setze personal.targetTitle auf die ausdrücklich genannte Zielposition
  oder ersatzweise auf die aktuellste Berufsfunktion.
- Setze personal.targetPosition immer auf einen leeren String.
- Setze personal.targetIndustry immer auf einen leeren String.
- Übernimm keine Kompetenzlisten, Fachgebiete oder Branchenlisten
  in den Header.

  - Inhalte aus Abschnitten wie "Strengths", "Expertise",
  "Essential Skills", "Persönliche Kompetenzen" oder "Stärken"
  gehören in strengths.
- Jeder Strength-Eintrag benötigt:
  - label: kurze Kompetenzbezeichnung
  - description: dazugehörige Erklärung
- Verwende ausschließlich Inhalte aus dem Lebenslauf.
- Erfinde keine persönlichen Kompetenzen.

          `.trim(),
        },

        {
          role: "user",
          content: `
Extrahiere alle vorhandenen CV-Daten aus folgendem Lebenslauf:

--- BEGINN LEBENSLAUF ---

${cvText}

--- ENDE LEBENSLAUF ---
          `.trim(),
        },
      ],

      response_format: {
        type: "json_schema",

        json_schema: {
          name: "elitecv_import",
          strict: true,
          schema: cvImportSchema,
        },
      },
    });

    const outputText =
      completion.choices[0]?.message?.content?.trim();

    if (!outputText) {
      return NextResponse.json(
        { error: "Die KI hat keine CV-Daten zurückgegeben." },
        { status: 502 }
      );
    }

    let cvData: any;

    try {
      cvData = JSON.parse(outputText);
    } catch (parseError) {
      console.error(
        "OpenAI returned invalid JSON:",
        outputText,
        parseError
      );

      return NextResponse.json(
        { error: "Die KI-Antwort konnte nicht verarbeitet werden." },
        { status: 502 }
      );
    }

    if (
      !cvData.personal?.targetTitle &&
      Array.isArray(cvData.workExperience) &&
      cvData.workExperience.length > 0
    ) {
      cvData.personal.targetTitle =
        cvData.workExperience[0]?.functionTitle || "";
    }

    return NextResponse.json({
      extractedText: cvText,
      cvData,
    });
  } catch (error) {
    console.error("parse-cv-ai error:", error);

    if (error instanceof OpenAI.APIError) {
      const status =
        typeof error.status === "number"
          ? error.status
          : 502;

      return NextResponse.json(
        {
          error:
            status >= 500
              ? "Der KI-Dienst ist vorübergehend nicht erreichbar. Bitte nochmals versuchen."
              : error.message || "KI-Analyse fehlgeschlagen.",
        },
        { status }
      );
    }

    return NextResponse.json(
      {
        error:
          "CV konnte nicht mit KI analysiert werden. Bitte nochmals versuchen.",
      },
      { status: 500 }
    );
  }
}