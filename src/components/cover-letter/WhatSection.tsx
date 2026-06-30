"use client";

import type { AiAction, CoverLetterData } from "./types";
import { AiToolbar } from "./AiToolbar";

type Props = {
  data: CoverLetterData;
  onChange: (data: CoverLetterData) => void;
  onAiAction: (field: keyof CoverLetterData, action: AiAction) => void;
};

export function WhatSection({ data, onChange, onAiAction }: Props) {
  const update = <K extends keyof CoverLetterData>(
    key: K,
    value: CoverLetterData[K]
  ) => {
    onChange({
      ...data,
      [key]: value,
    });
  };

  return (
    <section className="rounded-2xl border border-[#0A1F44]/10 bg-[#FCFCFB] p-6 shadow-sm">

      <h2 className="text-2xl font-semibold text-[#0A1F44]">
        WHAT – Mehrwert
      </h2>

      <p className="mt-2 text-sm text-[#0A1F44]/65">
        Welchen Beitrag möchten Sie für das Unternehmen leisten und wie möchten
        Sie Ihre Bewerbung professionell abschliessen?
      </p>

      <div className="mt-5 space-y-6">

        <div>
          <label className="text-sm font-semibold text-[#0A1F44]">
            Ihr Mehrwert
          </label>

          <textarea
            rows={5}
            value={data.whatValue}
            onChange={(e) => update("whatValue", e.target.value)}
            placeholder="Welchen Nutzen bringen Sie dem Unternehmen?"
            className="mt-2 w-full rounded-xl border border-[#0A1F44]/15 px-4 py-3"
          />

          <AiToolbar
            onAction={(action) => onAiAction("whatValue", action)}
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-[#0A1F44]">
            Schlussteil
          </label>

          <textarea
            rows={4}
            value={data.whatClosing}
            onChange={(e) => update("whatClosing", e.target.value)}
            placeholder="Verfügbarkeit, Gesprächswunsch, Dank..."
            className="mt-2 w-full rounded-xl border border-[#0A1F44]/15 px-4 py-3"
          />

          <AiToolbar
            onAction={(action) => onAiAction("whatClosing", action)}
          />
        </div>

      </div>

    </section>
  );
}