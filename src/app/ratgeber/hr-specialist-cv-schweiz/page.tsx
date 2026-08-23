import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HR Specialist CV Schweiz – Lebenslauf Beispiel | EliteCV",

  description:
    "Professionelles HR Specialist CV Beispiel für die Schweiz. Erfahren Sie, wie HR-Erfahrung, Recruiting, Personalentwicklung und HR-Kompetenzen überzeugend im Lebenslauf dargestellt werden.",

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
    title: "HR Specialist CV Schweiz – Lebenslauf Beispiel",
    description:
      "Modernes CV-Beispiel für HR Specialists und HR Business Partner im Schweizer Arbeitsmarkt.",
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
        alt:
          "HR Specialist CV Schweiz Beispiel – Sarah Keller – EliteCV",
      },
    ],
  },
};

export default function HRSpecialistCVSchweizPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#0A1F44]">
      <article className="mx-auto max-w-6xl px-6 py-16 sm:py-20">

        {/* NAVIGATION */}
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
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A95A]">
            EliteCV Beispiel
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            HR Specialist CV Schweiz: Beispiel für Human Resources
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#0A1F44]/75">
            Ein professioneller HR-Lebenslauf sollte nicht nur administrative
            Tätigkeiten zeigen. Recruiting, Personalentwicklung,
            HR-Projekte, Beratung von Führungskräften und messbare
            Verbesserungen machen sichtbar, welchen Beitrag Sie im
            Human Resources Management leisten.
          </p>
        </header>

        {/* CV-BILD */}
        <section className="mt-14">
          <div className="overflow-hidden rounded-3xl border border-[#0A1F44]/10 bg-white p-4 shadow-xl sm:p-7">
            <Image
              src="/images/ratgeber/hr-specialist-lebenslauf-schweiz-sarah-keller.png"
              alt="HR Specialist CV Schweiz Beispiel Sarah Keller"
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
        <section className="mt-16 space-y-10 leading-8 text-[#0A1F44]/78">

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              Was gehört in einen guten HR-Lebenslauf?
            </h2>

            <p className="mt-5">
              HR-Profile umfassen häufig sehr unterschiedliche Aufgaben.
              Deshalb sollte ein guter CV schnell zeigen, wo Ihre
              Schwerpunkte liegen – beispielsweise Recruiting,
              HR Business Partnering, Personalentwicklung, Arbeitsrecht,
              HR-Projekte oder HR Operations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0A1F44]">
              1. HR-Spezialisierung klar positionieren
            </h2>

            <p className="mt-4">
              Bereits im Profil sollte erkennbar sein, welche HR-Bereiche
              Sie besonders gut abdecken. Begriffe wie Talent Acquisition,
              Recruiting, Learning & Development, Employee Relations oder
              HR Business Partnering helfen Recruitern bei der schnellen
              Einordnung.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0A1F44]">
              2. Ergebnisse statt nur HR-Aufgaben zeigen
            </h2>

            <p className="mt-4">
              Ein überzeugender Lebenslauf zeigt nicht nur, was Sie gemacht
              haben, sondern auch, was dadurch erreicht wurde. Beispiele
              sind kürzere Time-to-Hire, höhere Mitarbeiterbindung,
              erfolgreiche Recruiting-Projekte oder verbesserte
              HR-Prozesse.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0A1F44]">
              3. Recruiting und Talent Management konkret darstellen
            </h2>

            <p className="mt-4">
              Verantwortlichkeiten im gesamten Recruiting-Prozess,
              Active Sourcing, Interviews, Onboarding oder Talent
              Development sollten konkret beschrieben werden. Dadurch
              wird der tatsächliche Umfang Ihrer Erfahrung sichtbar.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0A1F44]">
              4. HR-Systeme und digitale Kompetenzen nennen
            </h2>

            <p className="mt-4">
              Kenntnisse in HR-Systemen und digitalen Tools können für
              viele Stellen entscheidend sein. Dazu gehören beispielsweise
              SAP SuccessFactors, Workday, Personio, Power BI oder
              LinkedIn Recruiter.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0A1F44]">
              5. Schweizer HR-Anforderungen berücksichtigen
            </h2>

            <p className="mt-4">
              Für HR-Positionen in der Schweiz können Kenntnisse des
              Schweizer Arbeitsrechts, Datenschutz, Sozialversicherungen,
              Gesamtarbeitsverträge sowie gute Sprachkenntnisse einen
              wichtigen Unterschied machen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0A1F44]">
              6. ATS-relevante Keywords integrieren
            </h2>

            <p className="mt-4">
              Begriffe aus der Stellenanzeige sollten dort verwendet
              werden, wo sie tatsächlich zu Ihrer Erfahrung passen.
              Dadurch wird der Lebenslauf sowohl für Recruiter als auch
              für digitale Bewerbermanagementsysteme leichter
              einzuordnen.
            </p>
          </div>

        </section>

        {/* INTERNE LINKS */}
        <section className="mt-14 rounded-2xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-semibold">
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
              href="/ratgeber/ats-lebenslauf-schweiz-2026"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 text-sm font-semibold hover:bg-[#EEF1F5]"
            >
              ATS Lebenslauf Schweiz
            </Link>

            <Link
              href="/ratgeber/lebenslauf-optimieren-schweiz"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 text-sm font-semibold hover:bg-[#EEF1F5]"
            >
              Lebenslauf optimieren
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
            Erstellen Sie mit EliteCV einen modernen Lebenslauf für den
            Schweizer Arbeitsmarkt oder lassen Sie Ihren bestehenden CV
            professionell optimieren.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/cv-generator-schweiz"
              className="rounded-full bg-[#C9A95A] px-6 py-3 font-semibold text-[#0A1F44]"
            >
              CV Generator starten
            </Link>

            <Link
              href="/#preise"
              className="rounded-full border border-white/25 px-6 py-3 font-semibold text-white"
            >
              Angebote ansehen
            </Link>
          </div>
        </section>

      </article>
    </main>
  );
}