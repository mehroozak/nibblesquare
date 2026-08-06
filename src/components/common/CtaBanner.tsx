import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/common/Reveal";
import { siteConfig } from "@/data/site";

type CtaBannerProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

/** Closing contact prompt, reused at the bottom of every page. */
export function CtaBanner({
  title = "Have something you need built?",
  description = "Tell us what you are trying to do and we will tell you honestly whether we are the right team for it.",
  primaryLabel = "Start a conversation",
  primaryHref = "/contact",
  secondaryLabel = "See our work",
  secondaryHref = "/products",
}: CtaBannerProps) {
  return (
    <section className="border-t" aria-labelledby="cta-title">
      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="bg-aurora pointer-events-none absolute inset-0 opacity-30 dark:opacity-25"
        />
        <div
          aria-hidden="true"
          className="bg-grid pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
        />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 id="cta-title" className="text-3xl font-semibold text-balance sm:text-4xl">
              {title}
            </h2>
            <p className="text-muted-foreground mt-4 text-lg leading-relaxed text-pretty">
              {description}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="group">
                <Link href={primaryHref}>
                  {primaryLabel}
                  <ArrowRightIcon
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={secondaryHref}>{secondaryLabel}</Link>
              </Button>
            </div>
            <p className="text-muted-foreground mt-6 font-mono text-xs">
              {/* PLACEHOLDER availability line — edit in src/data/site.ts */}
              {siteConfig.availability}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
