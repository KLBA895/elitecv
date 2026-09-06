import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Lebenslauf optimieren Schweiz | CV professionell verbessern | EliteCV",

  description:
    "Lebenslauf für die Schweiz optimieren: Verbessern Sie Struktur, Berufserfahrung, Keywords, ATS-Tauglichkeit und Positionierung Ihres CV gezielt.",

  alternates: {
    canonical:
      "https://www.elitecv.ch/ratgeber/lebenslauf-optimieren-schweiz",

    languages: {
      "de-CH":
        "https://www.elitecv.ch/ratgeber/lebenslauf-optimieren-schweiz",
      "en-CH":
        "https://www.elitecv.ch/guides/cv-optimization-switzerland",
    },
  },

  openGraph: {
    title:
      "Lebenslauf optimieren Schweiz | CV professionell verbessern",

    description:
      "Praktische Tipps zur CV-Optimierung für den Schweizer Arbeitsmarkt: Struktur, ATS, Berufserfahrung, Keywords und Positionierung.",

    url:
      "https://www.elitecv.ch/ratgeber/lebenslauf-optimieren-schweiz",

    siteName: "EliteCV",
    locale: "de_CH",
    type: "article",
  },
};

export default function LebenslaufOptimierenSchweizPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#0A1F44]">
      <article className="mx-auto max-w-4xl px-6 py-16 sm:py-20">

        {/* NAVIGATION + SPRACHWECHSEL */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/ratgeber"
            className="text-sm font-semibold text-[#8A6A22] hover:underline"
          >
            ← Zurück zum Ratgeber
          </Link>

          <div className="inline-flex rounded-full border border-[#0A1F44]/10 bg-white p-1 shadow-sm">
            <Link
              href="/ratgeber/lebenslauf-optimieren-schweiz"
              className="rounded-full bg-[#0A1F44] px-4 py-2 text-xs font-bold text-white"
              aria-current="page"
            >
              DE
            </Link>

            <Link
              href="/guides/cv-optimization-switzerland"
              className="rounded-full px-4 py-2 text-xs font-bold text-[#0A1F44]/60 transition hover:text-[#0A1F44]"
            >
              EN
            </Link>
          </div>
        </div>

        {/* HERO */}
        <header className="mt-10">
          <span className="inline-flex rounded-full bg-[#C9A95A]/15 px-4 py-2 text-sm font-semibold text-[#8A6A22]">
            CV-Optimierung Schweiz
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
            Lebenslauf optimieren Schweiz: CV gezielt verbessern
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#0A1F44]/75">
            Ein professioneller Lebenslauf ist mehr als eine Auflistung Ihrer
            bisherigen Stationen. Für Bewerbungen in der Schweiz zählen eine
            klare Positionierung, relevante Berufserfahrung, überzeugende
            Resultate und eine Struktur, die sowohl Recruiter als auch digitale
            Bewerbungsprozesse schnell erfassen können.
          </p>
        </header>

        {/* INHALT */}
        <section className="mt-14 space-y-12 rounded-3xl bg-white p-7 shadow-sm sm:p-10">

          <div>
            <h2 className="text-3xl font-bold">
              1. Lebenslauf klar strukturieren
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Viele Lebensläufe enthalten zu viele Details und zu wenig
              Priorisierung. Recruiter sollten schnell erkennen können, welche
              berufliche Erfahrung Sie mitbringen, welche Kompetenzen für die
              Zielposition relevant sind und welchen Mehrwert Sie bieten.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Verwenden Sie deshalb nachvollziehbare Abschnitte für Profil,
              Berufserfahrung, Ausbildung, Kompetenzen, Sprachen und relevante
              Zusatzqualifikationen.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              2. Berufserfahrung mit Ergebnissen verbinden
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Ein guter CV beschreibt nicht nur Aufgaben. Besonders
              überzeugend sind konkrete Verantwortlichkeiten, Projekte und
              messbare Resultate.
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#0A1F44]/10 bg-[#F7F8FA] p-6">
                <p className="font-semibold text-[#0A1F44]">
                  Weniger überzeugend
                </p>

                <p className="mt-3 leading-7 text-[#0A1F44]/70">
                  Verantwortlich für Projekte und interne Prozessoptimierung.
                </p>
              </div>

              <div className="rounded-2xl border border-[#C9A95A]/30 bg-[#FFFDF7] p-6">
                <p className="font-semibold text-[#8A6A22]">
                  Aussagekräftiger
                </p>

                <p className="mt-3 leading-7 text-[#0A1F44]/75">
                  Leitung bereichsübergreifender Projekte und Reduktion der
                  Durchlaufzeit um 15 Prozent durch optimierte Abläufe.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              3. Kurzprofil auf die Zielposition ausrichten
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Das Kurzprofil sollte in wenigen Sätzen zeigen, welche
              Berufserfahrung, Spezialisierung und relevanten Stärken Sie
              mitbringen. Allgemeine Aussagen wie „motiviert“ oder
              „teamfähig“ helfen wenig, wenn sie nicht mit Ihrem beruflichen
              Profil verbunden werden.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Besonders bei Fach- und Führungskräften kann eine klare
              Positionierung entscheidend sein: Funktion, Branchenkenntnis,
              Führungserfahrung, Fachkompetenzen und zentrale Resultate sollten
              schnell erkennbar werden.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              4. Schweizer Standards berücksichtigen
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Für Bewerbungen in der Schweiz sollte der CV übersichtlich,
              seriös und nachvollziehbar aufgebaut sein. Kontaktdaten,
              Berufserfahrung, Ausbildung, Sprachkenntnisse und relevante
              Kompetenzen sollten klar dargestellt werden.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Ein Bewerbungsfoto wird in der Schweiz weiterhin häufig
              verwendet, ist aber nicht zwingend erforderlich. Wenn Sie ein
              Foto einsetzen, sollte es professionell und aktuell sein.
            </p>

            <Link
              href="/ratgeber/lebenslauf-schweiz"
              className="mt-5 inline-block font-semibold text-[#8A6A22] hover:underline"
            >
              → Lebenslauf Schweiz: Aufbau und Beispiele
            </Link>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              5. Kompetenzen gezielt auswählen
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Ein Lebenslauf sollte nicht jede denkbare Kompetenz aufführen.
              Priorisieren Sie Fachkenntnisse, Tools, Methoden und
              Führungskompetenzen, die einen direkten Bezug zur gewünschten
              Position haben.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Bei technischen Profilen können beispielsweise CAD, SAP, ERP,
              Projektmanagement oder Prozessoptimierung relevant sein. Bei
              Managementpositionen stehen häufig Führung, Budgetverantwortung,
              Transformation und strategische Entwicklung stärker im Fokus.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              6. Keywords aus der Stellenanzeige verwenden
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Prüfen Sie die Stellenanzeige auf wiederkehrende Fachbegriffe,
              Anforderungen und Kompetenzen. Relevante Begriffe sollten im
              Lebenslauf vorkommen, wenn sie tatsächlich zu Ihrer Erfahrung
              passen.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Keywords sollten nicht wahllos eingefügt werden. Besonders
              wirkungsvoll sind sie dort, wo sie mit tatsächlicher Erfahrung,
              Projekten oder Ergebnissen verbunden werden.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              7. Lebenslauf für ATS optimieren
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Viele Unternehmen nutzen Bewerbungs- und Recruiting-Systeme zur
              Verarbeitung von Lebensläufen. Deshalb sollten wichtige
              Informationen als echter Text vorhanden und eindeutig
              strukturiert sein.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Klare Überschriften, nachvollziehbare Datumsangaben, relevante
              Keywords und eine übersichtliche Berufserfahrung verbessern
              sowohl die technische Lesbarkeit als auch die Orientierung für
              Recruiter.
            </p>

            <Link
              href="/ratgeber/ats-lebenslauf-schweiz-2026"
              className="mt-5 inline-block font-semibold text-[#8A6A22] hover:underline"
            >
              → ATS-Lebenslauf Schweiz 2026
            </Link>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              8. Professionelle Sprache statt Standardfloskeln
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Formulierungen sollten klar, aktiv und glaubwürdig sein.
              Vermeiden Sie unnötig komplizierte Sätze und allgemeine
              Selbstbeschreibungen ohne konkreten Bezug zu Ihrer Erfahrung.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Kurze, präzise Aussagen zu Verantwortlichkeiten und Resultaten
              sind häufig wirkungsvoller als lange Aufgabenbeschreibungen.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              9. Design und Inhalt müssen zusammenpassen
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Ein modernes Layout kann die Wirkung des Lebenslaufs
              unterstützen. Das Design sollte jedoch immer der Lesbarkeit und
              der beruflichen Positionierung dienen.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Für Fachkräfte eignet sich häufig ein klares Professional-Layout.
              Bei Führungskräften kann ein ruhigeres Executive-Design
              strategische Verantwortung und Ergebnisse stärker hervorheben.
            </p>

            <Link
              href="/ratgeber/cv-vorlage-schweiz"
              className="mt-5 inline-block font-semibold text-[#8A6A22] hover:underline"
            >
              → CV Vorlage Schweiz ansehen
            </Link>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              10. Lebenslauf vor dem Versand kontrollieren
            </h2>

            <div className="mt-6 rounded-2xl border border-[#0A1F44]/10 bg-[#F7F8FA] p-6">
              <ul className="space-y-3 text-[#0A1F44]/75">
                <li>✓ Stimmen Kontaktdaten und Zeitangaben?</li>
                <li>✓ Ist die Zielposition schnell erkennbar?</li>
                <li>✓ Sind relevante Kompetenzen hervorgehoben?</li>
                <li>✓ Enthält die Berufserfahrung konkrete Resultate?</li>
                <li>✓ Sind wichtige Keywords vorhanden?</li>
                <li>✓ Ist das Layout übersichtlich und gut lesbar?</li>
                <li>✓ Wurde das finale PDF nochmals geprüft?</li>
              </ul>
            </div>
          </div>

          {/* EXECUTIVE */}
          <div>
            <h2 className="text-3xl font-bold">
              Lebenslauf von Führungskräften optimieren
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Bei Führungskräften sollte die Optimierung über klassische
              Aufgabenbeschreibungen hinausgehen. Strategische Verantwortung,
              Führungsspanne, Budget, Transformationen und messbare
              Geschäftsergebnisse sind für die Positionierung besonders
              wichtig.
            </p>

            <Link
              href="/ratgeber/executive-cv-schweiz"
              className="mt-5 inline-block font-semibold text-[#8A6A22] hover:underline"
            >
              → Executive CV Schweiz: Beispiel und Tipps
            </Link>
          </div>

        </section>

        {/* CTA */}
        <section className="mt-14 rounded-3xl bg-[#0A1F44] p-8 text-white sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C9A95A]">
            EliteCV
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Möchten Sie Ihren Lebenslauf professionell optimieren?
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-white/80">
            Erstellen Sie Ihren CV mit dem EliteCV Generator selbst oder
            lassen Sie Ihren bestehenden Lebenslauf professionell für den
            Schweizer Arbeitsmarkt optimieren und auf Ihre Zielposition
            ausrichten.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/cv-generator"
              className="rounded-xl bg-[#C9A95A] px-6 py-3 font-semibold text-[#0A1F44] transition hover:bg-[#D6B96E]"
            >
              CV Generator starten
            </Link>

            <Link
              href="/#preise"
              className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Pakete & Preise ansehen
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