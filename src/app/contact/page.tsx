import type { Metadata } from "next";

import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Nibble Square about a new project, Passlay or a partnership. We usually reply within one business day.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you are trying to do"
        description="The more context you can give us, the more useful our first reply will be. If we are not the right team, we will say so and point you somewhere better."
      />

      <Section aria-label="Contact">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <h2 className="sr-only">Contact form</h2>
            <ContactForm />
          </div>
          <ContactDetails />
        </div>
      </Section>
    </>
  );
}
