import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LinkedIn Profil optimieren Schweiz – besser gefunden werden",

  description:
    "LinkedIn Profil optimieren für die Schweiz: Headline, Info-Bereich, Berufserfahrung und Keywords professionell verbessern. Mit Vorher-Nachher-Beispiel.",

  alternates: {
    canonical:
      "https://www.elitecv.ch/ratgeber/linkedin-profil-optimieren-schweiz",

    languages: {
      "de-CH":
        "https://www.elitecv.ch/ratgeber/linkedin-profil-optimieren-schweiz",
      en:
        "https://www.elitecv.ch/guides/linkedin-profile-optimization-switzerland",
    },
  },

  openGraph: {
    title:
      "LinkedIn Profil optimieren Schweiz – besser gefunden werden",
    description:
      "LinkedIn-Optimierung für den Schweizer Arbeitsmarkt mit konkretem Vorher-Nachher-Beispiel.",
    url:
      "https://www.elitecv.ch/ratgeber/linkedin-profil-optimieren-schweiz",
    type: "article",
  },
};

export default function LinkedInProfilOptimierenSchweizPage() {
  return (
    <main className="min-h-screen bg-white text-[#0A1F44]">
      <article className="mx-auto max-w-4xl px-6 py-20">

        {/* NAVIGATION + SPRACHE */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/ratgeber"
            className="text-sm font-semibold text-[#C9A95A]"
          >
            ← Zurück zum Ratgeber
          </Link>

          <div className="inline-flex rounded-full border border-[#0A1F44]/10 bg-white p-1 shadow-sm">
            <Link
              href="/ratgeber/linkedin-profil-optimieren-schweiz"
              className="rounded-full bg-[#0A1F44] px-4 py-2 text-xs font-bold text-white"
            >
              DE
            </Link>

            <Link
              href="/guides/linkedin-profile-optimization-switzerland"
              className="rounded-full px-4 py-2 text-xs font-bold text-[#0A1F44]/60 transition hover:text-[#0A1F44]"
            >
              EN
            </Link>
          </div>
        </div>

        <h1 className="mt-10 text-4xl font-semibold md:text-5xl">
          LinkedIn Profil optimieren Schweiz: Professioneller auftreten und
          besser gefunden werden
        </h1>

        <p className="mt-6 text-lg leading-8 text-[#0A1F44]/72">
          Ein professionelles LinkedIn-Profil ist heute ein wichtiger
          Bestandteil der Karrierepositionierung. Gerade in der Schweiz nutzen
          Recruiter, HR-Verantwortliche und Unternehmen LinkedIn, um passende
          Fach- und Führungskräfte zu finden.
        </p>

        <section className="mt-10 space-y-6 leading-8 text-[#0A1F44]/78">
          <h2 className="text-2xl font-semibold text-[#0A1F44]">
            1. Eine klare Headline verwenden
          </h2>

          <p>
            Die Headline sollte nicht nur Ihre aktuelle Position zeigen,
            sondern auch Ihre wichtigsten Kompetenzen und Zielbereiche sichtbar
            machen. Statt einer generischen Berufsbezeichnung wirkt eine
            präzise Positionierung deutlich stärker.
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
            Projektleitung, Finance, HR, Engineering, Sales, IT, Controlling
            oder Leadership sollten sinnvoll eingebunden werden, wenn sie zu
            Ihrem Profil und Ihrer Zielrolle passen.
          </p>

          <h2 className="text-2xl font-semibold text-[#0A1F44]">
            5. Profilbild und Banner professionell gestalten
          </h2>

          <p>
            Ein klares Profilbild und ein passender Hintergrund erhöhen den
            professionellen Eindruck. Das Profil sollte optisch ruhig, seriös
            und konsistent wirken.
          </p>
        </section>

        {/* PRAXISBEISPIEL */}
        <section className="mt-16">
          <div className="border-t border-[#0A1F44]/10 pt-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A95A]">
              Praxisbeispiel
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#0A1F44]">
              LinkedIn-Optimierung: Vorher und Nachher
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/78">
              Das folgende Beispiel zeigt, wie aus einem wenig klar
              positionierten LinkedIn-Profil ein professioneller und
              zielgerichteter Auftritt entstehen kann. Für dieses Beispiel
              verwenden wir die fiktive Person Daniel Meier.
            </p>

            <p className="mt-3 text-sm leading-6 text-[#0A1F44]/60">
              Hinweis: Name, Unternehmen und dargestellte Profildaten sind
              fiktiv bzw. anonymisiert und dienen ausschliesslich der
              Veranschaulichung einer möglichen LinkedIn-Optimierung.
            </p>
          </div>

          <div className="mt-12">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[#0A1F44] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                Vorher
              </span>

              <h3 className="text-xl font-semibold text-[#0A1F44]">
                Ausgangssituation
              </h3>
            </div>

            <p className="mb-6 leading-7 text-[#0A1F44]/72">
              Die berufliche Positionierung ist noch wenig eindeutig.
              Headline, Profilbeschreibung und Schlüsselbegriffe vermitteln
              Recruitern noch nicht auf den ersten Blick, welche Kompetenzen
              und Zielbereiche im Mittelpunkt stehen.
            </p>

            <div className="overflow-hidden rounded-2xl border border-[#0A1F44]/10 bg-white shadow-sm">
              <Image
                src="/images/ratgeber/EliteCV_LinkedIn_Optimierung_Beispiel_01_Vorher_Daniel_Meier.png"
                alt="LinkedIn Profil vor der Optimierung – fiktives Beispiel Daniel Meier"
                width={1600}
                height={1200}
                className="h-auto w-full"
              />
            </div>
          </div>

          <div className="mt-14">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[#C9A95A] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                Analyse
              </span>

              <h3 className="text-xl font-semibold text-[#0A1F44]">
                Positionierung und Optimierung
              </h3>
            </div>

            <p className="mb-6 leading-7 text-[#0A1F44]/72">
              EliteCV analysiert die berufliche Positionierung, die
              LinkedIn-Headline, den Info-Bereich, relevante Keywords sowie die
              Darstellung der Berufserfahrung.
            </p>

            <div className="overflow-hidden rounded-2xl border border-[#0A1F44]/10 bg-white shadow-sm">
              <Image
                src="/images/ratgeber/EliteCV_LinkedIn_Optimierung_Beispiel_02_Analyse_Daniel_Meier.png"
                alt="Analyse und Optimierung eines LinkedIn Profils – fiktives EliteCV Beispiel"
                width={1600}
                height={1200}
                className="h-auto w-full"
              />
            </div>
          </div>

          <div className="mt-14">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[#0A1F44] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                Nachher
              </span>

              <h3 className="text-xl font-semibold text-[#0A1F44]">
                Klar positioniertes LinkedIn-Profil
              </h3>
            </div>

            <p className="mb-6 leading-7 text-[#0A1F44]/72">
              Das optimierte Profil kommuniziert Fachgebiet, Kompetenzen und
              berufliche Ausrichtung deutlich schneller. Relevante Keywords
              werden natürlich integriert und die wichtigsten Informationen
              für Recruiter übersichtlich dargestellt.
            </p>

            <div className="overflow-hidden rounded-2xl border border-[#0A1F44]/10 bg-white shadow-sm">
              <Image
                src="/images/ratgeber/EliteCV_LinkedIn_Optimierung_Beispiel_03_Nachher_Daniel_Meier.png"
                alt="LinkedIn Profil nach professioneller Optimierung – fiktives Beispiel Daniel Meier"
                width={1600}
                height={1200}
                className="h-auto w-full"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-16 rounded-2xl border border-[#0A1F44]/10 bg-[#FCFCFB] p-7 shadow-sm">
          <h2 className="text-2xl font-semibold">
            Möchten Sie Ihr LinkedIn-Profil professionell optimieren lassen?
          </h2>

          <p className="mt-4 text-[#0A1F44]/72">
            EliteCV optimiert Ihre Positionierung, Headline,
            Profilbeschreibung, Berufserfahrung und relevanten Keywords für
            einen professionellen Auftritt auf dem Schweizer Arbeitsmarkt.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/#preise"
              className="inline-block rounded-full bg-[#0A1F44] px-6 py-3 text-sm font-semibold text-white hover:bg-[#102A5E]"
            >
              LinkedIn-Optimierung ansehen
            </Link>

            <Link
              href="/ratgeber/lebenslauf-optimieren-schweiz"
              className="inline-block rounded-full border border-[#0A1F44] px-6 py-3 text-sm font-semibold text-[#0A1F44] hover:bg-[#F5F7FA]"
            >
              Lebenslauf optimieren
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}