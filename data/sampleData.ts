import type { CVData } from "../types/cv";
import { v4 as uuidv4 } from "uuid";

export const sampleCVData: CVData = {
  layout: "professional",

  personal: {
    firstName: "Sandra",
    lastName: "Meier",
    targetTitle: "Head of Operations / COO",
    targetPosition: "Process Excellence",
    targetIndustry: "Change Management",
    email: "sandra.meier@example.com",
    phone: "+41 79 123 45 67",
    location: "Zürich, Schweiz",
    linkedin: "linkedin.com/in/sandrameier",
    website: "",
    photo: "",
    iconStyle: "professional",
  },

  profile: {
    rawText:"Operations-Führungskraft mit über 12 Jahren Erfahrung in der Finanzbranche. Spezialisiert auf Prozessoptimierung, Change Management und den Aufbau leistungsstarker Teams. Schafft nachhaltige Strukturen, steigert Effizienz und begleitet Organisationen erfolgreich durch Transformationsphasen.",
    how: "",
    what: "",
  },

  usps: [
    {
      id: "usp-1",
      title: "Kostensenkung durch Prozessoptimierung",
      description:
        "Nachweislich 30% operative Kosten reduziert durch Lean-Management-Methoden",
    },
    {
      id: "usp-2",
      title: "Transformation von Teams",
      description:
        "Erfolgreich 3 Abteilungen (je 15–40 Personen) durch Change-Prozesse geführt",
    },
    {
      id: "usp-3",
      title: "Regulatorische Sicherheit",
      description:
        "Tiefes Verständnis FINMA-Regularien, MiFID II und interner Compliance-Anforderungen",
    },
  ],

  strengths: [
    { id: "s-1", icon: "brain", label: "Strategisches Denken", description: "Komplexe Sachverhalte strukturieren und priorisieren" },
    { id: "s-2", icon: "users", label: "Führungsstärke", description: "Teams motivieren und auf gemeinsame Ziele ausrichten" },
    { id: "s-3", icon: "settings", label: "Prozessoptimierung", description: "Ineffizienzen erkennen und nachhaltig beheben" },
    { id: "s-4", icon: "message", label: "Kommunikation", description: "Klar und adressatengerecht auf allen Ebenen" },
    { id: "s-5", icon: "shield", label: "Resilienz", description: "Ruhig und lösungsorientiert in Hochdruckphasen" },
    { id: "s-6", icon: "chart", label: "Datenaffinität", description: "Entscheidungen auf Basis valider Kennzahlen treffen" },
  ],
  keyAchievements: [
    {
      id: "ka-1",
      title: "Kostenreduktion",
      description: "Operative Kosten um 30 % gesenkt",
    },
    {
      id: "ka-2",
      title: "Teamführung",
      description: "35 Mitarbeitende erfolgreich geführt",
    },
    {
      id: "ka-3",
      title: "Digitalisierung",
      description: "Projektvolumen CHF 8 Mio. umgesetzt",
    },
  ],
  achievements: [
    { id: "a-1", text: "Operative Kosten um 30% reduziert durch Einführung von Lean-Prozessen", metric: "–30% Kosten" },
    { id: "a-2", text: "Digitalisierungsprojekt (8 Mio. CHF) termingerecht und im Budget abgeschlossen", metric: "8 Mio. CHF" },
    { id: "a-3", text: "Mitarbeiterzufriedenheit von 64% auf 87% gesteigert innerhalb von 18 Monaten", metric: "+23% Zufriedenheit" },
    { id: "a-4", text: "Regulatorische Mängel (12 FINMA-Findings) vollständig behoben in 6 Monaten", metric: "12 Findings behoben" },
  ],

  workExperience: [
    {
      id: "we-1",
      company: "Swiss Finance AG",
      location: "Zürich",
      from: "03.2019",
      to: "heute",
      functionTitle: "Head of Operations",
      responsibilities: [
        "Führung und Weiterentwicklung eines 35-köpfigen Operations-Teams",
        "Verantwortung für Budget (CHF 12 Mio.), SLA-Steuerung und Vendor Management",
        "Implementierung von Lean-Methoden zur Prozessoptimierung",
        "Enge Zusammenarbeit mit C-Level bei strategischen Transformationsprojekten",
        "Sicherstellung der FINMA-Compliance und regulatorisches Reporting",
      ],
      achievements: [
        "Operative Kosten um 30% gesenkt durch Automatisierung von 8 Kernprozessen",
        "NPS der internen Kunden von 42 auf 71 gesteigert",
        "Digitalisierungsprojekt (8 Mio. CHF) pünktlich und im Budget umgesetzt",
      ],
      keywords: ["FINMA", "Lean Management", "Operations", "Transformation"],
    },
    {
      id: "we-2",
      company: "Helvetia Versicherungen",
      location: "Basel",
      from: "06.2014",
      to: "02.2019",
      functionTitle: "Senior Operations Manager",
      responsibilities: [
        "Leitung des Operations-Teams im Bereich Schaden & Leistung (20 FTE)",
        "Verantwortung für Prozessdokumentation und kontinuierliche Verbesserung",
        "Projektleitung für CRM-Einführung und Workflow-Digitalisierung",
        "Coaching und Entwicklung von Teamlead-Kandidaten",
      ],
      achievements: [
        "Bearbeitungszeit von Schadenmeldungen um 40% reduziert",
        "Fehlerquote im Leistungsbereich von 4.2% auf 0.8% gesenkt",
      ],
      keywords: ["Versicherung", "CRM", "Prozessmanagement", "Coaching"],
    },
    {
      id: "we-3",
      company: "UBS AG",
      location: "Zürich",
      from: "09.2011",
      to: "05.2014",
      functionTitle: "Operations Analyst",
      responsibilities: [
        "Analyse und Dokumentation von Geschäftsprozessen im Retail Banking",
        "Unterstützung bei der Implementierung von MiFID-II-Anforderungen",
        "Erstellung von Management-Reportings und KPI-Dashboards",
      ],
      achievements: [
        "MiFID-II-Compliance vollständig und termingerecht umgesetzt",
      ],
      keywords: ["Banking", "MiFID II", "Reporting", "KPI"],
    },
  ],

  skillGroups: [
    {
      id: "sg-1",
      category: "Prozessoptimierung & Qualität",
      skills: ["Lean Management", "Six Sigma (Green Belt)", "BPMN 2.0", "KVP", "Root Cause Analysis"],
    },
    {
      id: "sg-2",
      category: "Führung & Organisation",
      skills: ["Teamführung (bis 40 FTE)", "Budgetverantwortung", "Change Management", "Coaching & Mentoring"],
    },
    {
      id: "sg-3",
      category: "Compliance & Regulatorik",
      skills: ["FINMA-Regularien", "MiFID II", "DSGVO", "IKS (Internes Kontrollsystem)"],
    },
  ],

  hardSkills: [
    "Lean Management",
    "Six Sigma Green Belt",
    "Projektmanagement (PMP)",
    "FINMA Compliance",
    "Budgetplanung",
    "Vendor Management",
    "KPI-Steuerung",
    "Change Management",
  ],

  softSkills: [
    "Führungsstärke",
    "Kommunikationsstärke",
    "Analytisches Denken",
    "Resilienz",
    "Lösungsorientierung",
    "Teamorientierung",
    "Selbstständigkeit",
  ],

  itSkills: [
    { id: "it-1", name: "Microsoft Office 365", level: "Expertenwissen" },
    { id: "it-2", name: "Salesforce CRM", level: "Sehr gut" },
    { id: "it-3", name: "SAP S/4HANA", level: "Gut" },
    { id: "it-4", name: "Power BI", level: "Sehr gut" },
    { id: "it-5", name: "Jira / Confluence", level: "Sehr gut" },
    { id: "it-6", name: "Microsoft Project", level: "Gut" },
  ],

  languages: [
    { id: "l-1", language: "Deutsch", level: "Muttersprache" },
    { id: "l-2", language: "Englisch", level: "C1 – Verhandlungssicher" },
    { id: "l-3", language: "Französisch", level: "B2 – Sehr gut" },
  ],

  education: [
    {
      id: "edu-1",
      institution: "Universität St. Gallen (HSG)",
      location: "St. Gallen",
      from: "2007",
      to: "2011",
      degree: "Master of Science",
      field: "Business Administration & Finance",
    },
  ],

  certificates: [
    { id: "cert-1", title: "Project Management Professional (PMP)", issuer: "PMI", year: "2016" },
    { id: "cert-2", title: "Lean Six Sigma Green Belt", issuer: "TÜV Rheinland", year: "2018" },
    { id: "cert-3", title: "Leadership Essentials", issuer: "IMD Lausanne", year: "2020" },
    { id: "cert-4", title: "Digital Transformation", issuer: "MIT Sloan (online)", year: "2022" },
  ],
  projects: [
    {
      id: uuidv4(),
      title: "ERP-Migration Selectline → Infor COM",
      role: "Projektleitung",
      description:
        "Migration und Strukturierung von Stammdaten, Prozessen und Systemlogik.",
      results: [
        "Über 6'000 Stammdaten erfolgreich migriert",
        "Projekt über 18 Monate begleitet",
        "Schnittstelle zwischen Fachbereich, IT und Management übernommen",
      ],
    },
  ],
};
