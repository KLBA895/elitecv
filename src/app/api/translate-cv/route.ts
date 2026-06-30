import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { cvData } = await request.json();

    if (!cvData) {
      return NextResponse.json(
        { error: "Missing cvData" },
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

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
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
              "Translate the given CV JSON from German to professional English. Keep the exact JSON structure and all IDs unchanged. Do not change emails, phone numbers, URLs, dates, company names, locations, or technical tool names. Translate job titles, profile text, responsibilities, achievements, strengths, education fields, certificates, languages and skill descriptions. Return only valid JSON.",
          },
          {
            role: "user",
            content: JSON.stringify(cvData),
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
    const translated = JSON.parse(result.choices[0].message.content);

    return NextResponse.json({ cvData: translated });
  } catch (error) {
    console.error("CV translation failed:", error);

    return NextResponse.json(
      { error: "CV translation failed" },
      { status: 500 }
    );
  }
}