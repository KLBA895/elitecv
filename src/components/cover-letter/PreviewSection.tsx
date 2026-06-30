"use client";

import React from "react";
import type { CoverLetterData } from "./types";
import { ProfessionalLetter } from "./ProfessionalLetter";
import { ExecutiveLetter } from "./ExecutiveLetter";

type Props = {
  data: CoverLetterData;
  previewRef?: React.RefObject<HTMLDivElement | null>;
};

export function PreviewSection({ data, previewRef }: Props) {
  return (
    <section className="rounded-2xl border border-[#0A1F44]/10 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-[#0A1F44]">Vorschau</h2>
          <p className="mt-2 text-sm text-[#0A1F44]/65">
            Live-Vorschau im EliteCV-Brieflayout.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl bg-[#F3F5F8] p-6">
        <div className="mx-auto w-[210mm]">
          {data.layout === "executive" ? (
            <ExecutiveLetter data={data} previewRef={previewRef} />
          ) : (
            <ProfessionalLetter data={data} previewRef={previewRef} />
          )}
        </div>
      </div>
    </section>
  );
}