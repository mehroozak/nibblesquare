import Link from "next/link";
import { ArrowRightIcon, ArrowUpRightIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/common/Section";
import { ProductScreenshotFigure } from "@/components/products/ProductScreenshotFigure";
import { featuredProduct } from "@/data/products";

export function FeaturedProductCallout() {
  if (!featuredProduct) return null;

  return (
    <Section muted aria-labelledby="featured-product-title">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal direction="right">
          <p className="text-primary font-mono text-xs font-medium tracking-[0.14em] uppercase">
            Our product
          </p>
          <h2
            id="featured-product-title"
            className="mt-3 text-3xl font-semibold sm:text-4xl"
          >
            {featuredProduct.name}
          </h2>
          <p className="text-foreground/80 mt-3 text-lg leading-relaxed text-pretty">
            {featuredProduct.tagline}
          </p>
          <p className="text-muted-foreground mt-4 leading-relaxed text-pretty">
            {featuredProduct.summary} We built it, we run it, and we carry the
            pager for it — which is a large part of why we build client software
            the way we do.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {featuredProduct.categories.map((category) => (
              <Badge key={category} variant="outline">
                {category}
              </Badge>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="group">
              <Link href="/products#passlay">
                Explore Passlay
                <ArrowRightIcon
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </Button>
            {featuredProduct.url && (
              <Button asChild variant="outline">
                <a
                  href={featuredProduct.url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Visit the live product
                  <ArrowUpRightIcon aria-hidden="true" />
                </a>
              </Button>
            )}
          </div>
        </Reveal>

        {featuredProduct.screenshots[0] && (
          <Reveal direction="left" delay={120} distance={26}>
            <ProductScreenshotFigure
              screenshot={featuredProduct.screenshots[0]}
            />
          </Reveal>
        )}
      </div>
    </Section>
  );
}
