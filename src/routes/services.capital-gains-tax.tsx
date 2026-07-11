import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { Landmark, Calculator, FileSpreadsheet, ShieldCheck, MessageSquare, RefreshCcw } from "lucide-react";

export const Route = createFileRoute("/services/capital-gains-tax")({
  head: () => ({
    meta: [
      { title: "Capital Gains Tax (CGT) Services in Kenya — Assetech" },
      { name: "description", content: "CGT computation, iTax lodgement and exemption advice for property and share transfers in Kenya. Cleared before conveyancing, done right by Assetech Nakuru." },
      { property: "og:title", content: "Capital Gains Tax — Assetech" },
      { property: "og:description", content: "CGT computed, filed and settled cleanly ahead of property or share transfers." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Tax · CGT"
      title="Capital Gains Tax, cleared before conveyancing"
      intro="15% CGT on the transfer of land, buildings and unquoted shares — computed properly, filed on iTax, and cleared in time for your lawyer to complete the transfer."
      overview={{
        heading: "How CGT works in Kenya",
        paragraphs: [
          "Capital Gains Tax applies to the transfer of property situated in Kenya. Since 2023 the rate is 15% (up from 5%) of the net gain — sale price less acquisition cost, less qualifying incidental expenses and capital improvements. Transfers of land, buildings, and unquoted shares in private companies are all in scope.",
          "CGT is due at the point of transfer. Conveyancers, the Ministry of Lands and the Business Registration Service require proof of CGT settlement before they will register the transfer. Practically, this means CGT must be lodged and paid before your lawyer can complete the sale.",
          "Computation is where most transactions go wrong. Acquisition cost must be evidenced. Legal fees, stamp duty on purchase, valuation costs and documented capital improvements (extensions, new buildings) reduce the gain. Repairs and maintenance do not. Family transfers, transfers between spouses on divorce and certain corporate reorganisations may qualify for exemption.",
          "We prepare the CGT computation, gather supporting documents, lodge on iTax, generate the payment slip and coordinate with your conveyancer so the transfer completes without delay.",
        ],
      }}
      whyImportant={[
        { title: "Transfer will not complete without it", desc: "Land offices and the BRS block transfers where CGT proof is missing. Deals stall, buyers walk, prices renegotiate." },
        { title: "Rate has tripled", desc: "The 2023 jump from 5% to 15% means CGT is now a material line — poor computation can mean paying tax on gains you never actually made." },
        { title: "Reliefs left unclaimed", desc: "Improvements, incidental costs and inflation-adjusted base often go unclaimed. That overpaid tax is rarely recoverable later." },
        { title: "Exemptions have conditions", desc: "Spousal transfers, restructures and family group transfers can be exempt — but only if properly structured and documented at the time." },
        { title: "Multi-party transactions", desc: "Joint ownership, deceased estates and share buy-backs need careful CGT sequencing to avoid double taxation." },
        { title: "KRA verification", desc: "Large CGT filings attract KRA review. A well-supported computation clears verification quickly; a weak one delays completion for weeks." },
      ]}
      includes={[
        { icon: Calculator, title: "CGT Computation", desc: "Sale price, base cost, incidentals and improvements captured with evidence." },
        { icon: FileSpreadsheet, title: "Supporting Schedule", desc: "Full workings and document pack ready for KRA verification and audit." },
        { icon: Landmark, title: "iTax Lodgement", desc: "CGT return filed on iTax and payment slip generated ahead of conveyancing." },
        { icon: ShieldCheck, title: "Exemption Review", desc: "Assessment of spousal, family, restructure and estate reliefs before you file." },
        { icon: RefreshCcw, title: "Restructure Planning", desc: "Corporate share transfer and group restructure sequencing to manage CGT exposure." },
        { icon: MessageSquare, title: "Conveyancer Liaison", desc: "Direct coordination with your lawyer and buyer to keep completion on schedule." },
      ]}
      process={[
        { title: "Scope", desc: "Confirm the asset, parties and transaction structure." },
        { title: "Compute", desc: "Gather base cost, incidentals and improvements; compute the gain." },
        { title: "File", desc: "Lodge the CGT return on iTax and issue the payment slip." },
        { title: "Clear", desc: "Confirm receipt with KRA and share proof with your conveyancer." },
      ]}
      whyAssetech={[
        { title: "Deal-timeline aware", desc: "We work to your completion date. CGT should never be the reason a transfer slips." },
        { title: "Exemption expertise", desc: "We know which reliefs apply and how to document them so KRA accepts them first time." },
        { title: "Registered tax agents", desc: "We lodge and correspond with KRA on your behalf under our own credentials." },
        { title: "Multi-party experience", desc: "Estates, joint ownership, corporate carve-outs — we have sequenced them all." },
        { title: "Fixed transaction fee", desc: "One clear fee per transaction, agreed after scoping." },
        { title: "Straight advice", desc: "Where structuring can legitimately reduce CGT, we tell you. Where it cannot, we say so." },
      ]}
      audience={[
        "Individuals selling land or property",
        "Family estates handling inherited property",
        "Companies transferring real estate",
        "Founders selling shares in a private company",
        "Restructures involving intra-group share transfers",
      ]}
      faqs={[
        { q: "When is CGT payable — signing or completion?", a: "At transfer. Practically your conveyancer will not complete registration without CGT proof, so we file and pay before that milestone." },
        { q: "I inherited this property. What is the base cost?", a: "Inheritance transfers are generally exempt from CGT; the market value at inheritance becomes your base cost for the eventual sale." },
        { q: "Can renovations reduce my gain?", a: "Capital improvements (extensions, new structures) that increase the property's value reduce the gain if properly evidenced. Ordinary repairs do not." },
        { q: "Are share transfers in my company covered?", a: "Transfers of unquoted shares are in scope for CGT. Quoted-share transfers are subject to a different regime." },
      ]}
    />
  ),
});