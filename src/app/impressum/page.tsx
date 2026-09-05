"use client";

import Link from "next/link";
import { useState } from "react";

export default function ImpressumPage() {
  const [lang, setLang] = useState<"de" | "en">("de");

  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#0A1F44]">
      <div className="mx-auto w-full max-w-4xl px-6 py-16 sm:py-20">

        {/* NAVIGATION */}
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="text-sm font-semibold text-[#8A6A22] hover:underline"
          >
            {lang === "de" ? "← Zurück zur Startseite" : "← Back to homepage"}
          </Link>

          <div className="inline-flex rounded-full border border-[#0A1F44]/10 bg-white p-1 shadow-sm">
            <button
              type="button"
              onClick={() => setLang("de")}
              className={`rounded-full px-4 py-2 text-xs font-bold transition ${lang === "de"
                ? "bg-[#0A1F44] text-white"
                : "text-[#0A1F44]/60 hover:text-[#0A1F44]"
                }`}
            >
              DE
            </button>

            <button
              type="button"
              onClick={() => setLang("en")}
              className={`rounded-full px-4 py-2 text-xs font-bold transition ${lang === "en"
                ? "bg-[#0A1F44] text-white"
                : "text-[#0A1F44]/60 hover:text-[#0A1F44]"
                }`}
            >
              EN
            </button>
          </div>
        </div>

        {lang === "de" ? (
          <>
            {/* HERO */}
            <header className="mt-12">
              <span className="inline-flex rounded-full bg-[#C9A95A]/15 px-4 py-2 text-sm font-semibold text-[#8A6A22]">
                Rechtliche Informationen
              </span>

              <h1 className="mt-6 text-4xl font-bold tracking-[-0.02em] sm:text-5xl">
                Impressum
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#0A1F44]/70">
                Angaben zum Anbieter und zur verantwortlichen Person von
                EliteCV.
              </p>
            </header>

            {/* CONTENT */}
            <section className="mt-10 rounded-3xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm sm:p-9">
              <div className="space-y-8 leading-8 text-[#0A1F44]/80">

                <div>
                  <h2 className="text-xl font-bold text-[#0A1F44]">
                    Anbieter
                  </h2>

                  <p className="mt-3">
                    <strong>EliteCV</strong>
                    <br />
                    Inhaber: Klaudio Batinić
                    <br />
                    Schulgutstrasse 1
                    <br />
                    8953 Dietikon
                    <br />
                    Schweiz
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#0A1F44]">
                    Kontakt
                  </h2>

                  <p className="mt-3">
                    E-Mail:{" "}
                    <a
                      href="mailto:info@elitecv.ch"
                      className="font-semibold text-[#8A6A22] hover:underline"
                    >
                      info@elitecv.ch
                    </a>
                    <br />
                    Telefon:{" "}
                    <a
                      href="tel:+41763314624"
                      className="font-semibold text-[#8A6A22] hover:underline"
                    >
                      +41 76 331 46 24
                    </a>
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#0A1F44]">
                    Verantwortlich für den Inhalt
                  </h2>

                  <p className="mt-3">
                    Klaudio Batinić
                    <br />
                    Schulgutstrasse 1
                    <br />
                    8953 Dietikon
                    <br />
                    Schweiz
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#0A1F44]">
                    Online-Angebot
                  </h2>

                  <p className="mt-3">
                    EliteCV bietet digitale Dienstleistungen rund um
                    CV-Optimierung, Bewerbungsunterlagen, LinkedIn-Profile,
                    Karrierepositionierung und den EliteCV CV Generator für den
                    Schweizer Arbeitsmarkt an.
                  </p>
                </div>
              </div>
            </section>
          </>
        ) : (
          <>
            {/* HERO */}
            <header className="mt-12">
              <span className="inline-flex rounded-full bg-[#C9A95A]/15 px-4 py-2 text-sm font-semibold text-[#8A6A22]">
                Legal Information
              </span>

              <h1 className="mt-6 text-4xl font-bold tracking-[-0.02em] sm:text-5xl">
                Imprint
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#0A1F44]/70">
                Information about the provider and the person responsible for
                EliteCV.
              </p>
            </header>

            {/* CONTENT */}
            <section className="mt-10 rounded-3xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm sm:p-9">
              <div className="space-y-8 leading-8 text-[#0A1F44]/80">

                <div>
                  <h2 className="text-xl font-bold text-[#0A1F44]">
                    Provider
                  </h2>

                  <p className="mt-3">
                    <strong>EliteCV</strong>
                    <br />
                    Owner: Klaudio Batinić
                    <br />
                    Schulgutstrasse 1
                    <br />
                    8953 Dietikon
                    <br />
                    Switzerland
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#0A1F44]">
                    Contact
                  </h2>

                  <p className="mt-3">
                    Email:{" "}
                    <a
                      href="mailto:info@elitecv.ch"
                      className="font-semibold text-[#8A6A22] hover:underline"
                    >
                      info@elitecv.ch
                    </a>
                    <br />
                    Phone:{" "}
                    <a
                      href="tel:+41763314624"
                      className="font-semibold text-[#8A6A22] hover:underline"
                    >
                      +41 76 331 46 24
                    </a>
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#0A1F44]">
                    Responsible for content
                  </h2>

                  <p className="mt-3">
                    Klaudio Batinić
                    <br />
                    Schulgutstrasse 1
                    <br />
                    8953 Dietikon
                    <br />
                    Switzerland
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#0A1F44]">
                    Online Services
                  </h2>

                  <p className="mt-3">
                    EliteCV provides digital services relating to CV
                    optimization, application documents, LinkedIn profiles,
                    career positioning and the EliteCV CV Generator for the
                    Swiss job market.
                  </p>
                </div>
              </div>
            </section>
          </>
        )}

        {/* FOOTER LINKS */}
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm">
          <Link
            href="/datenschutz"
            className="font-semibold text-[#8A6A22] hover:underline"
          >
            {lang === "de" ? "Datenschutz" : "Privacy Policy"}
          </Link>

          <Link
            href="/agb"
            className="font-semibold text-[#8A6A22] hover:underline"
          >
            {lang === "de" ? "AGB" : "Terms & Conditions"}
          </Link>

          <Link
            href="/kontakt"
            className="font-semibold text-[#8A6A22] hover:underline"
          >
            {lang === "de" ? "Kontakt" : "Contact"}
          </Link>
        </div>
      </div>
    </main>
  );
}