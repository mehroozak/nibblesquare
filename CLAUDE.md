# CLAUDE.md

Guidance for Claude Code when working in this repo.

## What this is

The public marketing website for **Nibble Square**, a software development
company. Its flagship product is **Passlay**, an event ticketing and event
management platform (organisers create events, sell tickets, manage attendees;
gate staff scan tickets at entry).

Positioning matters when writing copy: Nibble Square is a company that builds
serious software products, of which Passlay is one — Passlay is proof of
capability, not the whole identity.

## Commands

```bash
npm run dev          # dev server on :3000
npm run build        # production build — every route must stay static
npm run typecheck    # tsc --noEmit
npm run lint         # eslint, treat warnings as errors
```

Run `typecheck` and `lint` before considering a change done. `next build` is the
real gate: if a route stops being marked `○ (Static)`, that is a regression
unless it was deliberate.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS v4 ·
shadcn/ui · next-themes · React Hook Form + Zod. No backend, no CMS, no database.

## Structure

```
src/
├── app/                  # routes, one folder per page + sitemap.ts, robots.ts
├── components/
│   ├── ui/               # shadcn-generated — vendored, do not hand-edit
│   ├── layout/           # header, footer, nav
│   ├── common/           # Section, SectionHeading, PageHero, CtaBanner, Logo, theme
│   │   └── icons/        # hand-rolled brand marks
│   └── <feature>/        # home, about, products, services, careers, testimonials, contact
├── data/                 # ALL site content — typed arrays
├── types/content.ts      # the content contract
└── lib/utils.ts          # cn()
```

## Conventions

**One component per file, always.** Including sub-components used by only one
parent. Never define a component inside another component's body. File name
matches the export (`ServiceCard.tsx` exports `ServiceCard`). Barrel files that
only re-export are the sole exception.

**shadcn/ui first.** Before building any UI element, check whether shadcn has the
primitive: `npx shadcn@latest add <component>`. If it needs composing from a few
primitives, build that composite in `components/<feature>/` or
`components/common/`. Only hand-roll when nothing fits.

**Never hand-edit `components/ui/`.** To vary a shadcn component, wrap it in a
custom component so `npx shadcn add` updates don't clobber the change.

**Forms** use shadcn `<Form>` (React Hook Form + Zod), never hand-rolled form
state. Define the Zod schema in a sibling `*Schema.ts` and derive types with
`z.infer<>`.

**TypeScript.** Prefer `type` over `interface` for props and unions. No `any` —
use `unknown` and narrow, or generics. Skip `React.FC`; type props directly.
Import via the `@/*` alias, not relative chains.

**Content never gets hardcoded into components.** Everything renders from
`src/data/`, shaped by `src/types/content.ts`. Adding a product, service,
testimonial, team member or job is a data change, not a component change. If you
find yourself writing copy inside a `.tsx` file, it probably belongs in `data/`.

## Theming

The palette is **"Slate + Signal Blue"** — neutral slate surfaces, one saturated
blue reserved for action. Defined as shadcn CSS-variable tokens in
`src/app/globals.css`, in OKLCH, with a matched `.dark` block.

Use semantic token classes (`bg-background`, `text-muted-foreground`,
`border-border`, `bg-primary`). **Never** use raw Tailwind colours
(`bg-slate-900`, `text-blue-600`) — they break dark mode and theme consistency.
To change the palette, edit the variables in `globals.css`; do not touch
component classes.

Typography: `font-display` (Space Grotesk) for headings — applied automatically
to `h1`–`h4` — `font-sans` (Inter) for body, `font-mono` (JetBrains Mono) for
eyebrows and labels.

Dark mode is `next-themes` with `attribute="class"`. Prefer CSS `dark:` variants
over component state; the theme toggle deliberately avoids a mount effect so
there is no hydration flash.

## Constraints

- **Keep every route static.** No `force-dynamic`, no server-side data fetching
  on page routes. The one acceptable dynamic route is a future
  `/api/contact` handler.
- **The ESLint config flags `setState` inside effects.** Both existing cases were
  solved without effects (CSS variants, `SheetClose`). Do the same rather than
  disabling the rule.
- **Placeholder content is marked.** Files carry `PLACEHOLDER` comments and
  several pages show visible mono-type labels. When replacing invented content,
  remove the corresponding marker and the label.
- No `localStorage`/`sessionStorage` beyond what `next-themes` manages.

## Accessibility

Semantic landmarks, one `h1` per page, `aria-labelledby` on sections,
`aria-current` on active nav links, skip-to-content link in the root layout,
`prefers-reduced-motion` respected in `globals.css`. Keep new work at this bar.
