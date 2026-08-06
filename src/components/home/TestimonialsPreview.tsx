import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import { featuredTestimonials } from "@/data/testimonials";

export function TestimonialsPreview() {
  return (
    <Section muted aria-labelledby="testimonials-preview-title">
      <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Testimonials"
          title={<span id="testimonials-preview-title">What clients say</span>}
          description="A few words from people we have worked with."
        />
        <Button asChild variant="outline" className="group shrink-0">
          <Link href="/testimonials">
            Read all
            <ArrowRightIcon
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </Button>
      </Reveal>

      <ul className="mt-12 grid gap-5 lg:grid-cols-3">
        {featuredTestimonials.map((testimonial, index) => (
          <Reveal
            as="li"
            key={testimonial.id}
            direction="up"
            delay={index * 110}
          >
            <TestimonialCard testimonial={testimonial} />
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
