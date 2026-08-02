"use client";

import Link from "next/link";
import { useState } from "react";

export default function AGBPage() {
  const [lang, setLang] = useState<"de" | "en">("de");

  return (
    <main className="min-h-screen bg-white text-[#0A1F44]">
      <div className="mx-auto w-full max-w-4xl px-6 py-16">
        <div className="mb-8 flex items-center justify-between">
          <Link href="/" className="text-sm text-[#0A1F44]/70 hover:text-[#0A1F44]">
            {lang === "de" ? "Zurück zur Startseite" : "Back to homepage"}
          </Link>

          <div className="rounded-full border border-[#0A1F44]/12 bg-white p-1 text-xs font-semibold">
            <button type="button" onClick={() => setLang("de")} className={`rounded-full px-3 py-1 transition ${lang === "de" ? "bg-[#0A1F44] text-white" : "text-[#0A1F44]/65"}`}>DE</button>
            <button type="button" onClick={() => setLang("en")} className={`rounded-full px-3 py-1 transition ${lang === "en" ? "bg-[#0A1F44] text-white" : "text-[#0A1F44]/65"}`}>EN</button>
          </div>
        </div>

        {lang === "de" ? (
          <>
            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.02em]">AGB</h1>
            <div className="mt-8 space-y-6 leading-relaxed text-[#0A1F44]/80">
              <p>
                Diese Allgemeinen Geschäftsbedingungen (AGB) regeln die Leistungen von EliteCV
                im Bereich Karrierepositionierung, Lebenslauf-Optimierung,
                Bewerbungsunterlagen sowie der Nutzung des EliteCV-Generators.
              </p>

              <p>
                Der Vertrag kommt zustande, sobald eine Bestellung eingeht und diese durch
                EliteCV bestätigt oder die Zahlung erfolgreich abgeschlossen wurde. Der
                Leistungsumfang richtet sich nach dem gewählten Paket und den gebuchten
                Zusatzleistungen.
              </p>

              <p>
                Die Bearbeitung beginnt nach Zahlungseingang. Lieferfristen können je nach
                Auftragsumfang und Auslastung variieren und werden individuell kommuniziert.
              </p>

              <p>
                Jeder Auftrag beinhaltet eine kostenlose Korrekturrunde, sofern diese
                innerhalb von <strong>fünf (5) Kalendertagen</strong> nach Zustellung der
                fertigen Unterlagen per E-Mail angefordert wird.
              </p>

              <p>
                Die Korrekturrunde umfasst kleinere inhaltliche Anpassungen,
                Rechtschreibkorrekturen, sprachliche Optimierungen sowie geringfügige
                Layoutanpassungen auf Grundlage der ursprünglich übermittelten Informationen.
              </p>

              <p>
                Nicht Bestandteil der kostenlosen Korrekturrunde sind nachträglich
                eingereichte Informationen oder Dokumente (z.&nbsp;B. zusätzliche
                Arbeitszeugnisse, neue Berufserfahrungen, weitere Ausbildungen oder neue
                Zielpositionen) sowie umfangreiche inhaltliche Überarbeitungen oder komplette
                Neugestaltungen.
              </p>

              <p>
                Nach Ablauf der Frist von fünf (5) Kalendertagen gilt der Auftrag als
                abgeschlossen. Weitere Anpassungen oder zusätzliche Änderungswünsche können
                als neuer Auftrag oder nach Aufwand verrechnet werden.
              </p>

              <p>
                Zugangscodes für den EliteCV-Generator sind persönlich, nicht übertragbar und
                dürfen nicht an Dritte weitergegeben werden. Ein Missbrauch kann zur
                Sperrung des Zugangs führen.
              </p>

              <p>
                Es gilt Schweizer Recht. Gerichtsstand ist, soweit gesetzlich zulässig,
                Dietikon, Schweiz.
              </p>
            </div>
          </>
        ) : (
          <>
            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.02em]">Terms and Conditions</h1>
            <div className="mt-8 space-y-6 leading-relaxed text-[#0A1F44]/80">
              <p>
                These Terms and Conditions govern the services provided by EliteCV in the
                areas of career positioning, CV optimisation, application documents and the
                use of the EliteCV Generator.
              </p>

              <p>
                A contract is concluded once an order has been placed and confirmed by
                EliteCV or once the payment has been successfully completed. The scope of
                services depends on the selected package and any additional services
                purchased.
              </p>

              <p>
                Work begins after payment has been received. Delivery times may vary
                depending on the scope of the project and current workload and will be
                communicated individually where applicable.
              </p>

              <p>
                Every order includes one complimentary revision round, provided that the
                revision request is submitted by email within <strong>five (5) calendar
                  days</strong> after delivery of the completed documents.
              </p>

              <p>
                The complimentary revision round covers minor content adjustments, spelling
                corrections, language improvements and minor layout changes based on the
                information originally provided by the customer.
              </p>

              <p>
                The complimentary revision does not include information or documents
                submitted after delivery (e.g. additional employment references, new work
                experience, further education or new target positions), nor extensive
                content revisions or complete redesigns.
              </p>

              <p>
                After the five (5) calendar day period has expired, the order is considered
                completed. Any further changes or additional revision requests may be
                charged separately or treated as a new order.
              </p>

              <p>
                Access codes for the EliteCV Generator are personal, non-transferable and
                must not be shared with third parties. Misuse may result in the suspension
                of access.
              </p>

              <p>
                These Terms and Conditions are governed by Swiss law. To the extent
                permitted by law, the place of jurisdiction is Dietikon, Switzerland.
              </p>
            </div>
          </>
        )}
      </div>
    </main>
  );
}