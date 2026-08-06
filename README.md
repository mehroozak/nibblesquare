# Nibble Square — marketing site

Public marketing website for Nibble Square, a software development company, and
its flagship product **Passlay** (event ticketing and event management).

Next.js (App Router) · TypeScript · Tailwind CSS v4 · shadcn/ui · fully static (SSG).

---

> **Continuing this project?** Start with [`HANDOFF.md`](./HANDOFF.md) — setup,
> current state, and prioritised next steps. [`CLAUDE.md`](./CLAUDE.md) holds the
> architecture and coding conventions.

## Getting started

> **Important on first run:** an interrupted install left a partial
> `node_modules` in this folder. Clear it before installing:

```bash
rm -rf node_modules .next
npm install
npm run dev          # http://localhost:3000
```

Other scripts:

```bash
npm run build        # production build — every route prerenders to static HTML
npm run typecheck    # tsc --noEmit
npm run lint         # eslint
```

Verified: `tsc --noEmit` clean, `eslint` clean (zero warnings), `next build`
succeeds with all 10 routes marked `○ (Static)`.

---

## Brand direction

**Palette — "Slate + Signal Teal."** Near-neutral slate surfaces with a single
saturated teal — taken from the logo mark — reserved for action. Colour is
used sparingly so it never competes with product screenshots.

| Token | Light | Dark |
|---|---|---|
| `background` | `#FFFFFF` | `#080B12` |
| `foreground` | near-black slate | `#E8EDF5` |
| `primary` | `#1E7777` | `#41B2B2` |
| `accent` | `#DCF4F4` | `#003030` |
| `muted` | `#F1F5F9` | `#131A26` |
| `border` | `#E2E8F0` | `#1E293B` |

Defined as shadcn CSS-variable tokens in `src/app/globals.css`, in OKLCH so
light and dark stay perceptually matched. Change a value there and it
propagates through every shadcn component in both modes.

**Typography.** Space Grotesk (headings, `--font-display`) · Inter (body,
`--font-sans`) · JetBrains Mono (labels and eyebrows, `--font-mono`). Loaded via
`next/font/google` in `src/app/layout.tsx` — self-hosted at build time, so no
render-blocking request to Google.

**Dark mode.** `next-themes` with `attribute="class"`, defaulting to system.
Toggle lives in the header; icons swap via CSS `dark:` variants, so there is no
hydration flash.

---

## Project structure

```
src/
├── app/                      # routes — one folder per page
│   ├── layout.tsx            # fonts, theme provider, header/footer, base metadata
│   ├── page.tsx              # homepage
│   ├── about/ products/ services/ careers/ testimonials/ contact/
│   ├── not-found.tsx
│   ├── sitemap.ts            # generated from the nav data
│   └── robots.ts
├── components/
│   ├── ui/                   # shadcn-generated — treat as vendored, don't hand-edit
│   ├── layout/               # SiteHeader, SiteFooter, DesktopNav, MobileNav
│   ├── common/               # Section, SectionHeading, PageHero, CtaBanner, Logo, theme
│   │   └── icons/            # hand-rolled brand marks (lucide dropped these in v1)
│   ├── home/ about/ products/ services/ careers/ testimonials/ contact/
├── data/                     # ALL site content lives here (see below)
├── types/content.ts          # the content contract
└── lib/utils.ts              # cn()
```

One component per file throughout. To vary a shadcn component, wrap it rather
than editing `components/ui/` — that keeps `npx shadcn add` updates safe.

`components.json` is present, so `npx shadcn@latest add <component>` works
normally. (The components currently in `ui/` were written directly against the
shadcn sources because the registry was unreachable from the build sandbox —
they are the standard Tailwind-v4 `data-slot` versions.)

---

## Content — all in `src/data/`

Every list on the site is a typed array, shaped by `src/types/content.ts`. To
move to a CMS or API later, keep the types as the contract and replace these
modules with fetchers returning the same shapes.

| File | Contains |
|---|---|
| `site.ts` | Company name, contact details, address, nav, footer, socials |
| `company.ts` | Story, values, process steps, stats |
| `services.ts` | The five service offerings |
| `products.ts` | Passlay + portfolio entries |
| `testimonials.ts` | All testimonial quotes |
| `team.ts` | Team member bios |
| `careers.ts` | Job listings and perks |

**Adding a product** is a data change, not a design change — append to
`products.ts`. `featured: true` renders the large flagship treatment; anything
else renders as a card in the "Other work" grid.

**Hiding a job** without deleting it: set `open: false`.

---

## ⚠️ Placeholder content — replace before launch

Everything below is invented. Placeholders are also flagged inline in the code
with `PLACEHOLDER` comments, and several are visibly labelled on the page in
mono type so nothing ships by accident.

| What | Where |
|---|---|
| **All job listings and perks** | `data/careers.ts` |
| **Contact details** — email and availability line still invented (phone and address are real) | `data/site.ts` |
| **Social URLs** — GitHub and LinkedIn are real; X handle is still invented | `data/site.ts` |
| **Domain** `nibblesquare.com` — drives canonical + OG URLs | `data/site.ts` |
| **Passlay URL** `passlay.com` | `data/products.ts` |
| **Passlay metrics** — tickets processed, uptime, etc. | `data/products.ts` |
| **Passlay screenshots** — render as labelled frames | `data/products.ts` |
| **Company story, founding year, stats** | `data/company.ts` |

Also missing: OG share image (`/opengraph-image.png`) and a real favicon.

### Replacing screenshot placeholders

`ScreenshotPlaceholder` renders a labelled browser frame. Once real captures are
in `/public/products/passlay/`, swap its inner div for:

```tsx
<Image src={screenshot.src} alt={screenshot.alt} fill className="object-cover" sizes="..." />
```

---

## Contact form — front-end only

`src/components/contact/ContactForm.tsx` uses shadcn `<Form>` (React Hook Form +
Zod). `onSubmit` currently simulates a request and shows a success state —
nothing is sent anywhere.

To make it real:

1. Replace the `setTimeout` in `onSubmit` with a `POST` to `/api/contact`.
2. Create `src/app/api/contact/route.ts` and re-validate with the exported
   `contactFormSchema` server-side — never trust the client copy.
3. Hand off to an email provider (Resend, Postmark, SendGrid).
4. Add spam protection (Turnstile or hCaptcha).

Adding that route makes only `/api/contact` dynamic; every page stays static.

Careers applications currently go to a `mailto:` link — no backend needed.

---

## SEO & accessibility

- Per-page `metadata` (title, description, canonical); title template and
  OG/Twitter defaults in the root layout.
- `sitemap.xml` and `robots.txt` generated from the nav data.
- Semantic landmarks throughout, skip-to-content link, `aria-current` on active
  nav items, labelled sections, `prefers-reduced-motion` respected.
- Fonts self-hosted via `next/font` with `display: swap`.

---

## Open questions

1. **Passlay's real URL** — is `passlay.com` right, or should the CTA be removed?
2. **Company details** — founding year, headcount, whether to publish an address.
3. **Metrics** — do you have real Passlay numbers, or should that block go?
