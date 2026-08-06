import { ArrowUpRightIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductStatusBadge } from "@/components/products/ProductStatusBadge";
import type { Product } from "@/types/content";

type ProductCardProps = {
  product: Product;
};

/**
 * Compact entry for non-flagship products. Adding another product to
 * src/data/products.ts renders here automatically — no layout work needed.
 */
export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card id={product.slug} className="hover:border-primary/40 scroll-mt-24 h-full transition-colors">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="text-xl">{product.name}</CardTitle>
          <ProductStatusBadge status={product.status} />
        </div>
        <p className="text-muted-foreground text-sm">{product.tagline}</p>
      </CardHeader>

      <CardContent className="space-y-5">
        <p className="text-sm leading-relaxed">{product.summary}</p>

        <div className="flex flex-wrap gap-2">
          {product.stack.map((tech) => (
            <Badge key={tech} variant="outline" className="font-mono">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="text-muted-foreground flex items-center justify-between border-t pt-4 text-xs">
          <span className="font-mono">{product.year}</span>
          {product.url && (
            <a
              href={product.url}
              target="_blank"
              rel="noreferrer noopener"
              className="text-foreground hover:text-primary inline-flex items-center gap-1 font-medium transition-colors"
            >
              Visit site
              <ArrowUpRightIcon className="size-3.5" aria-hidden="true" />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
