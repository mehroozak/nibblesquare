import { CircleCheckIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { Service } from "@/types/content";

type ServiceDetailProps = {
  service: Service;
};

/** Full-width service block used on the Services page. */
export function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <article
      id={service.slug}
      className="scroll-mt-24 border-t py-12 first:border-t-0 first:pt-0 lg:py-16"
    >
      <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div>
          <span className="bg-accent text-accent-foreground grid size-11 place-items-center rounded-lg">
            <service.icon className="size-5" aria-hidden="true" />
          </span>
          <h2 className="mt-5 text-2xl font-semibold sm:text-3xl">
            {service.title}
          </h2>
          <p className="text-foreground/80 mt-3 text-lg leading-relaxed text-pretty">
            {service.summary}
          </p>
          <p className="text-muted-foreground mt-4 leading-relaxed text-pretty">
            {service.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {service.stack.map((tech) => (
              <Badge key={tech} variant="outline" className="font-mono">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="bg-muted/50 rounded-xl border p-6">
          <h3 className="font-mono text-xs font-medium tracking-[0.14em] uppercase">
            What that usually includes
          </h3>
          <ul className="mt-5 space-y-3.5">
            {service.deliverables.map((deliverable) => (
              <li key={deliverable} className="flex gap-3 text-sm">
                <CircleCheckIcon
                  className="text-primary mt-0.5 size-4 shrink-0"
                  aria-hidden="true"
                />
                <span className="leading-relaxed">{deliverable}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
