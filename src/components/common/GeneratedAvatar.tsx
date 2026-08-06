import { getInitials, hashString } from "@/lib/getInitials";
import { cn } from "@/lib/utils";

type GeneratedAvatarProps = {
  /** Person's name — seeds the pattern and supplies the initials. */
  name: string;
  className?: string;
};

/** On-brand palette, so generated avatars never drift off the design tokens. */
const palette = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
];

/**
 * Deterministic geometric avatar, used when someone has no photo yet.
 *
 * Derived entirely from the name, so it is stable between server render and
 * hydration and identical every visit — no randomness, no layout shift.
 */
export function GeneratedAvatar({ name, className }: GeneratedAvatarProps) {
  const seed = hashString(name);
  const base = palette[seed % palette.length]!;
  const accent = palette[(seed >> 3) % palette.length]!;
  const rotation = (seed >> 5) % 360;
  const offset = 12 + ((seed >> 7) % 24);

  return (
    <span
      className={cn(
        "relative grid size-full place-items-center overflow-hidden",
        className,
      )}
    >
      <svg
        viewBox="0 0 64 64"
        className="absolute inset-0 size-full"
        aria-hidden="true"
      >
        <rect width="64" height="64" fill={base} opacity="0.22" />
        <g transform={`rotate(${rotation} 32 32)`}>
          <circle cx={offset} cy={64 - offset} r="26" fill={accent} opacity="0.3" />
          <rect
            x={40 - offset / 2}
            y={-8}
            width="34"
            height="34"
            rx="10"
            fill={base}
            opacity="0.35"
          />
        </g>
      </svg>
      <span className="text-foreground/80 relative text-sm font-semibold">
        {getInitials(name)}
      </span>
    </span>
  );
}
