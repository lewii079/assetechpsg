## Goal

Every card that shows a "Learn more" link should lead to a dedicated detail page with a full description, importance, deliverables, process and FAQs.

## New tax detail routes

Add a dedicated page for each tax head on `/services/tax` so all cards have working Learn more links:

- `/services/tot` — Turnover Tax (3% on turnover KES 1M–25M, monthly by 20th)
- `/services/paye` — PAYE (graduated bands to 35%, NSSF/SHIF/Housing Levy/NITA, remit by 9th)
- `/services/withholding-tax` — Withholding Tax (5–20%, certificates, monthly by 20th)
- `/services/rental-income-tax` — Monthly Rental Income (MRI, 7.5% for KES 288K–15M, monthly by 20th)
- `/services/excise-duty` — Excise Duty (airtime, data, financial transactions, alcohol, sugary drinks)
- `/services/capital-gains-tax` — CGT (15% on property / unquoted share transfers)

Each page reuses `ServicePage` (hero, "What's included", "Our process", "Who it's for", FAQ, CTA) with:
- Full plain-language description of what the tax is and why it matters
- Who must register / file
- Rates, thresholds and deadlines
- 6 concrete deliverables (registration, filing, planning, KRA correspondence, health check, ongoing support)
- 4-step process
- 3–4 FAQs
- Unique `head()` (title, description, og:title, og:description)

## Wire up the tax index

In `src/routes/services.tax.tsx`, widen the `TaxItem.to` union to include the new routes and add `to` on every card so all 8 tax cards get a Learn more link.

## Enrich the Fixed Asset Management page

`src/routes/services.fixed-asset-management.tsx` already exists but is a bullet list. Add a "Why it matters" section (audit readiness, insurance, depreciation accuracy, loss prevention, IFRS/IAS 16 compliance, informed capex decisions) between the hero and "What's included" so clicking Learn more gives real depth.

Do this with a small, backward-compatible addition to `src/components/service-page.tsx`: add an optional `whyItMatters?: { title: string; desc: string }[]` prop that renders as a section before "What's included" when provided. Existing pages that don't pass it render unchanged.

Then populate `whyItMatters` on the Fixed Asset Management page with 4–6 points explaining the business importance.

## Sitemap

Add the six new tax detail URLs to `src/routes/sitemap[.]xml.ts`.

## Out of scope

- New content for Audit Support and Business Consultancy cards (they still have no `to` — separate request).
- Backend, forms, or dynamic data.
- Design changes to the shared `ServicePage` layout beyond the optional new section.
