import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://www.elitecv.ch",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },

    // ─── Ratgeber ──────────────────────────────────────────────
    {
      url: "https://www.elitecv.ch/ratgeber",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.elitecv.ch/ratgeber/ats-lebenslauf-schweiz-2026",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.elitecv.ch/ratgeber/lebenslauf-optimieren-schweiz",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.elitecv.ch/ratgeber/cv-schweiz-vs-deutschland",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.elitecv.ch/ratgeber/linkedin-profil-optimieren-schweiz",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.elitecv.ch/ratgeber/bewerbung-schweiz-tipps",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // ─── CV-Beispiele ──────────────────────────────────────────
    {
      url: "https://www.elitecv.ch/ratgeber/executive-cv-schweiz",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // ─── English ───────────────────────────────────────────────
    {
      url: "https://www.elitecv.ch/en/guides",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    // ─── Unternehmensseiten ────────────────────────────────────
    {
      url: "https://www.elitecv.ch/kontakt",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.elitecv.ch/impressum",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://www.elitecv.ch/datenschutz",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://www.elitecv.ch/agb",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://www.elitecv.ch/widerrufsrecht",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}