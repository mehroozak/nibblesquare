import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ServiceCard } from "@/components/services/ServiceCard";
import { services } from "@/data/services";

export function ServicesTeaser() {
  return (
    <Section aria-labelledby="services-teaser-title">
      <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="What we do"
          title={<span id="services-teaser-title">How we can help</span>}
          description="Five ways we typically get involved. Most engagements are some combination of them rather than one in isolation."
        />
        <Button asChild variant="outline" className="group shrink-0">
          <Link href="/services">
            All services
            <ArrowRightIcon
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </Button>
      </Reveal>

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Reveal as="li" key={service.slug} direction="up" delay={index * 80}>
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
