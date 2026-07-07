import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { Calculator, Building2, User, TrendingUp, ShieldCheck, FileText } from "lucide-react";

export const Route = createFileRoute("/services/income-tax")({
  head: () => ({
    meta: [
      { title: "Income Tax Filing & Planning — Assetech Nakuru" },
      { name: "description", content: "Individual and corporate income tax returns, installment tax planning and tax health checks by Assetech Nakuru." },
      { property: "og:title", content: "Income Tax — Assetech" },
      { property: "og:description", content: "Accurate income tax preparation, filing and planning for Kenyan businesses and individuals." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Income Tax"
      title="Individual and corporate income tax, done right"
      intro="From annual returns to installment tax planning, we prepare and file accurate income tax computations that keep you compliant and reduce unnecessary liability."
      includes={[
        { icon: User, title: "Individual Returns", desc: "Employment, rental, business and consulting income returns." },
        { icon: Building2, title: "Corporate Returns", desc: "Full company tax computations, IT2C filings and supporting schedules." },
        { icon: Calculator, title: "Installment Tax", desc: "Quarterly installment computations aligned with projected profits." },
        { icon: TrendingUp, title: "Tax Planning", desc: "Legitimate strategies to reduce your effective tax rate over the year." },
        { icon: ShieldCheck, title: "Tax Health Check", desc: "Diagnostic review of prior filings, exposures and unclaimed reliefs." },
        { icon: FileText, title: "KRA Correspondence", desc: "We respond to assessments, objections and refund queries on your behalf." },
      ]}
      process={[
        { title: "Gather", desc: "Collect financials, payroll and supporting documents." },
        { title: "Compute", desc: "Prepare accurate tax computations and supporting schedules." },
        { title: "File", desc: "Submit returns on iTax and share filing confirmations." },
        { title: "Advise", desc: "Debrief on findings, savings and next-quarter actions." },
      ]}
      audience={[
        "Limited companies filing annual returns",
        "Self-employed professionals and consultants",
        "Landlords with rental income",
        "Employees with multiple income sources",
      ]}
      faqs={[
        { q: "When is the income tax return due?", a: "Individual returns are due by 30 June each year. Company returns are due six months after the accounting year end." },
        { q: "What happens if I've missed prior years?", a: "We can prepare and file back-year returns, then help you engage KRA on any resulting penalties or waivers." },
        { q: "Do you handle installment tax?", a: "Yes. We compute and file installment tax on the 20th of the 4th, 6th, 9th and 12th month of your accounting year." },
        { q: "Can you help reduce my tax bill?", a: "We identify allowable deductions, reliefs and capital allowances you may be missing and structure income legitimately to lower liability." },
      ]}
    />
  ),
});
