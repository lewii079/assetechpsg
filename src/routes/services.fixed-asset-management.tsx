import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { Tag, ClipboardList, Boxes, RefreshCw, FileSpreadsheet, ScanBarcode } from "lucide-react";

export const Route = createFileRoute("/services/fixed-asset-management")({
  head: () => ({
    meta: [
      { title: "Fixed Asset Management, Tagging & Register — Assetech" },
      { name: "description", content: "Asset tagging, physical verification and IAS 16-aligned fixed asset registers for Kenyan businesses, NGOs and institutions. Assetech Nakuru." },
      { property: "og:title", content: "Fixed Asset Management — Assetech" },
      { property: "og:description", content: "Tag, verify, reconcile and control every asset you own." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Fixed Asset Management"
      title="Tag, verify and control every asset you own"
      intro="We build and maintain a reliable fixed asset register — from barcode tagging and physical verification to depreciation schedules that reconcile line-for-line with your audited accounts."
      overview={{
        heading: "Why the fixed asset register is the ledger auditors care about most",
        paragraphs: [
          "Property, plant and equipment is usually the single largest number on an SME's balance sheet — and the most badly kept. Assets get bought, moved, transferred to a branch, damaged, retired or quietly walk out the door, but the register in Excel keeps depreciating them for another five years. By the time the auditor arrives, nobody can prove what exists, what it's worth, or where it is.",
          "A fixed asset register is the detailed schedule of every capitalised asset you own — its tag number, description, location, custodian, purchase date, cost, useful life, depreciation method, accumulated depreciation and net book value. Done properly, it ties back to the general ledger to the shilling and gives the external auditor everything they need to sign off IAS 16 disclosures without a qualification.",
          "The practical job has two parts. First, a physical verification: every asset physically located and tagged with a durable barcode or QR label, then reconciled against the ledger — surplus assets capitalised, ghosts written off, transfers recorded. Second, ongoing maintenance: additions, disposals, revaluations and monthly depreciation processed as they happen so the register never falls out of date again.",
          "We do both. Our field teams handle the tagging and verification (often in a single mobilisation), our systems team sets up the register in your accounting or asset-management software, and our consultants maintain it monthly so audit season is a non-event.",
        ],
      }}
      whyImportant={[
        { title: "Audit qualifications avoided", desc: "PPE is one of the top three causes of audit qualifications in Kenya. A verified, reconciled register closes that risk cleanly, every year." },
        { title: "Accurate depreciation and tax", desc: "Wrong useful lives, missing disposals and duplicated assets distort depreciation, understate profits and inflate your tax bill. A clean register fixes all three." },
        { title: "Insurance claims that pay out", desc: "Insurers pay on documented losses. An itemised register with values, serials and photos means claims settle quickly and at full value — not at their assessor's estimate." },
        { title: "Loss and theft deterrence", desc: "Visible tagging plus periodic counts make it obvious when assets disappear, creating accountability and deterring quiet losses of laptops, tools and equipment." },
        { title: "Smarter capex decisions", desc: "Knowing what you own, where it is, how old it is and what it cost turns replacement and expansion decisions from guesswork into data." },
        { title: "Donor & regulatory compliance", desc: "NGOs, donor-funded projects, schools and public entities are contractually required to maintain accurate asset registers. A missing one puts current and future funding at risk." },
      ]}
      includes={[
        { icon: ScanBarcode, title: "Asset Tagging", desc: "Durable barcode or QR tags applied to every capitalised asset, with photos and GPS location captured." },
        { icon: ClipboardList, title: "Physical Verification", desc: "On-site counts to confirm existence, condition and location of every asset in the register." },
        { icon: FileSpreadsheet, title: "Register Build & Update", desc: "Clean, IAS 16-aligned fixed asset register with a full audit trail of every change." },
        { icon: RefreshCw, title: "Ledger Reconciliation", desc: "Line-for-line reconciliation of the register to your general ledger and audited accounts." },
        { icon: Boxes, title: "Additions & Disposals", desc: "Ongoing tracking of new acquisitions, transfers between locations and board-approved disposals." },
        { icon: Tag, title: "Depreciation Schedules", desc: "Monthly and annual depreciation journals produced in the method and rates your policy requires." },
      ]}
      process={[
        { title: "Baseline", desc: "Review existing records, agree tagging scope, capitalisation policy and useful lives." },
        { title: "Tag & Verify", desc: "Physically tag every asset and capture attributes, photos, custodian and location." },
        { title: "Reconcile", desc: "Match the count to the ledger, resolve variances and pass adjustment journals." },
        { title: "Maintain", desc: "Update the register monthly for additions, disposals, transfers and depreciation." },
      ]}
      whyAssetech={[
        { title: "Fixed assets is our name", desc: "Asset management is a core specialism, not a side service. Our teams do this every week across dozens of client sites." },
        { title: "Field teams with the right kit", desc: "Barcode printers, scanners, ruggedised tablets and durable tag stock — so tagging survives industrial, hospitality and outdoor environments." },
        { title: "IAS 16 done properly", desc: "Componentisation, residual values, useful-life reviews and impairment indicators handled the way IFRS actually requires." },
        { title: "Software-agnostic", desc: "We build the register in your existing ERP (Sage, SAP, QuickBooks, Zoho) or deploy a standalone asset-management system — whichever fits your workflow." },
        { title: "Audit-firm friendly", desc: "Our deliverables land in a format your external auditor already knows how to sample, test and sign off." },
        { title: "Nakuru + national reach", desc: "Based in Nakuru with field teams that mobilise to sites across Kenya — schools, hotels, factories, NGO offices — for cost-effective one-visit verifications." },
      ]}
      audience={[
        "NGOs and donor-funded projects requiring asset accountability",
        "Schools, universities, hospitals and hotels with large asset bases",
        "Manufacturing and construction firms with plant and equipment",
        "Companies preparing for first-time audit or investor due diligence",
        "Group companies consolidating registers across multiple sites",
        "Public entities and county-level institutions",
      ]}
      faqs={[
        { q: "How long does a first verification take?", a: "Timing depends on asset volume and locations, but most engagements complete within 2–4 weeks including tagging, reconciliation and delivery of the updated register." },
        { q: "What software do you use?", a: "We work with your existing ERP or provide a standalone register in Excel or a lightweight asset system — whichever suits your team and budget." },
        { q: "Do you handle disposals and transfers?", a: "Yes — we document board approvals, remove disposed items from the register, record inter-branch transfers and pass supporting journals for your accountant." },
        { q: "Will this help with our audit?", a: "Absolutely. A verified, reconciled register is one of the fastest ways to close audit findings on fixed assets and avoid a qualified opinion." },
        { q: "Can you handle multi-site verifications?", a: "Yes — we routinely tag and verify across multiple branches, campuses and project sites in a single coordinated engagement." },
      ]}
    />
  ),
});
