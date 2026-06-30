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

  title: "EliteCV | CV-Optimierung & LinkedIn Optimierung Schweiz",

  description:
    "Professionelle CV-Optimierung, LinkedIn Optimierung und Karriereberatung für Fach- und Führungskräfte in der Schweiz. Deutsch und Englisch.",

  keywords: [
    "CV Optimierung Schweiz",
    "Lebenslauf optimieren Schweiz",
    "Professioneller Lebenslauf Schweiz",
    "LinkedIn Optimierung Schweiz",
    "Karriereberatung Schweiz",
    "Bewerbungsservice Schweiz",
    "Executive CV Schweiz",
    "CV Service Schweiz",
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
    title: "EliteCV | CV-Optimierung & LinkedIn Optimierung Schweiz",
    description:
      "Professionelle CV-Optimierung, LinkedIn Optimierung und Karriereberatung für Fach- und Führungskräfte in der Schweiz.",
    url: "https://www.elitecv.ch",
    siteName: "EliteCV",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "EliteCV Schweiz",
      },
    ],
    locale: "de_CH",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "EliteCV | CV-Optimierung & LinkedIn Optimierung Schweiz",
    description:
      "Professionelle CV-Optimierung, LinkedIn Optimierung und Karriereberatung für Fach- und Führungskräfte in der Schweiz.",
    images: ["/og-image.png"],
  },
};
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "EliteCV Schweiz",
  url: "https://www.elitecv.ch",
  logo: "https://www.elitecv.ch/og-image.png",
  image: "https://www.elitecv.ch/og-image.png",
  description:
    "Professionelle CV-Optimierung, LinkedIn Optimierung und Karriereberatung für Fach- und Führungskräfte in der Schweiz.",
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
    "CV Optimierung",
    "LinkedIn Optimierung",
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