import type {
  AiAction,
  CoverLetterData,
  LetterLayout,
} from "./types";

const styleDescriptions: Record<LetterLayout, string> = {
  professional: "Klassisch, professionell, klar und seriös.",
  executive: "Strategisch, führungsorientiert, souverän und hochwertig.",
  modern: "Modern, dynamisch, natürlich und trotzdem professionell.",
};

export function buildCoverLetterPrompt(
  data: CoverLetterData
): string {
  return `
You are an expert executive career coach and professional HR recruiter.

Write a premium cover letter.

Language:
${data.language}

Writing Style:
${styleDescriptions[data.layout]}

Structure:

1. WHY
Explain why the applicant is interested in the company and position.

2. HOW
Highlight qualifications, experience, achievements and strengths.

3. WHAT
Explain the value the applicant will bring and end with a strong professional closing.

Position:
${data.position}

Company:
${data.company}

Contact Person:
${data.contactPerson}

Job Advertisement:
${data.jobAd}

WHY
${data.why}

HOW - Experience
${data.howExperience}

HOW - Achievements
${data.howAchievements}

HOW - Skills
${data.howSkills}

WHAT
${data.whatValue}

Closing
${data.whatClosing}

Requirements:

- Natural language
- Executive quality
- No repetition
- ATS optimized
- Convincing but authentic
- Professional business tone
- Maximum one A4 page
`;
}

export function buildSectionPrompt(
  action: AiAction,
  text: string,
  language: "de" | "en"
) {
  const instruction = {
    professional:
      "Rewrite professionally while keeping the original meaning.",
    shorter:
      "Rewrite shorter while keeping the important information.",
    moreConvincing:
      "Rewrite more convincingly using stronger business language.",
    executive:
      "Rewrite at executive leadership level.",
    modern:
      "Rewrite in a modern authentic style.",
    ats:
      "Optimize for ATS while keeping it natural.",
    translate:
      language === "de"
        ? "Translate professionally into English."
        : "Translate professionally into German.",
  };

  return `
${instruction[action]}

Current Text:

${text}

Return only the improved version.
`;
}