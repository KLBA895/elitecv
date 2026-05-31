"use client";

import Link from "next/link";
import { useState } from "react";

export default function DatenschutzPage() {
  const [lang, setLang] = useState<"de" | "en">("de");

  return (
    <main className="min-h-screen bg-white text-[#0A1F44]">
      <div className="mx-auto w-full max-w-4xl px-6 py-16">
        <div className="mb-8 flex items-center justify-between">
          <Link href="/" className="text-sm text-[#0A1F44]/70 hover:text-[#0A1F44]">
            {lang === "de" ? "Zurück zur Startseite" : "Back to homepage"}
          </Link>

          <div className="rounded-full border border-[#0A1F44]/12 bg-white p-1 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setLang("de")}
              className={`rounded-full px-3 py-1 transition ${
                lang === "de" ? "bg-[#0A1F44] text-white" : "text-[#0A1F44]/65"
              }`}
            >
              DE
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`rounded-full px-3 py-1 transition ${
                lang === "en" ? "bg-[#0A1F44] text-white" : "text-[#0A1F44]/65"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {lang === "de" ? (
          <>
            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.02em]">Datenschutz</h1>
            <div className="mt-8 space-y-6 leading-relaxed text-[#0A1F44]/80">
              <p>
                Wir verarbeiten personenbezogene Daten ausschliesslich zur Bearbeitung von Anfragen
                und zur Leistungserbringung. Dazu gehören insbesondere Name, E-Mail und hochgeladene
                Dokumente.
              </p>
              <p>
                Deine Daten werden vertraulich behandelt und nicht ohne rechtliche Grundlage oder
                ausdrückliche Zustimmung an Dritte weitergegeben.
              </p>
              <p>
                Du kannst jederzeit Auskunft, Berichtigung oder Löschung deiner Daten verlangen.
                Für Datenschutzanfragen: info@elitecv.ch.
              </p>
            </div>
          </>
        ) : (
          <>
            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.02em]">Privacy Policy</h1>
            <div className="mt-8 space-y-6 leading-relaxed text-[#0A1F44]/80">
              <p>
                We process personal data exclusively for handling inquiries and providing our services.
                This includes, in particular, your name, email address and uploaded documents.
              </p>
              <p>
                Your data is treated confidentially and will not be shared with third parties without
                a legal basis or your explicit consent.
              </p>
              <p>
                You may request information, correction or deletion of your data at any time.
                For privacy-related inquiries, please contact: info@elitecv.ch.
              </p>
            </div>
          </>
        )}
      </div>
    </main>
  );
}