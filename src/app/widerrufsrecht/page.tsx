"use client";

import Link from "next/link";
import { useState } from "react";

export default function WiderrufsrechtPage() {
  const [lang, setLang] = useState<"de" | "en">("de");

  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#0A1F44]">
      <div className="mx-auto w-full max-w-4xl px-6 py-16 sm:py-20">
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
            <header className="mt-12">
              <span className="inline-flex rounded-full bg-[#C9A95A]/15 px-4 py-2 text-sm font-semibold text-[#8A6A22]">
                Rechtliche Informationen
              </span>

              <h1 className="mt-6 text-4xl font-bold tracking-[-0.02em] sm:text-5xl">
                Widerruf & Stornierung
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-[#0A1F44]/70">
                Informationen zur Stornierung von Bestellungen und
                Dienstleistungen bei EliteCV.
              </p>
            </header>

            <section className="mt-10 rounded-3xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm sm:p-9">
              <div className="space-y-9 leading-8 text-[#0A1F44]/80">
                <div>
                  <h2 className="text-xl font-bold text-[#0A1F44]">
                    1. Kein allgemeines gesetzliches Widerrufsrecht
                  </h2>

                  <p className="mt-3">
                    Nach Schweizer Recht besteht bei gewöhnlichen online
                    abgeschlossenen Verträgen grundsätzlich kein allgemeines
                    gesetzliches Widerrufs- oder Rücktrittsrecht.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#0A1F44]">
                    2. Persönliche Dienstleistungen
                  </h2>

                  <p className="mt-3">
                    Bei individuell erbrachten Dienstleistungen wie
                    CV-Optimierung, LinkedIn-Optimierung,
                    Motivationsschreiben, Übersetzungen oder
                    Arbeitszeugnis-Analysen beginnt die Bearbeitung nach
                    erfolgreicher Bestellung und Zahlung.
                  </p>

                  <p className="mt-3">
                    Eine Stornierung kann angefragt werden, solange mit der
                    Bearbeitung noch nicht begonnen wurde. Sobald die
                    individuelle Bearbeitung begonnen hat, besteht grundsätzlich
                    kein Anspruch auf eine vollständige Rückerstattung.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#0A1F44]">
                    3. EliteCV Generator
                  </h2>

                  <p className="mt-3">
                    Bei digitalen Generator-Paketen wird der Zugang nach
                    erfolgreicher Zahlung freigeschaltet beziehungsweise per
                    E-Mail bereitgestellt.
                  </p>

                  <p className="mt-3">
                    Nach Freischaltung oder Übermittlung des persönlichen
                    Zugangscodes ist eine Stornierung grundsätzlich nicht mehr
                    möglich, da die digitale Leistung bereits bereitgestellt
                    wurde.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#0A1F44]">
                    4. Fehlerhafte Bestellung
                  </h2>

                  <p className="mt-3">
                    Falls Sie versehentlich ein falsches Paket bestellt oder
                    eine Bestellung doppelt ausgelöst haben, kontaktieren Sie
                    uns möglichst umgehend. Wir prüfen den Einzelfall und suchen
                    nach einer angemessenen Lösung.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#0A1F44]">
                    5. Mängel oder nicht erbrachte Leistungen
                  </h2>

                  <p className="mt-3">
                    Gesetzliche Ansprüche bei nicht oder mangelhaft erbrachten
                    Leistungen bleiben von diesen Regelungen unberührt.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#0A1F44]">
                    6. Kontakt
                  </h2>

                  <p className="mt-3">
                    Für Fragen zu einer Bestellung oder einer möglichen
                    Stornierung kontaktieren Sie uns bitte unter{" "}
                    <a
                      href="mailto:info@elitecv.ch"
                      className="font-semibold text-[#8A6A22] hover:underline"
                    >
                      info@elitecv.ch
                    </a>
                    .
                  </p>
                </div>
              </div>
            </section>
          </>
        ) : (
          <>
            <header className="mt-12">
              <span className="inline-flex rounded-full bg-[#C9A95A]/15 px-4 py-2 text-sm font-semibold text-[#8A6A22]">
                Legal Information
              </span>

              <h1 className="mt-6 text-4xl font-bold tracking-[-0.02em] sm:text-5xl">
                Cancellation & Withdrawal
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-[#0A1F44]/70">
                Information about cancelling orders and services provided by
                EliteCV.
              </p>
            </header>

            <section className="mt-10 rounded-3xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm sm:p-9">
              <div className="space-y-9 leading-8 text-[#0A1F44]/80">
                <div>
                  <h2 className="text-xl font-bold text-[#0A1F44]">
                    1. No General Statutory Right of Withdrawal
                  </h2>

                  <p className="mt-3">
                    Under Swiss law, ordinary contracts concluded online do not
                    generally include a statutory right to cancel or withdraw
                    simply because the customer has changed their mind.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#0A1F44]">
                    2. Personal Services
                  </h2>

                  <p className="mt-3">
                    Individually provided services such as CV optimization,
                    LinkedIn optimization, cover letters, translations and
                    employment reference analyses begin after successful order
                    and payment.
                  </p>

                  <p className="mt-3">
                    A cancellation may be requested as long as work has not yet
                    started. Once individual work has commenced, there is
                    generally no entitlement to a full refund.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#0A1F44]">
                    3. EliteCV Generator
                  </h2>

                  <p className="mt-3">
                    Digital Generator packages are activated or delivered by
                    email after successful payment.
                  </p>

                  <p className="mt-3">
                    Once access has been activated or the personal access code
                    has been delivered, cancellation is generally no longer
                    possible because the digital service has already been made
                    available.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#0A1F44]">
                    4. Incorrect Orders
                  </h2>

                  <p className="mt-3">
                    If you accidentally selected the wrong package or placed a
                    duplicate order, please contact us as soon as possible. We
                    will review the individual case and seek an appropriate
                    solution.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#0A1F44]">
                    5. Defective or Unprovided Services
                  </h2>

                  <p className="mt-3">
                    Statutory rights relating to services that have not been
                    provided or have been provided defectively remain
                    unaffected.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#0A1F44]">
                    6. Contact
                  </h2>

                  <p className="mt-3">
                    For questions regarding an order or possible cancellation,
                    please contact{" "}
                    <a
                      href="mailto:info@elitecv.ch"
                      className="font-semibold text-[#8A6A22] hover:underline"
                    >
                      info@elitecv.ch
                    </a>
                    .
                  </p>
                </div>
              </div>
            </section>
          </>
        )}

        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm">
          <Link
            href="/agb"
            className="font-semibold text-[#8A6A22] hover:underline"
          >
            {lang === "de" ? "AGB" : "Terms & Conditions"}
          </Link>

          <Link
            href="/datenschutz"
            className="font-semibold text-[#8A6A22] hover:underline"
          >
            {lang === "de" ? "Datenschutz" : "Privacy Policy"}
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