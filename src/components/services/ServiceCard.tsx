import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Service } from "@/types/content";

type ServiceCardProps = {
  service: Service;
  className?: string;
};

/** Compact card used in the homepage services teaser. */
export function ServiceCard({ service, className }: ServiceCardProps) {
  return (
    <Card className={cn("card-lift group h-full gap-4", className)}>
      <CardHeader>
        <span className="bg-accent text-accent-foreground mb-1 grid size-10 place-items-center rounded-lg transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110">
          <service.icon className="size-5" aria-hidden="true" />
        </span>
        <CardTitle className="text-base">{service.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {service.summary}
        </p>
      </CardContent>
    </Card>
  );
}
