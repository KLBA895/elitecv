import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "ATS-Lebenslauf Schweiz 2026: Aufbau, Keywords und häufige Fehler | EliteCV",
  description:
    "Erfahren Sie, wie Sie einen ATS-optimierten Lebenslauf für den Schweizer Arbeitsmarkt erstellen. Mit Tipps zu Struktur, Keywords, Layout und KI-Unterstützung.",
  keywords: [
    "ATS Lebenslauf Schweiz",
    "ATS CV Schweiz",
    "Lebenslauf Schweiz 2026",
    "ATS optimierter Lebenslauf",
    "CV Generator Schweiz",
    "Lebenslauf mit KI",
    "Bewerbung Schweiz",
  ],
  alternates: {
    canonical:
      "https://www.elitecv.ch/ratgeber/ats-lebenslauf-schweiz-2026",
  },
  openGraph: {
    title:
      "ATS-Lebenslauf Schweiz 2026 – So überzeugen Sie moderne Bewerbungsportale",
    description:
      "Praktische Tipps für einen klar strukturierten und ATS-optimierten Lebenslauf für den Schweizer Arbeitsmarkt.",
    url: "https://www.elitecv.ch/ratgeber/ats-lebenslauf-schweiz-2026",
    siteName: "EliteCV",
    locale: "de_CH",
    type: "article",
  },
};

const commonErrors = [
  "Komplexe Tabellen, Textfelder oder mehrspaltige Elemente",
  "Wichtige Angaben, die nur als Grafik oder Icon dargestellt werden",
  "Fehlende Schlüsselbegriffe aus der Stellenausschreibung",
  "Uneinheitliche oder unklare Datumsangaben",
  "Unstrukturierte Berufserfahrung ohne klare Aufgaben und Resultate",
  "Unübliche Überschriften, die ein System schlecht zuordnen kann",
  "Zu viele Farben, Schriften oder dekorative Elemente",
  "Nicht eindeutig bezeichnete Kompetenzen und IT-Kenntnisse",
  "Zu lange Fliesstexte ohne übersichtliche Stichpunkte",
  "Unpassende Dateiformate oder fehlerhaft exportierte PDF-Dateien",
];

const atsChecklist = [
  "Klare und bekannte Abschnittsüberschriften verwenden",
  "Berufserfahrung chronologisch und nachvollziehbar darstellen",
  "Unternehmen, Funktion, Ort und Zeitraum eindeutig angeben",
  "Aufgaben und Erfolge in kurzen Stichpunkten formulieren",
  "Relevante Fachbegriffe und Keywords natürlich einbauen",
  "Kompetenzen, IT-Kenntnisse und Sprachen sauber gruppieren",
  "Ein ruhiges, professionelles und gut lesbares Layout wählen",
  "Den Lebenslauf vor dem Versand nochmals als PDF kontrollieren",
];

export default function AtsLebenslaufSchweizPage() {
  return (
    <main className="bg-[#F7F8FA] text-[#0A1F44]">
      <article className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
        <div className="mb-8">
          <Link
            href="/ratgeber"
            className="text-sm font-semibold text-[#8A6A22] hover:underline"
          >
            ← Zurück zum EliteCV-Ratgeber
          </Link>
        </div>

        <header className="rounded-3xl bg-[#0A1F44] px-7 py-10 text-white shadow-sm sm:px-12 sm:py-14">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D4B15A]">
            EliteCV-Ratgeber
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            ATS-Lebenslauf Schweiz 2026
          </h1>

          <p className="mt-4 text-xl font-medium text-white/90">
            So überzeugen Sie moderne Bewerbungsportale und Recruiter
          </p>

          <p className="mt-6 max-w-3xl leading-8 text-white/75">
            Ein moderner Lebenslauf muss nicht nur professionell aussehen.
            Er sollte auch so aufgebaut sein, dass Bewerbungssoftware die
            wichtigsten Informationen zuverlässig erkennen und einordnen kann.
          </p>
        </header>

        <div className="mt-10 space-y-12 rounded-3xl bg-white p-7 shadow-sm sm:p-12">
          <section>
            <h2 className="text-3xl font-bold">
              Was ist ein Applicant Tracking System?
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Ein Applicant Tracking System, kurz ATS, ist eine Software zur
              Verwaltung und strukturierten Verarbeitung von Bewerbungen.
              Unternehmen können damit eingehende Lebensläufe erfassen,
              durchsuchen, vergleichen und bestimmten Stellen zuordnen.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              ATS-Systeme werden insbesondere von grösseren Unternehmen,
              Personalvermittlungen und international tätigen Organisationen
              eingesetzt. Der Lebenslauf sollte deshalb so gestaltet sein,
              dass sowohl die Software als auch der später prüfende Mensch die
              Inhalte schnell verstehen können.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              Warum ein guter CV trotzdem übersehen werden kann
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Ein optisch aufwendig gestalteter Lebenslauf ist nicht
              automatisch ATS-freundlich. Wenn zentrale Angaben in Grafiken,
              ungewöhnlichen Tabellen oder schwer lesbaren Elementen
              untergebracht sind, können Informationen unvollständig
              übernommen werden.
            </p>

            <div className="mt-7 rounded-2xl border border-[#D4B15A]/30 bg-[#FFFDF7] p-6">
              <p className="font-semibold text-[#8A6A22]">
                Wichtig:
              </p>

              <p className="mt-2 leading-7 text-[#0A1F44]/75">
                ATS-Optimierung bedeutet nicht, dass ein Lebenslauf langweilig
                aussehen muss. Entscheidend ist die Kombination aus klarer
                Struktur, professionellem Design und verständlichen Inhalten.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              Die 10 häufigsten ATS-Fehler
            </h2>

            <ol className="mt-6 space-y-4">
              {commonErrors.map((error, index) => (
                <li
                  key={error}
                  className="flex gap-4 rounded-2xl border border-[#0A1F44]/10 p-5"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0A1F44] text-sm font-bold text-white">
                    {index + 1}
                  </span>

                  <span className="pt-1 leading-7 text-[#0A1F44]/75">
                    {error}
                  </span>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              So bauen Sie einen ATS-konformen Lebenslauf auf
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Für den Schweizer Arbeitsmarkt hat sich eine klare und
              nachvollziehbare Struktur bewährt. Die wichtigsten Informationen
              sollten ohne langes Suchen sichtbar sein.
            </p>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              {atsChecklist.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#0A1F44]/10 bg-[#F7F8FA] p-5"
                >
                  <span className="font-bold text-[#8A6A22]">
                    ✓
                  </span>

                  <p className="mt-2 leading-7 text-[#0A1F44]/75">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              Keywords richtig einsetzen
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Schlüsselbegriffe helfen dabei, Erfahrungen und Kompetenzen
              eindeutig einer Position zuzuordnen. Sie sollten relevante
              Begriffe aus der Stellenausschreibung übernehmen, sofern diese
              tatsächlich zu Ihrem Profil passen.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Typische Beispiele sind Projektmanagement, SAP, ERP,
              Business Analysis, Controlling, Lean Management, Führung,
              Microsoft 365, Scrum oder Prozessoptimierung.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Entscheidend ist, dass Keywords nicht wahllos aufgelistet,
              sondern in einen nachvollziehbaren Zusammenhang mit Ihren
              Aufgaben und Erfolgen gebracht werden.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              Aufgaben und Erfolge klar formulieren
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Statt allgemeiner Aussagen wie „Verantwortlich für Projekte“
              sollte der Lebenslauf zeigen, was konkret umgesetzt wurde und
              welchen Nutzen die Arbeit hatte.
            </p>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
                <p className="font-semibold text-red-800">
                  Wenig aussagekräftig
                </p>

                <p className="mt-3 leading-7 text-red-900/75">
                  Verantwortlich für verschiedene Projekte und die
                  Zusammenarbeit mit internen Abteilungen.
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                <p className="font-semibold text-emerald-800">
                  Besser formuliert
                </p>

                <p className="mt-3 leading-7 text-emerald-900/75">
                  Leitung bereichsübergreifender Projekte, Koordination
                  interner Fachstellen und Reduktion der Durchlaufzeit um
                  15 Prozent.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              Welche Rolle spielt künstliche Intelligenz?
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              KI kann dabei helfen, vorhandene Informationen zu strukturieren,
              Formulierungen zu verbessern und relevante Kompetenzen klarer
              darzustellen. Sie ersetzt jedoch nicht die sorgfältige Prüfung
              der Inhalte.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Alle Angaben müssen fachlich korrekt sein und der tatsächlichen
              Berufserfahrung entsprechen. Ein überzeugender Lebenslauf bleibt
              individuell und sollte nicht wie ein allgemeiner KI-Text wirken.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              Wie lang sollte ein Schweizer Lebenslauf sein?
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Für viele Bewerbungen sind ein bis zwei Seiten sinnvoll.
              Berufseinsteiger kommen häufig mit einer Seite aus. Bei
              langjähriger Berufserfahrung können zwei klar strukturierte
              Seiten die bessere Lösung sein.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Entscheidend ist nicht nur die Seitenzahl. Relevanz, Lesbarkeit
              und eine klare Priorisierung der Informationen sind wichtiger
              als möglichst viele Details.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              Häufig gestellte Fragen
            </h2>

            <div className="mt-6 space-y-5">
              <div className="rounded-2xl border border-[#0A1F44]/10 p-6">
                <h3 className="text-xl font-semibold">
                  Können ATS-Systeme PDF-Dateien lesen?
                </h3>

                <p className="mt-3 leading-7 text-[#0A1F44]/75">
                  Viele aktuelle ATS-Systeme können sauber exportierte
                  PDF-Dateien verarbeiten. Der Text sollte jedoch als echter
                  Text vorliegen und nicht lediglich als Bild eingebettet sein.
                </p>
              </div>

              <div className="rounded-2xl border border-[#0A1F44]/10 p-6">
                <h3 className="text-xl font-semibold">
                  Sind Tabellen grundsätzlich verboten?
                </h3>

                <p className="mt-3 leading-7 text-[#0A1F44]/75">
                  Nicht jede Tabelle verursacht Probleme. Komplexe,
                  verschachtelte oder mehrspaltige Strukturen können aber die
                  Erkennung erschweren. Eine klare Anordnung ist meist
                  zuverlässiger.
                </p>
              </div>

              <div className="rounded-2xl border border-[#0A1F44]/10 p-6">
                <h3 className="text-xl font-semibold">
                  Muss jede Bewerbung individuell angepasst werden?
                </h3>

                <p className="mt-3 leading-7 text-[#0A1F44]/75">
                  Die Grundstruktur kann gleich bleiben. Zielposition,
                  Profiltext, relevante Kompetenzen und ausgewählte
                  Schwerpunkte sollten jedoch zur jeweiligen Stelle passen.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-[#0A1F44] p-7 text-white sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#D4B15A]">
              EliteCV Generator
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Einen strukturierten CV schneller erstellen
            </h2>

            <p className="mt-5 leading-8 text-white/75">
              Mit dem EliteCV Generator können Sie Ihren Lebenslauf
              strukturiert und zeitsparend erstellen. Der Generator unterstützt
              Sie mit klar gegliederten Eingabebereichen, modernen
              CV-Layouts und KI-gestützten Formulierungsmöglichkeiten.
            </p>

            <ul className="mt-6 space-y-3 text-white/80">
              <li>✓ ATS-orientierte und klare CV-Struktur</li>
              <li>✓ Professionelle Professional- und Executive-Layouts</li>
              <li>✓ Strukturierte Darstellung von Erfahrung und Erfolgen</li>
              <li>✓ KI-Unterstützung für ausgewählte Formulierungen</li>
              <li>✓ Deutsche und englische Benutzeroberfläche</li>
              <li>✓ Direkter Export als PDF</li>
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/cv-generator"
                className="inline-flex items-center justify-center rounded-xl bg-[#D4B15A] px-6 py-3 font-semibold text-[#0A1F44] transition hover:bg-[#E0C06B]"
              >
                EliteCV Generator öffnen
              </Link>

              <Link
                href="/#pakete"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Pakete ansehen
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              Fazit
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Ein ATS-optimierter Lebenslauf verbindet technische
              Lesbarkeit mit einer überzeugenden Darstellung für Recruiter.
              Eine klare Struktur, passende Keywords, verständliche
              Formulierungen und ein professionelles Layout erhöhen die
              Chance, dass die relevanten Informationen korrekt erkannt
              werden.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Weitere Hinweise finden Sie in unseren Ratgebern zur{" "}
              <Link
                href="/ratgeber/lebenslauf-optimieren-schweiz"
                className="font-semibold text-[#8A6A22] hover:underline"
              >
                Lebenslauf-Optimierung
              </Link>
              , zum{" "}
              <Link
                href="/ratgeber/cv-schweiz-vs-deutschland"
                className="font-semibold text-[#8A6A22] hover:underline"
              >
                Unterschied zwischen CVs in der Schweiz und Deutschland
              </Link>{" "}
              sowie zur{" "}
              <Link
                href="/ratgeber/linkedin-profil-optimieren-schweiz"
                className="font-semibold text-[#8A6A22] hover:underline"
              >
                LinkedIn-Profil-Optimierung
              </Link>
              .
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}