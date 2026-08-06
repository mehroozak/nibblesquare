import { CheckIcon, UsersIcon } from "lucide-react";

import { TeamBuildIllustration } from "@/components/home/TeamBuildIllustration";
import { companyStats } from "@/data/company";
import { cn } from "@/lib/utils";

const teamStat = companyStats.find((stat) => stat.label === "Team");

type HeroVisualProps = {
  className?: string;
};

/**
 * Hero centrepiece: an abstract illustration of the team feeding work into
 * something they're building together, with two floating status chips
 * overlapping the artwork. Deliberately not a Passlay screenshot — this is
 * the studio's hero, Passlay gets its own treatment further down the page.
 * Entirely decorative; the hero's meaning lives in the heading and copy
 * beside it.
 */
export function HeroVisual({ className }: HeroVisualProps) {
  return (
    <div className={cn("relative", className)} aria-hidden="true">
      {/* Soft teal bloom behind the artwork. */}
      <div className="bg-primary/20 pointer-events-none absolute -inset-6 rounded-[2rem] blur-3xl" />

      <TeamBuildIllustration className="relative w-full" />

      {/* Floating: shipped confirmation. */}
      <div className="animate-float bg-card absolute -bottom-6 -left-4 flex items-center gap-2.5 rounded-xl border p-3 shadow-lg sm:-left-8">
        <span className="bg-primary text-primary-foreground relative grid size-8 shrink-0 place-items-center rounded-full">
          <CheckIcon className="size-4" />
          <span className="border-primary absolute inset-0 rounded-full border animate-pulse-ring" />
        </span>
        <span className="leading-tight">
          <span className="block text-xs font-semibold">Shipped to production</span>
          <span className="text-muted-foreground block font-mono text-[10px]">
            main · build passing
          </span>
        </span>
      </div>

      {/* Floating: small senior team chip. */}
      <div
        className="animate-float bg-card absolute -top-5 -right-3 flex items-center gap-2.5 rounded-xl border p-3 shadow-lg sm:-right-6"
        style={{ animationDelay: "1.4s" }}
      >
        <span className="bg-accent text-accent-foreground grid size-8 shrink-0 place-items-center rounded-full">
          <UsersIcon className="size-4" />
        </span>
        <span className="leading-tight">
          <span className="block text-xs font-semibold">
            {teamStat ? `${teamStat.value} senior engineers` : "Senior engineers"}
          </span>
          <span className="text-primary block font-mono text-[10px]">
            one small team
          </span>
        </span>
      </div>
    </div>
  );
}
