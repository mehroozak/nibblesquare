import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { siteConfig, socialLinks } from "@/data/site";

export function ContactDetails() {
  return (
    <div className="bg-muted/50 rounded-xl border p-7">
      <h2 className="text-lg font-semibold">Other ways to reach us</h2>

      <dl className="mt-6 space-y-6 text-sm">
        <div className="flex gap-3.5">
          <MailIcon
            className="text-muted-foreground mt-0.5 size-4 shrink-0"
            aria-hidden="true"
          />
          <div>
            <dt className="font-medium">Email</dt>
            <dd className="mt-1">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {siteConfig.email}
              </a>
            </dd>
          </div>
        </div>

        <div className="flex gap-3.5">
          <PhoneIcon
            className="text-muted-foreground mt-0.5 size-4 shrink-0"
            aria-hidden="true"
          />
          <div>
            <dt className="font-medium">Phone</dt>
            <dd className="text-muted-foreground mt-1">{siteConfig.phone}</dd>
          </div>
        </div>

        <div className="flex gap-3.5">
          <MapPinIcon
            className="text-muted-foreground mt-0.5 size-4 shrink-0"
            aria-hidden="true"
          />
          <div>
            <dt className="font-medium">Office</dt>
            <dd className="text-muted-foreground mt-1 not-italic">
              <address className="not-italic">
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.line2}
                <br />
                {siteConfig.address.country}
              </address>
            </dd>
          </div>
        </div>

        <div className="flex gap-3.5">
          <ClockIcon
            className="text-muted-foreground mt-0.5 size-4 shrink-0"
            aria-hidden="true"
          />
          <div>
            <dt className="font-medium">Response time</dt>
            <dd className="text-muted-foreground mt-1">
              Usually within one business day.
            </dd>
          </div>
        </div>
      </dl>

      <Separator className="my-6" />

      <div className="flex items-center gap-1">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={social.label}
            className="text-muted-foreground hover:bg-background hover:text-foreground grid size-9 place-items-center rounded-md transition-colors"
          >
            <social.icon className="size-4" aria-hidden="true" />
          </a>
        ))}
      </div>
    </div>
  );
}
