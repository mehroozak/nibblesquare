import * as React from "react";

import { cubicLength, cubicPath, type Point } from "@/lib/bezier";

/**
 * Testimonials-hero illustration: two abstract clients, each with a small
 * "approved" speech bubble, feeding into a shared glowing quote mark —
 * distinct in subject (client voices, not the team or the product) but
 * built from the same figure/trail/glow language used elsewhere on the site.
 */

type Speaker = {
  key: string;
  headCx: number;
  headCy: number;
  color: string;
  delay: number;
};

const orb = { cx: 240, cy: 148, r: 40 };

const speakers: Speaker[] = [
  { key: "left", headCx: 96, headCy: 214, color: "var(--chart-3)", delay: 0 },
  { key: "right", headCx: 384, headCy: 214, color: "var(--chart-1)", delay: 260 },
];

type TestimonialsHeroIllustrationProps = {
  className?: string;
};

export function TestimonialsHeroIllustration({ className }: TestimonialsHeroIllustrationProps) {
  return (
    <svg viewBox="0 0 480 320" className={className} role="presentation" aria-hidden="true">
      <defs>
        <linearGradient id="ns-testimonial-orb" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--primary)" />
          <stop offset="100%" stopColor="var(--chart-2)" />
        </linearGradient>
      </defs>

      <ellipse cx="240" cy="286" rx="200" ry="16" fill="var(--foreground)" opacity="0.06" />

      {/* The shared quote */}
      <circle cx={orb.cx} cy={orb.cy} r={orb.r + 16} fill="var(--primary-foreground)" opacity="0.14" />
      <circle cx={orb.cx} cy={orb.cy} r={orb.r} fill="url(#ns-testimonial-orb)" stroke="var(--primary)" strokeWidth="1.5" />
      <text
        x={orb.cx}
        y={orb.cy + 18}
        fontSize="52"
        fontWeight="800"
        textAnchor="middle"
        fill="var(--primary-foreground)"
        style={{ fontFamily: "Georgia, serif" }}
      >
        &#8220;
      </text>

      {speakers.map((speaker) => {
        const bubbleY = speaker.headCy - 44;
        const start = { x: speaker.headCx, y: bubbleY + 14 };
        const entry: Point = { x: orb.cx + (speaker.key === "left" ? -orb.r * 0.6 : orb.r * 0.6), y: orb.cy + orb.r * 0.55 };
        const c1 = { x: speaker.headCx, y: (start.y + entry.y) / 2 };
        const c2 = { x: entry.x, y: (start.y + entry.y) / 2 };
        const d = cubicPath(start, c1, c2, entry);
        const length = cubicLength(start, c1, c2, entry);
        const bodyW = 38;
        const bodyH = 50;

        return (
          <g key={speaker.key}>
            <path
              d={d}
              fill="none"
              stroke="var(--primary)"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.5"
              className="animate-draw"
              style={{ "--ns-draw-length": length, animationDelay: `${speaker.delay}ms`, animationDuration: "1.4s" } as React.CSSProperties}
            />
            <circle cx={entry.x} cy={entry.y} r="4" fill="var(--primary)" />
            <circle
              cx={entry.x}
              cy={entry.y}
              r="4"
              fill="none"
              stroke="var(--primary)"
              strokeWidth="2"
              className="animate-pulse-ring"
              style={{ animationDelay: `${speaker.delay + 350}ms` }}
            />

            <g className="animate-float" style={{ animationDelay: `${speaker.delay}ms` }}>
              {/* Speech bubble with an "approved" checkmark */}
              <rect x={speaker.headCx - 26} y={bubbleY - 16} width="52" height="30" rx="10" fill="var(--card)" stroke="var(--border)" />
              <path d={`M${speaker.headCx - 6} ${bubbleY + 14} L${speaker.headCx} ${bubbleY + 22} L${speaker.headCx + 6} ${bubbleY + 14} Z`} fill="var(--card)" stroke="var(--border)" />
              <path
                d={`M${speaker.headCx - 9} ${bubbleY - 1} L${speaker.headCx - 3} ${bubbleY + 5} L${speaker.headCx + 9} ${bubbleY - 8}`}
                fill="none"
                stroke={speaker.color}
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Bust */}
              <rect x={speaker.headCx - bodyW / 2} y={speaker.headCy + 6} width={bodyW} height={bodyH} rx="17" fill={speaker.color} opacity="0.88" />
              <circle cx={speaker.headCx} cy={speaker.headCy} r="18" fill={speaker.color} opacity="0.95" />
              <circle cx={speaker.headCx - 6} cy={speaker.headCy} r="1.6" fill="var(--card)" />
              <circle cx={speaker.headCx + 6} cy={speaker.headCy} r="1.6" fill="var(--card)" />
            </g>
          </g>
        );
      })}

      {/* Ambient */}
      <circle cx="240" cy="60" r="2.2" fill="var(--primary)" opacity="0.5" className="animate-blink" />
      <circle cx="440" cy="230" r="2.2" fill="var(--primary)" opacity="0.5" className="animate-blink" style={{ animationDelay: "700ms" }} />
      <circle cx="40" cy="150" r="2.2" fill="var(--primary)" opacity="0.5" className="animate-blink" style={{ animationDelay: "1200ms" }} />
    </svg>
  );
}
