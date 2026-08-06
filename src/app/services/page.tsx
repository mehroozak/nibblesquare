import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/common/CtaBanner";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { ServicesHeroIllustration } from "@/components/services/ServicesHeroIllustration";
import { processSteps } from "@/data/company";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom software development, product engineering, web and mobile apps, cloud and DevOps, and applied AI — delivered by the team behind Passlay.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Five ways we get involved"
        description="Most engagements combine a few of these. If you are not sure which one you need, that is usually a sign the first conversation should be about the problem rather than the solution."
        illustration={<ServicesHeroIllustration className="mx-auto w-full max-w-sm" />}
      >
        <nav aria-label="Services" className="flex flex-wrap gap-2">
          {services.map((service) => (
            <Button key={service.slug} asChild variant="outline" size="sm">
              <Link href={`#${service.slug}`}>{service.title}</Link>
            </Button>
          ))}
        </nav>
      </PageHero>

      {/* Credibility note tying services back to Passlay */}
      <Section compact muted aria-labelledby="proof-title">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <h2 id="proof-title" className="text-2xl font-semibold sm:text-3xl">
            We build for clients the way we build for ourselves
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
            Passlay is a live product with real organisers running real events
            on it. We designed it, built it, and we operate it — including the
            unglamorous parts: on-call, migrations, refunds, and the traffic
            spike when tickets go on sale. That experience is what we bring to
            client work, and it is why our estimates tend to include the parts
            other teams forget.{" "}
            <Link href="/products#passlay" className="text-primary hover:underline">
              See what Passlay does
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section aria-label="Service details">
        <div className="divide-y">
          {services.map((service) => (
            <ServiceDetail key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      {/* Engagement model */}
      <Section muted aria-labelledby="engagement-title">
        <SectionHeading
          eyebrow="How an engagement runs"
          title={<span id="engagement-title">What working together looks like</span>}
          description="Same four steps whichever service you start from."
        />
        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <li key={step.step} className="border-t pt-6">
              <span className="text-primary font-mono text-xs font-medium tracking-[0.14em]">
                {step.step}
              </span>
              <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <CtaBanner
        title="Not sure which of these you need?"
        description="Describe the problem and we will tell you what we think it actually is — including if the answer is that you do not need us."
        secondaryLabel="Read testimonials"
        secondaryHref="/testimonials"
      />
    </>
  );
}
