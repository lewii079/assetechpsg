import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { Users2, ClipboardCheck, FileSpreadsheet, MessageSquare, ShieldCheck, Calculator } from "lucide-react";

export const Route = createFileRoute("/services/paye")({
  head: () => ({
    meta: [
      { title: "PAYE, Payroll & Statutory Deductions — Assetech" },
      { name: "description", content: "Monthly PAYE, NSSF, SHIF, Housing Levy and NITA computation, remittance and P9/P10 filing for Kenyan employers. Assetech Nakuru." },
      { property: "og:title", content: "PAYE & Payroll — Assetech" },
      { property: "og:description", content: "Accurate payroll and on-time statutory deductions, every month." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Pay As You Earn"
      title="PAYE, payroll and statutory deductions"
      intro="PAYE is the tax employers deduct from employees' salaries every month and remit to KRA. It is charged on graduated bands from 10% up to 35% for high earners, alongside NSSF, SHIF, the Affordable Housing Levy and NITA. We run your payroll accurately and remit everything on time."
      whyItMatters={[
        { title: "Who must comply", desc: "Every employer paying salaries, wages, bonuses, allowances or director fees must deduct PAYE and file the P10 return — even for one employee." },
        { title: "How PAYE is computed", desc: "Gross pay less allowable deductions (pension, mortgage interest, insurance relief) is taxed on graduated bands: 10%, 25%, 30%, 32.5% and 35%. Personal relief of KES 2,400 per month applies to every resident." },
        { title: "Other statutory deductions", desc: "NSSF (tiered), SHIF (2.75% of gross), Affordable Housing Levy (1.5% employee + 1.5% employer) and NITA (KES 50 per employee) are due alongside PAYE." },
        { title: "Deadlines and penalties", desc: "PAYE and statutory deductions must be remitted by the 9th of the following month. Late remittance attracts 25% penalty on the tax due plus 1% monthly interest — one of the harshest regimes." },
      ]}
      includes={[
        { icon: Calculator, title: "Payroll Processing", desc: "Monthly payroll runs with payslips, net-pay schedules and bank files." },
        { icon: Users2, title: "Statutory Deductions", desc: "NSSF, SHIF, Housing Levy and NITA computed alongside PAYE." },
        { icon: ClipboardCheck, title: "P10 Filing", desc: "Monthly P10 return prepared and filed on iTax by the 9th." },
        { icon: FileSpreadsheet, title: "P9 Certificates", desc: "Year-end P9A forms for every employee to support their returns." },
        { icon: MessageSquare, title: "KRA Correspondence", desc: "Handling audits, assessments and payroll-related queries." },
        { icon: ShieldCheck, title: "Payroll Health Check", desc: "Review of prior filings for missed reliefs or exposure." },
      ]}
      process={[
        { title: "Onboard", desc: "Capture employee details, pay structure and allowable reliefs." },
        { title: "Compute", desc: "Run payroll, PAYE and statutory deductions each month." },
        { title: "File", desc: "Submit P10, NSSF, SHIF, Housing Levy and NITA returns." },
        { title: "Pay", desc: "Generate payment slips and confirm remittance before the 9th." },
      ]}
      audience={[
        "SMEs with 1 to 100 employees",
        "NGOs and donor-funded projects with expatriate staff",
        "Schools, hospitals and hospitality businesses",
        "Companies expanding into Kenya from abroad",
      ]}
      faqs={[
        { q: "What are the PAYE bands?", a: "10% on the first KES 24,000, 25% on the next KES 8,333, 30% on the next KES 467,667, 32.5% up to KES 800,000 and 35% above that. Personal relief of KES 2,400 per month applies." },
        { q: "When is PAYE due?", a: "By the 9th of the month following the payroll period, together with NSSF, SHIF, Housing Levy and NITA." },
        { q: "What is the penalty for late PAYE?", a: "25% of the tax due (minimum KES 10,000) plus 1% interest per month until settled." },
        { q: "Do directors' fees attract PAYE?", a: "Yes — fees paid to executive and non-executive directors are subject to PAYE and must go through payroll." },
      ]}
    />
  ),
});