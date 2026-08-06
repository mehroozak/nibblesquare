import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { processSteps } from "@/data/company";

export function HomeIntro() {
  return (
    <Section aria-labelledby="intro-title">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <Reveal direction="right">
          <SectionHeading
            eyebrow="Who we are"
            title={
              <span id="intro-title">
                A small senior team, deliberately taking on few projects.
              </span>
            }
            description="We are engineers and designers who got tired of watching good projects ship late and then quietly rot. So we built a studio around staying close to the work — running our own product in production, and treating client software the same way."
          />
        </Reveal>

        <div>
          <ol className="grid gap-8 sm:grid-cols-2">
            {processSteps.map((step, index) => (
              <Reveal
                as="li"
                key={step.step}
                direction="up"
                delay={index * 100}
                className="group relative pl-6"
              >
                {/* Rail marker — fills in on hover to tie the steps together. */}
                <span
                  aria-hidden="true"
                  className="bg-border absolute top-1 bottom-0 left-0 w-px"
                >
                  <span className="bg-primary block h-0 w-px transition-all duration-500 group-hover:h-full" />
                </span>
                <span className="text-primary font-mono text-xs font-medium tracking-[0.14em]">
                  {step.step}
                </span>
                <h3 className="mt-2 text-base font-semibold">{step.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </ol>

          <Reveal direction="up" delay={200}>
            <Link
              href="/about"
              className="text-primary group mt-9 inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
            >
              More about how we work
              <ArrowRightIcon
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
