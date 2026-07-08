import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { Home, ClipboardCheck, FileSpreadsheet, MessageSquare, ShieldCheck, Building } from "lucide-react";

export const Route = createFileRoute("/services/rental-income-tax")({
  head: () => ({
    meta: [
      { title: "Monthly Rental Income Tax (MRI) — Assetech" },
      { name: "description", content: "Monthly Rental Income tax at 7.5% for landlords with annual rent KES 288K–15M. Registration, filing and record keeping by Assetech Nakuru." },
      { property: "og:title", content: "Rental Income Tax (MRI) — Assetech" },
      { property: "og:description", content: "Simple, monthly tax compliance for Kenyan landlords." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Rental Income Tax"
      title="Monthly Rental Income Tax (MRI) for Kenyan landlords"
      intro="MRI is a simplified tax on residential rental income for resident landlords earning between KES 288,000 and KES 15 million per year. It is charged at 7.5% of gross rent received, filed on iTax by the 20th of the following month, with no deductions for expenses."
      whyItMatters={[
        { title: "Who qualifies", desc: "Resident individuals and companies earning residential rental income between KES 288,000 and KES 15,000,000 in a year. Below the floor you are exempt; above the ceiling you fall back into normal Income Tax on rental profits." },
        { title: "How MRI works", desc: "7.5% of gross rent collected each month — no deductions for repairs, agents' fees, mortgage interest or land rates. Commercial rent is excluded and taxed differently (WHT 10% for tenants who are appointed agents)." },
        { title: "Deadlines and penalties", desc: "Monthly return and payment due by the 20th. Late filing attracts KES 2,000 (individuals) or KES 20,000 (non-individuals) per month plus 1% interest on unpaid tax." },
        { title: "Records to keep", desc: "Tenant register, rent receipts, bank statements and lease agreements should be kept for at least 5 years. KRA can request them during an audit." },
      ]}
      includes={[
        { icon: ClipboardCheck, title: "MRI Registration", desc: "Add the rental income obligation to your KRA PIN." },
        { icon: Home, title: "Monthly Filing", desc: "Compute, file and generate payment slips by the 20th." },
        { icon: FileSpreadsheet, title: "Rent Schedules", desc: "Tenant-by-tenant rent register aligned to bank collections." },
        { icon: Building, title: "Portfolio Reporting", desc: "Consolidated view across multiple properties and units." },
        { icon: MessageSquare, title: "KRA Correspondence", desc: "Handling audits, penalty waivers and objection letters." },
        { icon: ShieldCheck, title: "MRI Health Check", desc: "Review of prior filings and back-taxes if you fell behind." },
      ]}
      process={[
        { title: "Onboard", desc: "Capture properties, units, tenants and lease terms." },
        { title: "Collect", desc: "Reconcile monthly rent collections to bank statements." },
        { title: "File", desc: "Prepare and submit the MRI return on iTax." },
        { title: "Pay", desc: "Settle via M-Pesa Paybill or bank before the 20th." },
      ]}
      audience={[
        "Individual landlords with a few residential units",
        "Diaspora landlords managing property in Kenya",
        "Small property companies below KES 15M annual rent",
        "Estate agents filing on behalf of clients",
      ]}
      faqs={[
        { q: "What is the MRI rate?", a: "7.5% of gross rent received each month. No deductions are allowed for expenses, repairs or mortgage interest." },
        { q: "Does MRI apply to commercial rent?", a: "No. Commercial rental income is taxed under normal Income Tax rules and, where the tenant is a KRA-appointed agent, subject to 10% WHT." },
        { q: "Can I opt out of MRI?", a: "Only if your rental income is outside the KES 288K–15M band, or you elect in writing to be taxed under the normal Income Tax regime — usually only worthwhile with heavy allowable expenses." },
        { q: "Do I still file if the house is vacant?", a: "Yes — file a nil return for any month with no rent collected. Skipping it triggers the monthly penalty." },
      ]}
    />
  ),
});