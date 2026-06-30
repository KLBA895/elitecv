"use client";

import type { AiAction } from "./types";

type AiToolbarProps = {
  onAction: (action: AiAction) => void;
};

export function AiToolbar({ onAction }: AiToolbarProps) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      <button
        type="button"
        onClick={() => onAction("professional")}
        className="rounded-lg border border-[#C9A95A]/40 px-3 py-1 text-xs font-semibold text-[#8a6a22]"
      >
        ✨ Professioneller
      </button>

      <button
        type="button"
        onClick={() => onAction("shorter")}
        className="rounded-lg border border-[#C9A95A]/40 px-3 py-1 text-xs font-semibold text-[#8a6a22]"
      >
        Kürzer
      </button>

      <button
        type="button"
        onClick={() => onAction("moreConvincing")}
        className="rounded-lg border border-[#C9A95A]/40 px-3 py-1 text-xs font-semibold text-[#8a6a22]"
      >
        Überzeugender
      </button>

      <button
        type="button"
        onClick={() => onAction("ats")}
        className="rounded-lg border border-[#C9A95A]/40 px-3 py-1 text-xs font-semibold text-[#8a6a22]"
      >
        ATS
      </button>
    </div>
  );
}