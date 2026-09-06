import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV Schweiz vs. Deutschland: Die wichtigsten Unterschiede",

  description:
    "CV Schweiz vs. Deutschland: Erfahren Sie die wichtigsten Unterschiede bei Lebenslauf, Foto, Sprache, Referenzen und Bewerbungsunterlagen für den Schweizer Arbeitsmarkt.",

  alternates: {
    canonical:
      "https://www.elitecv.ch/ratgeber/cv-schweiz-vs-deutschland",
    languages: {
      "de-CH":
        "https://www.elitecv.ch/ratgeber/cv-schweiz-vs-deutschland",
      "en-CH":
        "https://www.elitecv.ch/guides/cv-switzerland-vs-germany",
    },
  },

  openGraph: {
    title: "CV Schweiz vs. Deutschland: Die wichtigsten Unterschiede",

    description:
      "Die wichtigsten Unterschiede zwischen einem Schweizer und einem deutschen Lebenslauf – mit praktischen Tipps für Bewerbungen in der Schweiz.",

    url: "https://www.elitecv.ch/ratgeber/cv-schweiz-vs-deutschland",

    siteName: "EliteCV",

    locale: "de_CH",

    type: "article",
  },
};

export default function CVSchweizVsDeutschlandPage() {
  return (
    <main className="min-h-screen bg-white text-[#0A1F44]">
      <article className="mx-auto max-w-5xl px-6 py-20">

        {/* NAVIGATION + LANGUAGE SWITCH */}
        <div className="flex items-center justify-between gap-6">
          <Link
            href="/ratgeber"
            className="text-sm font-semibold text-[#C9A95A] hover:underline"
          >
            ← Zurück zum Ratgeber
          </Link>

          <div className="flex items-center rounded-full border border-[#0A1F44]/10 bg-white p-1 shadow-sm">
            <Link
              href="/ratgeber/cv-schweiz-vs-deutschland"
              className="rounded-full bg-[#0A1F44] px-5 py-2 text-sm font-semibold text-white"
              aria-current="page"
            >
              DE
            </Link>

            <Link
              href="/guides/cv-switzerland-vs-germany"
              className="rounded-full px-5 py-2 text-sm font-semibold text-[#0A1F44]/65 transition hover:bg-[#F7F8FA]"
            >
              EN
            </Link>
          </div>
        </div>

        {/* HERO */}
        <header className="mt-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A95A]">
            Bewerbung Schweiz
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
            CV Schweiz vs. Deutschland: Die wichtigsten Unterschiede
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-[#0A1F44]/72 md:text-xl">
            Wer sich aus Deutschland in der Schweiz bewirbt, kann den bestehenden
            Lebenslauf grundsätzlich weiterverwenden – sollte ihn aber an einige
            typische Erwartungen des Schweizer Arbeitsmarkts anpassen.
          </p>
        </header>

        {/* INTRO */}
        <section className="mt-12 rounded-3xl bg-[#F7F8FA] p-8">
          <h2 className="text-2xl font-bold">
            Schweizer und deutsche CVs sind ähnlich – aber nicht identisch
          </h2>

          <p className="mt-4 leading-8 text-[#0A1F44]/75">
            Aufbau, berufliche Stationen und Qualifikationen unterscheiden sich
            grundsätzlich nicht stark. Unterschiede zeigen sich eher bei der
            Darstellung, bei persönlichen Angaben, Sprachkenntnissen,
            Arbeitszeugnissen und bei der Anpassung an den Schweizer Markt.
          </p>
        </section>

        {/* CONTENT */}
        <section className="mt-14 space-y-12 leading-8 text-[#0A1F44]/78">

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              1. Schweizer CVs sollten klar und kompakt aufgebaut sein
            </h2>

            <p className="mt-5">
              Recruiter möchten die wichtigsten Informationen schnell erfassen
              können. Berufserfahrung, Ausbildung, Kompetenzen und
              Sprachkenntnisse sollten übersichtlich gegliedert und klar
              priorisiert sein.
            </p>

            <p className="mt-4">
              Lange Aufgabenlisten sind meist weniger hilfreich als eine
              kompakte Darstellung relevanter Verantwortungsbereiche und
              Resultate.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              2. Sprachkenntnisse spielen in der Schweiz eine grössere Rolle
            </h2>

            <p className="mt-5">
              Die Schweiz ist mehrsprachig. Je nach Region und Funktion können
              Deutsch, Französisch, Italienisch und Englisch unterschiedlich
              wichtig sein.
            </p>

            <p className="mt-4">
              Sprachkenntnisse sollten deshalb klar und nachvollziehbar
              angegeben werden, beispielsweise mit Bezeichnungen wie
              Muttersprache, fliessend oder guten Kenntnissen.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              3. Berufserfahrung auf den Schweizer Markt ausrichten
            </h2>

            <p className="mt-5">
              Internationale Berufserfahrung wird in der Schweiz geschätzt.
              Entscheidend ist jedoch, dass Tätigkeiten und Verantwortlichkeiten
              auch für Schweizer Recruiter verständlich eingeordnet werden
              können.
            </p>

            <p className="mt-4">
              Besonders relevant sind konkrete Verantwortungsbereiche,
              Projektgrössen, Führungserfahrung und messbare Erfolge.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              4. Foto und persönliche Angaben
            </h2>

            <p className="mt-5">
              Ein professionelles Bewerbungsfoto ist in der Schweiz weiterhin
              verbreitet, aber nicht zwingend erforderlich. Entscheidend ist,
              dass der Lebenslauf insgesamt professionell und konsistent wirkt.
            </p>

            <p className="mt-4">
              Telefonnummer, E-Mail-Adresse, Wohnort und gegebenenfalls das
              LinkedIn-Profil sollten einfach auffindbar sein.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              5. Arbeitszeugnisse und Diplome sind häufig wichtig
            </h2>

            <p className="mt-5">
              In der Schweiz werden vollständige Bewerbungsunterlagen häufig
              geschätzt. Dazu können Arbeitszeugnisse, Ausbildungsnachweise,
              Diplome und weitere relevante Zertifikate gehören.
            </p>

            <p className="mt-4">
              Die Angaben im CV sollten mit diesen Dokumenten konsistent sein
              und sich zeitlich nachvollziehbar ergänzen.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              6. Begriffe und Berufsbezeichnungen anpassen
            </h2>

            <p className="mt-5">
              Einzelne Berufsbezeichnungen, Ausbildungsabschlüsse oder
              organisationsspezifische Begriffe können in Deutschland und der
              Schweiz unterschiedlich verwendet werden.
            </p>

            <p className="mt-4">
              Bei einer Bewerbung in der Schweiz sollte deshalb geprüft werden,
              ob die verwendeten Begriffe für Schweizer Recruiter eindeutig
              verständlich sind.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              7. ATS und Keywords berücksichtigen
            </h2>

            <p className="mt-5">
              Auch bei Schweizer Unternehmen werden digitale
              Bewerbermanagementsysteme eingesetzt. Ein klar strukturierter CV
              und relevante Begriffe aus der Stellenausschreibung können helfen,
              dass das Profil sowohl technisch als auch inhaltlich gut
              eingeordnet wird.
            </p>

            <p className="mt-4">
              Keywords sollten jedoch immer natürlich und passend zur
              tatsächlichen Erfahrung verwendet werden.
            </p>
          </div>
        </section>

        {/* VERGLEICH */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold">
            CV Schweiz und Deutschland im direkten Vergleich
          </h2>

          <div className="mt-8 overflow-hidden rounded-2xl border border-[#0A1F44]/10">
            <div className="grid grid-cols-3 bg-[#0A1F44] text-white">
              <div className="p-4 font-semibold">Thema</div>
              <div className="p-4 font-semibold">Schweiz</div>
              <div className="p-4 font-semibold">Deutschland</div>
            </div>

            {[
              [
                "Bewerbungsfoto",
                "Häufig verwendet, aber freiwillig",
                "Ebenfalls freiwillig",
              ],
              [
                "Sprachen",
                "Oft besonders wichtig",
                "Abhängig von Funktion und Unternehmen",
              ],
              [
                "Arbeitszeugnisse",
                "Häufig relevant",
                "Ebenfalls verbreitet",
              ],
              [
                "CV-Struktur",
                "Klar, kompakt und zielgerichtet",
                "Ähnliche Grundstruktur",
              ],
              [
                "Marktanpassung",
                "Schweizer Begriffe und Anforderungen berücksichtigen",
                "Deutsche Marktstandards",
              ],
            ].map(([topic, swiss, germany]) => (
              <div
                key={topic}
                className="grid grid-cols-3 border-t border-[#0A1F44]/10 bg-white"
              >
                <div className="p-4 font-semibold">{topic}</div>
                <div className="p-4 text-[#0A1F44]/75">{swiss}</div>
                <div className="p-4 text-[#0A1F44]/75">{germany}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FAZIT */}
        <section className="mt-16 rounded-3xl bg-[#F7F8FA] p-8">
          <h2 className="text-3xl font-bold">
            Fazit: Lebenslauf für die Schweiz gezielt anpassen
          </h2>

          <p className="mt-5 leading-8 text-[#0A1F44]/75">
            Ein deutscher CV muss für eine Bewerbung in der Schweiz nicht
            vollständig neu aufgebaut werden. Sinnvoll ist jedoch eine gezielte
            Anpassung an Schweizer Erwartungen, Begriffe, Sprachkenntnisse,
            Dokumente und die konkrete Zielposition.
          </p>
        </section>

        {/* INTERNAL LINKS */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold">
            Weitere Ratgeber für Bewerbungen in der Schweiz
          </h2>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/ratgeber/lebenslauf-schweiz"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 font-semibold transition hover:bg-[#EEF1F5]"
            >
              Lebenslauf Schweiz
            </Link>

            <Link
              href="/ratgeber/lebenslauf-optimieren-schweiz"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 font-semibold transition hover:bg-[#EEF1F5]"
            >
              Lebenslauf optimieren Schweiz
            </Link>

            <Link
              href="/ratgeber/ats-lebenslauf-schweiz-2026"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 font-semibold transition hover:bg-[#EEF1F5]"
            >
              ATS Lebenslauf Schweiz
            </Link>

            <Link
              href="/ratgeber/executive-cv-schweiz"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 font-semibold transition hover:bg-[#EEF1F5]"
            >
              Executive CV Schweiz
            </Link>

            <Link
              href="/cv-beratung-schweiz"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 font-semibold transition hover:bg-[#EEF1F5]"
            >
              CV Beratung Schweiz
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 rounded-3xl bg-[#0A1F44] p-8 text-white md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A95A]">
            EliteCV
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Bewerben Sie sich in der Schweiz?
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-white/80">
            Lassen Sie Ihren bestehenden Lebenslauf professionell für den
            Schweizer Arbeitsmarkt optimieren oder erstellen Sie Ihren CV
            selbst mit dem EliteCV Generator.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/#preise"
              className="rounded-full bg-[#C9A95A] px-7 py-3.5 font-semibold text-[#0A1F44] transition hover:bg-[#D6B96E]"
            >
              Pakete & Preise ansehen
            </Link>

            <Link
              href="/cv-generator"
              className="rounded-full border border-white/25 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              CV Generator starten
            </Link>
          </div>
        </section>

      </article>
    </main>
  );
}