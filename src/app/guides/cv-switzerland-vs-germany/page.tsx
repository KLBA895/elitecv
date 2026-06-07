import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV Switzerland vs Germany | EliteCV",
  description:
    "Learn the key differences between Swiss and German CVs and how to adapt your application for the Swiss job market.",
};

export default function CVSwitzerlandVsGermanyPage() {
  return (
    <main className="min-h-screen bg-white text-[#0A1F44]">
      <article className="mx-auto max-w-4xl px-6 py-20">
        <Link href="/guides" className="text-sm font-semibold text-[#C9A95A]">
          ← Back to Guides
        </Link>

        <h1 className="mt-10 text-4xl font-semibold md:text-5xl">
          CV Switzerland vs Germany: Key Differences
        </h1>

        <p className="mt-6 text-lg leading-8 text-[#0A1F44]/72">
          If you are applying for jobs in Switzerland, it is important to adapt
          your CV to local expectations. While Swiss and German applications are
          similar in many ways, there are several differences that can influence
          how employers perceive your profile.
        </p>

        <section className="mt-10 space-y-6 leading-8 text-[#0A1F44]/78">
          <h2 className="text-2xl font-semibold text-[#0A1F44]">
            1. Swiss CVs are often more concise
          </h2>
          <p>
            Swiss employers generally prefer a clear and structured CV. The most
            relevant information should be visible quickly, without excessive
            explanations or lengthy descriptions.
          </p>

          <h2 className="text-2xl font-semibold text-[#0A1F44]">
            2. Language skills are highly valued
          </h2>
          <p>
            Switzerland is multilingual. Depending on the region and industry,
            German, English, French or Italian language skills may be very
            important. Language levels should be presented clearly and
            consistently.
          </p>

          <h2 className="text-2xl font-semibold text-[#0A1F44]">
            3. Professional experience should be relevant to the Swiss market
          </h2>
          <p>
            International experience is appreciated, but it should be presented
            in a way that is easy for Swiss employers to understand. Focus on
            responsibilities, achievements and measurable results.
          </p>

          <h2 className="text-2xl font-semibold text-[#0A1F44]">
            4. Photo, contact details and structure
          </h2>
          <p>
            A professional photo is still common in many Swiss applications,
            although it is not mandatory. Contact details, LinkedIn profile,
            location and language skills should be easy to find.
          </p>

          <h2 className="text-2xl font-semibold text-[#0A1F44]">
            5. References and certificates matter
          </h2>
          <p>
            Swiss employers often value complete application documents.
            References, certificates and diplomas can play an important role in
            the recruitment process and should be consistent with the CV.
          </p>

          <h2 className="text-2xl font-semibold text-[#0A1F44]">
            6. Final thoughts
          </h2>
          <p>
            A successful Swiss CV is clear, professional and tailored to the
            target role. Candidates moving from Germany or other countries
            should adapt their CV to Swiss standards and employer expectations.
          </p>
        </section>

        <div className="mt-12 rounded-2xl border border-[#0A1F44]/10 bg-[#FCFCFB] p-7 shadow-sm">
          <h2 className="text-2xl font-semibold">
            Applying for jobs in Switzerland?
          </h2>
          <p className="mt-4 text-[#0A1F44]/72">
            EliteCV supports professionals and executives with CV optimization,
            LinkedIn profile optimization and career positioning for the Swiss
            job market.
          </p>

          <Link
            href="/#preise"
            className="mt-6 inline-block rounded-full bg-[#0A1F44] px-6 py-3 text-sm font-semibold text-white hover:bg-[#102A5E]"
          >
            View Services
          </Link>
        </div>
      </article>
    </main>
  );
}