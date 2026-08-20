import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/admin/",
        "/api/",
        "/stripe-test",
        "/zahlung-erfolgreich",
        "/zahlung-abgebrochen",
      ],
    },

    sitemap: "https://www.elitecv.ch/sitemap.xml",
  };
}