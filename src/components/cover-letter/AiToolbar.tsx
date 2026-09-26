"use client";

import { useState } from "react";
import type { AiAction } from "./types";

type AiToolbarProps = {
  onAction: (action: AiAction) => void | Promise<void>;
};

type ActionConfig = {
  action: AiAction;
  label: string;
  loadingLabel: string;
  successLabel: string;
  icon: string;
};

const actions: ActionConfig[] = [
  {
    action: "professional",
    label: "Professioneller",
    loadingLabel: "Wird professioneller formuliert...",
    successLabel: "Professioneller formuliert",
    icon: "✨",
  },
  {
    action: "shorter",
    label: "Kürzer",
    loadingLabel: "Text wird gekürzt...",
    successLabel: "Text gekürzt",
    icon: "✂️",
  },
  {
    action: "moreConvincing",
    label: "Überzeugender",
    loadingLabel: "Wird überzeugender formuliert...",
    successLabel: "Überzeugender formuliert",
    icon: "⭐",
  },
  {
    action: "ats",
    label: "ATS optimieren",
    loadingLabel: "ATS-Optimierung läuft...",
    successLabel: "ATS optimiert",
    icon: "🎯",
  },
];

export function AiToolbar({ onAction }: AiToolbarProps) {
  const [activeAction, setActiveAction] = useState<AiAction | null>(null);
  const [completedAction, setCompletedAction] =
    useState<AiAction | null>(null);

  const handleAction = async (action: AiAction) => {
    if (activeAction) return;

    try {
      setActiveAction(action);
      setCompletedAction(null);

      await Promise.resolve(onAction(action));

      setCompletedAction(action);

      window.setTimeout(() => {
        setCompletedAction((current) =>
          current === action ? null : current
        );
      }, 1800);
    } catch (error) {
      console.error("AI action failed:", error);
    } finally {
      setActiveAction(null);
    }
  };

  return (
    <div className="mt-4">
      <p className="mb-2 text-xs font-medium text-[#0A1F44]/55">
        Text mit KI optimieren:
      </p>

      <div className="flex flex-wrap gap-2">
        {actions.map(
          ({
            action,
            label,
            loadingLabel,
            successLabel,
            icon,
          }) => {
            const isLoading = activeAction === action;
            const isCompleted = completedAction === action;
            const isDisabled =
              activeAction !== null && !isLoading;

            return (
              <button
                key={action}
                type="button"
                onClick={() => handleAction(action)}
                disabled={activeAction !== null}
                aria-busy={isLoading}
                className={`inline-flex min-h-10 items-center justify-center rounded-xl border px-4 py-2 text-sm font-semibold transition-all duration-200 ${isLoading
                  ? "border-[#0A1F44] bg-[#0A1F44] text-white shadow-sm"
                  : isCompleted
                    ? "border-[#C9A95A] bg-[#FBF8EF] text-[#0A1F44]"
                    : "border-[#C9A95A]/50 bg-white text-[#8A6A22] shadow-sm hover:-translate-y-0.5 hover:border-[#C9A95A] hover:bg-[#FBF8EF] hover:shadow-md"
                  } ${isDisabled
                    ? "cursor-not-allowed opacity-45"
                    : "cursor-pointer"
                  }`}
              >
                {isLoading ? (
                  <>
                    <span className="mr-2 animate-pulse">⏳</span>
                    {loadingLabel}
                  </>
                ) : isCompleted ? (
                  <>
                    <span className="mr-2">✓</span>
                    {successLabel}
                  </>
                ) : (
                  <>
                    <span className="mr-2">{icon}</span>
                    {label}
                  </>
                )}
              </button>
            );
          }
        )}
      </div>
    </div>
  );
}