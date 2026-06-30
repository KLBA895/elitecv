export type LetterLanguage = "de" | "en";

export type LetterLayout =
  | "professional"
  | "executive"
  | "modern";

export type LetterThemeColor =
  | "gray"
  | "blue"
  | "navy"
  | "green"
  | "burgundy"
  | "teal"
  | "charcoal";

export type AiAction =
  | "professional"
  | "shorter"
  | "moreConvincing"
  | "executive"
  | "modern"
  | "ats"
  | "translate";

  export type CoverLetterData = {
    language: LetterLanguage;
  
    // Layout / Design
    layout: LetterLayout;
    themeColor: LetterThemeColor;
  
    // Persönliche Angaben
    firstName: string;
    lastName: string;
    street: string;
    senderZipCode: string;
    senderCity: string;
    senderEmail: string;
    senderPhone: string;
    senderLinkedin: string;
  
    // Empfänger
    position: string;
    company: string;
    contactPerson: string;
    companyStreet: string;
    companyZipCode: string;
    companyCity: string;
  
    // Briefkopf
    location: string;
    date: string;
    photo: string;
  
    // Stelleninserat
    jobAd: string;
  
    // Anschreiben
    why: string;
    howExperience: string;
    howAchievements: string;
    howSkills: string;
    whatValue: string;
    whatClosing: string;
  };
  
  export type AtsScore = {
    ats: number;
    structure: number;
    professionalism: number;
    persuasion: number;
    grammar: number;
  };