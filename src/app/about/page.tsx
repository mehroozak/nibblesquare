import type { Metadata } from "next";

import { CtaBanner } from "@/components/common/CtaBanner";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { AboutHeroIllustration } from "@/components/about/AboutHeroIllustration";
import { OriginIllustration } from "@/components/about/OriginIllustration";
import { ProcessStepIcon } from "@/components/about/ProcessStepIcon";
import { TeamRoleCard } from "@/components/about/TeamRoleCard";
import { ValueCard } from "@/components/about/ValueCard";
import { companyStory, processSteps, values } from "@/data/company";
import { teamRoles } from "@/data/team";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nibble Square is a small senior product engineering team. How we started, what we stand for, and the people who do the work.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={companyStory.headline}
        description="We are a small senior team that designs, builds and runs software — including our own product, Passlay. Here is how we got here and how we work."
        illustration={<AboutHeroIllustration className="w-full" />}
      />

      {/* Story */}
      <Section aria-labelledby="story-title">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <h2 id="story-title" className="text-3xl font-semibold sm:text-4xl">
              Our story
            </h2>
            <p className="text-muted-foreground mt-4 font-mono text-xs">
              {/* PLACEHOLDER */}
              Founded {companyStory.founded}
            </p>
            <Reveal direction="up" delay={120} className="mt-8 max-w-[220px]">
              <OriginIllustration className="w-full" />
            </Reveal>
          </div>
          <div className="space-y-5">
            {companyStory.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-foreground/85 text-lg leading-relaxed text-pretty"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section muted aria-labelledby="values-title">
        <SectionHeading
          eyebrow="What we stand for"
          title={<span id="values-title">How we approach building software</span>}
          description="These are the things we actually argue about internally, not a poster in a hallway."
        />
        <ul className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <Reveal as="li" key={value.title} direction="up" delay={index * 70}>
              <ValueCard value={value} />
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* Process */}
      <Section aria-labelledby="process-title">
        <SectionHeading
          eyebrow="How we work"
          title={<span id="process-title">Four steps, every engagement</span>}
          description="Deliberately unglamorous. Most projects fail in the first step, not the third."
        />
        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal as="li" key={step.step} direction="up" delay={index * 100} className="border-t pt-6">
              <ProcessStepIcon step={step.step} />
              <span className="text-primary mt-4 block font-mono text-xs font-medium tracking-[0.14em]">
                {step.step}
              </span>
              <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {step.description}
              </p>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Team */}
      <Section muted id="team" aria-labelledby="team-title" className="scroll-mt-16">
        <SectionHeading
          eyebrow="The team"
          title={<span id="team-title">Who you will actually work with</span>}
          description="No account layer, no bench. Every engagement draws on this same set of disciplines, end to end."
        />
        <ul className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {teamRoles.map((role, index) => (
            <Reveal as="li" key={role.id} direction="up" delay={index * 80}>
              <TeamRoleCard role={role} />
            </Reveal>
          ))}
        </ul>
      </Section>

      <CtaBanner
        title="Want to know how we would approach your problem?"
        description="We are happy to talk through a project before there is any commitment on either side."
      />
    </>
  );
}
