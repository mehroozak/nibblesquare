import { cn } from "@/lib/utils";
import type { ProcessStep } from "@/types/content";

type ProcessStepIconProps = {
  /** Matches `ProcessStep.step` — "01" through "04". */
  step: ProcessStep["step"];
  className?: string;
};

/**
 * Small hand-drawn icon per process step, matching the site's line-art
 * illustration style rather than pulling from the generic lucide set.
 * Falls back to a plain dot if a step is added without a matching icon.
 */
export function ProcessStepIcon({ step, className }: ProcessStepIconProps) {
  return (
    <span
      className={cn("bg-accent grid size-12 shrink-0 place-items-center rounded-xl", className)}
      aria-hidden="true"
    >
      <svg viewBox="0 0 40 40" className="size-6" fill="none">
        {step === "01" && (
          // Understand — a document with a magnifying glass over it.
          <>
            <rect x="8" y="7" width="16" height="21" rx="2.5" stroke="var(--primary)" strokeWidth="1.7" />
            <line x1="12" y1="13" x2="20" y2="13" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
            <line x1="12" y1="18" x2="20" y2="18" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
            <line x1="12" y1="23" x2="16" y2="23" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
            <circle cx="26" cy="25" r="6.5" fill="var(--accent)" stroke="var(--primary)" strokeWidth="1.7" />
            <line x1="30.6" y1="29.6" x2="35" y2="34" stroke="var(--primary)" strokeWidth="1.7" strokeLinecap="round" />
          </>
        )}

        {step === "02" && (
          // Shape — a blueprint outline with a diagonal ruler and a pin.
          <>
            <rect x="7" y="9" width="22" height="20" rx="2" stroke="var(--primary)" strokeWidth="1.6" strokeDasharray="2.6 2.6" />
            <line x1="10" y1="27" x2="27" y2="10" stroke="var(--chart-2)" strokeWidth="1.7" strokeLinecap="round" />
            <line x1="14.5" y1="27" x2="17.5" y2="24" stroke="var(--chart-2)" strokeWidth="1.3" strokeLinecap="round" />
            <line x1="19.5" y1="22" x2="22.5" y2="19" stroke="var(--chart-2)" strokeWidth="1.3" strokeLinecap="round" />
            <circle cx="29" cy="30" r="3" fill="var(--primary)" />
          </>
        )}

        {step === "03" && (
          // Build — code brackets with a verified checkmark.
          <>
            <path d="M17 11 L9 20 L17 29" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M23 11 L31 20 L23 29" stroke="var(--chart-2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="29" cy="29" r="7" fill="var(--accent)" stroke="var(--primary)" strokeWidth="1.6" />
            <path d="M26 29 L28.2 31.2 L32 26.8" stroke="var(--primary)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </>
        )}

        {step === "04" && (
          // Run — a live gauge, needle up, with a blinking centre.
          <>
            <path d="M9 26 A11 11 0 0 1 31 26" stroke="var(--primary)" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="20" y1="26" x2="25" y2="16" stroke="var(--chart-2)" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="20" cy="26" r="2.4" fill="var(--primary)" className="animate-blink" />
            <line x1="9" y1="26" x2="6.5" y2="26" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
            <line x1="31" y1="26" x2="33.5" y2="26" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          </>
        )}
      </svg>
    </span>
  );
}
