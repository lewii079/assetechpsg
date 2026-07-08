import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { Coins, ClipboardCheck, FileSpreadsheet, MessageSquare, ShieldCheck, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/services/tot")({
  head: () => ({
    meta: [
      { title: "Turnover Tax (TOT) Registration & Filing — Assetech" },
      { name: "description", content: "Turnover Tax at 3% on gross monthly sales for small businesses with turnover KES 1M–25M. Registration, monthly filing and KRA support by Assetech Nakuru." },
      { property: "og:title", content: "Turnover Tax (TOT) — Assetech" },
      { property: "og:description", content: "Simple, monthly tax for small businesses in Kenya. We handle it end-to-end." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Turnover Tax"
      title="Turnover Tax (TOT) made simple"
      intro="TOT is a simplified tax for small businesses in Kenya with annual turnover between KES 1 million and KES 25 million. It is charged at 3% of gross monthly sales, filed on iTax by the 20th of the following month, with no expense deductions and no complicated books required."
      whyItMatters={[
        { title: "Who it applies to", desc: "Sole proprietors, partnerships and companies whose turnover falls in the KES 1M–25M band. Below KES 1M you are exempt; above KES 25M you must register for VAT and Income Tax instead." },
        { title: "How it is charged", desc: "3% of gross sales (turnover) each month. There are no deductions for expenses, purchases or losses — the rate applies to the top line, which is why keeping accurate sales records matters." },
        { title: "Deadlines and penalties", desc: "Returns and payment are due by the 20th of the month following the sales period. Late filing attracts a KES 1,000 penalty per month plus 1% interest on unpaid tax." },
        { title: "When to graduate", desc: "As soon as your rolling 12-month turnover crosses KES 5M you become liable for VAT; at KES 25M you exit TOT completely. We monitor the threshold and manage the transition." },
      ]}
      includes={[
        { icon: ClipboardCheck, title: "TOT Registration", desc: "iTax registration and obligation activation on your PIN." },
        { icon: Coins, title: "Monthly Filing", desc: "Prepare and submit the TOT return by the 20th, every month." },
        { icon: FileSpreadsheet, title: "Sales Records", desc: "Simple monthly sales schedule and supporting workings." },
        { icon: MessageSquare, title: "KRA Correspondence", desc: "Responses to notices, assessments and penalty waivers." },
        { icon: ShieldCheck, title: "Compliance Review", desc: "Diagnostic check of prior returns and open obligations." },
        { icon: TrendingUp, title: "Graduation Planning", desc: "Guidance on moving from TOT to VAT and Income Tax when you outgrow the band." },
      ]}
      process={[
        { title: "Register", desc: "Add the TOT obligation to your KRA PIN and confirm status." },
        { title: "Record", desc: "Capture monthly sales into a simple, auditable schedule." },
        { title: "File", desc: "Submit the return on iTax and generate the payment slip." },
        { title: "Pay", desc: "Settle via M-Pesa Paybill, bank or agent before the 20th." },
      ]}
      audience={[
        "Small retail shops, salons, hardwares and eateries",
        "Online sellers and small service providers",
        "New businesses in their first year of trading",
        "Sole proprietors moving from informal to compliant",
      ]}
      faqs={[
        { q: "What is the TOT rate?", a: "3% of gross monthly sales. There are no deductions for cost of sales, rent, salaries or any other expense." },
        { q: "Who cannot register for TOT?", a: "Rental income, management/professional fees, and any business with turnover above KES 25M or below KES 1M are excluded. Incorporated professionals also do not qualify." },
        { q: "Do I still need to file if I made no sales?", a: "Yes. A nil return must be filed by the 20th; failure attracts a KES 1,000 penalty per month." },
        { q: "Can TOT and VAT run together?", a: "No. Once you register for VAT you must deregister from TOT and switch to normal Income Tax with allowable expense deductions." },
      ]}
    />
  ),
});