"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CircleCheckIcon, Loader2Icon, SendIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  BUDGET_OPTIONS,
  TOPIC_OPTIONS,
  contactFormSchema,
  type ContactFormValues,
} from "@/components/contact/contactFormSchema";
import { siteConfig } from "@/data/site";

/**
 * FRONT-END ONLY — there is no backend yet.
 *
 * `onSubmit` currently simulates a request and shows a success state. To wire
 * this up for real, replace the body of `onSubmit` with a POST and add the
 * matching handler:
 *
 *   const response = await fetch("/api/contact", {
 *     method: "POST",
 *     headers: { "Content-Type": "application/json" },
 *     body: JSON.stringify(values),
 *   });
 *   if (!response.ok) throw new Error("Request failed");
 *
 * Then create `src/app/api/contact/route.ts`, re-validate with
 * `contactFormSchema` server-side (never trust the client), and hand off to an
 * email provider — Resend, Postmark or SendGrid all work. Add spam protection
 * (Turnstile or hCaptcha) at the same time.
 *
 * NOTE: adding a route handler makes this route dynamic. Everything else in the
 * site stays statically generated.
 */
export function ContactForm() {
  const [submitted, setSubmitted] = React.useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    // Stand-in for the network call described above.
    await new Promise((resolve) => setTimeout(resolve, 700));
    // Placeholder until a backend exists — remove once /api/contact is wired up.
    console.info("Contact form submission (not sent anywhere yet):", values);
    setSubmitted(true);
    form.reset();
  };

  if (submitted) {
    return (
      <div
        role="status"
        className="border-primary/30 bg-accent/40 rounded-xl border p-8 text-center"
      >
        <CircleCheckIcon
          className="text-primary mx-auto size-8"
          aria-hidden="true"
        />
        <h2 className="mt-4 text-xl font-semibold">Thanks — that came through</h2>
        <p className="text-muted-foreground mx-auto mt-3 max-w-md leading-relaxed text-pretty">
          We usually reply within one business day. In the meantime, you can
          reach us directly at{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-primary hover:underline"
          >
            {siteConfig.email}
          </a>
          .
        </p>
        <p className="text-muted-foreground mt-6 font-mono text-xs">
          Demo only — nothing was actually sent. Wire up a backend in
          ContactForm.tsx.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setSubmitted(false)}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Alex Moreau" autoComplete="name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="alex@company.com"
                    autoComplete="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company</FormLabel>
              <FormControl>
                <Input
                  placeholder="Optional"
                  autoComplete="organization"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="topic"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What is this about?</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose one" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {TOPIC_OPTIONS.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rough budget</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Optional" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {BUDGET_OPTIONS.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                  Helps us tell you quickly whether we are a fit.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What are you trying to do?</FormLabel>
              <FormControl>
                <Textarea
                  rows={6}
                  placeholder="The problem, who it affects, and any timeline you are working to."
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Detail is welcome — it makes the first reply far more useful.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-wrap items-center gap-4">
          <Button
            type="submit"
            size="lg"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? (
              <>
                <Loader2Icon className="animate-spin" aria-hidden="true" />
                Sending
              </>
            ) : (
              <>
                Send message
                <SendIcon aria-hidden="true" />
              </>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
