import { ArrowUpRightIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ProductScreenshotFigure } from "@/components/products/ProductScreenshotFigure";
import { ProductStatusBadge } from "@/components/products/ProductStatusBadge";
import type { Product } from "@/types/content";

type FeaturedProductProps = {
  product: Product;
};

/** Large treatment for the flagship product on the Products page. */
export function FeaturedProduct({ product }: FeaturedProductProps) {
  return (
    <article id={product.slug} className="scroll-mt-24">
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="accent">Flagship product</Badge>
        <ProductStatusBadge status={product.status} />
        {product.categories.map((category) => (
          <Badge key={category} variant="outline">
            {category}
          </Badge>
        ))}
      </div>

      <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        <div>
          <h2 className="text-3xl font-semibold sm:text-4xl">{product.name}</h2>
          <p className="text-foreground/80 mt-3 text-lg leading-relaxed text-pretty">
            {product.tagline}
          </p>
          <p className="text-muted-foreground mt-5 leading-relaxed text-pretty">
            {product.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {product.url && (
              <Button asChild>
                <a
                  href={product.url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Visit {product.name}
                  <ArrowUpRightIcon aria-hidden="true" />
                </a>
              </Button>
            )}
            <Button asChild variant="outline">
              <a href="#passlay-features">See what it does</a>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {product.stack.map((tech) => (
              <Badge key={tech} variant="outline" className="font-mono">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {product.screenshots[0] && (
          <ProductScreenshotFigure screenshot={product.screenshots[0]} />
        )}
      </div>

      {product.metrics.length > 0 && (
        <>
          <Separator className="mt-12" />
          <dl className="grid grid-cols-2 gap-6 py-8 sm:grid-cols-4">
            {product.metrics.map((metric) => (
              <div key={metric.label}>
                <dt className="text-muted-foreground text-xs">
                  {metric.label}
                </dt>
                <dd className="font-display mt-1 text-2xl font-semibold sm:text-3xl">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
          <p className="text-muted-foreground font-mono text-xs">
            {/* Flagged so these do not get published by accident. */}
            Placeholder figures — replace in src/data/products.ts
          </p>
        </>
      )}
    </article>
  );
}
