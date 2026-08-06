import { hashString } from "@/lib/getInitials";
import { cn } from "@/lib/utils";
import type { TeamRole } from "@/types/content";

type RoleAvatarProps = {
  role: TeamRole;
  className?: string;
};

/** On-brand palette, matching the hero illustration's figures. */
const palette = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
];

/**
 * A small illustrated "genius" bust for a team discipline — the same abstract
 * faceless-figure style as the homepage hero, color-seeded per role, with the
 * role's existing lucide icon pinned on as a badge. Deterministic (no
 * randomness), so it's identical on server render and after hydration.
 */
export function RoleAvatar({ role, className }: RoleAvatarProps) {
  const seed = hashString(role.id);
  const color = palette[seed % palette.length]!;
  const Icon = role.icon;

  return (
    <span
      className={cn("relative inline-grid size-16 shrink-0 place-items-center", className)}
      aria-hidden="true"
    >
      <svg viewBox="0 0 64 64" className="size-full">
        <rect width="64" height="64" rx="18" fill={color} opacity="0.14" />
        <rect x="17" y="31" width="30" height="27" rx="13" fill={color} opacity="0.9" />
        <circle cx="32" cy="24" r="11.5" fill={color} />
        <circle cx="28" cy="24" r="1.4" fill="var(--card)" />
        <circle cx="36" cy="24" r="1.4" fill="var(--card)" />
      </svg>
      <span className="bg-card border-border absolute -right-1 -bottom-1 grid size-7 place-items-center rounded-full border shadow-sm">
        <Icon className="size-3.5" style={{ color }} aria-hidden="true" />
      </span>
    </span>
  );
}
