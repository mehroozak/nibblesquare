import * as React from "react";

import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  /**
   * Optional artwork rendered in a right-hand column on large screens (stacks
   * below the text on mobile). Omit it and the hero renders exactly as
   * before — every page that doesn't pass this is unaffected.
   */
  illustration?: React.ReactNode;
  className?: string;
};

/** Shared masthead used at the top of every page except the homepage. */
export function PageHero({
  eyebrow,
  title,
  description,
  children,
  illustration,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn("relative overflow-hidden border-b", className)}
      aria-labelledby="page-hero-title"
    >
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
      />
      <div
        className={cn(
          "relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24",
          illustration && "lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12",
        )}
      >
        <div>
          <p className="text-primary font-mono text-xs font-medium tracking-[0.14em] uppercase">
            {eyebrow}
          </p>
          <h1
            id="page-hero-title"
            className="mt-4 max-w-3xl text-4xl font-semibold text-balance sm:text-5xl"
          >
            {title}
          </h1>
          <p className="text-muted-foreground mt-5 max-w-2xl text-lg leading-relaxed text-pretty">
            {description}
          </p>
          {children && <div className="mt-8">{children}</div>}
        </div>
        {illustration && <div className="mt-10 lg:mt-0">{illustration}</div>}
      </div>
    </section>
  );
}
