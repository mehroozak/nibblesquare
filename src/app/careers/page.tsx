import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/common/CtaBanner";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { JobCard } from "@/components/careers/JobCard";
import { openRoles, perks } from "@/data/careers";
import { siteConfig } from "@/data/site";
import { values } from "@/data/company";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Open roles at Nibble Square. A small senior team building custom software and Passlay, our event ticketing platform. Remote-first, transparent pay, real ownership.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Small team, wide scope, no bench"
        description="We hire slowly and keep the team small on purpose. That means more ownership than most places will give you, and nowhere to hide — which suits some people very well."
      >
        <Button asChild size="lg">
          <a href="#open-roles">
            {openRoles.length} open role{openRoles.length === 1 ? "" : "s"}
          </a>
        </Button>
      </PageHero>

      {/* Culture */}
      <Section aria-labelledby="culture-title">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <SectionHeading
            eyebrow="Why work here"
            title={<span id="culture-title">What it is actually like</span>}
          />
          <div className="space-y-5 text-lg leading-relaxed text-pretty">
            <p className="text-foreground/85">
              You will work directly with the people who use what you build.
              There is no account manager relaying feedback and no product owner
              translating requirements — you will be in the room, which is
              faster and occasionally uncomfortable.
            </p>
            <p className="text-foreground/85">
              We run our own product, so you will also see what happens to
              software after launch: the support tickets, the migrations, the
              incident at 11pm before a festival. Most engineers say it changed
              how they build.
            </p>
            <p className="text-foreground/85">
              We are remote-first with deliberate overlap hours, we write things
              down, and we protect focus time properly rather than aspirationally.
            </p>
          </div>
        </div>
      </Section>

      {/* Perks */}
      <Section muted compact aria-labelledby="perks-title">
        <h2 id="perks-title" className="sr-only">
          Benefits
        </h2>
        <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {perks.map((perk) => (
            <li key={perk.title} className="border-t pt-6">
              <span className="text-primary flex size-9 items-center">
                <perk.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-2 text-base font-semibold">{perk.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {perk.description}
              </p>
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground mt-10 font-mono text-xs">
          Placeholder benefits — confirm what you actually offer in
          src/data/careers.ts
        </p>
      </Section>

      {/* How we hire — reuses the company values as the bar we hire against */}
      <Section aria-labelledby="hiring-bar-title">
        <SectionHeading
          eyebrow="What we look for"
          title={<span id="hiring-bar-title">The bar we hire against</span>}
          description="The same things we hold ourselves to. If these sound like you, the interview will go well."
        />
        <ul className="mt-14 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.slice(0, 3).map((value) => (
            <li key={value.title} className="border-t pt-6">
              <h3 className="text-base font-semibold">{value.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {value.description}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Open roles */}
      <Section
        muted
        id="open-roles"
        aria-labelledby="open-roles-title"
        className="scroll-mt-16"
      >
        <SectionHeading
          eyebrow="Open roles"
          title={<span id="open-roles-title">Currently hiring</span>}
          description="No roles that fit? Send us something anyway — we read every one."
        />

        {openRoles.length > 0 ? (
          <ul className="mt-12 space-y-5">
            {openRoles.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </ul>
        ) : (
          <p className="text-muted-foreground mt-12">
            No open roles right now. We are still happy to hear from you.
          </p>
        )}

        <div className="bg-background mt-10 rounded-xl border p-8 text-center">
          <h3 className="text-xl font-semibold">Nothing quite right?</h3>
          <p className="text-muted-foreground mx-auto mt-3 max-w-lg leading-relaxed text-pretty">
            Tell us what you do and what you would want to work on. We have
            created roles for the right person before.
          </p>
          <Button asChild size="lg" className="mt-6">
            {/* No backend yet — applications are email-only. */}
            <a
              href={`mailto:${siteConfig.careersEmail}?subject=${encodeURIComponent(
                "Open application",
              )}`}
            >
              Email {siteConfig.careersEmail}
            </a>
          </Button>
        </div>

        <p className="text-muted-foreground mt-8 font-mono text-xs">
          Placeholder listings — edit or hide roles via `open: false` in
          src/data/careers.ts
        </p>
      </Section>

      <CtaBanner
        title="Curious but not ready to apply?"
        description="Happy to have an informal conversation about what the work looks like day to day."
        primaryLabel="Get in touch"
        secondaryLabel="Meet the team"
        secondaryHref="/about#team"
      />
    </>
  );
}
