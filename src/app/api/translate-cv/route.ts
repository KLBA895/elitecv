import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const {
      cvData,
      targetLanguage,
    }: {
      cvData: any;
      targetLanguage: "de" | "en";
    } = await request.json();

    if (!cvData) {
      return NextResponse.json(
        { error: "Missing cvData" },
        { status: 400 }
      );
    }

    if (!targetLanguage || !["de", "en"].includes(targetLanguage)) {
      return NextResponse.json(
        { error: "Invalid target language" },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing OPENAI_API_KEY" },
        { status: 500 }
      );
    }

    const targetLanguageName =
      targetLanguage === "de" ? "German" : "English";

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
              content: `
Translate the complete CV JSON into professional ${targetLanguageName}.

Rules:
- Preserve the exact JSON structure.
- Preserve every existing ID.
- Do not remove, rename or add fields.
- Translate all meaningful human-readable CV content.
- Do not invent information.
- Do not change the factual meaning.
- Do not translate names, company names, institution names, locations,
  software names, technologies, product names, email addresses,
  phone numbers, URLs, dates or numerical values.
- Keep internationally established certificate names unchanged.
- Translate job titles only when a natural and commonly used equivalent
  exists in the target language.
- Translate:
  - profile.rawText
  - profile.why
  - profile.how
  - profile.what
  - strengths
  - responsibilities
  - achievements
  - education fields and degree descriptions
  - project roles, descriptions and results
  - language names and language levels
  - IT skill levels and descriptive skill text
- Keep empty strings and empty arrays unchanged.
- Remove obvious repetitions in the profile only.
- Keep the profile concise and suitable for the first page of an executive CV.
- Limit the profile to approximately 70 to 100 words.
- Do not summarize or shorten any other section.
- Return ONLY valid JSON.
              `.trim(),
            },
            {
              role: "user",
              content: JSON.stringify(cvData),
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

      console.error("Translation API Error:", errorText);

      return NextResponse.json(
        { error: errorText },
        { status: response.status }
      );
    }

    const result = await response.json();
    const content = result.choices?.[0]?.message?.content;

    if (!content) {
      return NextResponse.json(
        { error: "No translated CV returned." },
        { status: 500 }
      );
    }

    let translated: any;

    try {
      translated = JSON.parse(content);
    } catch (parseError) {
      console.error("Invalid translated JSON:", parseError);

      return NextResponse.json(
        { error: "Invalid translated JSON." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      cvData: translated,
    });
  } catch (error) {
    console.error("CV translation failed:", error);

    return NextResponse.json(
      { error: "CV translation failed" },
      { status: 500 }
    );
  }
}