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
  targetTitle: string;       // Gewünschte Rollenbezeichnung (z.B. "Senior Product Manager")
  targetPosition: string;    // Zielposition (für ATS-Keywords)
  targetIndustry: string;    // Branche
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  website?: string;
  photo?: string;            // Base64 oder URL
}

// ─── Profil ──────────────────────────────────────────────────────────────────
export interface ProfileSection {
  rawText: string;           // Rohtext vom Kunden
  why?: string;              // Warum – Motivation & Antrieb
  how?: string;              // Wie – Arbeitsweise & Methoden
  what?: string;             // Was – Kompetenzen & Ergebnisse
}

// ─── USP ─────────────────────────────────────────────────────────────────────
export interface USP {
  id: string;
  title: string;
  description: string;
}

// ─── Berufserfahrung ─────────────────────────────────────────────────────────
export interface WorkExperience {
  id: string;
  company: string;
  location: string;
  from: string;              // "MM.YYYY" oder "YYYY"
  to: string;                // "MM.YYYY", "YYYY" oder "heute"
  functionTitle: string;
  responsibilities: string[];
  achievements: string[];
  keywords?: string[];       // Branchenspezifische Keywords
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
  issuer?: string;
  year?: string;
}

// ─── Skills ──────────────────────────────────────────────────────────────────
export interface SkillGroup {
  id: string;
  category: string;          // z.B. "Projektmanagement", "Führung"
  skills: string[];
}

export interface ITSkill {
  id: string;
  name: string;
  level?: "Grundkenntnisse" | "Gut" | "Sehr gut" | "Expertenwissen";
}

export interface Language {
  id: string;
  language: string;
  level: string;             // z.B. "Muttersprache", "C1", "B2"
}

// ─── Stärken & Erfolge ───────────────────────────────────────────────────────
export interface Strength {
  id: string;
  label: string;
  description?: string;
}

export interface Achievement {
  id: string;
  text: string;
  metric?: string;           // Messbare Kennzahl, z.B. "30% Kostensenkung"
}

// ─── Gesamt-CV ───────────────────────────────────────────────────────────────
export interface CVData {
  personal: PersonalData;
  profile: ProfileSection;
  usps: USP[];
  strengths: Strength[];
  achievements: Achievement[];
  workExperience: WorkExperience[];
  skillGroups: SkillGroup[];
  hardSkills: string[];
  softSkills: string[];
  itSkills: ITSkill[];
  languages: Language[];
  education: Education[];
  certificates: Certificate[];
  layout: LayoutVariant;
}
