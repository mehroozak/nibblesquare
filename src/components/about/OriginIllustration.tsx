import * as React from "react";

import { cubicLength, cubicPath } from "@/lib/bezier";

/**
 * "Our story" illustration: a founder figure tending a small sapling-like
 * stack that grows into the same glowing-core motif as the homepage hero —
 * visual shorthand for "started small, built something that holds up."
 * Decorative, theme-aware, faceless (see TeamBuildIllustration for the
 * reasoning behind the abstract figure style).
 */

const start = { x: 80, y: 250 };
const control1 = { x: 92, y: 238 };
const control2 = { x: 88, y: 258 };
const end = { x: 95, y: 265 };
const trailLength = cubicLength(start, control1, control2, end);
const trailPath = cubicPath(start, control1, control2, end);

type OriginIllustrationProps = {
  className?: string;
};

export function OriginIllustration({ className }: OriginIllustrationProps) {
  return (
    <svg
      viewBox="0 0 260 340"
      className={className}
      role="presentation"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ns-origin-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--primary)" />
          <stop offset="100%" stopColor="var(--chart-2)" />
        </linearGradient>
      </defs>

      <ellipse cx="130" cy="296" rx="92" ry="10" fill="var(--foreground)" opacity="0.07" />

      {/* The sapling — same layered-construct motif as the hero, in miniature */}
      <rect x="95" y="250" width="70" height="30" rx="10" fill="var(--primary)" opacity="0.16" stroke="var(--primary)" strokeOpacity="0.3" />
      <rect x="108" y="222" width="44" height="30" rx="9" fill="var(--primary)" opacity="0.24" stroke="var(--primary)" strokeOpacity="0.35" />
      <circle cx="130" cy="196" r="20" fill="url(#ns-origin-grad)" stroke="var(--primary)" strokeWidth="1.5" />
      <circle cx="130" cy="196" r="7" fill="var(--chart-2)" opacity="0.9" />
      <line x1="130" y1="176" x2="130" y2="160" stroke="var(--primary)" strokeWidth="2" />
      <circle cx="130" cy="156" r="3.5" fill="var(--primary)" className="animate-blink" />

      {/* Connecting trail from the founder to what they're building */}
      <path
        d={trailPath}
        fill="none"
        stroke="var(--primary)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.55"
        className="animate-draw"
        style={{ "--ns-draw-length": trailLength, animationDuration: "1.4s" } as React.CSSProperties}
      />
      <circle cx={end.x} cy={end.y} r="4" fill="var(--primary)" />
      <circle
        cx={end.x}
        cy={end.y}
        r="4"
        fill="none"
        stroke="var(--primary)"
        strokeWidth="2"
        className="animate-pulse-ring"
        style={{ animationDelay: "500ms" }}
      />

      {/* The founder */}
      <g className="animate-float">
        <rect x="45" y="222" width="34" height="74" rx="17" fill="var(--chart-1)" opacity="0.88" />
        <circle cx="62" cy="210" r="15" fill="var(--chart-1)" opacity="0.95" />
        <circle cx="57.6" cy="210" r="1.35" fill="var(--card)" />
        <circle cx="66.4" cy="210" r="1.35" fill="var(--card)" />
      </g>

      {/* A small spark for "the beginning" */}
      <g className="animate-blink" style={{ animationDelay: "700ms" }} transform="translate(184 168)">
        <line x1="0" y1="-9" x2="0" y2="9" stroke="var(--chart-4)" strokeWidth="1.6" strokeLinecap="round" opacity="0.6" />
        <line x1="-9" y1="0" x2="9" y2="0" stroke="var(--chart-4)" strokeWidth="1.6" strokeLinecap="round" opacity="0.6" />
      </g>

      <circle cx="46" cy="150" r="2" fill="var(--primary)" opacity="0.5" className="animate-blink" style={{ animationDelay: "300ms" }} />
      <circle cx="200" cy="250" r="2" fill="var(--primary)" opacity="0.5" className="animate-blink" style={{ animationDelay: "1000ms" }} />
    </svg>
  );
}
