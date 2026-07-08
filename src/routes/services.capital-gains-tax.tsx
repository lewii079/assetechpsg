import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { Building2, ClipboardCheck, FileSpreadsheet, MessageSquare, ShieldCheck, Calculator } from "lucide-react";

export const Route = createFileRoute("/services/capital-gains-tax")({
  head: () => ({
    meta: [
      { title: "Capital Gains Tax (CGT) Computation & Filing — Assetech" },
      { name: "description", content: "Capital Gains Tax at 15% on transfer of property and unquoted shares in Kenya. Computation, filing and conveyancing support by Assetech Nakuru." },
      { property: "og:title", content: "Capital Gains Tax (CGT) — Assetech" },
      { property: "og:description", content: "Compute, lodge and pay CGT before your property transfer." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Capital Gains Tax"
      title="Capital Gains Tax (CGT) on property and share transfers"
      intro="CGT is charged at 15% on the net gain arising from the transfer of immovable property (land and buildings) and unquoted shares in Kenya. It is payable by the transferor at the point of transfer — before the Ministry of Lands will register the new owner."
      whyItMatters={[
        { title: "When CGT is triggered", desc: "Sale, gift, exchange or transfer of Kenyan land, buildings or unquoted shares by any person — resident or non-resident. Marketable securities on the NSE are exempt." },
        { title: "How the gain is computed", desc: "Transfer value less adjusted cost (purchase price + stamp duty + legal fees + capital improvements + incidental costs of transfer). Losses can be carried forward against future capital gains." },
        { title: "Deadlines and process", desc: "CGT return and payment are due on or before the 20th of the month following the transfer. Conveyancing cannot complete at Lands until the CGT acknowledgement is produced." },
        { title: "Common exemptions", desc: "Transfers between spouses, transfers on death, private residence sold after 3+ years of occupation, and internal group restructures that meet KRA conditions. We confirm eligibility before filing." },
      ]}
      includes={[
        { icon: Calculator, title: "Gain Computation", desc: "Full CGT workings supported by valuations and cost evidence." },
        { icon: ClipboardCheck, title: "CGT Registration", desc: "Activate the CGT obligation on the transferor's KRA PIN." },
        { icon: Building2, title: "Return Filing", desc: "Prepare and lodge the CGT return on iTax." },
        { icon: FileSpreadsheet, title: "Documentation Pack", desc: "Sale agreement, prior title, valuations and cost schedules organised for KRA." },
        { icon: MessageSquare, title: "KRA & Lands Liaison", desc: "Follow-through with KRA and coordination with your conveyancer." },
        { icon: ShieldCheck, title: "Exemption Review", desc: "Assess whether an exemption or relief applies before you pay." },
      ]}
      process={[
        { title: "Review", desc: "Collect the sale agreement, title and cost history." },
        { title: "Compute", desc: "Calculate the gain, apply reliefs and confirm CGT payable." },
        { title: "File", desc: "Submit the CGT return and generate the payment slip." },
        { title: "Clear", desc: "Pay CGT and share the acknowledgement with your conveyancer." },
      ]}
      audience={[
        "Individuals selling land, plots or houses",
        "Companies disposing of buildings or investment property",
        "Shareholders exiting private (unquoted) companies",
        "Estate executors handling deceased-estate transfers",
      ]}
      faqs={[
        { q: "What is the CGT rate?", a: "15% of the net gain on transfer of Kenyan immovable property and unquoted shares. The rate was raised from 5% effective January 2023." },
        { q: "Is CGT paid by the buyer or seller?", a: "The seller (transferor). It is normally deducted by the advocate from the sale proceeds and paid over to KRA before Lands registers the transfer." },
        { q: "Are inherited properties subject to CGT?", a: "Transfers on death are exempt, but a subsequent sale by the beneficiary is subject to CGT — with the cost base stepped up to the market value at inheritance." },
        { q: "What if I sell at a loss?", a: "A capital loss is carried forward and offset against future capital gains from similar transactions. It cannot be offset against ordinary business income." },
      ]}
    />
  ),
});