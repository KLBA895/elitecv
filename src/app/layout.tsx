import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}