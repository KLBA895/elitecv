"use client";

import type { AtsScore as AtsScoreType } from "./types";

type Props = {
  score: AtsScoreType;
};

const rows = [
  ["ats", "ATS Score"],
  ["structure", "Struktur"],
  ["professionalism", "Professionalität"],
  ["persuasion", "Überzeugungskraft"],
  ["grammar", "Grammatik"],
] as const;

export function AtsScore({ score }: Props) {
  return (
    <section className="rounded-2xl border border-[#0A1F44]/10 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-semibold text-[#0A1F44]">
        KI-Qualitätsprüfung
      </h2>

      <p className="mt-2 text-sm text-[#0A1F44]/65">
        Erste Einschätzung zur Struktur, Wirkung und ATS-Tauglichkeit.
      </p>

      <div className="mt-6 space-y-4">
        {rows.map(([key, label]) => (
          <div key={key}>
            <div className="mb-1 flex items-center justify-between text-sm">
              <span className="font-medium text-[#0A1F44]">{label}</span>
              <span className="font-semibold text-[#0A1F44]">{score[key]}%</span>
            </div>

            <div className="h-2 rounded-full bg-[#0A1F44]/10">
              <div
                className="h-2 rounded-full bg-[#C9A95A]"
                style={{ width: `${score[key]}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-emerald-600/20 bg-emerald-500/10 p-4 text-sm text-emerald-800">
        <strong>EliteCV Empfehlung:</strong> Ergänzen Sie möglichst konkrete
        Erfolge, passende Schlüsselwörter aus dem Stelleninserat und einen klaren
        Mehrwert für das Unternehmen.
      </div>
    </section>
  );
}