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
    default: "EliteCV | CV Generator & CV-Optimierung Schweiz",
    template: "%s | EliteCV",
  },

  description:
    "CV Generator, professionelle CV-Optimierung und LinkedIn-Profil-Optimierung für den Schweizer Arbeitsmarkt. ATS-optimierte Lebensläufe, Executive CVs und Bewerbungslösungen auf Deutsch und Englisch.",

  keywords: [
    "CV Generator Schweiz",
    "CV Optimierung Schweiz",
    "Lebenslauf optimieren Schweiz",
    "Lebenslauf erstellen Schweiz",
    "LinkedIn Profil optimieren Schweiz",
    "LinkedIn Optimierung Schweiz",
    "Executive CV Schweiz",
    "ATS Lebenslauf Schweiz",
    "Bewerbungsservice Schweiz",
    "Karriereberatung Schweiz",
  ],

  alternates: {
    canonical: "https://www.elitecv.ch",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "EliteCV | CV Generator & CV-Optimierung Schweiz",
    description:
      "CV Generator, CV-Optimierung und LinkedIn-Profil-Optimierung für den Schweizer Arbeitsmarkt. Professional & Executive CVs, ATS-Optimierung und Deutsch/Englisch.",
    url: "https://www.elitecv.ch",
    siteName: "EliteCV",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "EliteCV Schweiz – CV Generator und CV-Optimierung",
      },
    ],
    locale: "de_CH",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "EliteCV | CV Generator & CV-Optimierung Schweiz",
    description:
      "CV Generator, CV-Optimierung und LinkedIn-Profil-Optimierung für den Schweizer Arbeitsmarkt.",
    images: ["/og-image.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",

  name: "EliteCV",
  url: "https://www.elitecv.ch",

  logo: "https://www.elitecv.ch/og-image.png",
  image: "https://www.elitecv.ch/og-image.png",

  description:
    "EliteCV bietet einen CV Generator, professionelle CV-Optimierung, LinkedIn-Profil-Optimierung und Karrierepositionierung für den Schweizer Arbeitsmarkt.",

  email: "info@elitecv.ch",

  areaServed: {
    "@type": "Country",
    name: "Switzerland",
  },

  availableLanguage: ["German", "English"],

  sameAs: [
    "https://www.linkedin.com/company/elitecv-ch/",
    "https://www.facebook.com/profile.php?id=61590596581435",
    "https://www.instagram.com/elitecv.ch/",
  ],

  serviceType: [
    "CV Generator Schweiz",
    "CV Optimierung",
    "LinkedIn Profil Optimierung",
    "Executive CV",
    "ATS Lebenslauf",
    "Karriereberatung",
    "Bewerbungsunterlagen",
  ],

  founder: {
    "@type": "Person",
    name: "Klaudio Batinic",
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