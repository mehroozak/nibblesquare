import Link from "next/link";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";
import { LogoMark } from "@/components/common/icons/LogoMark";

type LogoProps = {
  className?: string;
  /** Hides the wordmark, leaving only the mark — used in tight spaces. */
  markOnly?: boolean;
};

export function Logo({ className, markOnly = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group flex items-center gap-2.5 rounded-md focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:outline-none",
        className,
      )}
      aria-label={`${siteConfig.name} — home`}
    >
      <LogoMark className="text-primary size-7 shrink-0 transition-transform duration-300 group-hover:rotate-6" />
      {!markOnly && (
        <span className="font-display text-[0.975rem] font-semibold tracking-tight">
          {siteConfig.name}
        </span>
      )}
    </Link>
  );
}
