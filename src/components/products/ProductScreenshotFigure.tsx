import Image from "next/image";

import { BrowserFrame } from "@/components/mockups/BrowserFrame";
import { ProductMockup } from "@/components/mockups/ProductMockup";
import { hasMockup } from "@/components/mockups/mockupRegistry";
import { cn } from "@/lib/utils";
import type { ProductScreenshot } from "@/types/content";

type ProductScreenshotFigureProps = {
  screenshot: ProductScreenshot;
  /** Address shown in the frame's fake URL bar. */
  url?: string;
  className?: string;
};

/**
 * Renders a product screen inside browser chrome.
 *
 * Screens with a registered illustrated mockup render as vector artwork
 * (theme-aware and animated); anything else renders a real <Image> from the
 * screenshot's path, so swapping in a genuine capture is a drop-in change.
 */
export function ProductScreenshotFigure({
  screenshot,
  url,
  className,
}: ProductScreenshotFigureProps) {
  const illustrated = hasMockup(screenshot.src);

  return (
    <figure className={cn("group", className)}>
      <BrowserFrame url={url} className="card-lift">
        <div className="bg-card relative aspect-16/10 overflow-hidden">
          {illustrated ? (
            <ProductMockup
              src={screenshot.src}
              className="absolute inset-0 h-full w-full"
            />
          ) : (
            <Image
              src={screenshot.src}
              alt={screenshot.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover object-top"
            />
          )}
        </div>
      </BrowserFrame>
      <figcaption className="text-muted-foreground mt-3 text-sm">
        {screenshot.caption}
      </figcaption>
    </figure>
  );
}
