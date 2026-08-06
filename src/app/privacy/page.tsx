import type { Metadata } from "next";

import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { privacyPolicy } from "@/data/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Nibble Square collects, uses and protects information submitted through this website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        description={`Last updated ${privacyPolicy.lastUpdated}.`}
      />

      <Section aria-label="Privacy policy">
        <div className="mx-auto max-w-3xl space-y-12">
          {privacyPolicy.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-xl font-semibold sm:text-2xl">
                {section.heading}
              </h2>
              <div className="mt-3 space-y-3">
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="text-muted-foreground leading-relaxed text-pretty"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              {section.items && (
                <ul className="mt-3 space-y-2">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="text-muted-foreground flex gap-2.5 leading-relaxed"
                    >
                      <span className="text-primary" aria-hidden="true">
                        &bull;
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
