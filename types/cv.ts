// ─── CV Data Model ───────────────────────────────────────────────────────────
// ATS-konformes Datenmodell für den CV-Generator

export type LayoutVariant =
  | "professional"
  | "executive"
  | "swiss"
  | "ats";

// ─── Persönliche Daten ───────────────────────────────────────────────────────
export interface PersonalData {
  firstName: string;
  lastName: string;
  targetTitle: string;
  targetPosition: string;
  targetIndustry: string;
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  website?: string;
  photo?: string;
  iconStyle?:
  | "professional"
  | "executive"
  | "modern"
  | "minimal";
}

// ─── Profil ──────────────────────────────────────────────────────────────────
export interface ProfileSection {
  rawText: string;
  why?: string;
  how?: string;
  what?: string;
}

// ─── USP ─────────────────────────────────────────────────────────────────────
export interface USP {
  id: string;
  title: string;
  description: string;
}

// ─── Key Achievements ────────────────────────────────────────────────────────
export interface KeyAchievement {
  id: string;
  title: string;
  description: string;
}

// ─── Berufserfahrung ─────────────────────────────────────────────────────────
export interface WorkExperience {
  id: string;
  company: string;
  location: string;
  from: string;
  to: string;
  functionTitle: string;
  responsibilities: string[];
  achievements: string[];
  keywords?: string[];
  periodGroup?: string;
  showPeriod?: boolean;
}

// ─── Ehrenamtliches Engagement ───────────────────────────────────────────────
export interface VolunteerExperience {
  id: string;
  organization: string;
  location: string;
  from: string;
  to: string;
  role: string;
  responsibilities: string[];
}

// ─── Ausbildung ──────────────────────────────────────────────────────────────
export interface Education {
  id: string;
  institution: string;
  location?: string;
  from: string;
  to: string;
  degree: string;
  field?: string;
}

// ─── Weiterbildung / Zertifikat ──────────────────────────────────────────────
export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  from?: string;
  to?: string;
  year?: string;
}

// ─── Skills ──────────────────────────────────────────────────────────────────
export interface SkillGroup {
  id: string;
  category: string;
  skills: string[];
}

export interface ITSkill {
  id: string;
  name: string;
  level?:
  | "Grundkenntnisse"
  | "Gut"
  | "Sehr gut"
  | "Expertenwissen";
}

export interface Language {
  id: string;
  language: string;
  level: string;
}

// ─── Stärken & Erfolge ───────────────────────────────────────────────────────
export interface Strength {
  id: string;
  icon?: string;
  label: string;
  description: string;
}

export interface Achievement {
  id: string;
  metric?: string;
  text: string;
}

// ─── Projekte ────────────────────────────────────────────────────────────────
export interface Project {
  id: string;
  title: string;
  role?: string;
  description?: string;
  results: string[];
}

// ─── Gesamt-CV ───────────────────────────────────────────────────────────────
export interface CVData {
  layout: LayoutVariant;

  themeColor:
  | "gray"
  | "blue"
  | "navy"
  | "green"
  | "burgundy"
  | "teal"
  | "charcoal";

  firstPageExperienceCount?: 2 | 3 | 4;
  bulletPointCount?: 2 | 3 | 4 | 5;

  personal: PersonalData;
  profile: ProfileSection;

  usps: USP[];
  strengths: Strength[];
  keyAchievements: KeyAchievement[];
  achievements: Achievement[];

  workExperience: WorkExperience[];
  volunteerExperience: VolunteerExperience[];
  projects: Project[];

  skillGroups: SkillGroup[];
  hardSkills: string[];
  softSkills: string[];
  itSkills: ITSkill[];

  languages: Language[];
  education: Education[];
  certificates: Certificate[];
}