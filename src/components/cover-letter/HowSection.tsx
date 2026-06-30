"use client";

import type { AiAction, CoverLetterData } from "./types";
import { AiToolbar } from "./AiToolbar";

type Props = {
  data: CoverLetterData;
  onChange: (data: CoverLetterData) => void;
  onAiAction: (field: keyof CoverLetterData, action: AiAction) => void;
};

export function HowSection({ data, onChange, onAiAction }: Props) {
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
        HOW – Qualifikation
      </h2>

      <p className="mt-2 text-sm text-[#0A1F44]/65">
        Welche Erfahrungen, Erfolge und Kompetenzen machen Sie zur passenden Person?
      </p>

      <div className="mt-5 space-y-5">
        <div>
          <label className="text-sm font-semibold text-[#0A1F44]">
            Berufserfahrung
          </label>

          <textarea
            rows={5}
            value={data.howExperience}
            onChange={(e) => update("howExperience", e.target.value)}
            placeholder="Relevante Berufserfahrung, Aufgaben, Branchen, Projekte..."
            className="mt-2 w-full rounded-xl border border-[#0A1F44]/15 px-4 py-3"
          />

          <AiToolbar onAction={(action) => onAiAction("howExperience", action)} />
        </div>

        <div>
          <label className="text-sm font-semibold text-[#0A1F44]">
            Erfolge
          </label>

          <textarea
            rows={5}
            value={data.howAchievements}
            onChange={(e) => update("howAchievements", e.target.value)}
            placeholder="Messbare Erfolge, Verbesserungen, Projekte, Resultate..."
            className="mt-2 w-full rounded-xl border border-[#0A1F44]/15 px-4 py-3"
          />

          <AiToolbar onAction={(action) => onAiAction("howAchievements", action)} />
        </div>

        <div>
          <label className="text-sm font-semibold text-[#0A1F44]">
            Kompetenzen
          </label>

          <textarea
            rows={5}
            value={data.howSkills}
            onChange={(e) => update("howSkills", e.target.value)}
            placeholder="Fachkenntnisse, Soft Skills, Tools, Methoden..."
            className="mt-2 w-full rounded-xl border border-[#0A1F44]/15 px-4 py-3"
          />

          <AiToolbar onAction={(action) => onAiAction("howSkills", action)} />
        </div>
      </div>
    </section>
  );
}