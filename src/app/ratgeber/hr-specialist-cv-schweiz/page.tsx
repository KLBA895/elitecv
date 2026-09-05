import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HR Specialist CV Schweiz | Beispiel & Tipps | EliteCV",

  description:
    "HR Specialist CV Schweiz: Professionelles Lebenslauf-Beispiel mit Tipps zu Recruiting, HR Business Partnering, HR-Systemen, Ergebnissen, Keywords und ATS.",

  alternates: {
    canonical:
      "https://www.elitecv.ch/ratgeber/hr-specialist-cv-schweiz",

    languages: {
      "de-CH":
        "https://www.elitecv.ch/ratgeber/hr-specialist-cv-schweiz",
      en:
        "https://www.elitecv.ch/guides/hr-specialist-cv-switzerland",
    },
  },

  openGraph: {
    title: "HR Specialist CV Schweiz | Beispiel & Tipps",

    description:
      "Professionelles CV-Beispiel für HR Specialists und HR Business Partner im Schweizer Arbeitsmarkt.",

    url:
      "https://www.elitecv.ch/ratgeber/hr-specialist-cv-schweiz",

    siteName: "EliteCV",
    locale: "de_CH",
    type: "article",

    images: [
      {
        url:
          "https://www.elitecv.ch/images/ratgeber/hr-specialist-cv-schweiz-sarah-keller.png",
        width: 1600,
        height: 1200,
        alt: "HR Specialist CV Schweiz Beispiel – Sarah Keller – EliteCV",
      },
    ],
  },
};

export default function HRSpecialistCVSchweizPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#0A1F44]">
      <article className="mx-auto max-w-6xl px-6 py-16 sm:py-20">

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
              href="/ratgeber/hr-specialist-cv-schweiz"
              className="rounded-full bg-[#0A1F44] px-4 py-2 text-xs font-bold text-white"
            >
              DE
            </Link>

            <Link
              href="/guides/hr-specialist-cv-switzerland"
              className="rounded-full px-4 py-2 text-xs font-bold text-[#0A1F44]/60 transition hover:text-[#0A1F44]"
            >
              EN
            </Link>
          </div>
        </div>

        {/* HERO */}
        <header className="mt-10 max-w-4xl">
          <span className="inline-flex rounded-full bg-[#C9A95A]/15 px-4 py-2 text-sm font-semibold text-[#8A6A22]">
            Human Resources
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
            HR Specialist CV Schweiz: Beispiel, Aufbau und Tipps
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#0A1F44]/75">
            Ein professioneller HR-Lebenslauf sollte nicht nur administrative
            Tätigkeiten zeigen. Recruiting, Personalentwicklung, HR Business
            Partnering, HR-Projekte und messbare Verbesserungen machen
            sichtbar, welchen Beitrag Sie im Human Resources Management
            leisten.
          </p>
        </header>

        {/* CV-BILD */}
        <section className="mt-14">
          <div className="overflow-hidden rounded-3xl border border-[#0A1F44]/10 bg-white p-4 shadow-xl sm:p-7">
            <Image
              src="/images/ratgeber/hr-specialist-lebenslauf-schweiz-sarah-keller.png"
              alt="HR Specialist CV Schweiz Beispiel – Sarah Keller"
              width={1600}
              height={1200}
              priority
              className="h-auto w-full rounded-xl object-contain"
            />
          </div>

          <p className="mt-4 text-sm leading-6 text-[#0A1F44]/55">
            Fiktives EliteCV-Beispiel für eine HR Specialist / HR Business
            Partner Position im Schweizer Arbeitsmarkt.
          </p>
        </section>

        {/* INHALT */}
        <section className="mt-16 space-y-12 rounded-3xl bg-white p-7 shadow-sm sm:p-10">

          <div>
            <h2 className="text-3xl font-bold">
              Was gehört in einen guten HR-Lebenslauf?
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              HR-Profile können sehr unterschiedliche Aufgaben umfassen.
              Deshalb sollte ein guter CV schnell zeigen, wo Ihre fachlichen
              Schwerpunkte liegen – beispielsweise Recruiting, HR Business
              Partnering, Personalentwicklung, Arbeitsrecht, HR Operations
              oder HR-Projekte.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Gleichzeitig sollte erkennbar werden, für welche
              Mitarbeitergruppen, Organisationseinheiten oder
              Verantwortungsbereiche Sie tätig waren.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              1. HR-Spezialisierung klar positionieren
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Bereits im Kurzprofil sollte deutlich werden, welche HR-Bereiche
              Sie besonders gut abdecken. Eine präzise Positionierung hilft,
              Ihr Profil schneller einer passenden Funktion zuzuordnen.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "HR Business Partnering",
                "Talent Acquisition",
                "Recruiting",
                "HR Operations",
                "Learning & Development",
                "Employee Relations",
                "Talent Management",
                "HR-Projekte",
                "Arbeitsrecht",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#0A1F44]/10 bg-[#F7F8FA] px-5 py-4 font-semibold"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              2. Ergebnisse statt nur HR-Aufgaben zeigen
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Ein überzeugender HR-CV beschreibt nicht nur Tätigkeiten,
              sondern zeigt auch, welche Verbesserungen oder Ergebnisse
              erreicht wurden.
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#0A1F44]/10 bg-[#F7F8FA] p-6">
                <p className="font-semibold">
                  Allgemein
                </p>

                <p className="mt-3 leading-7 text-[#0A1F44]/70">
                  Verantwortlich für Recruiting und Betreuung des
                  Bewerbungsprozesses.
                </p>
              </div>

              <div className="rounded-2xl border border-[#C9A95A]/30 bg-[#FFFDF7] p-6">
                <p className="font-semibold text-[#8A6A22]">
                  Aussagekräftiger
                </p>

                <p className="mt-3 leading-7 text-[#0A1F44]/75">
                  Betreuung des End-to-End-Recruitings und Verkürzung der
                  durchschnittlichen Time-to-Hire um 20 Prozent.
                </p>
              </div>
            </div>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Weitere mögliche Resultate sind beispielsweise verbesserte
              HR-Prozesse, erfolgreiche Einführung neuer HR-Systeme,
              optimiertes Onboarding oder messbare Verbesserungen in
              Recruiting und Personalentwicklung.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              3. Recruiting und Talent Management konkret darstellen
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Wenn Recruiting zu Ihren Schwerpunkten gehört, sollte der
              tatsächliche Umfang Ihrer Verantwortung sichtbar sein.
              Beschreiben Sie beispielsweise Active Sourcing,
              Bewerberselektion, Interviews, Zusammenarbeit mit
              Führungskräften, Vertragsprozesse oder Onboarding.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Auch die betreuten Berufsgruppen oder Funktionen können relevant
              sein – beispielsweise Engineering, IT, Finance, Sales oder
              Managementpositionen.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              4. HR Business Partnering richtig darstellen
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Bei HR-Business-Partner-Rollen sollte deutlich werden, dass Ihre
              Tätigkeit über administrative HR-Aufgaben hinausgeht.
              Beratung von Führungskräften, Organisationsentwicklung,
              Personalplanung, Change-Prozesse und anspruchsvolle
              Mitarbeiterthemen können wichtige Bestandteile sein.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Wenn möglich, nennen Sie auch die Grösse der betreuten
              Organisation oder die Anzahl Mitarbeitender beziehungsweise
              Führungskräfte in Ihrem Verantwortungsbereich.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              5. HR-Systeme und digitale Kompetenzen nennen
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Kenntnisse in HR-Systemen und digitalen Tools können für viele
              Stellen wichtig sein. Nennen Sie relevante Systeme klar und
              verbinden Sie diese möglichst mit Ihrer praktischen Erfahrung.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "SAP SuccessFactors",
                "Workday",
                "Personio",
                "Power BI",
                "LinkedIn Recruiter",
                "Microsoft 365",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[#F7F8FA] px-5 py-3 text-sm font-semibold"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              6. Schweizer HR-Anforderungen berücksichtigen
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Für HR-Positionen in der Schweiz können Kenntnisse des
              Schweizer Arbeitsrechts, der Sozialversicherungen, des
              Datenschutzes oder von Gesamtarbeitsverträgen relevant sein.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Auch Sprachkenntnisse sind je nach Unternehmen und Region
              wichtig. Deutsch und Englisch werden bei international
              ausgerichteten Unternehmen häufig kombiniert; weitere
              Landessprachen können zusätzliche Vorteile bieten.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              7. Ausbildung und HR-Weiterbildungen sichtbar machen
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Neben Studium oder Grundausbildung können HR-spezifische
              Weiterbildungen eine wichtige Rolle spielen. Platzieren Sie
              relevante Abschlüsse, Zertifikate und Weiterbildungen so, dass
              Recruiter Ihre fachliche Qualifikation schnell einordnen können.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              8. ATS-relevante Keywords integrieren
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Begriffe aus der Stellenanzeige sollten dort verwendet werden,
              wo sie tatsächlich zu Ihrer Erfahrung passen. Das erleichtert
              sowohl Recruitern als auch digitalen Bewerbungsprozessen die
              Einordnung Ihres Profils.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Entscheidend ist nicht die möglichst häufige Wiederholung eines
              Begriffs, sondern dessen sinnvoller Einsatz im beruflichen
              Kontext.
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
              9. HR-CV und LinkedIn-Profil aufeinander abstimmen
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Gerade im HR-Bereich ist ein professioneller LinkedIn-Auftritt
              sinnvoll. Funktionen, Arbeitgeber, Zeiträume und fachliche
              Positionierung sollten mit Ihrem Lebenslauf konsistent sein.
            </p>

            <Link
              href="/ratgeber/linkedin-profil-optimieren-schweiz"
              className="mt-5 inline-block font-semibold text-[#8A6A22] hover:underline"
            >
              → LinkedIn Profil optimieren Schweiz
            </Link>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              10. HR-Lebenslauf auf die Zielposition zuschneiden
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Ein HR Specialist, Recruiter, HR Business Partner und HR Manager
              benötigen unterschiedliche Schwerpunkte im Lebenslauf.
              Priorisieren Sie deshalb jene Erfahrungen, Kompetenzen und
              Resultate, die für die konkrete Zielposition besonders relevant
              sind.
            </p>

            <Link
              href="/ratgeber/lebenslauf-optimieren-schweiz"
              className="mt-5 inline-block font-semibold text-[#8A6A22] hover:underline"
            >
              → Lebenslauf für die Schweiz optimieren
            </Link>
          </div>

        </section>

        {/* WEITERE RATGEBER */}
        <section className="mt-14 rounded-3xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-bold">
            Weitere CV-Beispiele und Ratgeber
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/ratgeber/executive-cv-schweiz"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 text-sm font-semibold hover:bg-[#EEF1F5]"
            >
              Executive CV Schweiz
            </Link>

            <Link
              href="/ratgeber/maschinenbauingenieur-cv-schweiz"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 text-sm font-semibold hover:bg-[#EEF1F5]"
            >
              Maschinenbauingenieur CV
            </Link>

            <Link
              href="/ratgeber/lebenslauf-schweiz"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 text-sm font-semibold hover:bg-[#EEF1F5]"
            >
              Lebenslauf Schweiz
            </Link>

            <Link
              href="/ratgeber/cv-vorlage-schweiz"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 text-sm font-semibold hover:bg-[#EEF1F5]"
            >
              CV Vorlage Schweiz
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-14 rounded-3xl bg-[#0A1F44] p-8 text-white sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A95A]">
            EliteCV
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Professionellen HR-Lebenslauf erstellen
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-white/80">
            Erstellen Sie Ihren Lebenslauf mit dem EliteCV Generator oder
            lassen Sie Ihren bestehenden CV professionell für HR-Positionen
            im Schweizer Arbeitsmarkt optimieren.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/cv-generator"
              className="rounded-xl bg-[#C9A95A] px-6 py-3 font-semibold text-[#0A1F44] transition hover:bg-[#D6B96E]"
            >
              CV Generator starten
            </Link>

            <Link
              href="/cv-beratung-schweiz"
              className="rounded-xl border border-white/25 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              CV professionell optimieren
            </Link>
          </div>
        </section>

      </article>
    </main>
  );
}