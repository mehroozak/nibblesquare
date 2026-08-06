import type { Metadata } from "next";

import { CtaBanner } from "@/components/common/CtaBanner";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import { TestimonialsHeroIllustration } from "@/components/testimonials/TestimonialsHeroIllustration";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "What clients say about working with Nibble Square — across custom software, product engineering, mobile, cloud infrastructure and applied AI.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="What clients say"
        description="Feedback from the people we have built for — including the parts that were harder than expected."
        illustration={<TestimonialsHeroIllustration className="w-full" />}
      />

      <Section aria-label="Client testimonials">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <li key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </li>
          ))}
        </ul>
      </Section>

      <CtaBanner
        title="Want to be on this page?"
        description="Tell us what you are building. We will be straight with you about whether we are the right team."
        secondaryLabel="See our services"
        secondaryHref="/services"
      />
    </>
  );
}
