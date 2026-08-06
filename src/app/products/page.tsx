import type { Metadata } from "next";

import { CtaBanner } from "@/components/common/CtaBanner";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { FeaturedProduct } from "@/components/products/FeaturedProduct";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductFeatureGrid } from "@/components/products/ProductFeatureGrid";
import { ProductScreenshotFigure } from "@/components/products/ProductScreenshotFigure";
import { Reveal } from "@/components/common/Reveal";
import { featuredProduct, otherProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Passlay is our flagship product — an event ticketing and event management platform for organisers, from ticket sales through to gate scanning. See what we have built.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="What we have built"
        description="Our own products and selected client work. Passlay is the flagship — it is the clearest answer to what this team can build and keep running."
      />

      {featuredProduct && (
        <>
          <Section>
            <FeaturedProduct product={featuredProduct} />
          </Section>

          {/* Passlay capabilities */}
          <Section
            muted
            id="passlay-features"
            aria-labelledby="passlay-features-title"
            className="scroll-mt-16"
          >
            <SectionHeading
              eyebrow="Passlay"
              title={
                <span id="passlay-features-title">
                  Everything an organiser needs, in one system
                </span>
              }
              description="Publish the event, sell the tickets, manage the attendees, run the door. No exports between four tools."
            />
            <div className="mt-14">
              <ProductFeatureGrid features={featuredProduct.features} />
            </div>
          </Section>

          {/* Screenshots */}
          {featuredProduct.screenshots.length > 1 && (
            <Section aria-labelledby="passlay-screens-title">
              <SectionHeading
                eyebrow="A look inside"
                title={<span id="passlay-screens-title">Passlay in use</span>}
                description="Illustrated interpretations of the real screens — swap in genuine captures when you have them."
              />
              <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {featuredProduct.screenshots.map((screenshot, index) => (
                  <Reveal key={screenshot.src} direction="up" delay={index * 110}>
                    <ProductScreenshotFigure screenshot={screenshot} />
                  </Reveal>
                ))}
              </div>
            </Section>
          )}
        </>
      )}

      {/* Additional products — this grid grows as products are added to the data file. */}
      {otherProducts.length > 0 && (
        <Section muted aria-labelledby="other-products-title">
          <SectionHeading
            eyebrow="Also in the portfolio"
            title={<span id="other-products-title">Other work</span>}
            description="Additional products and client platforms. Each entry renders from the same type, so adding one is a data change rather than a redesign."
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherProducts.map((product) => (
              <li key={product.slug}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        </Section>
      )}

      <CtaBanner
        title="Want something like this built?"
        description="Passlay is what we do when we own the problem end to end. We take the same approach to client work."
        secondaryLabel="See our services"
        secondaryHref="/services"
      />
    </>
  );
}
