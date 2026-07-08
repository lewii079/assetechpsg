import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { Percent, FileCheck2, MessageSquare, ShieldCheck, FileSpreadsheet, RefreshCw } from "lucide-react";

export const Route = createFileRoute("/services/withholding-tax")({
  head: () => ({
    meta: [
      { title: "Withholding Tax (WHT) Compliance — Assetech" },
      { name: "description", content: "Withholding Tax computation, certificates, remittance and reconciliation for Kenyan businesses. Assetech Nakuru." },
      { property: "og:title", content: "Withholding Tax — Assetech" },
      { property: "og:description", content: "Deduct, remit and reconcile WHT with confidence." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Withholding Tax"
      title="Withholding Tax done right, both sides of the invoice"
      intro="Withholding Tax (WHT) is tax deducted at source on specified payments — professional fees, rent, interest, dividends, royalties and management fees. Rates range from 5% to 20% depending on the payment and whether the recipient is resident. We handle deduction, remittance and reconciliation so nothing slips through."
      whyItMatters={[
        { title: "Who must deduct WHT", desc: "Any person or business making a qualifying payment: companies, partnerships, NGOs and government agencies. The obligation sits with the payer, not the recipient." },
        { title: "Common WHT rates", desc: "Professional fees to residents 5%, management fees 5%, rent for commercial property 10%, dividends 5%–15%, interest 15%, royalties 5%–20%, and 20% for most payments to non-residents (subject to double tax treaties)." },
        { title: "Certificates and credits", desc: "Every deduction generates a WHT certificate that the recipient uses as a tax credit against their income tax. Missing certificates mean lost credits and double taxation." },
        { title: "Deadlines and penalties", desc: "WHT must be remitted by the 20th of the following month. Failure to withhold makes the payer personally liable, plus a 10% penalty and 1% monthly interest." },
      ]}
      includes={[
        { icon: Percent, title: "WHT Computation", desc: "Correct rate applied to every payment based on type and residency." },
        { icon: FileCheck2, title: "Certificate Issuance", desc: "iTax-generated WHT certificates shared with every vendor." },
        { icon: FileSpreadsheet, title: "Monthly Return", desc: "WHT return prepared and filed on iTax by the 20th." },
        { icon: RefreshCw, title: "WHT Reconciliation", desc: "Match credits on your iTax ledger to invoices from customers." },
        { icon: MessageSquare, title: "KRA Correspondence", desc: "Responses to WHT audits and unmatched credit queries." },
        { icon: ShieldCheck, title: "WHT Health Check", desc: "Review of prior payments for missed or over-deducted WHT." },
      ]}
      process={[
        { title: "Classify", desc: "Determine whether each payment is WHT-eligible and at what rate." },
        { title: "Deduct", desc: "Withhold the correct amount at the point of payment." },
        { title: "Remit", desc: "Generate payment slips and settle by the 20th." },
        { title: "Certify", desc: "Issue certificates and reconcile credits monthly." },
      ]}
      audience={[
        "Companies paying professional and management fees",
        "Landlords and tenants of commercial property",
        "Consultants and contractors receiving WHT credits",
        "Businesses paying non-resident suppliers",
      ]}
      faqs={[
        { q: "What is the WHT rate on professional fees?", a: "5% for resident recipients and 20% for non-residents (unless reduced by a double tax treaty). The payer must deduct at source." },
        { q: "Is WHT a final tax?", a: "For some payments (e.g. dividends, qualifying interest, winnings) WHT is final. For most business payments it is an advance credit against the recipient's income tax." },
        { q: "What happens if I forget to deduct WHT?", a: "The payer becomes personally liable for the WHT amount plus a 10% penalty and 1% interest per month. KRA can recover it directly from you." },
        { q: "Can I claim WHT deducted from my invoices?", a: "Yes — WHT credits on your iTax ledger reduce your income tax payable at year-end. We reconcile these credits every month." },
      ]}
    />
  ),
});