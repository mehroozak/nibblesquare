import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GeneratedAvatar } from "@/components/common/GeneratedAvatar";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types/content";

type TestimonialCardProps = {
  testimonial: Testimonial;
  className?: string;
};

export function TestimonialCard({
  testimonial,
  className,
}: TestimonialCardProps) {
  return (
    <Card className={cn("card-lift h-full", className)}>
      <CardContent className="flex h-full flex-col gap-6">
        <blockquote className="text-foreground/90 flex-1 text-[0.9375rem] leading-relaxed text-pretty">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>

        <footer className="flex items-center gap-3">
          <Avatar>
            {testimonial.avatarSrc && (
              <AvatarImage
                src={testimonial.avatarSrc}
                alt={`${testimonial.authorName}, ${testimonial.authorRole}`}
              />
            )}
            {/* No photo yet — a generated geometric mark beats a grey circle. */}
            <AvatarFallback className="bg-transparent p-0">
              <GeneratedAvatar name={testimonial.authorName} />
            </AvatarFallback>
          </Avatar>

          <div className="min-w-0">
            <p className="truncate text-sm font-medium">
              {testimonial.authorName}
            </p>
            <p className="text-muted-foreground truncate text-xs">
              {testimonial.authorRole}, {testimonial.company}
            </p>
          </div>

          {testimonial.relatedProduct && (
            <Badge variant="secondary" className="ml-auto shrink-0">
              {testimonial.relatedProduct}
            </Badge>
          )}
        </footer>
      </CardContent>
    </Card>
  );
}
