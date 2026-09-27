import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "LinkedIn Profil optimieren Schweiz | Besser gefunden werden | EliteCV",

  description:
    "LinkedIn Profil für die Schweiz optimieren: Headline, Info-Bereich, Berufserfahrung und Keywords verbessern. Mit konkretem Vorher-Nachher-Beispiel.",

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
      "LinkedIn Profil optimieren Schweiz | Besser gefunden werden",

    description:
      "LinkedIn-Optimierung für den Schweizer Arbeitsmarkt: Positionierung, Headline, Keywords und Berufserfahrung mit Vorher-Nachher-Beispiel.",

    url:
      "https://www.elitecv.ch/ratgeber/linkedin-profil-optimieren-schweiz",

    siteName: "EliteCV",
    locale: "de_CH",
    type: "article",
  },
};

export default function LinkedInProfilOptimierenSchweizPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#0A1F44]">
      <article className="mx-auto max-w-4xl px-6 py-16 sm:py-20">

        {/* NAVIGATION + SPRACHE */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/ratgeber"
            className="text-sm font-semibold text-[#8A6A22] hover:underline"
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

        {/* HERO */}
        <header className="mt-10">
          <span className="inline-flex rounded-full bg-[#C9A95A]/15 px-4 py-2 text-sm font-semibold text-[#8A6A22]">
            LinkedIn-Optimierung Schweiz
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
            LinkedIn Profil optimieren Schweiz: Professioneller auftreten und
            besser gefunden werden
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#0A1F44]/75">
            Ein professionelles LinkedIn-Profil unterstützt Ihre berufliche
            Positionierung und ergänzt Ihren Lebenslauf. Headline,
            Info-Bereich, Berufserfahrung und relevante Keywords sollten
            Recruitern schnell zeigen, welche Erfahrung und Kompetenzen Sie
            für Ihre Zielposition mitbringen.
          </p>
        </header>

        {/* INHALT */}
        <section className="mt-14 space-y-12 rounded-3xl bg-white p-7 shadow-sm sm:p-10">
          <div>
            <h2 className="text-3xl font-bold">
              Warum das LinkedIn-Profil für Bewerbungen wichtig ist
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              LinkedIn dient nicht nur zum Aufbau eines beruflichen Netzwerks.
              Recruiter, Personalvermittlungen und Unternehmen können die
              Plattform nutzen, um nach Fach- und Führungskräften mit
              bestimmten Erfahrungen und Kompetenzen zu suchen.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Gleichzeitig prüfen potenzielle Arbeitgeber häufig den digitalen
              beruflichen Auftritt eines Kandidaten. Deshalb sollten
              Lebenslauf und LinkedIn-Profil ein konsistentes und
              professionelles Gesamtbild vermitteln.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              1. LinkedIn Headline gezielt optimieren
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Die Headline sollte nicht nur Ihre aktuelle Berufsbezeichnung
              wiederholen. Sie kann zusätzlich relevante Fachgebiete,
              Kompetenzen oder die gewünschte berufliche Positionierung
              sichtbar machen.
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#0A1F44]/10 bg-[#F7F8FA] p-6">
                <p className="font-semibold">
                  Wenig aussagekräftig
                </p>

                <p className="mt-3 text-[#0A1F44]/70">
                  Project Manager
                </p>
              </div>

              <div className="rounded-2xl border border-[#C9A95A]/30 bg-[#FFFDF7] p-6">
                <p className="font-semibold text-[#8A6A22]">
                  Klarer positioniert
                </p>

                <p className="mt-3 text-[#0A1F44]/75">
                  Senior Project Manager | Digital Transformation | ERP |
                  Process Optimization
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              2. Info-Bereich strategisch nutzen
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Der Info-Bereich ist Ihre professionelle Kurzvorstellung. Er
              sollte verständlich erklären, welche Erfahrung Sie mitbringen,
              worauf Sie spezialisiert sind und welchen beruflichen Mehrwert
              Sie schaffen können.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Statt einer langen Sammlung allgemeiner Eigenschaften ist eine
              klare Positionierung sinnvoll. Fachgebiet, Branchenkenntnisse,
              Führungserfahrung und ausgewählte Erfolge können gezielt
              eingebunden werden.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              3. Berufserfahrung mit Wirkung darstellen
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Auch auf LinkedIn sollten Sie nicht nur Aufgaben aufzählen.
              Zeigen Sie relevante Verantwortungsbereiche, Projekte,
              Veränderungen und messbare Resultate.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Aussagen zu Teamgrössen, Projektumfang, Budget,
              Prozessverbesserungen oder anderen konkreten Ergebnissen können
              Ihre Erfahrung wesentlich greifbarer machen.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              4. LinkedIn Keywords richtig einsetzen
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Relevante Fachbegriffe helfen dabei, Ihr Profil thematisch
              einzuordnen. Je nach Zielposition können beispielsweise
              Projektmanagement, Finance, HR, Engineering, Sales,
              Controlling, SAP, ERP, Leadership oder Prozessoptimierung
              relevant sein.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Verwenden Sie jedoch nur Begriffe, die tatsächlich zu Ihrer
              Erfahrung passen. Keywords sollten natürlich in Headline,
              Info-Bereich, Berufserfahrung und Kompetenzprofil eingebunden
              werden.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              5. Profilbild und Banner professionell gestalten
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Ein professionelles Profilbild unterstützt einen seriösen ersten
              Eindruck. Auch der Hintergrundbereich kann genutzt werden, sollte
              aber ruhig und zur beruflichen Positionierung passend gestaltet
              sein.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Entscheidend ist ein konsistenter Auftritt: Bild, Headline,
              Inhalte und berufliche Ausrichtung sollten zusammenpassen.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              6. LinkedIn-Profil und Lebenslauf aufeinander abstimmen
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Lebenslauf und LinkedIn müssen nicht Wort für Wort identisch
              sein. Funktionen, Arbeitgeber, Zeiträume und die grundsätzliche
              berufliche Positionierung sollten jedoch nachvollziehbar
              zusammenpassen.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Während der CV stärker auf eine konkrete Bewerbung zugeschnitten
              werden kann, bietet LinkedIn mehr Raum für die übergeordnete
              berufliche Positionierung.
            </p>

            <Link
              href="/ratgeber/lebenslauf-optimieren-schweiz"
              className="mt-5 inline-block font-semibold text-[#8A6A22] hover:underline"
            >
              → Lebenslauf für die Schweiz optimieren
            </Link>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              7. Profil regelmässig aktualisieren
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Neue Funktionen, Weiterbildungen, Projekte und relevante
              Kompetenzen sollten zeitnah ergänzt werden. Ein aktuelles Profil
              verhindert Widersprüche zum Lebenslauf und zeigt Ihre heutige
              berufliche Positionierung.
            </p>
          </div>
        </section>

        {/* PRAXISBEISPIEL */}
        <section className="mt-16">
          <div className="border-t border-[#0A1F44]/10 pt-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A95A]">
              Praxisbeispiel
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              LinkedIn-Optimierung: Vorher und Nachher
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Das folgende Beispiel zeigt, wie aus einem wenig klar
              positionierten LinkedIn-Profil ein professioneller und
              zielgerichteter Auftritt entstehen kann. Für das Beispiel
              verwenden wir die fiktive Person Daniel Meier.
            </p>

            <p className="mt-3 text-sm leading-6 text-[#0A1F44]/60">
              Hinweis: Name, Unternehmen und dargestellte Profildaten sind
              fiktiv beziehungsweise anonymisiert und dienen ausschliesslich
              der Veranschaulichung einer möglichen LinkedIn-Optimierung.
            </p>
          </div>

          {/* VORHER */}
          <div className="mt-12">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[#0A1F44] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                Vorher
              </span>

              <h3 className="text-xl font-semibold">
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

          {/* ANALYSE */}
          <div className="mt-14">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[#C9A95A] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                Analyse
              </span>

              <h3 className="text-xl font-semibold">
                Positionierung und Optimierung
              </h3>
            </div>

            <p className="mb-6 leading-7 text-[#0A1F44]/72">
              EliteCV analysiert die berufliche Positionierung, die
              LinkedIn-Headline, den Info-Bereich, relevante Keywords sowie
              die Darstellung der Berufserfahrung.
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

          {/* NACHHER */}
          <div className="mt-14">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[#0A1F44] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                Nachher
              </span>

              <h3 className="text-xl font-semibold">
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

        {/* LINKEDIN ANALYSE & OPTIMIERUNGSBERICHT */}
        <section className="mt-16">
          <div className="border-t border-[#0A1F44]/10 pt-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A95A]">
              EliteCV LinkedIn-Analyse
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              LinkedIn-Profil professionell analysieren lassen
            </h2>

            <p className="mt-5 max-w-3xl leading-8 text-[#0A1F44]/75">
              Eine professionelle LinkedIn-Optimierung geht über einzelne
              Textkorrekturen hinaus. EliteCV analysiert Ihr bestehendes Profil
              strukturiert und zeigt konkret auf, wo Positionierung, Inhalte,
              Keywords und Gesamtauftritt verbessert werden können.
            </p>

            <p className="mt-4 max-w-3xl leading-8 text-[#0A1F44]/75">
              Sie erhalten einen individuellen LinkedIn-Optimierungsbericht mit
              konkreten Empfehlungen und Formulierungsvorschlägen, die Sie
              direkt in Ihrem Profil umsetzen können.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#0A1F44]/10 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold">
                Positionierung &amp; Sichtbarkeit
              </h3>

              <ul className="mt-4 space-y-3 text-sm leading-6 text-[#0A1F44]/72">
                <li>✓ Berufliche Positionierung und Zielprofil</li>
                <li>✓ LinkedIn-Headline und relevante Keywords</li>
                <li>✓ Info-/About-Bereich</li>
                <li>✓ Auffindbarkeit für relevante Suchbegriffe</li>
                <li>✓ Konsistenz zwischen CV und LinkedIn-Profil</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[#0A1F44]/10 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold">
                Inhalt &amp; professioneller Auftritt
              </h3>

              <ul className="mt-4 space-y-3 text-sm leading-6 text-[#0A1F44]/72">
                <li>✓ Berufserfahrung und Darstellung von Erfolgen</li>
                <li>✓ Kompetenzen und Skills</li>
                <li>✓ Profilbild und visueller Gesamteindruck</li>
                <li>✓ LinkedIn-Banner und Positionierung</li>
                <li>✓ Konkrete Optimierungs- und Handlungsempfehlungen</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-[#C9A95A]/35 bg-[#FFFDF7] p-7 shadow-sm sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8A6A22]">
                  Ihr persönlicher Optimierungsbericht
                </p>

                <h3 className="mt-2 text-2xl font-bold text-[#0A1F44]">
                  Konkrete Empfehlungen statt allgemeiner Tipps
                </h3>

                <p className="mt-4 leading-7 text-[#0A1F44]/72">
                  Der Bericht zeigt strukturiert, welche Bereiche Ihres
                  LinkedIn-Profils optimiert werden sollten und enthält
                  konkrete Empfehlungen für Ihre berufliche Positionierung.
                  Der Umfang richtet sich nach Profil, Karrierestufe und
                  individuellem Optimierungsbedarf.
                </p>
              </div>

              <div className="shrink-0 sm:text-right">
                <p className="text-sm font-medium text-[#0A1F44]/60">
                  LinkedIn-Profiloptimierung
                </p>

                <p className="mt-1 text-3xl font-bold text-[#0A1F44]">
                  CHF 99
                </p>

                <Link
                  href="/#preise"
                  className="mt-4 inline-flex rounded-xl bg-[#C9A95A] px-6 py-3 font-semibold text-[#0A1F44] transition hover:bg-[#D6B96E]"
                >
                  LinkedIn-Optimierung anfragen →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* WEITERFÜHRENDE LINKS */}
        <section className="mt-16 rounded-3xl border border-[#0A1F44]/10 bg-white p-7 sm:p-8">
          <h2 className="text-2xl font-bold">
            LinkedIn und CV gemeinsam optimieren
          </h2>

          <p className="mt-4 leading-7 text-[#0A1F44]/70">
            Für eine konsistente Bewerbung sollten CV, LinkedIn-Profil und
            berufliche Positionierung zusammenpassen. Weitere Informationen
            finden Sie in unseren Ratgebern.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/ratgeber/lebenslauf-optimieren-schweiz"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 font-semibold"
            >
              Lebenslauf optimieren
            </Link>

            <Link
              href="/ratgeber/lebenslauf-schweiz"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 font-semibold"
            >
              Lebenslauf Schweiz
            </Link>

            <Link
              href="/ratgeber/ats-lebenslauf-schweiz-2026"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 font-semibold"
            >
              ATS-Lebenslauf
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 rounded-3xl bg-[#0A1F44] p-8 text-white sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C9A95A]">
            EliteCV
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            LinkedIn-Profil professionell optimieren lassen
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-white/80">
            Lassen Sie Ihr LinkedIn-Profil professionell analysieren und
            erhalten Sie konkrete Empfehlungen für Positionierung, Inhalte,
            Keywords und Ihren gesamten beruflichen Auftritt. Ideal als
            Ergänzung zu einem professionell optimierten Lebenslauf.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/#preise"
              className="rounded-xl bg-[#C9A95A] px-6 py-3 font-semibold text-[#0A1F44] transition hover:bg-[#D6B96E]"
            >
              LinkedIn-Optimierung anfragen →
            </Link>

            <Link
              href="/cv-beratung-schweiz"
              className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              CV Beratung Schweiz
            </Link>
          </div>
        </section>

      </article>
    </main>
  );
}