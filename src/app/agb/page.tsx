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
              <p>Diese Allgemeinen Geschäftsbedingungen regeln die Leistungen von EliteCV im Bereich Karrierepositionierung, CV-Optimierung und Bewerbungsunterlagen.</p>
              <p>Der Vertrag kommt zustande, sobald eine Anfrage geprüft und schriftlich bestätigt wurde. Preise und Leistungsumfang richten sich nach dem gewählten Paket.</p>
              <p>Die Bearbeitung beginnt nach Zahlungseingang. Lieferfristen können je nach Umfang und Auslastung variieren und werden individuell kommuniziert.</p>
            </div>
          </>
        ) : (
          <>
            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.02em]">Terms and Conditions</h1>
            <div className="mt-8 space-y-6 leading-relaxed text-[#0A1F44]/80">
              <p>These Terms and Conditions govern the services provided by EliteCV in the areas of career positioning, CV optimization and application documents.</p>
              <p>A contract is formed once a request has been reviewed and confirmed in writing. Prices and scope of services depend on the selected package.</p>
              <p>Work begins after payment has been received. Delivery times may vary depending on scope and availability and will be communicated individually.</p>
            </div>
          </>
        )}
      </div>
    </main>
  );
}