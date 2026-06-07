import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Karriere-Ratgeber Schweiz | EliteCV",
  description:
    "Tipps zu Lebenslauf, LinkedIn, Bewerbung und Karriere im Schweizer Arbeitsmarkt.",
};

export default function RatgeberPage() {
  return (
    <main className="min-h-screen bg-white text-[#0A1F44]">
      <section className="mx-auto w-full max-w-7xl px-6 py-20">
        <Link href="/" className="text-sm font-semibold text-[#C9A95A]">
          ← Zurück zu EliteCV
        </Link>

        <h1 className="mt-10 text-4xl font-semibold md:text-5xl">
          Karriere-Ratgeber Schweiz
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#0A1F44]/72">
          Tipps zu Lebenslauf, LinkedIn, Bewerbung und Karriere im Schweizer Arbeitsmarkt.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Link href="/ratgeber/lebenslauf-optimieren-schweiz" className="rounded-2xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm hover:shadow-md">
            <h2 className="text-2xl font-semibold">Lebenslauf optimieren Schweiz</h2>
            <p className="mt-4 text-[#0A1F44]/70">
              Die wichtigsten Fehler im Lebenslauf und wie Sie Ihren CV verbessern.
            </p>
          </Link>

          <Link href="/ratgeber/linkedin-profil-optimieren-schweiz" className="rounded-2xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm hover:shadow-md">
            <h2 className="text-2xl font-semibold">LinkedIn Profil optimieren Schweiz</h2>
            <p className="mt-4 text-[#0A1F44]/70">
              Mehr Sichtbarkeit und professionelle Positionierung auf LinkedIn.
            </p>
          </Link>

          <Link href="/ratgeber/cv-schweiz-vs-deutschland" className="rounded-2xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm hover:shadow-md">
            <h2 className="text-2xl font-semibold">CV Schweiz vs. Deutschland</h2>
            <p className="mt-4 text-[#0A1F44]/70">
              Die wichtigsten Unterschiede für Bewerbungen in der Schweiz.
            </p>
          </Link>

          <Link href="/ratgeber/bewerbung-schweiz-tipps" className="rounded-2xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm hover:shadow-md">
            <h2 className="text-2xl font-semibold">Bewerbung Schweiz Tipps</h2>
            <p className="mt-4 text-[#0A1F44]/70">
              Praktische Tipps für bessere Bewerbungsunterlagen.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}