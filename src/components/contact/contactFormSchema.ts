import { z } from "zod";

/**
 * Validation contract for the contact form.
 *
 * When a backend is added, reuse this exact schema on the server so the client
 * and API cannot drift — see the note in ContactForm.tsx for where to POST.
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Please enter your name.")
    .max(80, "That name is a little long."),
  email: z.email("Please enter a valid email address."),
  company: z.string().max(120).optional(),
  topic: z.enum(
    ["new-project", "passlay", "partnership", "something-else"],
    "Please choose what this is about.",
  ),
  budget: z
    .enum(["under-25k", "25k-75k", "75k-200k", "200k-plus", "not-sure"])
    .optional(),
  message: z
    .string()
    .min(20, "A little more detail helps us give a useful answer.")
    .max(4000, "Please keep this under 4000 characters."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const TOPIC_OPTIONS: { value: ContactFormValues["topic"]; label: string }[] =
  [
    { value: "new-project", label: "A new project" },
    { value: "passlay", label: "Passlay" },
    { value: "partnership", label: "Partnership" },
    { value: "something-else", label: "Something else" },
  ];

export const BUDGET_OPTIONS: {
  value: NonNullable<ContactFormValues["budget"]>;
  label: string;
}[] = [
  { value: "under-25k", label: "Under $25k" },
  { value: "25k-75k", label: "$25k – $75k" },
  { value: "75k-200k", label: "$75k – $200k" },
  { value: "200k-plus", label: "$200k+" },
  { value: "not-sure", label: "Not sure yet" },
];
