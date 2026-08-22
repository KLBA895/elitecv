import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Operations Manager CV Switzerland – Example & Guide",

  description:
    "Professional Operations Manager CV example for Switzerland. Learn how to present leadership, process improvement, transformation, ERP experience and measurable results.",

  alternates: {
    canonical:
      "https://www.elitecv.ch/guides/operations-manager-cv-switzerland",

    languages: {
      "de-CH":
        "https://www.elitecv.ch/ratgeber/cv-beispiel-operations-manager-schweiz",
      en:
        "https://www.elitecv.ch/guides/operations-manager-cv-switzerland",
    },
  },

  openGraph: {
    title: "Operations Manager CV Switzerland – Professional Example",
    description:
      "Professional CV example for Operations Managers and senior leaders in the Swiss job market.",
    url:
      "https://www.elitecv.ch/guides/operations-manager-cv-switzerland",
    siteName: "EliteCV",
    locale: "en_CH",
    type: "article",
    images: [
      {
        url:
          "https://www.elitecv.ch/images/ratgeber/professional-cv-switzerland-michael-steiner.png",
        width: 1600,
        height: 1200,
        alt:
          "Operations Manager CV Switzerland example – Michael Steiner",
      },
    ],
  },
};

export default function OperationsManagerCVSwitzerlandPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#0A1F44]">
      <article className="mx-auto max-w-6xl px-6 py-16 sm:py-20">

        {/* NAVIGATION + LANGUAGE */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/guides"
            className="text-sm font-semibold text-[#8A6A22] hover:underline"
          >
            ← Back to Guides
          </Link>

          <div className="inline-flex rounded-full border border-[#0A1F44]/10 bg-white p-1 shadow-sm">
            <Link
              href="/ratgeber/cv-beispiel-operations-manager-schweiz"
              className="rounded-full px-4 py-2 text-xs font-bold text-[#0A1F44]/60 transition hover:text-[#0A1F44]"
            >
              DE
            </Link>

            <Link
              href="/guides/operations-manager-cv-switzerland"
              className="rounded-full bg-[#0A1F44] px-4 py-2 text-xs font-bold text-white"
            >
              EN
            </Link>
          </div>
        </div>

        {/* HERO */}
        <header className="mt-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A95A]">
            EliteCV Example
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            Operations Manager CV Switzerland: Professional Example
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#0A1F44]/75">
            A strong Operations Manager CV should make leadership,
            operational responsibility and measurable business results easy
            to identify. This example shows how senior operations experience
            can be structured for the Swiss job market.
          </p>
        </header>

        {/* CV IMAGE */}
        <section className="mt-14">
          <div className="overflow-hidden rounded-3xl border border-[#0A1F44]/10 bg-white p-4 shadow-xl sm:p-7">
            <Image
              src="/images/ratgeber/professional-cv-switzerland-michael-steiner.png"
              alt="Operations Manager CV Switzerland example – Michael Steiner"
              width={1600}
              height={1200}
              priority
              className="h-auto w-full rounded-xl object-contain"
            />
          </div>

          <p className="mt-4 text-sm leading-6 text-[#0A1F44]/55">
            Fictional EliteCV example for an experienced Operations Manager
            and senior leader applying in Switzerland.
          </p>
        </section>

        {/* CONTENT */}
        <section className="mt-16 space-y-10 leading-8 text-[#0A1F44]/78">
          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              What makes a strong Operations Manager CV?
            </h2>

            <p className="mt-5">
              Senior operations profiles should combine strategic leadership,
              operational responsibility, transformation experience and clear
              business results. Recruiters should quickly understand the scale
              of your responsibilities and the impact you created.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0A1F44]">
              1. Show leadership responsibility clearly
            </h2>

            <p className="mt-4">
              Team size, budget responsibility, international scope and
              strategic ownership should be stated clearly. This helps
              recruiters understand the level of your previous responsibilities.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0A1F44]">
              2. Highlight measurable business results
            </h2>

            <p className="mt-4">
              Cost reductions, productivity improvements, ERP implementations,
              delivery performance and successful transformation projects
              provide more value than generic responsibility statements.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0A1F44]">
              3. Combine strategic and operational expertise
            </h2>

            <p className="mt-4">
              Operations roles often require a combination of leadership,
              process management, Lean methods, digitalization, ERP knowledge
              and execution capability. A strong CV should reflect this balance.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0A1F44]">
              4. Use an executive-ready structure
            </h2>

            <p className="mt-4">
              A calm visual hierarchy, concise content and clear sections help
              communicate extensive experience without overwhelming the reader.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0A1F44]">
              5. Adapt your CV to the Swiss market
            </h2>

            <p className="mt-4">
              Professional titles, language skills, education and leadership
              experience should be understandable for Swiss employers and
              aligned with the target role.
            </p>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="mt-14 rounded-2xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-semibold">
            More CV Examples
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/en/guides/executive-cv-switzerland"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 text-sm font-semibold hover:bg-[#EEF1F5]"
            >
              Executive CV Switzerland
            </Link>

            <Link
              href="/guides/mechanical-engineer-cv-switzerland"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 text-sm font-semibold hover:bg-[#EEF1F5]"
            >
              Mechanical Engineer CV
            </Link>

            <Link
              href="/guides/hr-specialist-cv-switzerland"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 text-sm font-semibold hover:bg-[#EEF1F5]"
            >
              HR Specialist CV
            </Link>

            <Link
              href="/guides/ats-resume-switzerland-2026"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 text-sm font-semibold hover:bg-[#EEF1F5]"
            >
              ATS Resume Switzerland
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-14 rounded-3xl bg-[#0A1F44] p-8 text-white sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A95A]">
            EliteCV
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Create a professional Operations CV
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-white/80">
            Create your CV with the EliteCV Generator or have your application
            documents professionally optimized for the Swiss job market.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/cv-generator-schweiz"
              className="rounded-full bg-[#C9A95A] px-6 py-3 font-semibold text-[#0A1F44]"
            >
              Start CV Generator
            </Link>

            <Link
              href="/#preise"
              className="rounded-full border border-white/25 px-6 py-3 font-semibold text-white"
            >
              View Services
            </Link>
          </div>
        </section>

      </article>
    </main>
  );
}