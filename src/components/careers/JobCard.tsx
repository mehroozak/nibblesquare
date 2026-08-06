import { BriefcaseIcon, MapPinIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/data/site";
import type { JobListing } from "@/types/content";

type JobCardProps = {
  job: JobListing;
};

export function JobCard({ job }: JobCardProps) {
  const mailto = `mailto:${siteConfig.careersEmail}?subject=${encodeURIComponent(
    `Application: ${job.title}`,
  )}`;

  return (
    <li className="rounded-xl border p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{job.title}</h3>
          <div className="text-muted-foreground mt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            <span className="inline-flex items-center gap-1.5">
              <BriefcaseIcon className="size-3.5" aria-hidden="true" />
              {job.department} · {job.level}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPinIcon className="size-3.5" aria-hidden="true" />
              {job.location}
            </span>
          </div>
        </div>
        <Badge variant="secondary" className="shrink-0">
          {job.type}
        </Badge>
      </div>

      <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
        {job.summary}
      </p>

      <Accordion type="single" collapsible className="mt-2">
        <AccordionItem value={job.id} className="border-b-0">
          <AccordionTrigger>Full description</AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-8 pt-2 sm:grid-cols-2">
              <div>
                <h4 className="font-mono text-xs font-medium tracking-[0.14em] uppercase">
                  What you would do
                </h4>
                <ul className="text-muted-foreground mt-4 space-y-2.5">
                  {job.responsibilities.map((item) => (
                    <li key={item} className="flex gap-2.5 leading-relaxed">
                      <span
                        aria-hidden="true"
                        className="bg-primary mt-2 size-1 shrink-0 rounded-full"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-mono text-xs font-medium tracking-[0.14em] uppercase">
                  What we are looking for
                </h4>
                <ul className="text-muted-foreground mt-4 space-y-2.5">
                  {job.requirements.map((item) => (
                    <li key={item} className="flex gap-2.5 leading-relaxed">
                      <span
                        aria-hidden="true"
                        className="bg-primary mt-2 size-1 shrink-0 rounded-full"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button asChild size="sm" className="mt-4">
        {/* No backend: applications go to a mailto for now. */}
        <a href={mailto}>Apply for this role</a>
      </Button>
    </li>
  );
}
