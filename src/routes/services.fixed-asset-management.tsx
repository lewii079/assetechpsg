import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { Tag, ClipboardList, Boxes, RefreshCw, FileSpreadsheet, ScanBarcode } from "lucide-react";

export const Route = createFileRoute("/services/fixed-asset-management")({
  head: () => ({
    meta: [
      { title: "Fixed Asset Management, Tagging & Register — Assetech" },
      { name: "description", content: "Asset tagging, physical verification and an always-updated fixed asset register for Kenyan organisations. Assetech Nakuru." },
      { property: "og:title", content: "Fixed Asset Management — Assetech" },
      { property: "og:description", content: "Tagging, verification and updated fixed asset registers." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Fixed Asset Management"
      title="Tag, verify and control every asset you own"
      intro="We build and maintain a reliable fixed asset register — from barcode tagging and physical verification to depreciation schedules that align with your audited accounts."
      whyItMatters={[
        { title: "Audit readiness", desc: "A verified, reconciled register is the single fastest way to close audit findings on property, plant and equipment and satisfy IAS 16 disclosures." },
        { title: "Accurate depreciation", desc: "Wrong asset lives and missing disposals distort depreciation, understate profits and inflate your tax bill. A clean register fixes both." },
        { title: "Loss and theft prevention", desc: "Tagging plus periodic counts make it obvious when assets go missing — deterring loss and creating an accountability trail for staff." },
        { title: "Insurance and claims", desc: "Insurers require an itemised asset list with values, serials and locations. A live register means faster claims and no under-insurance." },
        { title: "Smarter capex decisions", desc: "Knowing what you own, where it is and how old it is turns replacement and upgrade decisions from guesswork into data." },
        { title: "Regulatory compliance", desc: "NGOs, donor-funded projects and public entities are required to maintain accurate asset registers — a missing one puts funding at risk." },
      ]}
      includes={[
        { icon: ScanBarcode, title: "Asset Tagging", desc: "Durable barcode or QR tags applied to every capitalised asset." },
        { icon: ClipboardList, title: "Physical Verification", desc: "On-site counts to confirm existence, condition and location." },
        { icon: FileSpreadsheet, title: "Register Updates", desc: "Clean, audit-ready fixed asset register with full audit trail." },
        { icon: RefreshCw, title: "Reconciliation", desc: "Match the register to your general ledger and audited accounts." },
        { icon: Boxes, title: "Additions & Disposals", desc: "Ongoing tracking of new acquisitions, transfers and disposals." },
        { icon: Tag, title: "Depreciation Schedules", desc: "Monthly and annual depreciation aligned to your accounting policy." },
      ]}
      process={[
        { title: "Baseline", desc: "Review existing records and agree the tagging scope and policy." },
        { title: "Tag", desc: "Physically tag assets and capture attributes, photos and location." },
        { title: "Reconcile", desc: "Match the count to the ledger and resolve variances." },
        { title: "Maintain", desc: "Update the register for additions, disposals and transfers." },
      ]}
      audience={[
        "NGOs and donor-funded projects requiring asset accountability",
        "Schools, hospitals and hotels with large asset bases",
        "Manufacturing and construction firms",
        "Companies preparing for statutory audit",
      ]}
      faqs={[
        { q: "How long does a first verification take?", a: "Timing depends on asset volume and locations, but most engagements complete within 2–4 weeks including tagging and reconciliation." },
        { q: "What software do you use?", a: "We can work with your existing ERP or provide a standalone register in Excel or a lightweight asset system, whichever suits your team." },
        { q: "Do you handle disposals?", a: "Yes — we document board approvals, remove disposed items from the register and pass supporting entries for your accountant." },
        { q: "Can this help with audit?", a: "Absolutely. A verified, reconciled register is one of the fastest ways to close audit findings on fixed assets." },
      ]}
    />
  ),
});
