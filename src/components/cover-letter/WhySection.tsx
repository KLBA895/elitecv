"use client";

import type { AiAction, CoverLetterData } from "./types";
import { AiToolbar } from "./AiToolbar";

type Props = {
  data: CoverLetterData;
  onChange: (data: CoverLetterData) => void;
  onAiAction: (
    field: keyof CoverLetterData,
    action: AiAction
  ) => Promise<void> | void;
};

export function WhySection({
  data,
  onChange,
  onAiAction,
}: Props) {
  const update = (value: string) => {
    onChange({
      ...data,
      why: value,
    });
  };

  return (
    <section className="rounded-2xl border border-[#0A1F44]/10 bg-[#FCFCFB] p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#C9A95A]/20 text-sm font-bold text-[#8A6A22]">
          1
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#0A1F44]">
            WHY – Motivation
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#0A1F44]/65">
            Warum interessieren Sie sich für diese Stelle und dieses
            Unternehmen?
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-[#0A1F44]/10 bg-white p-5">
        <label
          htmlFor="why"
          className="text-sm font-semibold text-[#0A1F44]"
        >
          Ihre Motivation
        </label>

        <p className="mt-1 text-xs leading-5 text-[#0A1F44]/55">
          Beschreiben Sie konkret, was Sie an der Position und am
          Unternehmen interessiert und weshalb die Stelle zu Ihrem Profil
          passt.
        </p>

        <textarea
          id="why"
          rows={7}
          value={data.why}
          onChange={(e) => update(e.target.value)}
          placeholder="Beschreiben Sie Ihre Motivation, Ihr Interesse am Unternehmen und den Bezug zur Position..."
          className="mt-3 w-full rounded-xl border border-[#0A1F44]/15 px-4 py-3 text-sm outline-none transition focus:border-[#C9A95A] focus:ring-2 focus:ring-[#C9A95A]/10"
        />

        <div className="mt-1">
          <AiToolbar
            onAction={(action) =>
              onAiAction("why", action)
            }
          />
        </div>

        <p className="mt-3 text-xs text-[#0A1F44]/45">
          Die KI-Aktion bearbeitet nur das Feld „Ihre Motivation“.
        </p>
      </div>
    </section>
  );
}