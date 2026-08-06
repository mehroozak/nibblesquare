import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CountUp } from "@/components/common/CountUp";
import { Reveal } from "@/components/common/Reveal";
import { HeroVisual } from "@/components/home/HeroVisual";
import { companyStats } from "@/data/company";

export function HomeHero() {
  return (
    <section
      className="relative overflow-hidden border-b"
      aria-labelledby="hero-title"
    >
      {/* Layered background: a slow teal bloom under the masked grid. */}
      <div
        aria-hidden="true"
        className="bg-aurora pointer-events-none absolute inset-0 opacity-40 dark:opacity-30"
      />
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 opacity-[0.4] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          <div className="max-w-2xl">
            <Reveal direction="up" distance={12}>
              <p className="border-border bg-background/60 text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs backdrop-blur">
                <span className="relative flex size-1.5" aria-hidden="true">
                  <span className="bg-primary animate-pulse-ring absolute inset-0 rounded-full" />
                  <span className="bg-primary relative size-1.5 rounded-full" />
                </span>
                Makers of Passlay
              </p>
            </Reveal>

            <Reveal direction="up" delay={80}>
              <h1
                id="hero-title"
                className="mt-6 text-4xl font-semibold text-balance sm:text-5xl lg:text-6xl"
              >
                Envision. Engineer. Excel.
              </h1>
            </Reveal>

            <Reveal direction="up" delay={160}>
              <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-relaxed text-pretty sm:text-xl">
                Nibble Square is a product engineering studio. We design, build
                and run the systems companies depend on — from internal tools
                nobody outside the business ever sees, to Passlay, our own
                ticketing platform that runs live events every week.
              </p>
            </Reveal>

            <Reveal direction="up" delay={240}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="group">
                  <Link href="/products">
                    See our work
                    <ArrowRightIcon
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">Get in touch</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal direction="left" delay={200} distance={28}>
            <HeroVisual />
          </Reveal>
        </div>

        {/* PLACEHOLDER figures — edit companyStats in src/data/company.ts */}
        <dl className="mt-20 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-8 border-t pt-10 sm:grid-cols-4">
          {companyStats.map((stat, index) => (
            <Reveal key={stat.label} direction="up" delay={index * 90}>
              <dt className="text-muted-foreground text-xs">{stat.label}</dt>
              <dd className="font-display mt-1 text-2xl font-semibold sm:text-3xl">
                <CountUp value={stat.value} />
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
