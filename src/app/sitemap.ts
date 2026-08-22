import type { MetadataRoute } from "next";

const baseUrl = "https://www.elitecv.ch";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    // ─── Hauptseiten ───────────────────────────────────────────
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/cv-generator`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/cv-generator-schweiz`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },

    // ─── Ratgeber Deutsch ──────────────────────────────────────
    {
      url: `${baseUrl}/ratgeber`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ratgeber/lebenslauf-optimieren-schweiz`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ratgeber/linkedin-profil-optimieren-schweiz`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ratgeber/ats-lebenslauf-schweiz-2026`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ratgeber/executive-cv-schweiz`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ratgeber/cv-schweiz-vs-deutschland`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ratgeber/bewerbung-schweiz-tipps`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // ─── English Guides ────────────────────────────────────────
    {
      url: `${baseUrl}/guides`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/cv-optimization-switzerland`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/linkedin-profile-optimization-switzerland`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/cv-switzerland-vs-germany`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/job-application-switzerland`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/ats-resume-switzerland-2026`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/guides`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/guides/executive-cv-switzerland`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // ─── Kontakt / Rechtliches ─────────────────────────────────
    {
      url: `${baseUrl}/kontakt`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/agb`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/widerrufsrecht`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}