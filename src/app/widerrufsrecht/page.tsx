"use client";

import Link from "next/link";
import { useState } from "react";

export default function WiderrufsrechtPage() {
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
            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.02em]">Widerrufsrecht</h1>
            <div className="mt-8 space-y-6 leading-relaxed text-[#0A1F44]/80">
              <p>
                Da es sich bei den Leistungen von EliteCV um individuell erstellte
                Dienstleistungen handelt, kann das Widerrufsrecht nach Beginn der
                Bearbeitung eingeschränkt oder ausgeschlossen sein.
              </p>

              <p>
                Vor Beginn der Bearbeitung wird der Kunde über den Leistungsumfang
                informiert und bestätigt den Auftrag ausdrücklich.
              </p>

              <p>
                Bei Fragen zum Widerrufsrecht kontaktieren Sie uns bitte unter
                info@elitecv.ch.
              </p>
            </div>
          </>
        ) : (
          <>
            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.02em]">
              Right of Withdrawal
            </h1>

            <div className="mt-8 space-y-6 leading-relaxed text-[#0A1F44]/80">
              <p>
                As EliteCV provides individually customized services, the right
                of withdrawal may be limited or excluded once work has started.
              </p>

              <p>
                Before work begins, the client is informed about the scope of
                services and explicitly confirms the order.
              </p>

              <p>
                For questions regarding withdrawal rights, please contact us at
                info@elitecv.ch.
              </p>
            </div>
          </>
        )}
      </div>
    </main>
  );
}