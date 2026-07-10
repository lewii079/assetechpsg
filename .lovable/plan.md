## Goal

Five top-level service pages — one per service — each with a deep, plain-language explanation of the service, why it matters, and why to choose Assetech. Not a tree of sub-pages per tax head.

## The five service pages

1. **eTIMS & iTax** → `/services/etims-filing` (existing route, rewritten)
2. **Tax** → `/services/tax` (existing route, rewritten as one long page covering VAT, Income Tax, PAYE, TOT, WHT, Rental, Excise, CGT as sections — not links out)
3. **Audit & Assurance** → `/services/audit-assurance` (new)
4. **Fixed Asset Management** → `/services/fixed-asset-management` (existing, rewritten)
5. **Business Consultancy** → `/services/business-consultancy` (new)

## Extend the shared ServicePage template

Add optional props to `src/components/service-page.tsx` so each page can carry the deeper narrative without breaking existing pages:

- `overview: { heading: string; paragraphs: string[] }` — 3–5 paragraph plain-language explanation of what the service is, rendered right after the hero.
- `whyImportant: { title: string; desc: string }[]` — 4–6 cards on why the service matters (risk, penalties, growth, compliance, decision-making).
- `whyAssetech: { title: string; desc: string }[]` — 4–6 cards on why choose Assetech (qualified consultants, Nakuru presence, KRA experience, sector coverage, technology, response times).
- `subServices?: { title: string; desc: string; bullets: string[] }[]` — used mainly by the Tax page to cover each tax head inline (VAT, Income Tax, PAYE, TOT, WHT, MRI, Excise, CGT) as detailed sections instead of separate routes.

Existing sections (`whyItMatters`, `includes`, `process`, `audience`, `faqs`) stay; new props render only when passed.

## Content plan per page

Each page uses the same rich structure:
- Hero (eyebrow, title, intro)
- Overview (3–5 paragraphs)
- Why this service is important (cards)
- What's included / deliverables (existing `includes` grid, 6 items)
- Sub-services section (Tax page only: 8 tax heads inline)
- Our process (4 steps)
- Why choose Assetech (cards)
- Who it's for
- FAQs (4–6)
- CTA

### 1. eTIMS & iTax (`services.etims-filing.tsx`)
Overview: what eTIMS is, KRA mandate, iTax portal, who must onboard, real-time invoice transmission, monthly filing cycle.
Why important: penalties (KES 1M or 2× tax), input VAT disallowance for buyers, audit exposure, cash-flow impact.
Why Assetech: registered consultants, hands-on with eTIMS Online/Client/VSCU, backfill experience, training for staff.

### 2. Tax (`services.tax.tsx`)
Overview: Kenya's self-assessment regime, iTax, calendar, penalties framework.
Why important: compliance, penalty avoidance, planning, refunds, KRA relationship.
Sub-services (inline detailed sections): VAT, Income Tax (individual & corporate), PAYE + statutory (NSSF/SHIF/AHL/NITA), TOT, Withholding Tax, Monthly Rental Income, Excise Duty, Capital Gains Tax. Each has 2–3 paragraph explanation + rate/deadline + who it applies to.
Why Assetech: multi-tax coverage, KRA correspondence handled, planning not just filing.

### 3. Audit & Assurance (`services.audit-assurance.tsx`, new)
Overview: statutory audit under Companies Act 2015, ISA framework, internal audit, donor/grant audits, forensic reviews.
Why important: regulator/lender/donor confidence, fraud detection, board assurance, insurance.
Includes: audit prep, working papers, internal audit function, risk & controls, forensic reviews, donor compliance.
Why Assetech: ICPAK-aligned methodology, audit-firm-ready deliverables, sector experience.

### 4. Fixed Asset Management (`services.fixed-asset-management.tsx`, rewritten)
Overview: what a fixed asset register is, tagging & barcoding, physical verification, IAS 16 componentisation, depreciation policy.
Why important: audit adjustments, insurance claims, capex decisions, loss/theft prevention, IFRS compliance.
Includes: tagging, verification, register build/update, depreciation schedules, disposal management, capex advisory.
Why Assetech: field teams, barcode hardware, integration with accounting systems.

### 5. Business Consultancy (`services.business-consultancy.tsx`, new)
Overview: bookkeeping, management accounts, budgeting & cash flow, SOPs, business registration, systems rollout (QuickBooks/Sage/Zoho), compliance training.
Why important: informed decisions, funder readiness, scaling without chaos, staff capability.
Includes: bookkeeping, management reporting, budgeting, systems setup, SOP writing, training.
Why Assetech: cross-functional team (accountants + tax + audit), Nakuru presence for onsite work.

## Wire up the services index

In `src/routes/services.tsx`:
- Trim to five cards (merge current "eTIMS Onboarding & Filing" → "eTIMS & iTax").
- Add `to` on all five so every card links to its detail page.
- Add a short lead-in above the grid explaining that each service page has the full detail.

## Cleanup / route hygiene

The eight per-tax-head route files (`services.paye.tsx`, `services.tot.tsx`, `services.vat.tsx`, `services.income-tax.tsx`, `services.withholding-tax.tsx`, `services.rental-income-tax.tsx`, `services.excise-duty.tsx`, `services.capital-gains-tax.tsx`) are no longer part of the requested structure. Options:

- **A. Delete them** (cleanest — everything about Tax lives on `/services/tax`).
- **B. Keep as hidden deep-links** (they stay accessible if someone has the URL, but nothing links to them).

Default: **A. Delete**, since the user asked for one Tax page. Confirm below.

## Sitemap

Update `src/routes/sitemap[.]xml.ts` to list exactly the 5 service URLs plus root pages; remove the per-tax URLs if we delete them.

## Out of scope

- Backend, forms, CMS, pricing.
- Design overhaul beyond additive sections in `ServicePage`.
- New services beyond the five listed.

## Question before I build

Delete the eight per-tax-head sub-pages (recommended), or keep them as hidden deep-links? Default is delete.
