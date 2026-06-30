"use client";

import type { AiAction, CoverLetterData } from "./types";
import { AiToolbar } from "./AiToolbar";

type Props = {
  data: CoverLetterData;
  onChange: (data: CoverLetterData) => void;
  onAiAction: (field: keyof CoverLetterData, action: AiAction) => void;
};

export function WhySection({ data, onChange, onAiAction }: Props) {
  return (
    <section className="rounded-2xl border border-[#0A1F44]/10 bg-[#FCFCFB] p-6 shadow-sm">
      <h2 className="text-2xl font-semibold text-[#0A1F44]">
        WHY – Motivation
      </h2>

      <p className="mt-2 text-sm text-[#0A1F44]/65">
        Warum interessieren Sie sich für diese Stelle und dieses Unternehmen?
      </p>

      <textarea
        rows={7}
        value={data.why}
        onChange={(e) =>
          onChange({
            ...data,
            why: e.target.value,
          })
        }
        placeholder="Beschreiben Sie Ihre Motivation, Ihr Interesse am Unternehmen und den Bezug zur Position..."
        className="mt-5 w-full rounded-xl border border-[#0A1F44]/15 px-4 py-3"
      />

      <AiToolbar onAction={(action) => onAiAction("why", action)} />
    </section>
  );
}