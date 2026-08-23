import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV Vorlage Schweiz 2026: Professionelle Lebenslauf Vorlage | EliteCV",

  description:
    "CV Vorlage Schweiz 2026: Aufbau, Beispiele und Tipps für eine professionelle Lebenslauf Vorlage. Schweizer CV erstellen und Vorlage richtig nutzen.",

  alternates: {
    canonical: "https://www.elitecv.ch/ratgeber/cv-vorlage-schweiz",
    languages: {
      "de-CH": "https://www.elitecv.ch/ratgeber/cv-vorlage-schweiz",
      "en": "https://www.elitecv.ch/guides/cv-template-switzerland",
    },
  },

  openGraph: {
    title: "CV Vorlage Schweiz 2026 | EliteCV",
    description:
      "Professionelle CV Vorlage für die Schweiz: Aufbau, Beispiele, ATS-Tipps und moderne Lebenslaufgestaltung.",
    url: "https://www.elitecv.ch/ratgeber/cv-vorlage-schweiz",
    siteName: "EliteCV",
    locale: "de_CH",
    type: "article",
  },
};

export default function CVVorlageSchweizPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#0A1F44]">
      <article className="mx-auto max-w-5xl px-6 py-16 sm:py-20">

        {/* NAVIGATION */}
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/ratgeber"
            className="text-sm font-semibold text-[#8A6A22] hover:underline"
          >
            ← Zurück zum Ratgeber
          </Link>

          <div className="inline-flex rounded-full border border-[#0A1F44]/10 bg-white p-1 shadow-sm">
            <Link
              href="/ratgeber/cv-vorlage-schweiz"
              className="rounded-full bg-[#0A1F44] px-4 py-2 text-xs font-bold text-white"
            >
              DE
            </Link>

            <Link
              href="/guides/cv-template-switzerland"
              className="rounded-full px-4 py-2 text-xs font-bold text-[#0A1F44]/60 transition hover:text-[#0A1F44]"
            >
              EN
            </Link>
          </div>
        </div>

        {/* HERO */}
        <header className="mt-10">
          <span className="inline-flex rounded-full bg-[#C9A95A]/15 px-4 py-2 text-sm font-semibold text-[#8A6A22]">
            CV Vorlage Schweiz
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            CV Vorlage Schweiz 2026: Professionellen Lebenslauf erstellen
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-[#0A1F44]/75 sm:text-xl">
            Eine professionelle CV Vorlage schafft eine klare Grundlage für
            Ihre Bewerbung. Entscheidend ist jedoch nicht nur das Design:
            Struktur, Inhalte, Keywords und die Ausrichtung auf die gewünschte
            Position bestimmen, wie überzeugend Ihr Lebenslauf wirkt.
          </p>
        </header>

        <section className="mt-16 space-y-12 leading-8 text-[#0A1F44]/78">

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              Wie sollte eine CV Vorlage in der Schweiz aussehen?
            </h2>

            <p className="mt-5">
              Eine gute Schweizer CV Vorlage ist übersichtlich, professionell
              und einfach zu erfassen. Recruiter sollten Berufserfahrung,
              Ausbildung und zentrale Kompetenzen schnell erkennen können.
              Ein modernes Layout unterstützt die Inhalte, ohne von ihnen
              abzulenken.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              Aufbau einer professionellen Lebenslauf Vorlage
            </h2>

            <p className="mt-5">
              Für Bewerbungen in der Schweiz hat sich eine klare und
              nachvollziehbare Gliederung bewährt.
            </p>

            <div className="mt-6 rounded-2xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm">
              <ol className="space-y-3">
                <li>1. Name und Kontaktdaten</li>
                <li>2. Professionelles Kurzprofil</li>
                <li>3. Berufserfahrung</li>
                <li>4. Ausbildung und Weiterbildung</li>
                <li>5. Fachliche Kompetenzen</li>
                <li>6. IT- und Sprachkenntnisse</li>
                <li>7. Zertifikate und relevante Projekte</li>
                <li>8. Optional: Interessen und Engagement</li>
              </ol>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              Wie lang sollte ein CV in der Schweiz sein?
            </h2>

            <p className="mt-5">
              Für die meisten Bewerbungen in der Schweiz sind ein bis zwei
              Seiten ideal. Berufseinsteiger können ihren Lebenslauf häufig
              auf einer Seite übersichtlich darstellen. Bei Berufserfahrenen,
              Spezialisten und Führungskräften sind zwei Seiten in der Regel
              sinnvoll, wenn die zusätzlichen Informationen für die
              angestrebte Position relevant sind.
            </p>

            <p className="mt-5">
              Entscheidend ist nicht, möglichst viele Informationen
              unterzubringen. Der CV sollte sich auf relevante Erfahrung,
              Kompetenzen, Verantwortlichkeiten und Resultate konzentrieren.
              Lange Aufgabenlisten oder weit zurückliegende, für die
              Zielposition wenig relevante Tätigkeiten können entsprechend
              gekürzt werden.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              CV Vorlage oder individueller Lebenslauf?
            </h2>

            <p className="mt-5">
              Eine Vorlage sollte immer nur die Grundlage bilden. Ein guter CV
              wird auf die gewünschte Stelle angepasst. Besonders das
              Kurzprofil, die hervorgehobenen Kompetenzen und die Beschreibung
              der Berufserfahrung sollten zur Zielposition passen.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              Moderne CV Vorlage für die Schweiz
            </h2>

            <p className="mt-5">
              Moderne Lebensläufe kombinieren eine professionelle Gestaltung
              mit klaren Informationshierarchien. Farben, Icons oder grafische
              Elemente können eingesetzt werden, sollten jedoch die Lesbarkeit
              nicht beeinträchtigen.
            </p>

            <p className="mt-5">
              Besonders wichtig bleibt, dass relevante Informationen auch als
              Text vorhanden sind und nicht ausschliesslich über grafische
              Elemente vermittelt werden.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              ATS-optimierte CV Vorlage
            </h2>

            <p className="mt-5">
              Bewerbungsmanagementsysteme können Lebensläufe automatisiert
              verarbeiten. Eine ATS-freundliche CV Vorlage verwendet deshalb
              verständliche Überschriften, eine nachvollziehbare Struktur und
              relevante Begriffe aus der Stellenbeschreibung.
            </p>

            <Link
              href="/ratgeber/ats-lebenslauf-schweiz-2026"
              className="mt-5 inline-block font-semibold text-[#8A6A22] hover:underline"
            >
              → Mehr über ATS Lebensläufe erfahren
            </Link>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              CV Vorlage für Berufserfahrene
            </h2>

            <p className="mt-5">
              Bei Berufserfahrenen sollte die relevante Berufspraxis klar im
              Vordergrund stehen. Statt jede Tätigkeit gleich ausführlich
              darzustellen, sollten aktuelle und für die Zielposition wichtige
              Erfahrungen priorisiert werden.
            </p>

            <p className="mt-5">
              Auf zwei Seiten lassen sich relevante Berufsstationen,
              Verantwortlichkeiten, Projekte und messbare Erfolge in der Regel
              gut darstellen. Dabei sollte jede Information einen klaren Bezug
              zur angestrebten Position haben.
            </p>

            <p className="mt-5">
              Mit dem{" "}
              <Link
                href="/cv-generator-schweiz"
                className="font-semibold text-[#8A6A22] hover:underline"
              >
                EliteCV CV Generator Schweiz
              </Link>{" "}
              können Sie Ihren Lebenslauf strukturiert erstellen und zwischen
              professionellen Professional- und Executive-Layouts wählen.
              Die exklusiven EliteCV Designs sind Bestandteil des Generators
              und stehen nicht als kostenlose CV Vorlagen zum Download zur
              Verfügung.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              CV Vorlage für Führungskräfte
            </h2>

            <p className="mt-5">
              Führungskräfte benötigen häufig eine andere Gewichtung.
              Strategische Verantwortung, Führungsspanne, Budget,
              Transformationen und messbare Resultate sollten deutlich
              sichtbar sein.
            </p>

            <p className="mt-5">
              Für Senior Manager und Executive-Positionen bietet sich ein
              hochwertiges, ruhiges Layout an, das strategische Erfahrung und
              Resultate in den Vordergrund stellt.
            </p>

            <Link
              href="/ratgeber/executive-cv-schweiz"
              className="mt-5 inline-block font-semibold text-[#8A6A22] hover:underline"
            >
              → Executive CV Schweiz Beispiel ansehen
            </Link>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              CV Vorlage für Ingenieure
            </h2>

            <p className="mt-5">
              Ingenieure und technische Fachkräfte sollten relevante
              Technologien, Engineering-Tools, Projekte und technische
              Kompetenzen klar darstellen. Gleichzeitig sollte der Lebenslauf
              auch für HR und nichttechnische Entscheidungsträger verständlich
              bleiben.
            </p>

            <Link
              href="/ratgeber/maschinenbauingenieur-cv-schweiz"
              className="mt-5 inline-block font-semibold text-[#8A6A22] hover:underline"
            >
              → CV Beispiel Maschinenbauingenieur
            </Link>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              Häufige Fehler bei CV Vorlagen
            </h2>

            <div className="mt-6 rounded-2xl border border-[#0A1F44]/10 bg-white p-7">
              <ul className="space-y-3">
                <li>• Zu viele grafische Elemente</li>
                <li>• Zu kleine Schrift und überladene Seiten</li>
                <li>• Allgemeine statt positionsbezogene Inhalte</li>
                <li>• Reine Aufgabenlisten ohne Ergebnisse</li>
                <li>• Fehlende relevante Keywords</li>
                <li>• Unübersichtliche Berufserfahrung</li>
                <li>• Zu viele unwichtige Informationen</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              Sind die EliteCV Vorlagen kostenlos verfügbar?
            </h2>

            <p className="mt-5">
              Die auf EliteCV gezeigten Professional- und Executive-Designs
              sind exklusive EliteCV Layouts und werden nicht als kostenlose
              Word- oder PDF-Vorlagen zum Download angeboten. Sie können die
              Designs im EliteCV Generator für die Erstellung Ihres
              professionellen Lebenslaufs verwenden.
            </p>

            <Link
              href="/cv-generator-schweiz"
              className="mt-5 inline-block font-semibold text-[#8A6A22] hover:underline"
            >
              → EliteCV CV Generator Schweiz
            </Link>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              CV Vorlage Schweiz: Beispiele ansehen
            </h2>

            <p className="mt-5">
              EliteCV zeigt verschiedene Lebenslauf Beispiele für den
              Schweizer Arbeitsmarkt – von Fachkräften über Engineering und
              Human Resources bis zu Management- und C-Level-Profilen. Die
              Beispiele zeigen, wie unterschiedliche Karriereprofile
              professionell strukturiert und dargestellt werden können.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/ratgeber/executive-cv-schweiz"
                className="rounded-full bg-white px-5 py-3 font-semibold shadow-sm"
              >
                Führungskräfte CV
              </Link>

              <Link
                href="/ratgeber/cv-beispiel-operations-manager-schweiz"
                className="rounded-full bg-white px-5 py-3 font-semibold shadow-sm"
              >
                Management CV
              </Link>

              <Link
                href="/ratgeber/maschinenbauingenieur-cv-schweiz"
                className="rounded-full bg-white px-5 py-3 font-semibold shadow-sm"
              >
                Ingenieur CV
              </Link>

              <Link
                href="/ratgeber/hr-specialist-cv-schweiz"
                className="rounded-full bg-white px-5 py-3 font-semibold shadow-sm"
              >
                HR CV
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              Lebenslauf Schweiz: Weitere Tipps
            </h2>

            <p className="mt-5">
              Neben der passenden Vorlage sind Inhalt, Aufbau und
              Positionierung entscheidend. Unser ausführlicher Ratgeber zeigt,
              wie Sie Ihren Lebenslauf für den Schweizer Arbeitsmarkt
              strukturieren.
            </p>

            <Link
              href="/ratgeber/lebenslauf-schweiz"
              className="mt-5 inline-block font-semibold text-[#8A6A22] hover:underline"
            >
              → Lebenslauf Schweiz: Aufbau, Vorlage und Beispiele
            </Link>
          </div>

        </section>

        {/* CTA */}
        <section className="mt-16 rounded-3xl bg-[#0A1F44] p-8 text-white sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C9A95A]">
            EliteCV Generator
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Eigenen CV für die Schweiz erstellen
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-white/80">
            Nutzen Sie den EliteCV Generator, um Ihren Lebenslauf mit einer
            professionellen Struktur und modernen Professional- oder
            Executive-Layouts zu erstellen. Alternativ können Sie Ihren
            bestehenden Lebenslauf professionell optimieren lassen.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/cv-generator-schweiz"
              className="rounded-xl bg-[#C9A95A] px-6 py-3 font-semibold text-[#0A1F44] transition hover:bg-[#D6B96E]"
            >
              CV erstellen
            </Link>

            <Link
              href="/cv-beratung-schweiz"
              className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              CV Beratung & Optimierung
            </Link>
          </div>
        </section>

      </article>
    </main>
  );
}