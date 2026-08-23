import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lebenslauf Schweiz 2026: Vorlage, Aufbau & Beispiele | EliteCV",

  description:
    "Lebenslauf Schweiz 2026: Aufbau, Vorlage, CV-Beispiele, Foto, Länge und ATS. Erfahren Sie, wie Sie einen professionellen Schweizer Lebenslauf erstellen.",

  alternates: {
    canonical: "https://www.elitecv.ch/ratgeber/lebenslauf-schweiz",
  },

  openGraph: {
    title: "Lebenslauf Schweiz 2026: Vorlage, Aufbau & Beispiele",
    description:
      "Der umfassende EliteCV-Ratgeber für einen professionellen Lebenslauf in der Schweiz – mit Aufbau, Beispielen, ATS-Tipps und CV-Vorlagen.",
    url: "https://www.elitecv.ch/ratgeber/lebenslauf-schweiz",
    siteName: "EliteCV",
    locale: "de_CH",
    type: "article",
  },
};

export default function LebenslaufSchweizPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#0A1F44]">
      <article className="mx-auto max-w-5xl px-6 py-16 sm:py-20">

        <Link
          href="/ratgeber"
          className="text-sm font-semibold text-[#8A6A22] hover:underline"
        >
          ← Zurück zum Ratgeber
        </Link>

        {/* HERO */}
        <header className="mt-10">
          <span className="inline-flex rounded-full bg-[#C9A95A]/15 px-4 py-2 text-sm font-semibold text-[#8A6A22]">
            Lebenslauf Schweiz
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Lebenslauf Schweiz 2026: Aufbau, Vorlage und Beispiele
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-[#0A1F44]/75 sm:text-xl">
            Ein professioneller Lebenslauf für die Schweiz sollte übersichtlich,
            präzise und auf die gewünschte Stelle ausgerichtet sein. In diesem
            Ratgeber erfahren Sie, wie ein moderner Schweizer CV aufgebaut wird,
            welche Informationen hineingehören und worauf Recruiter besonders
            achten.
          </p>
        </header>

        {/* INHALT */}
        <section className="mt-16 space-y-12 leading-8 text-[#0A1F44]/78">

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              Was gehört in einen Lebenslauf in der Schweiz?
            </h2>

            <p className="mt-5">
              Ein Schweizer Lebenslauf enthält in der Regel persönliche
              Kontaktdaten, ein professionelles Profil, Berufserfahrung,
              Ausbildung, Weiterbildungen, Sprachkenntnisse sowie relevante
              Fach- und IT-Kompetenzen. Je nach Position können zusätzlich
              Projekte, Führungserfahrung, Zertifikate oder besondere Erfolge
              sinnvoll sein.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              Lebenslauf Schweiz: Der richtige Aufbau
            </h2>

            <p className="mt-5">
              Recruiter sollten die wichtigsten Informationen schnell erfassen
              können. Deshalb empfiehlt sich eine klare Struktur mit einer
              nachvollziehbaren beruflichen Entwicklung.
            </p>

            <div className="mt-6 rounded-2xl border border-[#0A1F44]/10 bg-white p-7">
              <ol className="space-y-3">
                <li>1. Kontaktdaten und persönliche Angaben</li>
                <li>2. Kurzprofil oder professionelle Positionierung</li>
                <li>3. Berufserfahrung</li>
                <li>4. Ausbildung und Weiterbildungen</li>
                <li>5. Fachkenntnisse und relevante Kompetenzen</li>
                <li>6. Sprachkenntnisse und IT-Kenntnisse</li>
                <li>7. Optional: Projekte, Zertifikate und Engagement</li>
              </ol>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              CV oder Lebenslauf – was sagt man in der Schweiz?
            </h2>

            <p className="mt-5">
              In der Schweiz werden sowohl die Begriffe „Lebenslauf“ als auch
              „CV“ verwendet. CV steht für Curriculum Vitae und ist insbesondere
              bei internationalen Unternehmen und englischsprachigen
              Stellenanzeigen verbreitet. Inhaltlich bezeichnen beide Begriffe
              im Bewerbungsalltag meist dasselbe Dokument.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              Wie lang sollte ein Schweizer CV sein?
            </h2>

            <p className="mt-5">
              Für viele Berufstätige sind ein bis zwei Seiten sinnvoll.
              Berufserfahrene Fachkräfte, Führungskräfte oder Personen mit
              umfangreicher Projektverantwortung können zusätzliche relevante
              Informationen benötigen. Entscheidend ist nicht die maximale
              Kürze, sondern eine klare Priorisierung der für die Zielposition
              wichtigen Inhalte.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              Foto im Lebenslauf Schweiz
            </h2>

            <p className="mt-5">
              Ein Bewerbungsfoto ist in der Schweiz nicht zwingend erforderlich,
              wird jedoch weiterhin häufig verwendet. Wenn Sie ein Foto
              integrieren, sollte es professionell, aktuell und zum gewünschten
              beruflichen Auftritt passend sein.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              Berufserfahrung richtig darstellen
            </h2>

            <p className="mt-5">
              Gute Lebensläufe beschreiben nicht nur Tätigkeiten. Besonders
              überzeugend sind konkrete Verantwortlichkeiten, Projekte und
              Ergebnisse. Wo sinnvoll, können messbare Resultate wie
              Kosteneinsparungen, Umsatzsteigerungen, Teamgrössen,
              Budgetverantwortung oder Prozessverbesserungen genannt werden.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              Lebenslauf und ATS
            </h2>

            <p className="mt-5">
              Viele Unternehmen verarbeiten Bewerbungen heute mit digitalen
              Recruiting-Systemen. Deshalb sollte ein CV nicht nur optisch
              überzeugen, sondern auch technisch gut lesbar sein. Klare
              Überschriften, relevante Keywords und eine nachvollziehbare
              Struktur helfen dabei.
            </p>

            <Link
              href="/ratgeber/ats-lebenslauf-schweiz-2026"
              className="mt-5 inline-block font-semibold text-[#8A6A22] hover:underline"
            >
              → ATS Lebenslauf Schweiz 2026
            </Link>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              Lebenslauf für Führungskräfte
            </h2>

            <p className="mt-5">
              Bei Führungskräften stehen strategische Verantwortung,
              Führungserfahrung und Resultate stärker im Mittelpunkt.
              Teamgrössen, Budgets, Transformationen und messbare
              Geschäftsergebnisse können die Positionierung deutlich stärken.
            </p>

            <Link
              href="/ratgeber/executive-cv-schweiz"
              className="mt-5 inline-block font-semibold text-[#8A6A22] hover:underline"
            >
              → Executive CV Schweiz ansehen
            </Link>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              Lebenslauf für Ingenieure und technische Fachkräfte
            </h2>

            <p className="mt-5">
              Bei technischen Profilen sollten Fachkompetenzen, Engineering-
              Tools, Projektverantwortung und konkrete technische Ergebnisse
              schnell sichtbar werden. Ein Ingenieur-CV sollte fachliche Tiefe
              zeigen, ohne durch unnötige Details unübersichtlich zu werden.
            </p>

            <Link
              href="/ratgeber/maschinenbauingenieur-cv-schweiz"
              className="mt-5 inline-block font-semibold text-[#8A6A22] hover:underline"
            >
              → CV-Beispiel Maschinenbauingenieur
            </Link>
          </div>

        </section>

        {/* CV BEISPIELE */}
        <section className="mt-16 rounded-3xl border border-[#0A1F44]/10 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C9A95A]">
            EliteCV Beispiele
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Lebenslauf Beispiele für die Schweiz
          </h2>

          <p className="mt-5 leading-8 text-[#0A1F44]/70">
            Sehen Sie verschiedene CV-Beispiele für Fachkräfte,
            Führungskräfte, Engineering und Human Resources.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/ratgeber/executive-cv-schweiz"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 font-semibold"
            >
              Führungskräfte CV
            </Link>

            <Link
              href="/ratgeber/maschinenbauingenieur-cv-schweiz"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 font-semibold"
            >
              Ingenieur CV
            </Link>

            <Link
              href="/ratgeber/hr-specialist-cv-schweiz"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 font-semibold"
            >
              HR CV
            </Link>

            <Link
              href="/ratgeber/cv-beispiel-operations-manager-schweiz"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 font-semibold"
            >
              Management CV
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 rounded-3xl bg-[#0A1F44] p-8 text-white sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C9A95A]">
            EliteCV
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Lebenslauf für die Schweiz erstellen
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-white/80">
            Erstellen Sie Ihren professionellen CV mit dem EliteCV Generator
            oder lassen Sie Ihren bestehenden Lebenslauf für den Schweizer
            Arbeitsmarkt professionell optimieren.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/cv-generator-schweiz"
              className="rounded-xl bg-[#C9A95A] px-6 py-3 font-semibold text-[#0A1F44]"
            >
              CV erstellen
            </Link>

            <Link
              href="/#preise"
              className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white"
            >
              CV-Optimierung ansehen
            </Link>
          </div>
        </section>

      </article>
    </main>
  );
}