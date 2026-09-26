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

export function WhatSection({
  data,
  onChange,
  onAiAction,
}: Props) {
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
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#C9A95A]/20 text-sm font-bold text-[#8A6A22]">
          3
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#0A1F44]">
            WHAT – Mehrwert
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#0A1F44]/65">
            Welchen Beitrag möchten Sie für das Unternehmen leisten und
            wie möchten Sie Ihre Bewerbung professionell abschliessen?
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-8">
        {/* MEHRWERT */}
        <div className="rounded-2xl border border-[#0A1F44]/10 bg-white p-5">
          <label
            htmlFor="whatValue"
            className="text-sm font-semibold text-[#0A1F44]"
          >
            Ihr Mehrwert
          </label>

          <p className="mt-1 text-xs leading-5 text-[#0A1F44]/55">
            Beschreiben Sie konkret, welchen Nutzen Sie mit Ihrer
            Erfahrung und Ihren Fähigkeiten für das Unternehmen schaffen.
          </p>

          <textarea
            id="whatValue"
            rows={5}
            value={data.whatValue}
            onChange={(e) => update("whatValue", e.target.value)}
            placeholder="Welchen Nutzen bringen Sie dem Unternehmen?"
            className="mt-3 w-full rounded-xl border border-[#0A1F44]/15 px-4 py-3 text-sm outline-none transition focus:border-[#C9A95A] focus:ring-2 focus:ring-[#C9A95A]/10"
          />

          <div className="mt-1">
            <AiToolbar
              onAction={(action) =>
                onAiAction("whatValue", action)
              }
            />
          </div>

          <p className="mt-3 text-xs text-[#0A1F44]/45">
            Die KI-Aktion bearbeitet nur das Feld „Ihr Mehrwert“.
          </p>
        </div>

        {/* SCHLUSSTEIL */}
        <div className="rounded-2xl border border-[#0A1F44]/10 bg-white p-5">
          <label
            htmlFor="whatClosing"
            className="text-sm font-semibold text-[#0A1F44]"
          >
            Schlussteil
          </label>

          <p className="mt-1 text-xs leading-5 text-[#0A1F44]/55">
            Formulieren Sie einen kurzen, professionellen Abschluss mit
            Gesprächswunsch oder Verfügbarkeit.
          </p>

          <textarea
            id="whatClosing"
            rows={4}
            value={data.whatClosing}
            onChange={(e) => update("whatClosing", e.target.value)}
            placeholder="Verfügbarkeit, Gesprächswunsch, Dank..."
            className="mt-3 w-full rounded-xl border border-[#0A1F44]/15 px-4 py-3 text-sm outline-none transition focus:border-[#C9A95A] focus:ring-2 focus:ring-[#C9A95A]/10"
          />

          <div className="mt-1">
            <AiToolbar
              onAction={(action) =>
                onAiAction("whatClosing", action)
              }
            />
          </div>

          <p className="mt-3 text-xs text-[#0A1F44]/45">
            Die KI-Aktion bearbeitet nur das Feld „Schlussteil“.
          </p>
        </div>
      </div>
    </section>
  );
}