import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.elitecv.ch"),

  title: {
    default: "CV erstellen & optimieren Schweiz | EliteCV",
    template: "%s | EliteCV",
  },

  description:
    "Professionellen CV für die Schweiz erstellen oder optimieren lassen. EliteCV bietet CV Generator, ATS-orientierte CVs, Executive CVs und LinkedIn-Optimierung.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "CV erstellen & optimieren Schweiz | EliteCV",
    description:
      "Professionelle CV-Optimierung und CV Generator für den Schweizer Arbeitsmarkt. ATS-orientiert, modern und auf Ihre Zielposition abgestimmt.",
    url: "/",
    siteName: "EliteCV",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "EliteCV – Professioneller CV und CV Generator Schweiz",
      },
    ],
    locale: "de_CH",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "CV erstellen & optimieren Schweiz | EliteCV",
    description:
      "Professionelle CV-Optimierung und CV Generator für Bewerbungen in der Schweiz.",
    images: ["/og-image.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.elitecv.ch/#business",

  name: "EliteCV",
  url: "https://www.elitecv.ch/",
  logo: "https://www.elitecv.ch/og-image.png",
  image: "https://www.elitecv.ch/og-image.png",

  description:
    "EliteCV unterstützt Bewerber, Fachkräfte und Führungskräfte mit professioneller CV-Optimierung, einem CV Generator, Executive CVs, LinkedIn-Optimierung und Karrierepositionierung für den Schweizer Arbeitsmarkt.",

  email: "info@elitecv.ch",
  telephone: "+41 76 331 46 24",

  address: {
    "@type": "PostalAddress",
    streetAddress: "Schulgutstrasse 1",
    postalCode: "8953",
    addressLocality: "Dietikon",
    addressCountry: "CH",
  },

  areaServed: {
    "@type": "Country",
    name: "Switzerland",
  },

  availableLanguage: ["de", "en"],

  founder: {
    "@type": "Person",
    name: "Klaudio Batinic",
  },

  sameAs: [
    "https://www.linkedin.com/company/elitecv-ch/",
    "https://www.facebook.com/profile.php?id=61590596581435",
    "https://www.instagram.com/elitecv.ch/",
  ],

  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "EliteCV Leistungen",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "CV Check",
          description:
            "Professionelle Analyse und Optimierungsempfehlungen für bestehende Lebensläufe.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "EliteCV CV Generator",
          description:
            "CV Generator für professionelle und ATS-orientierte Lebensläufe.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Executive CV Service",
          description:
            "Persönliche CV-Optimierung und strategische Positionierung für Fach- und Führungskräfte.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "LinkedIn-Optimierung",
          description:
            "Professionelle Optimierung des LinkedIn-Profils für den Schweizer Arbeitsmarkt.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {children}

        <GoogleAnalytics gaId="G-36ZRQK48BQ" />
      </body>
    </html>
  );
}