import { NextResponse } from "next/server";

type RequestBody = {
  action: string;
  field?: string;
  text?: string;
  targetLanguage?: "de" | "en";

  data?: {
    language?: "de" | "en";
    position?: string;
    company?: string;
    jobAd?: string;

    why?: string;
    howExperience?: string;
    howAchievements?: string;
    howSkills?: string;
    whatValue?: string;
    whatClosing?: string;
  };
};

const actionLabels: Record<string, string> = {
  professional: "Formuliere den Abschnitt professioneller.",
  shorter: "Kürze den Abschnitt deutlich, ohne wichtige Inhalte zu verlieren.",
  moreConvincing: "Formuliere den Abschnitt überzeugender und konkreter.",
  executive: "Formuliere den Abschnitt auf Executive-Niveau.",
  modern: "Formuliere den Abschnitt moderner und natürlicher.",
  translate: "Übersetze den Abschnitt in die jeweils andere Sprache.",
  adaptToJobAd:
    "Passe den Abschnitt gezielt an das Stelleninserat an, ohne Sätze aus dem Inserat zu kopieren.",
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as RequestBody;

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing OPENAI_API_KEY" },
        { status: 500 }
      );
    }

    const language = body.data?.language ?? "de";
    const instruction =
      actionLabels[body.action] ?? "Überarbeite den Abschnitt professionell.";
    if (body.action === "translateLetter") {
      const targetLanguage = body.targetLanguage ?? "en";

      const prompt = `
      Du übersetzt die vorhandenen Inhalte eines Motivationsschreibens.
      
      Zielsprache:
      ${targetLanguage === "de" ? "Schweizer Hochdeutsch" : "professionelles Englisch"}
      
      WICHTIG:
      - Übersetze ausschließlich die vorhandenen Inhalte.
      - Erstelle KEIN neues Motivationsschreiben.
      - Ergänze KEINE Anrede.
      - Ergänze KEINE Grussformel.
      - Ergänze KEIN "Sehr geehrte Damen und Herren".
      - Ergänze KEIN "Dear Sir or Madam".
      - Ergänze KEIN "Freundliche Grüsse".
      - Ergänze KEIN "Kind regards".
      - Erfinde keine Informationen.
      - Erfinde keine Kennzahlen, Erfahrungen oder Qualifikationen.
      - Behalte Inhalt, Aussage und Struktur der einzelnen Felder bei.
      - Formuliere natürlich und professionell.
      - Firmennamen, Produktnamen und Eigennamen nicht unnötig übersetzen.
      - Leere Felder bleiben leer.
      - Gib ausschließlich gültiges JSON zurück.
      
      Vorhandene Inhalte:
      
      {
        "why": ${JSON.stringify(body.data?.why ?? "")},
        "howExperience": ${JSON.stringify(body.data?.howExperience ?? "")},
        "howAchievements": ${JSON.stringify(body.data?.howAchievements ?? "")},
        "howSkills": ${JSON.stringify(body.data?.howSkills ?? "")},
        "whatValue": ${JSON.stringify(body.data?.whatValue ?? "")},
        "whatClosing": ${JSON.stringify(body.data?.whatClosing ?? "")}
      }
      
      Gib exakt diese JSON-Struktur zurück:
      
      {
        "why": "...",
        "howExperience": "...",
        "howAchievements": "...",
        "howSkills": "...",
        "whatValue": "...",
        "whatClosing": "..."
      }
      `.trim();

      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: "gpt-4o-mini",
            temperature: 0.2,
            messages: [
              {
                role: "system",
                content:
                  "Du bist ein professioneller Übersetzer für Bewerbungsunterlagen. Du übersetzt ausschließlich den vorhandenen Inhalt und ergänzt keine Anrede, Grussformel oder neuen Inhalte.",
              },
              {
                role: "user",
                content: prompt,
              },
            ],
            response_format: {
              type: "json_object",
            },
          }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();

        return NextResponse.json(
          { error: errorText },
          { status: response.status }
        );
      }

      const result = await response.json();
      const content = result.choices?.[0]?.message?.content;

      if (!content) {
        return NextResponse.json(
          { error: "No AI response" },
          { status: 500 }
        );
      }

      return NextResponse.json(JSON.parse(content));
    }
    if (body.action === "generateFullLetter") {
      const prompt = `
      Du bist ein erfahrener Bewerbungsberater für den Schweizer Arbeitsmarkt.
      - Erfinde niemals Kennzahlen, Projekte, Ergebnisse, Technologien oder Arbeitgebererfahrungen.
      - Verwende keine Prozentzahlen, wenn sie nicht ausdrücklich vom Benutzer genannt wurden.
      - Schreibe insgesamt kurz und prägnant.
      - Jeder Abschnitt maximal 2 Sätze.
      
      Erstelle die Inhalte für ein professionelles Motivationsschreiben.
      
      Kontext:
      Position: ${body.data?.position || "nicht angegeben"}
      Unternehmen: ${body.data?.company || "nicht angegeben"}
      
      Stelleninserat:
      ${body.data?.jobAd || "nicht angegeben"}
      
      Regeln:
      - Schreibe in ${language === "de"
          ? "Schweizer Hochdeutsch"
          : "professionellem Englisch"
        }.
      - Keine Floskeln.
      - Niemals mit "Mit grossem Interesse" beginnen.
      - Niemals "Hiermit bewerbe ich mich" verwenden.
      - Niemals "Besonders wichtig ist mir" verwenden.
      - Keine Wiederholungen.
      - Keine vollständigen Sätze aus dem Stelleninserat kopieren.
      - Keine Keyword-Liste.
      - Natürlich, konkret und hochwertig schreiben.
      - Maximal eine A4-Seite.
      - Gib ausschließlich gültiges JSON zurück.
      
      JSON-Struktur:
      {
        "why": "...",
        "howExperience": "...",
        "howAchievements": "...",
        "howSkills": "...",
        "whatValue": "...",
        "whatClosing": "..."
      }
      `.trim();

      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          temperature: 0.35,
          messages: [
            {
              role: "system",
              content:
                "Du erstellst hochwertige Bewerbungs- und Motivationsschreiben für den Schweizer Arbeitsmarkt auf Deutsch oder Englisch. Du gibst ausschließlich gültiges JSON zurück.",
            },
            {
              role: "user",
              content: prompt,
            },
          ],
          response_format: { type: "json_object" },
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        return NextResponse.json(
          { error: errorText },
          { status: response.status }
        );
      }

      const result = await response.json();
      const content = result.choices?.[0]?.message?.content;

      if (!content) {
        return NextResponse.json(
          { error: "No AI response" },
          { status: 500 }
        );
      }

      return NextResponse.json(JSON.parse(content));
    }

    const prompt = `
Du bist ein erfahrener Bewerbungsberater für den Schweizer Arbeitsmarkt.

Aufgabe:
${instruction}

Kontext:
Position: ${body.data?.position || "nicht angegeben"}
Unternehmen: ${body.data?.company || "nicht angegeben"}
Abschnitt: ${body.field}

Stelleninserat:
${body.data?.jobAd || "nicht angegeben"}

Text:
${body.text || ""}

Regeln:
- Schreibe in ${language === "de" ? "Schweizer Hochdeutsch" : "professionellem Englisch"}.
- Verwende keine Floskeln.
- Niemals mit "Mit grossem Interesse" beginnen.
- Niemals "Hiermit bewerbe ich mich" verwenden.
- Niemals "Besonders wichtig ist mir" verwenden.
- Niemals "Besonders angesprochen" verwenden.
- Keine Wiederholungen.
- Keine vollständigen Sätze aus dem Stelleninserat kopieren.
- Keine Keyword-Liste schreiben.
- Keine Erklärung ausgeben.
- Grammatikalisch korrekt formulieren.
- Natürlich, hochwertig und menschlich schreiben.
- Gib nur den verbesserten Abschnitt zurück.
`.trim();

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        temperature: 0.35,
        messages: [
          {
            role: "system",
            content:
              "Du formulierst hochwertige Motivationsschreiben für den Schweizer Arbeitsmarkt. Du vermeidest Floskeln, Wiederholungen und künstliche KI-Sprache.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: errorText },
        { status: response.status }
      );
    }

    const result = await response.json();
    const text = result.choices?.[0]?.message?.content?.trim();

    if (!text) {
      return NextResponse.json(
        { error: "No AI response" },
        { status: 500 }
      );
    }

    return NextResponse.json({ text });
  } catch (error) {
    console.error("Cover letter AI failed:", error);

    return NextResponse.json(
      { error: "Cover letter AI failed" },
      { status: 500 }
    );
  }
}