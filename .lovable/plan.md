# Detailed Service Pages

Add four dedicated pages under `/services/*` so each core offering has its own SEO-friendly, in-depth page linked from the Services grid.

## New routes

- `/services/etims-filing` — eTIMS onboarding, invoicing, monthly filing
- `/services/income-tax` — individual & corporate income tax, installment tax, planning
- `/services/vat` — VAT registration, monthly returns, input VAT reviews, KRA correspondence
- `/services/fixed-asset-management` — tagging, verification, updated fixed asset register, reporting

## Page structure (shared layout)

Each page uses `SiteHeader` + `SiteFooter` and follows the same sections so the site feels cohesive:

1. Hero band (eyebrow, H1, intro paragraph, "Book a consultation" CTA)
2. "What's included" — 4–6 bullet cards describing concrete deliverables
3. "Our process" — 3–4 numbered steps (e.g. Assess → Setup → File → Review)
4. "Who it's for" — short list of client types (SMEs, NGOs, corporates, sole proprietors)
5. FAQ — 3–4 questions tailored to the service (deadlines, penalties, documents needed)
6. CTA strip linking to `/contact`

Each route sets its own `head()` with a unique title, description, og:title, and og:description.

## Wiring changes

- Update the `services` array in `src/routes/index.tsx` and `src/routes/services.tsx` so the four detailed items become `<Link>`s to their new routes; Audit Support and Business Consultancy stay as non-linked cards for now.
- Add the four new URLs to `src/routes/sitemap[.]xml.ts`.

## Technical details

- Files: `src/routes/services.etims-filing.tsx`, `src/routes/services.income-tax.tsx`, `src/routes/services.vat.tsx`, `src/routes/services.fixed-asset-management.tsx` (dot-separated filenames map to `/services/etims-filing` etc.).
- Reuse existing design tokens (`--primary`, `--shadow-soft`, `--gradient-hero`) and `lucide-react` icons — no new dependencies.
- No backend or data layer changes; content is static copy authored in the route files.

## Out of scope

- Contact form submission backend
- Blog / case studies
- Multilingual content
