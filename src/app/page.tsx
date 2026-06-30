"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

type Lang = "de" | "en";
type PlanKey =
  | "basic"
  | "generatorProfessional"
  | "generatorExecutive"
  | "professional"
  | "premium"
  | "elite";

const content = {
  de: {
    nav: [
      { label: "CV-Generator", href: "/cv-generator" },
      { label: "Leistungen", href: "#leistungen" },
      { label: "Preise", href: "#preise" },
      { label: "Ratgeber", href: "/ratgeber" },
      { label: "Kontakt", href: "#kontakt" },
    ],
    login: "Login",
    cta: "Jetzt starten",
    heroTag: "Premium Karrierepositionierung",
heroTitle: "Professionelle CV-Optimierung für den Schweizer Arbeitsmarkt.",
heroText:
  "Individuelle CVs, LinkedIn-Profile und Bewerbungsunterlagen für Fach- und Führungskräfte. Klar positioniert. Professionell aufbereitet.",
  secondaryCta: "Preise & Pakete ansehen",
generatorNoticeTitle: "Neu: EliteCV Generator 1.0",
generatorNoticeText:
  "CV, Motivationsschreiben, ATS-Check und PDF-Export in wenigen Minuten.",
generatorNoticeLink: "Generator öffnen →",
    visualTag: "EliteCV Insights",
    visualTitle: "Profil-Performance",
    visualGain: "+36% Klarheit",
    whyTag: "Warum EliteCV?",
    whyText: [
      "EliteCV schreibt Lebensläufe nicht nur um.",
      "EliteCV positioniert Menschen klarer, stärker und professioneller.",
      "Recruiter verstehen Ihre Stärken in Sekunden - nicht erst nach 5 Minuten Lesen.",
    ],
    processTitle: "So funktioniert es",
    processSteps: [
      "Paket auswählen",
      "Lebenslauf hochladen",
      "Anfrage senden",
      "Prüfung & Rückmeldung per E-Mail",
      "Zahlung",
      "Bearbeitung",
    ],
    trustTitle: "Vertrauen durch Ergebnisse",
    googleReviewTitle: "auf Google",
    googleReviewText:
    "Herr Batinic hat mir meinen Lebenslauf derart professionell gestaltet, dass die Jobsuche fortan ein Vergnügen wurde! Danke für die tollen Unterlagen aus Wien.",
  
  googleReviewAuthor: "Stefanie Spitzy, Wien",
    trustNote:
      "Namen, Firmenlogos und Unternehmensdaten werden nur mit ausdrücklicher Zustimmung veröffentlicht. Alle Beispiele sind anonymisiert.",
    trustStats: ["Klarere CV-Struktur", "Professionellere Positionierung", "Schnellere Rückmeldungen"],
    testimonialsTitle: "Kundenstimmen (anonymisiert)",
    testimonials: [
      "Vorher war mein Profil unklar. Nach der Überarbeitung war meine Positionierung sofort verständlich.",
      "Ich wurde schneller zu relevanten Gesprächen eingeladen, weil mein CV klarer und professioneller wirkte.",
      "Die Struktur hat meine Stärken sichtbar gemacht - ohne übertriebene Selbstdarstellung.",
    ],
    beforeAfterTitle: "Vorher-Nachher (anonymisiert)",
    beforeAfter: [
      {
        before: "Vorher: Lange Absätze, keine klare Priorisierung, schwache Wirkung.",
        after: "Nachher: Klare Struktur, starke Kernbotschaft, relevante Erfolge sofort sichtbar.",
      },
      {
        before: "Vorher: Allgemeine Formulierungen ohne strategischen Fokus.",
        after: "Nachher: Zielrollen-orientierte Positionierung mit präzisen Kompetenzbelegen.",
      },
    ],
    logosText: "Firmenlogos werden erst nach schriftlicher Freigabe gezeigt.",
    
    visionTitle: "Vision",
    visionText:
      "EliteCV unterstützt Fach- und Führungskräfte dabei, sich strategisch zu positionieren und bessere Karrierechancen in der Schweiz zu erschliessen.",
    missionTitle: "Mission",
    missionText:
      "Wir verwandeln komplexe Karrierewege in klare, strukturierte und überzeugende Profile, die ihren Mehrwert innerhalb weniger Sekunden vermitteln.",
    leistungenTitle: "Leistungen",
    leistungen: [
      "🚀 EliteCV Generator",
      "CV Optimierung",
      "Motivationsschreiben",
      "LinkedIn Optimierung",
      "Karriereberatung",
    ],
    methodeTitle: "Methode WHY / HOW / WHAT",
    methodeCards: [
      { title: "WHY", heading: "Motivation", text: "Karriereziel und berufliches Profil klar positionieren." },
      { title: "HOW", heading: "Fähigkeiten & Stärken", text: "Stärken strukturieren und strategisch sichtbar machen." },
      { title: "WHAT", heading: "Erfahrung", text: "Erfahrung in konkrete Ergebnisse übersetzen." },
    ],
    pricingTitle: "Preise",
    pricingDescription: "Klicke auf ein Paket für Details.",
    selectedLabel: "Ausgewählt",
    orderTitle: "Auftrag starten",
    orderText: "Wählen Sie ein Paket und senden Sie Ihren Auftrag. Wir melden uns per E-Mail.",
    orderName: "Name",
    orderEmail: "E-Mail",
    orderUpload: "Lebenslauf & Zusatzdokumente hochladen",
orderAdditionalDocs: "Sie können Lebenslauf, Arbeitszeugnisse, Diplome oder Zertifikate gemeinsam auswählen.",
    orderPackage: "Ausgewähltes Paket",
    orderMessage: "Optionale Nachricht",
    orderMessagePlaceholder: "Zielrolle, Branche oder besondere Anforderungen...",
    orderTerms: "Ich akzeptiere die AGB, Datenschutzbestimmungen und das Widerrufsrecht.",
    orderSubmit: "Auftrag senden",
    orderSuccess:
  "Vielen Dank für Ihre Bestellung. Wir haben Ihre Anfrage erfolgreich erhalten. Sie erhalten in Kürze eine Bestätigung per E-Mail. Nach Zahlungseingang senden wir Ihnen Ihren persönlichen EliteCV-Zugangscode sowie alle weiteren Informationen.",
    paymentTitle: "Zahlung & Ablauf",
    paymentLead: "Nach dem Absenden Ihrer Anfrage prüfen wir Ihren Auftrag und senden Ihnen die nächsten Schritte per E-Mail. Die Zahlungsinformationen erhalten Sie nach der Auftragsbestätigung. Die Bearbeitung beginnt nach bestätigtem Zahlungseingang.",
    paymentItems: [
      "eine Bestätigung Ihres gewählten Pakets",
      "die nächsten Schritte",
      "die Zahlungsdetails",
      ],
    paymentMethodsTitle: "Mögliche Zahlungsmethoden:",
    paymentMethods: [
      "TWINT",
      "Banküberweisung",
      "PayPal",
    ],
    paymentEnd: "Die Bearbeitung erfolgt nach bestätigtem Zahlungseingang.",
    faqTitle: "FAQ",
    faqs: [
      { q: "Wie schnell erhalte ich meine neue Version?", a: "In der Regel innerhalb von 2 bis 5 Arbeitstagen, abhängig vom Umfang des Auftrags."},
      { q: "Ist EliteCV für verschiedene Branchen geeignet?", a: "Ja. Sprache, Fokus und Struktur werden auf Ihre Zielrolle angepasst." },
      { q: "Kann ich eine Korrekturrunde anfordern?", a: "Ja, alle Pakete enthalten mindestens eine strukturierte Revision." },
    ],
    contactTitle: "Kontakt",
    contactText: "Fragen zu Paketen, Abläufen oder Ihrem Profil? Kontaktieren Sie uns unverbindlich.",
    contactEmailLabel: "E-Mail",
    contactFormName: "Name",
    contactFormEmail: "E-Mail",
    contactFormMessage: "Nachricht",
    contactFormSubmit: "Nachricht senden",
    finalTitle: "Bereit für Ihren nächsten Karriereschritt mit EliteCV?",
    finalText: "Keine generische CV-Bearbeitung. Klare Positionierung für echte Chancen.",
    legalLinks: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
      { label: "AGB", href: "/agb" },
      { label: "Widerrufsrecht", href: "/widerrufsrecht" },
      { label: "Ratgeber", href: "/ratgeber" },
      { label: "Kontakt", href: "#kontakt" },
    ],
    footer: "Alle Rechte vorbehalten.",
  },
  en: {
    nav: [
      { label: "CV Generator", href: "/cv-generator" },
      { label: "Services", href: "#leistungen" },
      { label: "Pricing", href: "#preise" },
      { label: "Guides", href: "/guides" },
      { label: "Contact", href: "#kontakt" },
    ],
    login: "Login",
    cta: "Start now",
    heroTag: "Premium Career Positioning",
heroTitle: "Professional CV optimization for the Swiss job market.",
heroText:
  "Individual CVs, LinkedIn profiles and application documents for professionals and executives. Clearly positioned. Professionally presented.",
  secondaryCta: "View Pricing & Plans",
generatorNoticeText:
  "CV, cover letter, ATS check and PDF export in just a few minutes.",
generatorNoticeLink: "Open generator →",
    visualTag: "EliteCV Insights",
    visualTitle: "Profile Performance",
    visualGain: "+36% Clarity",
    whyTag: "Why EliteCV?",
    whyText: [
      "EliteCV does not just edit CVs.",
      "EliteCV positions people with more clarity, strength and professionalism.",
      "Recruiters understand your strengths in seconds - not after 5 minutes of reading.",
    ],
    processTitle: "How it works",
    processSteps: [
      "Choose package",
      "Upload CV",
      "Send request",
      "Review & response by email",
      "Payment",
      "Delivery",
    ],
    trustTitle: "Trust Through Results",
    googleReviewTitle: "Google Reviews",
    googleReviewText:
    "Mr. Batinic redesigned my CV so professionally that job searching became a pleasure. Thank you for the excellent documents from Vienna.",
  
  googleReviewAuthor: "Stefanie Spitzy, Vienna",
    trustNote:
      "Names, company logos, and company data are only published with explicit permission. All examples are anonymized.",
    trustStats: ["Clearer CV structure", "More professional positioning", "Faster responses"],
    testimonialsTitle: "Testimonials (anonymized)",
    testimonials: [
      "My profile was unclear before. After the rewrite, my positioning was instantly understandable.",
      "I got invited to more relevant interviews because my CV looked clearer and more professional.",
      "The new structure made my strengths visible without sounding exaggerated.",
    ],
    beforeAfterTitle: "Before / After (anonymized)",
    beforeAfter: [
      {
        before: "Before: Long paragraphs, no clear prioritization, weak impact.",
        after: "After: Clear structure, strong core message, relevant outcomes visible immediately.",
      },
      {
        before: "Before: Generic wording without strategic focus.",
        after: "After: Target-role positioning with precise evidence of competence.",
      },
    ],
    logosText: "Company logos are shown only after written permission.",
    visionTitle: "Vision",
    visionText:
      "EliteCV empowers professionals and executives to position themselves strategically and unlock better career opportunities in Switzerland.",
    missionTitle: "Mission",
    missionText:
      "We transform complex career histories into clear, structured and compelling profiles that communicate value within seconds.",
    leistungenTitle: "Services",
    leistungen: [
      "🚀 EliteCV Generator",
      "CV Optimization",
      "Cover Letter",
      "LinkedIn Optimization",
      "Career Advisory",
    ],
    methodeTitle: "Method WHY / HOW / WHAT",
    methodeCards: [
      { title: "WHY", heading: "Motivation", text: "Define your target and narrative with precision." },
      { title: "HOW", heading: "Skills & strengths", text: "Structure strengths so they are instantly visible." },
      { title: "WHAT", heading: "Experience", text: "Present experience as clear, relevant outcomes." },
    ],
    pricingTitle: "Pricing",
    pricingDescription: "Click a package to see details.",
    selectedLabel: "Selected",
    orderTitle: "Start your order",
    orderText: "Choose a package and submit your request. We will get back to you by email.",
    orderName: "Name",
    orderEmail: "Email",
    orderUpload: "Upload CV & supporting documents",
    orderAdditionalDocs: "You can select your CV, references, diplomas or certificates together.",
    orderPackage: "Selected package",
    orderMessage: "Optional message",
    orderMessagePlaceholder: "Target role, industry, or specific requirements...",
    orderTerms: "I accept the Terms and Conditions, Privacy Policy and acknowledge the Right of Withdrawal.",
    orderSubmit: "Send request",
    orderSuccess:
  "Thank you for your order. We have successfully received your request. You will receive an order confirmation by email shortly. After payment has been received, we will send you your personal EliteCV access code together with all further information.",
    paymentTitle: "Payment & Process",
    paymentLead: "After submitting your request, we will review your order and send you the next steps by email. Payment information will be provided after order confirmation. Processing begins once payment has been confirmed.",
    paymentItems: [
      "confirmation of your selected package",
      "the next steps",
      "the payment details",
    ],
    paymentMethodsTitle: "Available payment methods:",
    paymentMethods: [
      "TWINT",
      "Bank transfer",
      "PayPal",
    ],
    paymentEnd: "Work will commence after confirmed payment has been received.",
    faqTitle: "FAQ",
    faqs: [
      { q: "How fast can I receive the revised version?", a: "Usually within 2 to 5 business days, depending on the scope of the project."},
      { q: "Is EliteCV suitable for different industries?", a: "Yes. Language, focus and structure are adapted to your target role." },
      { q: "Can I request a revision?", a: "Yes, all packages include at least one structured revision." },
    ],
    contactTitle: "Contact",
    contactText: "Questions about packages, process or your profile? Contact us without obligation.",
    contactEmailLabel: "Email",
    contactFormName: "Name",
    contactFormEmail: "Email",
    contactFormMessage: "Message",
    contactFormSubmit: "Send message",
    finalTitle: "Ready for your next career move with EliteCV?",
    finalText: "Not generic CV editing. Strategic positioning for real opportunities.",
    legalLinks: [
      { label: "Legal Notice", href: "/impressum" },
      { label: "Privacy Policy", href: "/datenschutz" },
      { label: "Terms & Conditions", href: "/agb" },
      { label: "Right of Withdrawal", href: "/widerrufsrecht" },
      { label: "Guides", href: "/guides" },
      { label: "Contact", href: "#kontakt" },
    ],
    footer: "All rights reserved.",
  },
};

const pricingPlans = [
  {
    key: "basic" as const,
    name: "CV Check",
    price: "CHF 79",
    detailsDe: [
      "Professionelle CV Analyse",
      "Struktur & Layout Feedback",
      "Optimierungsempfehlungen",
    ],
    detailsEn: [
      "Professional CV analysis",
      "Structure & layout feedback",
      "Optimization recommendations",
    ],
  },
  {
    key: "generatorProfessional" as const,
    name: "EliteCV Professional Generator",
    price: "CHF 99",
    detailsDe: [
      "EliteCV Professional Layout",
      "PDF Export",
      "3 Tage Zugang",
      "Farbauswahl",
      "Deutsch oder Englisch (+ CHF 29)",
    ],
    detailsEn: [
      "EliteCV Professional Layout",
      "PDF export",
      "3 days access",
      "Color selection",
      "German or English (+ CHF 29)",
    ]
  },
  
  {
    key: "generatorExecutive" as const,
    name: "EliteCV Executive Generator",
    price: "CHF 149",
    detailsDe: [
      "EliteCV Executive Layout",
      "PDF Export",
      "5 Tage Zugang",
      "Farbauswahl",
      "Deutsch oder Englisch (+ CHF 29)",
    ],
    detailsEn: [
      "EliteCV Executive Layout",
      "PDF export",
      "5 days access",
      "Color selection",
      "German or English (+ CHF 29)",
    ],
  },

  {
    key: "professional" as const,
    name: "CV Executive",
    price: "CHF 179",
    detailsDe: [
      "Executive CV Optimierung",
      "Strategische Positionierung",
      "Executive Design",
      "Persönliche Beratung",
    ],
    detailsEn: [
      "Professional CV optimization",
      "New creation or revision",
      "Strategic positioning",
      "Individual layout",
    ],
  },

  {
    key: "premium" as const,
    name: "Premium",
    price: "CHF 249",
    detailsDe: [
      "Professionelle CV Optimierung",
      "Canva Premium Design",
      "LinkedIn Optimierung",
      "CV Übersetzung (DE ↔ EN)",
      "1 Motivationsschreiben inklusive",
      "Priorisierte Bearbeitung",
    ],
    detailsEn: [
      "Professional CV optimization",
      "Canva premium design",
      "LinkedIn optimization",
      "CV translation (DE ↔ EN)",
      "1 Cover Letter included",
      "Priority processing",
    ],
  },

  {
    key: "elite" as const,
    name: "Elite",
    price: "CHF 399",
    detailsDe: [
      "Executive Karrierepositionierung",
      "Individuelle Karrierestrategie",
      "CV, LinkedIn & Bewerbungsstrategie",
      "CV Übersetzung (DE ↔ EN)",
      "Persönliche Betreuung",
    ],
    detailsEn: [
      "Executive career positioning",
      "Individual career strategy",
      "CV, LinkedIn & application strategy",
      "CV translation (DE ↔ EN)",
      "Personal support",
    ],
  },
] as const;

function EliteCVLogo() {
  return (
    <span className="inline-flex items-center text-2xl font-semibold tracking-[-0.02em] text-[#0A1F44]">
      Elite<span className="text-[#C9A95A]">CV</span>
    </span>
  );
}

function EliteCVCertifiedBadge() {
  return (
    <span className="inline-flex h-16 w-16 flex-col items-center justify-center rounded-full border border-[#C9A95A]/70 bg-[radial-gradient(circle_at_35%_30%,_#f7edc8,_#e8d38a)] text-center text-[9px] font-semibold uppercase leading-tight tracking-[0.1em] text-[#0A1F44] shadow-[0_10px_24px_-14px_rgba(10,31,68,0.55)]">
      <span className="text-[10px] leading-none text-[#9c7726]">✓</span>
      <span className="mt-1">EliteCV</span>
      <span className="text-[#9c7726]">Certified</span>
    </span>
  );
}

function EliteCVInlineCertified() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#C9A95A]/55 bg-white/95 px-2.5 py-0.5 text-[10px] font-semibold tracking-[0.08em] text-[#0A1F44] shadow-sm">
      <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#C9A95A]/75 text-[10px] leading-none text-[#9c7726]">
        ✓
      </span>
      <span>EliteCV <span className="text-[#9c7726]">Certified</span></span>
    </span>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("de");
  const [activePlan, setActivePlan] = useState<PlanKey>("generatorProfessional");
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactError, setContactError] = useState(false);
  const [orderLoading, setOrderLoading] = useState(false);

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const t = content[lang];

  const metrics = useMemo(
    () => (lang === "de" ? ["WHY · Positionierung", "HOW · Struktur", "WHAT · Wirkung"] : ["WHY · Positioning", "HOW · Structure", "WHAT · Impact"]),
    [lang],
  );

  const selectedPlan = pricingPlans.find((plan) => plan.key === activePlan) ?? pricingPlans[1];

  const onOrderSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOrderLoading(true);
  
    const formData = new FormData(event.currentTarget);
  
    formData.append("type", "Auftrag");
    formData.append("package", `${selectedPlan.name} - ${selectedPlan.price}`);
  
    const selectedAddonValues = formData.getAll("addons").map(String);
    const selectedLanguage = String(formData.get("language") ?? "de");
    const languagePrice = selectedLanguage === "en" ? 29 : 0;

    formData.append(
  "languageText",
  selectedLanguage === "en" ? "English (+ CHF 29)" : "Deutsch"
);
  
    const addonPriceByName = (addon: string) => {
      if (addon.includes("LinkedIn")) return 99;
      if (addon.includes("Motivationsschreiben")) return 89;
      if (addon.includes("CV Übersetzung")) return 59;
      if (addon.includes("Arbeitszeugnis")) return 39;
      if (addon.includes("Express")) return 59;
      return 0;
    };
  
    const packagePrices: Record<PlanKey, number> = {
      basic: 79,
      generatorProfessional: 99,
      generatorExecutive: 149,
      professional: 179,
      premium: 249,
      elite: 399,
    };
  
    const addonsText =
      selectedAddonValues.length > 0
        ? selectedAddonValues
            .map((addon) =>
              addon.includes("CHF")
                ? addon
                : `${addon} (+ CHF ${addonPriceByName(addon)})`
            )
            .join("\n")
        : "Keine Zusatzleistungen ausgewählt";
  
        const total =
        (packagePrices[selectedPlan.key] ?? 0) +
        languagePrice +
        selectedAddonValues.reduce(
          (sum, addon) => sum + addonPriceByName(addon),
          0
        );
  
    formData.append("addonsText", addonsText);
    formData.append("totalText", `CHF ${total}`);
  
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
    
      if (response.ok) {
        setOrderSubmitted(true);
        setSelectedFiles([]);
        (event.target as HTMLFormElement).reset();
      }
    } finally {
      setOrderLoading(false);
    }
  };

  return (
    <div className="min-h-screen scroll-smooth bg-white text-[#0A1F44] antialiased">
      <header className="sticky top-0 z-30 border-b border-[#0A1F44]/10 bg-white/90 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="shrink-0 rounded-md px-1 py-1 transition-opacity hover:opacity-90"><EliteCVLogo /></a>
          <div className="hidden items-center gap-1 lg:flex">
          {t.nav.map((link) =>
  link.href.startsWith("/") ? (
    <Link
      key={link.label}
      href={link.href}
      className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
        link.href === "/cv-generator"
          ? "rounded-full bg-[#0A1F44] text-white hover:bg-[#12305f]"
          : "text-[#0A1F44]/76 hover:text-[#0A1F44]"
      }`}
    >
      {link.label}
    </Link>
  ) : (
    <a
      key={link.label}
      href={link.href}
      className="rounded-md px-4 py-2 text-sm font-medium text-[#0A1F44]/76 transition-colors hover:text-[#0A1F44]"
    >
      {link.label}
    </a>
  )
)}
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-full border border-[#0A1F44]/12 bg-white p-1 text-xs font-semibold">
              <button type="button" onClick={() => setLang("de")} className={`rounded-full px-3 py-1 transition ${lang === "de" ? "bg-[#0A1F44] text-white" : "text-[#0A1F44]/65 hover:text-[#0A1F44]"}`}>DE</button>
              <span className="px-1 text-[#0A1F44]/30">|</span>
              <button type="button" onClick={() => setLang("en")} className={`rounded-full px-3 py-1 transition ${lang === "en" ? "bg-[#0A1F44] text-white" : "text-[#0A1F44]/65 hover:text-[#0A1F44]"}`}>EN</button>
            </div>
            {/*<a href="#login" className="rounded-md px-3 py-2 text-sm font-medium text-[#0A1F44]/78">{t.login}</a>*/}
                      </div>
        </nav>
      </header>

      <main>
      <section className="relative overflow-hidden border-b border-[#0A1F44]/10 bg-[radial-gradient(circle_at_top_right,_rgba(201,169,90,0.13),_transparent_42%),radial-gradient(circle_at_8%_18%,_rgba(10,31,68,0.1),_transparent_40%)]">
  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.78),rgba(255,255,255,0.98))]" />

  <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-6 pb-24 pt-14 md:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] md:items-center md:pt-20">
    <div>
      <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-[#C9A95A]">
        {t.heroTag}
      </p>

      <h1 className="max-w-[14ch] text-4xl font-semibold leading-[1.04] tracking-[-0.03em] md:text-[3.7rem]">
        {t.heroTitle}
      </h1>

      <p className="mt-7 max-w-[62ch] text-[1.05rem] leading-8 text-[#0A1F44]/72">
        {t.heroText}
      </p>
      <div className="mt-8 max-w-[520px] rounded-2xl border border-[#C9A95A]/40 bg-gradient-to-r from-[#FFFCF5] to-white p-4 shadow-[0_10px_26px_-16px_rgba(201,169,90,0.25)]">
      <div className="flex flex-col items-start gap-4">
    <div>
      <span className="inline-flex items-center rounded-full bg-[#C9A95A] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
      {lang === "de" ? "✨ NEU BEI ELITECV" : "✨ NEW AT ELITECV"}
      </span>

      <h3 className="mt-3 text-[1.45rem] font-semibold tracking-[-0.02em] text-[#0A1F44]">
      {lang === "de"
  ? "EliteCV Generator 1.0"
  : "EliteCV Generator 1.0"}
      </h3>

      <p className="mt-2 text-sm leading-6 text-[#0A1F44]/72">
      {lang === "de"
  ? "Erstellen Sie ATS-optimierte Lebensläufe und professionelle Motivationsschreiben – schnell, hochwertig und nach Schweizer Bewerbungsstandard."
  : "Create ATS-optimized CVs and professional cover letters – fast, high-quality and tailored to Swiss application standards."}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
  {(lang === "de"
    ? ["ATS", "CV", "Motivationsschreiben", "PDF", "DE ↔ EN"]
    : ["ATS", "CV", "Cover Letter", "PDF", "DE ↔ EN"]
  ).map((item) => (
    <span
      key={item}
      className="rounded-full border border-[#C9A95A]/30 bg-white px-3 py-1 text-xs font-semibold text-[#0A1F44]"
    >
      ✓ {item}
    </span>
  ))}
</div>
    </div>
    <div className="h-1" />

    <Link
  href="/cv-generator"
  className="inline-flex w-fit items-center justify-center rounded-lg bg-[#C9A95A] px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_20px_-10px_rgba(201,169,90,0.45)] transition-all hover:-translate-y-0.5 hover:brightness-105"
>
{lang === "de"
  ? "Zum CV-Generator →"
  : "Open CV Generator →"}
</Link>
  </div>
</div>
      <div className="mt-12 flex flex-wrap gap-4">
        <a
          href="#preise"
          className="rounded-full border border-[#0A1F44]/18 bg-white px-7 py-3 text-sm font-semibold text-[#0A1F44] transition-all hover:-translate-y-0.5 hover:border-[#C9A95A] hover:text-[#C9A95A]"
        >
          {t.secondaryCta}
        </a>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-[#0A1F44]/65">
        {[
          "ATS",
          "KI",
          "PDF",
          "Executive",
          "English",
        ].map((item) => (
          <span
            key={item}
            className="rounded-full border border-[#0A1F44]/10 bg-white px-4 py-2 shadow-sm"
          >
            ✓ {item}
          </span>
        ))}
      </div>
    </div>

    <div className="relative mx-auto w-full max-w-[560px]">
  <div className="relative overflow-hidden rounded-[1.55rem] border border-[#0A1F44]/10 bg-white/90 p-4 shadow-[0_40px_80px_-40px_rgba(10,31,68,0.7)] backdrop-blur">
    <div className="rounded-2xl border border-[#0A1F44]/10 bg-[linear-gradient(160deg,rgba(10,31,68,0.05),rgba(255,255,255,0.96))] p-6">

      <div className="mb-5 flex items-center justify-between border-b border-[#0A1F44]/10 pb-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C9A95A]">
            ELITECV INSIGHTS
          </p>

          <p className="mt-2 text-xl font-semibold tracking-[-0.02em]">
            Profil-Performance
          </p>
        </div>

        <span className="rounded-full border border-emerald-600/25 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700">
          +36% Klarheit
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
      {(lang === "de"
  ? [
      {
        title: "WHY",
        heading: "Motivation",
        text: "Karriereziel und berufliches Profil klar positionieren.",
      },
      {
        title: "HOW",
        heading: "Fähigkeiten & Stärken",
        text: "Stärken strukturieren und strategisch sichtbar machen.",
      },
      {
        title: "WHAT",
        heading: "Erfahrung",
        text: "Erfahrung in konkrete Ergebnisse übersetzen.",
      },
    ]
  : [
      {
        title: "WHY",
        heading: "Motivation",
        text: "Clearly position your career goals and professional profile.",
      },
      {
        title: "HOW",
        heading: "Skills & Strengths",
        text: "Structure your strengths and present them strategically.",
      },
      {
        title: "WHAT",
        heading: "Experience",
        text: "Turn your experience into clear, relevant achievements.",
      },
    ]
).map((item) => (
          <article
            key={item.title}
            className="rounded-xl border border-[#0A1F44]/10 bg-white p-4 shadow-sm"
          >
            <p className="text-xs uppercase tracking-[0.15em] text-[#0A1F44]/60">
              {item.title}
            </p>

            <p className="mt-2 text-lg font-semibold">
              {item.heading}
            </p>

            <p className="mt-1 text-sm text-[#0A1F44]/62">
              {item.text}
            </p>
          </article>
        ))}
      </div>

      </div>
  </div>
</div>
</div>
</section>

        <section className="border-y border-[#0A1F44]/10 bg-[#0A1F44]/[0.02]">
          <div className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-20 md:grid-cols-2">
            <article className="rounded-2xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm"><h2 className="text-2xl font-semibold tracking-[-0.02em]">{t.visionTitle}</h2><p className="mt-4 leading-relaxed text-[#0A1F44]/74">{t.visionText}</p></article>
            <article className="rounded-2xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm"><h2 className="text-2xl font-semibold tracking-[-0.02em]">{t.missionTitle}</h2><p className="mt-4 leading-relaxed text-[#0A1F44]/74">{t.missionText}</p></article>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 py-20">
          <div className="flex items-start justify-between gap-6">
            <h2 className="text-3xl font-semibold tracking-[-0.02em]">{t.whyTag}</h2>
            <EliteCVCertifiedBadge />
          </div>
          <div className="mt-6 max-w-4xl space-y-3 text-lg leading-relaxed text-[#0A1F44]/74">{t.whyText.map((line) => <p key={line}>{line}</p>)}</div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 pb-20">
          <h2 className="text-3xl font-semibold tracking-[-0.02em]">{t.processTitle}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {t.processSteps.map((step, index) => (
              <article key={step} className="rounded-2xl border border-[#0A1F44]/10 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C9A95A]">
  {lang === "de" ? "Schritt" : "Step"} {index + 1}
</p>
                <p className="mt-2 text-lg font-semibold">{step}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-[#0A1F44]/10 bg-[#0A1F44]/[0.02]">
          <div className="mx-auto w-full max-w-7xl px-6 py-20">
            <h2 className="text-3xl font-semibold tracking-[-0.02em]">{t.trustTitle}</h2>
            <p className="mt-4 max-w-5xl text-sm leading-relaxed text-[#0A1F44]/68">{t.trustNote}</p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {t.trustStats.map((stat) => <article key={stat} className="rounded-2xl border border-[#0A1F44]/10 bg-white p-5 shadow-sm"><p className="text-lg font-semibold">{stat}</p></article>)}
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <article className="rounded-2xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-semibold">{t.testimonialsTitle}</h3>
                <div className="mt-5 space-y-4">{t.testimonials.map((quote) => <blockquote key={quote} className="rounded-xl border border-[#0A1F44]/10 bg-[#FCFCFB] p-4 text-[#0A1F44]/78">"{quote}"</blockquote>)}</div>
              </article>
              <article className="rounded-2xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-semibold">{t.beforeAfterTitle}</h3>
                <div className="mt-5 space-y-4">{t.beforeAfter.map((item) => <div key={item.before} className="rounded-xl border border-[#0A1F44]/10 p-4"><p className="text-sm text-[#0A1F44]/70">{item.before}</p><p className="mt-2 text-sm font-medium text-[#0A1F44]">{item.after}</p></div>)}</div>
              </article>
            </div>
            <p className="mt-6 text-sm text-[#0A1F44]/62">{t.logosText}</p>
            <div className="mt-8 max-w-[520px] rounded-2xl border border-[#0A1F44]/10 bg-white p-6 shadow-sm">
  <p className="text-lg font-semibold">
    ⭐⭐⭐⭐⭐ 5.0 – {t.googleReviewTitle}
  </p>

  <p className="mt-3 text-[#0A1F44]/70">
    "{t.googleReviewText}"
  </p>

  <p className="mt-2 text-sm font-medium text-[#0A1F44]/60">
    {t.googleReviewAuthor}
  </p>
</div>
          </div>
        </section>

        <section id="leistungen" className="border-y border-[#0A1F44]/10 bg-white">
  <div className="mx-auto w-full max-w-7xl px-6 py-20">
    <h2 className="text-3xl font-semibold tracking-[-0.02em]">
      {t.leistungenTitle}
    </h2>

    <div className="mt-9 grid gap-5 md:grid-cols-2">
      {t.leistungen.map((item) => (
        <article
        key={item}
        className={`rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${
          item.includes("Generator")
            ? "border-2 border-[#C9A95A]/35 bg-[#FFFDF8] shadow-sm hover:shadow-[0_18px_40px_-20px_rgba(201,169,90,0.45)]"
            : "border border-[#0A1F44]/10 bg-[#FCFCFB] shadow-sm hover:shadow-md"
        }`}
      >
        {item.includes("Generator") && (
          <span className="mb-3 inline-flex rounded-full bg-[#C9A95A] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
            NEU
          </span>
        )}
      
        <h3 className="text-lg font-semibold">{item}</h3>
      
        <p className="mt-2 text-sm leading-6 text-[#0A1F44]/65">
          {item.includes("Generator")
            ? lang === "de"
              ? "Erstellen Sie Ihren Lebenslauf und Ihr Motivationsschreiben in wenigen Minuten."
              : "Create your CV and cover letter in minutes."
            : item.includes("CV")
            ? lang === "de"
              ? "Professionelle Optimierung nach Schweizer Bewerbungsstandard."
              : "Professional optimization according to Swiss application standards."
            : item.includes("Motiv") || item.includes("Cover")
            ? lang === "de"
              ? "Überzeugende Anschreiben mit klarer Struktur und KI-Unterstützung."
              : "Compelling cover letters with clear structure and AI support."
            : item.includes("LinkedIn")
            ? lang === "de"
              ? "Optimieren Sie Ihr LinkedIn-Profil für Recruiter und passende Karrierechancen."
              : "Optimize your LinkedIn profile for recruiters and relevant career opportunities."
            : lang === "de"
            ? "Persönliche Unterstützung für Ihre berufliche Positionierung."
            : "Personal support for your career positioning."}
        </p>
      
        {item.includes("Generator") && (
          <Link
            href="/cv-generator"
            className="mt-5 inline-flex rounded-full bg-[#0A1F44] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#12305f]"
          >
            {lang === "de" ? "Zum CV-Generator →" : "Open CV Generator →"}
          </Link>
        )}
      </article>
      ))}
    </div>
  </div>
</section>

        <section id="methode" className="mx-auto w-full max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-semibold tracking-[-0.02em]">{t.methodeTitle}</h2>
          <div className="mt-9 grid gap-5 md:grid-cols-3">{t.methodeCards.map((item) => <article key={item.title} className="rounded-2xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#C9A95A]/70 hover:shadow-md"><p className="text-xs font-semibold tracking-[0.2em] text-[#C9A95A]">{item.title}</p><p className="mt-3 text-2xl font-semibold">{item.heading}</p><p className="mt-3 leading-relaxed text-[#0A1F44]/70">{item.text}</p></article>)}</div>
        </section>

        <section id="preise" className="mx-auto w-full max-w-7xl px-6 pb-20 pt-6">
          <h2 className="text-3xl font-semibold tracking-[-0.02em]">{t.pricingTitle}</h2>
          <p className="mt-3 text-[#0A1F44]/65">{t.pricingDescription}</p>
          <p className="mt-2 text-sm text-[#0A1F44]/60">
  {lang === "de"
    ? "Alle Dienstleistungen werden individuell auf Branche, Position und Schweizer Arbeitsmarkt abgestimmt."
    : "All services are individually adapted to your industry, target role and the Swiss job market."}
</p>
<div className="mt-9 grid gap-5 md:grid-cols-3">
  {pricingPlans.map((plan) => {
    const expanded = activePlan === plan.key;
    const details = lang === "de" ? plan.detailsDe : plan.detailsEn;

    return (
      <button
        type="button"
        key={plan.key}
        onClick={() => {
          setActivePlan(plan.key);
          setOrderSubmitted(false);

          setTimeout(() => {
            document.getElementById("auftrag")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 100);
        }}
        className={`rounded-2xl border bg-white p-6 text-left shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
          expanded
            ? "border-[#C9A95A]/65 ring-1 ring-[#C9A95A]/40 md:col-span-2"
            : "border-[#0A1F44]/10"
        }`}
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm uppercase tracking-[0.14em] text-[#0A1F44]/58">
              {plan.name}
            </p>
            <p className="mt-2 text-3xl font-semibold">
              {plan.price}
            </p>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            expanded
              ? "mt-4 max-h-64 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <ul className="space-y-2 text-sm text-[#0A1F44]/75">
            {details.map((detail) => (
              <li key={detail}>- {detail}</li>
            ))}
          </ul>
        </div>
      </button>
    );
  })}
</div>
          <div className="mt-10 rounded-2xl border border-[#0A1F44]/10 bg-[#FCFCFB] p-7 shadow-sm">
  <h3 className="text-2xl font-semibold">
    {lang === "de" ? "Zusatzleistungen" : "Add-ons"}
  </h3>

  <p className="mt-2 text-[#0A1F44]/70">
    {lang === "de"
      ? "Ergänzende Leistungen können zu einem bestehenden Paket hinzugebucht werden."
      : "Additional services can be booked together with an existing package."}
  </p>

  <div className="mt-6 grid gap-4 md:grid-cols-2">
    <div className="rounded-xl border border-[#0A1F44]/10 bg-white p-4">
      <p className="font-semibold">
        {lang === "de" ? "LinkedIn-Profil Optimierung" : "LinkedIn Profile Optimization"}
      </p>
      <p className="mt-1 font-bold text-[#C9A95A]">CHF 99</p>
    </div>

    <div className="rounded-xl border border-[#0A1F44]/10 bg-white p-4">
      <p className="font-semibold">
        {lang === "de" ? "Motivationsschreiben Erstellung" : "Cover Letter Creation"}
      </p>
      <p className="mt-1 font-bold text-[#C9A95A]">CHF 89</p>
    </div>

    <div className="rounded-xl border border-[#0A1F44]/10 bg-white p-4">
      <p className="font-semibold">
        {lang === "de" ? "CV Übersetzung DE ↔ EN" : "CV Translation DE ↔ EN"}
      </p>
      <p className="mt-1 font-bold text-[#C9A95A]">CHF 59</p>
    </div>

    <div className="rounded-xl border border-[#0A1F44]/10 bg-white p-4">
      <p className="font-semibold">
        {lang === "de" ? "Arbeitszeugnis Analyse" : "Reference Letter Analysis"}
      </p>
      <p className="mt-1 font-bold text-[#C9A95A]">CHF 39</p>
    </div>

    <div className="rounded-xl border border-[#0A1F44]/10 bg-white p-4">
      <p className="font-semibold">
        {lang === "de" ? "Express-Bearbeitung (24h)" : "Express Processing (24h)"}
      </p>
      <p className="mt-1 font-bold text-[#C9A95A]">CHF 59</p>
    </div>
  </div>
</div>
          <div id="auftrag" className="mt-10 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
            <form onSubmit={onOrderSubmit} className="rounded-2xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-[-0.02em]">{t.orderTitle}</h3>
              <p className="mt-2 text-[#0A1F44]/67">{t.orderText}</p>

              <div className="mt-5 rounded-xl border border-[#C9A95A]/40 bg-[#C9A95A]/10 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8a6a22]">{t.selectedLabel}</p>
                <p className="mt-1 text-lg font-bold text-[#0A1F44]">{selectedPlan.name} - {selectedPlan.price}</p>
                <p className="mt-2 text-sm text-[#0A1F44]/70">
  {selectedPlan.key === "generatorExecutive"
    ? (lang === "de"
        ? "Zugangsdauer: 5 Tage"
        : "Access duration: 5 days")
    : selectedPlan.key === "generatorProfessional"
    ? (lang === "de"
        ? "Zugangsdauer: 3 Tage"
        : "Access duration: 3 days")
    : ""}
</p>
              </div>
              <input
  type="hidden"
  name="selectedPackage"
  value={`${selectedPlan.name} - ${selectedPlan.price}`}
/>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
              <label className="text-sm font-medium text-[#0A1F44]/85">
  {t.orderName}
  <input
    name="name"
    required
    type="text"
    className="mt-2 w-full rounded-xl border border-[#0A1F44]/15 px-4 py-2.5 outline-none transition focus:border-[#C9A95A]"
  />
</label>
<label className="text-sm font-medium text-[#0A1F44]/85">
  {t.orderEmail}
  <input
    name="email"
    required
    type="email"
    className="mt-2 w-full rounded-xl border border-[#0A1F44]/15 px-4 py-2.5 outline-none transition focus:border-[#C9A95A]"
  />
</label>
</div>
<div className="mt-5">
  <label className="text-sm font-medium text-[#0A1F44]/85">
    Sprache

    <select
      name="language"
      className="mt-2 w-full rounded-xl border border-[#0A1F44]/15 px-4 py-2.5 outline-none transition focus:border-[#C9A95A]"
      defaultValue="de"
    >
      <option value="de">Deutsch</option>
      <option value="en">English (+ CHF 29)</option>
    </select>
  </label>
</div>
<div className="mt-5">
  <label className="text-sm font-medium text-[#0A1F44]/85">
    Bemerkungen / Wünsche

    <textarea
      name="message"
      rows={4}
      className="mt-2 w-full rounded-xl border border-[#0A1F44]/15 px-4 py-2.5 outline-none transition focus:border-[#C9A95A]"
      placeholder="z.B. Zielposition, Branche, gewünschte Sprache, besondere Hinweise..."
    />
  </label>
</div>

<label className="md:col-span-2 text-sm font-medium text-[#0A1F44]/85">
  {t.orderUpload}

  <input
    type="file"
    name="files"
    multiple
    accept=".pdf,.doc,.docx"
    onChange={(e) => {
      setSelectedFiles(Array.from(e.target.files ?? []));
    }}
    className="mt-2 block w-full cursor-pointer rounded-xl border-2 border-dashed border-[#C9A95A]/40 bg-[#FFFCF5] px-4 py-6 text-sm text-[#0A1F44]/75 transition hover:border-[#C9A95A]/70 hover:bg-[#FFF8E8]"
  />

  <span className="mt-1 block text-xs text-[#0A1F44]/60">
    {lang === "de"
      ? "PDF, DOC oder DOCX (mehrere Dateien möglich, max. 4 MB)"
      : "PDF, DOC or DOCX (multiple files possible, max. 4 MB)"}
  </span>

  <span className="mt-1 block text-xs text-[#0A1F44]/60">
    {t.orderAdditionalDocs}
  </span>

  {selectedFiles.length > 0 && (
    <div className="mt-3 rounded-xl border border-[#0A1F44]/10 bg-[#F8FAFC] p-3">
      <p className="text-sm font-medium text-[#0A1F44]">
        {lang === "de"
          ? "Ausgewählte Dokumente"
          : "Selected Documents"}{" "}
        ({selectedFiles.length})
      </p>

      <ul className="mt-2 space-y-1 text-sm text-[#0A1F44]/80">
        {selectedFiles.map((file, index) => (
          <li key={index}>✓ {file.name}</li>
        ))}
      </ul>
    </div>
  )}
</label>

<div className="mt-4">
  <p className="rounded-xl border border-[#0A1F44]/10 bg-[#F7F8FB] p-4 text-sm text-[#0A1F44]/75">
    {lang === "de"
      ? "Grössere oder zusätzliche Unterlagen können Sie alternativ per E-Mail an info@elitecv.ch senden."
      : "Larger or additional documents can alternatively be sent by email to info@elitecv.ch."}
  </p>
</div>

<label className="mt-4 block text-sm font-medium text-[#0A1F44]/85">
  {t.orderPackage}
  <input
    readOnly
    value={`${selectedPlan.name} - ${selectedPlan.price}`}
    className="mt-2 w-full rounded-xl border border-[#0A1F44]/15 bg-[#0A1F44]/[0.03] px-4 py-2.5 text-[#0A1F44]/85 outline-none"
  />
</label>

<label className="mt-4 block text-sm font-medium text-[#0A1F44]/85">
  {lang === "de"
    ? "LinkedIn-Profil (optional)"
    : "LinkedIn Profile URL (optional)"}

  <input
    name="linkedinUrl"
    type="text"
    placeholder="https://linkedin.com/in/ihrprofil"
    className="mt-2 w-full rounded-xl border border-[#0A1F44]/15 px-4 py-2.5 outline-none transition focus:border-[#C9A95A]"
  />
</label>

<div className="mt-5">
  <p className="mb-3 text-sm font-semibold text-[#0A1F44]">
    {lang === "de" ? "Zusatzleistungen auswählen" : "Select Add-ons"}
  </p>

  <div className="space-y-2">

    <label className="flex items-center gap-2 text-sm">
      <input type="checkbox" name="addons" value="LinkedIn-Profil Optimierung (+ CHF 99)" />
      <span>
        {lang === "de"
          ? "LinkedIn-Profil Optimierung (+ CHF 99)"
          : "LinkedIn Profile Optimization (+ CHF 99)"}
      </span>
    </label>

    <label className="flex items-center gap-2 text-sm">
      <input type="checkbox" name="addons" value="Motivationsschreiben Erstellung (+ CHF 89)" />
      <span>
        {lang === "de"
          ? "Motivationsschreiben Erstellung (+ CHF 89)"
          : "Cover Letter Creation (+ CHF 89)"}
      </span>
    </label>

    <label className="flex items-center gap-2 text-sm">
    <input type="checkbox" name="addons" value="CV Übersetzung DE ↔ EN (+ CHF 59)" />
      <span>
        {lang === "de"
          ? "CV Übersetzung DE ↔ EN (+ CHF 59)"
          : "CV Translation DE ↔ EN (+ CHF 59)"}
      </span>
    </label>

    <label className="flex items-center gap-2 text-sm">
    <input type="checkbox" name="addons" value="Arbeitszeugnis Analyse (+ CHF 39)" />
      <span>
        {lang === "de"
          ? "Arbeitszeugnis Analyse (+ CHF 39)"
          : "Reference Letter Analysis (+ CHF 39)"}
      </span>
    </label>

    <label className="flex items-center gap-2 text-sm">
    <input type="checkbox" name="addons" value="Express-Bearbeitung 24h (+ CHF 59)" />
      <span>
        {lang === "de"
          ? "Express-Bearbeitung 24h (+ CHF 59)"
          : "Express Processing 24h (+ CHF 59)"}
      </span>
    </label>

  </div>
</div>
    
              <div className="mt-5 space-y-3 text-sm text-[#0A1F44]/80">
              <label className="flex items-start gap-2"><input
  name="termsAccepted"
  required
  type="checkbox"
/><span>{t.orderTerms}</span></label>
             
              </div>
              {orderSubmitted ? (
  <button
    type="button"
    disabled
    className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white"
  >
    ✓ {lang === "de" ? "Bestellung erfolgreich gesendet" : "Order sent successfully"}
  </button>
) : (
  <button
    type="submit"
    disabled={orderLoading}
    className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-[#0A1F44] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_-16px_rgba(10,31,68,0.65)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#12305f] disabled:cursor-not-allowed disabled:opacity-80"
  >
    {orderLoading ? (
      <>
        <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/20 border-t-white border-r-white" />
        <span>
          {lang === "de"
            ? "Bestellung wird gesendet..."
            : "Sending order..."}
        </span>
      </>
    ) : (
      <>
        <span>🚀</span>
        <span>
          {lang === "de"
            ? "Kostenpflichtig bestellen"
            : "Place Binding Order"}
        </span>
      </>
    )}
  </button>
)}

              {orderSubmitted ? <p className="mt-4 rounded-xl border border-emerald-600/25 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-800">{t.orderSuccess}</p> : null}
             </form>

            <aside className="rounded-2xl border border-[#0A1F44]/10 bg-[#FCFCFB] p-7 shadow-sm">
              <h3 className="text-xl font-semibold">{t.paymentTitle}</h3>
              <p className="mt-3 text-[#0A1F44]/70">{t.paymentLead}</p>
              <p className="mt-4 text-sm font-medium text-[#0A1F44]/80">{lang === "de" ? "Sie erhalten anschliessend per E-Mail:" : "You will then receive by email:"}</p>
              <ul className="mt-2 space-y-2 text-sm text-[#0A1F44]/76">{t.paymentItems.map((item) => <li key={item}>- {item}</li>)}</ul>
              <p className="mt-4 text-sm font-medium text-[#0A1F44]/80">{t.paymentMethodsTitle}</p>
              <ul className="mt-2 space-y-2 text-sm text-[#0A1F44]/76">{t.paymentMethods.map((method) => <li key={method}>- {method}</li>)}</ul>
              <p className="mt-4 text-sm font-semibold text-[#0A1F44]/82">{t.paymentEnd}</p>
              <div className="mt-5 rounded-xl border border-[#C9A95A]/35 bg-[#C9A95A]/10 p-4 text-sm text-[#0A1F44]/80">
  <p className="font-semibold text-[#0A1F44]">
    {lang === "de" ? "Nach der Bestellung" : "After your order"}
  </p>

  <ul className="mt-3 space-y-2">
    <li>- {lang === "de" ? "Sie erhalten eine Bestätigung per E-Mail." : "You will receive an email confirmation."}</li>
    <li>- {lang === "de" ? "Nach Zahlungseingang wird Ihr Zugangscode freigeschaltet." : "Your access code will be activated after payment."}</li>
    <li>- {lang === "de" ? "Generator-Zugänge werden persönlich erstellt." : "Generator access codes are created individually."}</li>
    <li>- {lang === "de" ? "Bei Fragen erhalten Sie Support per E-Mail." : "Email support is available if you have questions."}</li>
  </ul>
</div>
            </aside>
          </div>
        </section>

        <section id="faq" className="border-y border-[#0A1F44]/10 bg-white">
          <div className="mx-auto w-full max-w-7xl px-6 py-20">
            <h2 className="text-3xl font-semibold tracking-[-0.02em]">{t.faqTitle}</h2>
            <div className="mt-8 space-y-4">{t.faqs.map((item) => <article key={item.q} className="rounded-2xl border border-[#0A1F44]/10 bg-white p-6 shadow-sm"><h3 className="text-lg font-semibold">{item.q}</h3><p className="mt-2 text-[#0A1F44]/72">{item.a}</p></article>)}</div>
          </div>
        </section>
        <section id="kontakt" className="mx-auto w-full max-w-7xl px-6 py-20">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm"><h2 className="text-3xl font-semibold tracking-[-0.02em]">{t.contactTitle}</h2><p className="mt-3 text-[#0A1F44]/72">{t.contactText}</p><p className="mt-5 text-sm uppercase tracking-[0.15em] text-[#C9A95A]">{t.contactEmailLabel}</p><a href="mailto:info@elitecv.ch" className="mt-1 inline-block text-lg font-semibold text-[#0A1F44] transition hover:text-[#C9A95A]">info@elitecv.ch</a></article>
            <form
  onSubmit={async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    formData.append("type", "Kontakt");

    const response = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      setContactSubmitted(true);
      setContactError(false);
      (e.target as HTMLFormElement).reset();
    } else {
      setContactSubmitted(false);
      setContactError(true);
    }
  }}
  className="rounded-2xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm"
>
  <div className="grid gap-4 md:grid-cols-2">
    <label className="text-sm font-medium text-[#0A1F44]/85">
      {t.contactFormName}
      <input
        name="name"
        required
        type="text"
        className="mt-2 w-full rounded-xl border border-[#0A1F44]/15 px-4 py-2.5 outline-none transition focus:border-[#C9A95A]"
      />
    </label>

    <label className="text-sm font-medium text-[#0A1F44]/85">
      {t.contactFormEmail}
      <input
        name="email"
        required
        type="email"
        className="mt-2 w-full rounded-xl border border-[#0A1F44]/15 px-4 py-2.5 outline-none transition focus:border-[#C9A95A]"
      />
    </label>
  </div>

  <button
    type="submit"
    className="mt-5 rounded-full border border-[#0A1F44]/20 px-6 py-2.5 text-sm font-semibold text-[#0A1F44] transition hover:border-[#C9A95A] hover:text-[#C9A95A]"
  >
    {t.contactFormSubmit}
  </button>
  {contactSubmitted && (
  <p className="mt-4 rounded-xl border border-emerald-600/25 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-800">
  {lang === "de"
    ? "Vielen Dank. Ihre Nachricht wurde erfolgreich übermittelt. Wir melden uns per E-Mail."
    : "Thank you. Your message has been sent successfully. We will get back to you by email."}
</p>
)}

{contactError && (
  <p className="mt-4 rounded-xl border border-red-600/25 bg-red-500/10 px-4 py-3 text-sm text-red-800">
  {lang === "de"
    ? "Die Nachricht konnte leider nicht versendet werden. Bitte kontaktieren Sie uns direkt per E-Mail an info@elitecv.ch."
    : "Unfortunately, your message could not be sent. Please contact us directly by email at info@elitecv.ch."}
</p>
)}
</form>
          </div>
        </section>

        <section id="login" className="bg-[#0A1F44]">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-6 py-16 text-center md:flex-row md:text-left">
            <div><h2 className="max-w-2xl text-3xl font-semibold text-white">{t.finalTitle}</h2><p className="mt-3 text-white/80">{t.finalText}</p><div className="mt-4"><EliteCVInlineCertified /></div></div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#0A1F44]/10 bg-white py-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-6">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            {t.legalLinks.map((item) => item.href.startsWith("/") ? <Link key={item.label} href={item.href} className="text-[#0A1F44]/72 transition hover:text-[#0A1F44]">{item.label}</Link> : <a key={item.label} href={item.href} className="text-[#0A1F44]/72 transition hover:text-[#0A1F44]">{item.label}</a>)}
            <div className="mb-4 flex items-center justify-center gap-4">
            <div className="mb-4 flex items-center justify-center gap-5">
  <a
    href="https://www.linkedin.com/company/elitecv-ch/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#0A1F44] hover:text-[#C9A95A]"
    aria-label="LinkedIn"
  >
    <FaLinkedin size={30} />
  </a>

  <a
    href="https://www.facebook.com/profile.php?id=61590596581435"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#0A1F44] hover:text-[#C9A95A]"
    aria-label="Facebook"
  >
    <FaFacebook size={30} />
  </a>

  <a
    href="https://www.instagram.com/elitecv.ch/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#0A1F44] hover:text-[#C9A95A]"
    aria-label="Instagram"
  >
    <FaInstagram size={30} />
  </a>
</div>
</div>
          </div>
          <p className="text-sm text-[#0A1F44]/62">© {new Date().getFullYear()} EliteCV. {t.footer}</p>
        </div>
      </footer>
    </div>
  );
}
