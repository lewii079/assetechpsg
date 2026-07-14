import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { Calculator, LineChart, Wallet, Settings2, GraduationCap, Building2 } from "lucide-react";

export const Route = createFileRoute("/services/business-consultancy")({
  head: () => ({
    meta: [
      { title: "Business Consultancy — Bookkeeping, Advisory & Training | Assetech" },
      { name: "description", content: "Bookkeeping, management accounts, budgeting, systems rollout (QuickBooks/Sage/Zoho), SOPs, business registration and finance training by Assetech Nakuru." },
      { property: "og:title", content: "Business Consultancy — Assetech" },
      { property: "og:description", content: "The finance function you would build yourself — without hiring the whole team." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Business Consultancy"
      title="Your outsourced finance function"
      intro="We give SMEs, NGOs and growing businesses the finance department they need — bookkeeping, monthly management accounts, budgets, systems, SOPs and training — without the payroll cost of building it in-house."
      theme={{
        heroGradient: "linear-gradient(135deg, oklch(0.24 0.05 15) 0%, oklch(0.38 0.10 10) 60%, oklch(0.58 0.16 5) 100%)",
        iconBg: "bg-rose-500/10 text-rose-600",
        numberBg: "bg-rose-600 text-white",
        checkColor: "text-rose-600",
      }}
      overview={{
        heading: "What business consultancy really means at Assetech",
        paragraphs: [
          "Most small and mid-sized organisations in Kenya are stuck between two bad options. Hiring a full finance team — accountant, bookkeeper, tax assistant, systems administrator — is expensive and hard to justify below a certain revenue level. But relying on one overworked junior with QuickBooks is how businesses drift into missed filings, unrecoverable receivables, inflated tax bills and blind decisions.",
          "Our business consultancy service closes that gap. We plug in as your outsourced finance function: recording transactions, closing the books monthly, producing management accounts your board actually reads, running the payroll, keeping tax compliance current, and rolling out the systems that let you scale without hiring five people.",
          "The engagement is designed around your stage. Startups get the basics stood up — company registration, PIN, bank account, chart of accounts, cloud accounting, invoicing, first month-end. Growing SMEs get real management reporting, budgeting, cash-flow forecasting and process improvement. Established organisations get board packs, KPI dashboards, SOP libraries and finance-team training.",
          "You keep control of your business and your bank account; we run the finance engine. When you outgrow us, we hand over a clean set of books, a documented process and a trained team to your new in-house head of finance.",
        ],
      }}
      whyImportant={[
        { title: "Decisions built on real numbers", desc: "You cannot price, hire, expand or borrow well without accurate, current management accounts. Guesswork at management level is expensive." },
        { title: "Investor & lender readiness", desc: "Banks, funders and investors expect three years of clean books, cash-flow forecasts and a documented finance process. We build all three." },
        { title: "Compliance stays current", desc: "Tax, statutory deductions, NSSF, SHIF, county licences, annual returns to the Registrar — small misses compound into large problems. We keep the calendar." },
        { title: "Systems that scale", desc: "The right cloud accounting stack (QuickBooks, Sage, Zoho) — properly configured — replaces months of manual work every year." },
        { title: "Fraud & leakage control", desc: "Documented SOPs, segregation of duties and monthly reviews close the gaps where cash quietly disappears." },
        { title: "Lower total cost", desc: "An outsourced finance function typically costs 30–60% less than an in-house team of equivalent capability — with no recruitment, HR or downtime risk." },
      ]}
      includes={[
        { icon: Calculator, title: "Bookkeeping & Month-End", desc: "Daily transaction posting, bank reconciliations and a full monthly close in your accounting system." },
        { icon: LineChart, title: "Management Accounts", desc: "P&L, balance sheet, cash flow and KPI pack delivered by day 10 of the following month." },
        { icon: Wallet, title: "Budgeting & Cash-Flow", desc: "Annual budgets, rolling 13-week cash-flow forecasts and variance reporting for your board." },
        { icon: Settings2, title: "Systems Rollout", desc: "QuickBooks, Sage, Zoho or Xero — selected, configured, migrated and integrated with your bank and eTIMS." },
        { icon: Building2, title: "Company Registration & Secretarial", desc: "Incorporation, KRA PIN, NSSF/SHIF/NITA registration, annual returns and beneficial-ownership filings." },
        { icon: GraduationCap, title: "Finance Team Training", desc: "Practical training for your bookkeeper or finance officer on eTIMS, iTax, payroll and month-end discipline." },
      ]}
      process={[
        { title: "Assess", desc: "Review your current books, systems, team and pain points." },
        { title: "Stabilise", desc: "Clean up backlog, set up (or fix) the accounting system and reset month-end." },
        { title: "Operate", desc: "Run bookkeeping, payroll, tax and monthly reporting on your behalf." },
        { title: "Improve", desc: "Introduce budgets, SOPs, dashboards and training as you scale." },
      ]}
      whyAssetech={[
        { title: "Accountants + tax + audit in-house", desc: "You get bookkeeping that is already tax-aware and audit-ready — not three disconnected providers pointing at each other when something breaks." },
        { title: "Cloud-first from day one", desc: "We deploy QuickBooks Online, Sage, Zoho Books or Xero properly — with bank feeds, eTIMS integration and role-based access — instead of emailing spreadsheets." },
        { title: "Fixed monthly retainer", desc: "One predictable fee covers agreed scope. No surprise hourly bills, no per-return upsells." },
        { title: "Real handover discipline", desc: "Books, passwords, SOPs and reconciliations are yours from day one — never held hostage. When you hire in-house, transition is smooth." },
        { title: "Onsite in Nakuru", desc: "For clients in Nakuru and the Rift, we come to your office for month-end reviews, board meetings and staff training — not just Zoom." },
        { title: "Judgement, not just data entry", desc: "Our consultants flag pricing issues, margin drift, WHT credits, tax exposures and cash-flow risk — not just record what you send them." },
      ]}
      audience={[
        "Startups formalising their finance function for the first time",
        "SMEs with a bookkeeper who needs supervision",
        "NGOs needing donor-grade reporting and grant compliance",
        "Founders raising debt or equity who need clean historical books",
        "Family businesses preparing for succession or professionalisation",
        "Schools, clinics and hospitality businesses without a CFO",
      ]}
      faqs={[
        { q: "Do you replace my accountant?", a: "We can be your entire finance function or work alongside an existing bookkeeper — supervising, closing the month and producing the reports management needs." },
        { q: "Which accounting software do you support?", a: "QuickBooks Online, Sage, Zoho Books and Xero. We recommend based on your industry, transaction volume and budget — and we handle migration from Excel or older systems." },
        { q: "How is this priced?", a: "A fixed monthly retainer based on transaction volume, number of bank accounts, payroll headcount and reporting depth. You get a clear quote after a free scoping call." },
        { q: "Do you handle payroll?", a: "Yes — payroll processing, payslips, PAYE, NSSF, SHIF, AHL and NITA are included in most retainers." },
        { q: "What if I hire an in-house finance manager later?", a: "Great — we run a structured handover of the books, systems, passwords and SOPs. Many clients keep us on a lighter retainer for tax, audit prep and advisory even after hiring in-house." },
      ]}
    />
  ),
});
