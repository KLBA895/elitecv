import type { AtsScore, CoverLetterData } from "./types";

export const emptyCoverLetterData = (): CoverLetterData => ({
  language: "de",
  layout: "professional",
  themeColor: "gray",
  photo: "",

  firstName: "",
  lastName: "",
  street: "",
  senderZipCode: "",
  senderCity: "",
  senderEmail: "",
  senderPhone: "",
  senderLinkedin: "",

  position: "",
company: "",
contactPerson: "",

companyStreet: "",
companyZipCode: "",
companyCity: "",

location: "",
date: new Date().toLocaleDateString("de-CH"),

  jobAd: "",

  why: "",
  howExperience: "",
  howAchievements: "",
  howSkills: "",
  whatValue: "",
  whatClosing: "",
});

export const getSenderName = (data: CoverLetterData) =>
  [data.firstName, data.lastName].filter(Boolean).join(" ").trim();

export const getSenderAddress = (data: CoverLetterData) =>
  [data.senderZipCode, data.senderCity].filter(Boolean).join(" ").trim();

export const buildGreeting = (data: CoverLetterData) => {
  const person = data.contactPerson.trim();

  if (!person) {
    return data.language === "de"
      ? "Sehr geehrte Damen und Herren"
      : "Dear Hiring Team";
  }

  if (data.language === "en") {
    return `Dear ${person}`;
  }

  if (/^frau\s/i.test(person)) {
    return `Sehr geehrte ${person}`;
  }

  if (/^herr\s/i.test(person)) {
    return `Sehr geehrter ${person}`;
  }

  return `Guten Tag ${person}`;
};

export const buildSubject = (data: CoverLetterData) => {
  if (data.language === "de") {
    return data.position ? `Bewerbung als ${data.position}` : "Bewerbung";
  }

  return data.position ? `Application for ${data.position}` : "Application";
};

export const buildCoverLetter = (data: CoverLetterData) => {
  const greeting = buildGreeting(data);
  const subject = buildSubject(data);
  const senderName = getSenderName(data);
  const locationDate = [data.location, data.date].filter(Boolean).join(", ");

  const howBlock = [
    data.howExperience,
    data.howAchievements,
    data.howSkills,
  ]
    .filter(Boolean)
    .join("\n\n");

  return `
${locationDate}

${subject}

${greeting}

${data.why || placeholder(data.language, "why")}

${howBlock || placeholder(data.language, "how")}

${data.whatValue || placeholder(data.language, "what")}

${data.whatClosing || placeholder(data.language, "closing")}

${data.language === "de" ? "Freundliche Grüsse" : "Kind regards"}

${senderName}
`.trim();
};

export const getMockAtsScore = (data: CoverLetterData): AtsScore => {
  const base =
    data.position &&
    data.company &&
    data.why &&
    data.howExperience &&
    data.whatValue
      ? 88
      : 68;

  return {
    ats: Math.min(base + (data.jobAd ? 6 : 0), 98),
    structure: data.why && data.howExperience && data.whatValue ? 94 : 72,
    professionalism: data.layout === "executive" ? 95 : 90,
    persuasion: data.howAchievements ? 92 : 76,
    grammar: 96,
  };
};

export const placeholder = (
  language: CoverLetterData["language"],
  section: "why" | "how" | "what" | "closing",
) => {
  const de = {
    why: "Ihre Motivation wird hier professionell formuliert.",
    how: "Ihre Erfahrungen, Stärken und relevanten Erfolge werden hier überzeugend dargestellt.",
    what: "Ihr Mehrwert für das Unternehmen wird hier klar herausgearbeitet.",
    closing:
      "Über die Möglichkeit, mich persönlich vorzustellen, freue ich mich sehr.",
  };

  const en = {
    why: "Your motivation will be professionally formulated here.",
    how: "Your experience, strengths and relevant achievements will be presented convincingly here.",
    what: "Your added value for the company will be clearly highlighted here.",
    closing:
      "I would be pleased to discuss my application in a personal interview.",
  };

  return language === "de" ? de[section] : en[section];
};