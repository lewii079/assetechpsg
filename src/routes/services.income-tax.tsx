import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { FileSpreadsheet, Calculator, Landmark, ShieldCheck, RefreshCcw, MessageSquare } from "lucide-react";

export const Route = createFileRoute("/services/income-tax")({
  head: () => ({
    meta: [
      { title: "Income Tax Services Kenya — Individual & Corporate Returns | Assetech" },
      { name: "description", content: "Corporate and individual income tax returns, installment tax, capital allowances and tax planning by Assetech Nakuru. Filed accurately on iTax with full supporting schedules." },
      { property: "og:title", content: "Income Tax Services — Assetech" },
      { property: "og:description", content: "Annual returns, installment tax and planning for individuals and companies." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Tax · Income Tax"
      title="Income tax done properly, not just filed"
      intro="Annual returns, quarterly installment tax, capital allowances and legitimate planning — for individuals, sole proprietors, partnerships and limited companies."
      overview={{
        heading: "Kenyan income tax at a glance",
        paragraphs: [
          "Resident companies pay corporation tax at 30% on chargeable profits. Branches of non-resident companies pay 37.5%. Newly listed companies and businesses in specific zones enjoy reduced rates for limited periods. Companies file the annual return (IT2C) within six months of financial year end.",
          "Individuals — employees, sole proprietors, professionals and landlords who do not qualify for TOT or MRI — file annually on iTax by 30 June for the previous calendar year. Employment income tax is deducted at graduated rates from 10% up to 35% on the top band, with personal reliefs applied.",
          "Anyone expecting a tax liability above KES 40,000 for the year must pay installment tax quarterly — on the 20th day of the 4th, 6th, 9th and 12th month of the year — based on prior-year tax or a current-year estimate. Missing installments attracts 20% penalty plus interest.",
          "We prepare the computation, apply every capital allowance you are entitled to under the Income Tax Act, reconcile against your management accounts, file on iTax and advise on installment strategy for the year ahead.",
        ],
      }}
      whyImportant={[
        { title: "Six-figure penalty exposure", desc: "5% late-filing penalty (minimum KES 20,000 for companies), 5% late payment, plus 1% monthly interest — compounding quietly until you notice." },
        { title: "TCC gateway", desc: "No income tax return means no tax compliance certificate, no tenders, no critical licence renewals and no property transfers." },
        { title: "Capital allowances left on the table", desc: "Investment deduction, wear and tear on qualifying assets, and industrial building allowances routinely go unclaimed — pure overpayment of tax." },
        { title: "Installment tax discipline", desc: "Planned installments protect cash flow. Missing them creates a 20% penalty and a lump sum that hurts far more at year-end." },
        { title: "Loss utilisation", desc: "Tax losses can be carried forward for up to 10 years — but only if declared and tracked. We make sure they show up when profitability returns." },
        { title: "Audit-ready computations", desc: "A clean, well-supported computation is your first line of defence when KRA opens a review." },
      ]}
      includes={[
        { icon: FileSpreadsheet, title: "Annual Return", desc: "Corporate (IT2C) or individual return with computation and supporting schedules." },
        { icon: Calculator, title: "Installment Tax", desc: "Quarterly computations, payment slips and estimate updates." },
        { icon: Landmark, title: "Capital Allowances", desc: "Investment deduction, wear and tear, and industrial building schedules maintained year to year." },
        { icon: RefreshCcw, title: "Back-year Returns", desc: "Reconstruction and filing of prior-year returns to close open exposures." },
        { icon: MessageSquare, title: "KRA Correspondence", desc: "Handling of assessments, notices, objections and refund follow-ups." },
        { icon: ShieldCheck, title: "Tax Planning", desc: "Structuring, timing of capex and dividend strategy to reduce your effective rate legally." },
      ]}
      process={[
        { title: "Gather", desc: "Financials, ledgers, capex records and prior returns collected." },
        { title: "Compute", desc: "Adjusted profit, allowances and installment schedule prepared." },
        { title: "Review", desc: "You approve the computation before it is filed on iTax." },
        { title: "Pay & advise", desc: "Payment slip issued, and next-year installment strategy set." },
      ]}
      whyAssetech={[
        { title: "Accountants and tax agents", desc: "Same team that builds your accounts prepares your tax computation — no reconciliation gaps between the two." },
        { title: "Capital allowance depth", desc: "We know what qualifies as an industrial building, plant, or class-of-asset — and what does not. That knowledge translates to real tax saved." },
        { title: "Loss and refund tracking", desc: "Multi-year loss memos and refund files kept live, so you actually get the benefit when the numbers turn." },
        { title: "KRA representation", desc: "Registered agents responding to assessments, objections and audits under our credentials." },
        { title: "Straight advice", desc: "We tell you what is aggressive, what is defensible and what is settled — no hiding behind jargon." },
        { title: "Fixed engagement fee", desc: "One transparent price per return, agreed before we start." },
      ]}
      audience={[
        "Limited companies of any size",
        "Partnerships, LLPs and family businesses",
        "Sole proprietors above the TOT ceiling",
        "Employees with additional income streams",
        "Directors needing consolidated personal returns",
        "Businesses with prior-year losses to preserve",
      ]}
      faqs={[
        { q: "When is my company's return due?", a: "Six months after your financial year end. For a December year-end that means 30 June the following year." },
        { q: "Do I need to file if I made a loss?", a: "Yes. Declaring the loss preserves your right to carry it forward for up to 10 years against future profits." },
        { q: "What if I have no records for prior years?", a: "We reconstruct from bank statements, M-Pesa records, invoices and third-party data, then file and negotiate waivers." },
        { q: "Can you handle both my personal and company returns?", a: "Yes. We typically file the two together to make sure director remuneration, dividends and benefits reconcile." },
      ]}
    />
  ),
});