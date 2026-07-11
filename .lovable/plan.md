## Goal

1. Split the Tax page so each tax head is its own route (not stacked inline on `/services/tax`).
2. Add a Services dropdown in the top nav that lists every service page.
3. Keep the existing "Learn more" cards on `/services` (already correctly linked).

## 1. Split Tax into per-head routes

Currently `src/routes/services.tax.tsx` renders VAT, Income Tax, PAYE/statutory, TOT, WHT, Rental, Excise and CGT as inline `subServices` on one page. Replace with:

- `/services/tax` → overview hub page: intro, "why tax matters", short cards linking out to each tax head, process, why Assetech, FAQs. No more inline sub-service walls.
- New route files, each a full `ServicePage` (hero, overview 3–4 paragraphs, whyImportant, includes, process, whyAssetech, audience, FAQs):
  - `src/routes/services.vat.tsx` → `/services/vat`
  - `src/routes/services.income-tax.tsx` → `/services/income-tax`
  - `src/routes/services.paye.tsx` → `/services/paye` (covers PAYE + NSSF + SHIF + AHL + NITA together — they are filed on the same payroll cycle)
  - `src/routes/services.tot.tsx` → `/services/tot`
  - `src/routes/services.withholding-tax.tsx` → `/services/withholding-tax`
  - `src/routes/services.rental-income-tax.tsx` → `/services/rental-income-tax`
  - `src/routes/services.excise-duty.tsx` → `/services/excise-duty`
  - `src/routes/services.capital-gains-tax.tsx` → `/services/capital-gains-tax`

Each page: Kenya-specific rates/deadlines, why it matters, penalties, what Assetech does, why choose Assetech, FAQs.

## 2. Services dropdown in the header

Edit `src/components/site-header.tsx`:

- Desktop: replace the single "Services" link with a hover/focus dropdown. The label itself still navigates to `/services`; a caret opens a panel listing all service pages, grouped:
  - **Core services**: eTIMS & iTax, Tax (hub), Audit & Assurance, Fixed Asset Management, Business Consultancy
  - **Tax services**: VAT, Income Tax, PAYE & Statutory, TOT, Withholding Tax, Rental Income, Excise Duty, Capital Gains Tax
- Mobile menu: same links rendered as an indented sub-list under "Services", tap-to-navigate, closes the menu.
- Close on Escape, outside click, and link click. No new dependencies.

## 3. Services index (`src/routes/services.tsx`)

Unchanged — 5 core-service cards with `Learn more` links (already wired). The Tax card still points to `/services/tax`, which now becomes the hub linking to each tax-head page.

## 4. Sitemap

Add the 8 new tax URLs to `src/routes/sitemap[.]xml.ts`.

## Out of scope

- No design overhaul, no backend, no forms.
- No changes to About / Contact / Home / Footer.
- No changes to `ServicePage` template — its existing props already cover the per-head pages.
