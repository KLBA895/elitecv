import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LinkedIn Profil optimieren Schweiz | EliteCV",
  description:
    "Erfahren Sie, wie Sie Ihr LinkedIn-Profil für den Schweizer Arbeitsmarkt professionell optimieren und sichtbarer werden.",
};

export default function LinkedInProfilOptimierenSchweizPage() {
  return (
    <main className="min-h-screen bg-white text-[#0A1F44]">
      <article className="mx-auto max-w-4xl px-6 py-20">
        <Link href="/ratgeber" className="text-sm font-semibold text-[#C9A95A]">
          ← Zurück zum Ratgeber
        </Link>

        <h1 className="mt-10 text-4xl font-semibold md:text-5xl">
          LinkedIn Profil optimieren Schweiz: Professioneller auftreten und besser gefunden werden
        </h1>

        <p className="mt-6 text-lg leading-8 text-[#0A1F44]/72">
          Ein professionelles LinkedIn-Profil ist heute ein wichtiger Bestandteil
          der Karrierepositionierung. Gerade in der Schweiz nutzen Recruiter,
          HR-Verantwortliche und Unternehmen LinkedIn, um passende Fach- und
          Führungskräfte zu finden.
        </p>

        <section className="mt-10 space-y-6 leading-8 text-[#0A1F44]/78">
          <h2 className="text-2xl font-semibold text-[#0A1F44]">
            1. Eine klare Headline verwenden
          </h2>
          <p>
            Die Headline sollte nicht nur Ihre aktuelle Position zeigen, sondern
            auch Ihre wichtigsten Kompetenzen und Zielbereiche sichtbar machen.
            Statt einer generischen Berufsbezeichnung wirkt eine präzise
            Positionierung deutlich stärker.
          </p>

          <h2 className="text-2xl font-semibold text-[#0A1F44]">
            2. Das Info-Feld strategisch nutzen
          </h2>
          <p>
            Das Info-Feld ist Ihre professionelle Kurzvorstellung. Es sollte
            erklären, wer Sie sind, welche Erfahrung Sie mitbringen und welchen
            Mehrwert Sie für Unternehmen schaffen. Wichtig ist eine klare,
            glaubwürdige und gut lesbare Sprache.
          </p>

          <h2 className="text-2xl font-semibold text-[#0A1F44]">
            3. Berufserfahrung mit Wirkung darstellen
          </h2>
          <p>
            Auch auf LinkedIn sollten Sie nicht nur Aufgaben aufzählen. Zeigen
            Sie Ergebnisse, Verantwortungsbereiche, Projekte und messbare
            Beiträge. Dadurch wird Ihr Profil für Recruiter relevanter und
            aussagekräftiger.
          </p>

          <h2 className="text-2xl font-semibold text-[#0A1F44]">
            4. Schlüsselbegriffe gezielt integrieren
          </h2>
          <p>
            LinkedIn funktioniert auch wie eine Suchmaschine. Begriffe wie
            Projektleitung, Finance, HR, Engineering, Sales, IT, Controlling oder
            Leadership sollten sinnvoll eingebunden werden, wenn sie zu Ihrem
            Profil und Ihrer Zielrolle passen.
          </p>

          <h2 className="text-2xl font-semibold text-[#0A1F44]">
            5. Profilbild und Banner professionell gestalten
          </h2>
          <p>
            Ein klares Profilbild und ein passender Hintergrund erhöhen den
            professionellen Eindruck. Das Profil sollte optisch ruhig, seriös und
            konsistent wirken.
          </p>
        </section>

        <div className="mt-12 rounded-2xl border border-[#0A1F44]/10 bg-[#FCFCFB] p-7 shadow-sm">
          <h2 className="text-2xl font-semibold">
            Möchten Sie Ihr LinkedIn-Profil professionell optimieren lassen?
          </h2>
          <p className="mt-4 text-[#0A1F44]/72">
            EliteCV unterstützt Fach- und Führungskräfte bei LinkedIn-Optimierung,
            CV-Optimierung und klarer Karrierepositionierung für den Schweizer
            Arbeitsmarkt.
          </p>
          <Link
            href="/#preise"
            className="mt-6 inline-block rounded-full bg-[#0A1F44] px-6 py-3 text-sm font-semibold text-white hover:bg-[#102A5E]"
          >
            Angebote ansehen
          </Link>
        </div>
      </article>
    </main>
  );
}