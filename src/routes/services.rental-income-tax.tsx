import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { Building2, Receipt, Calculator, RefreshCcw, MessageSquare, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/services/rental-income-tax")({
  head: () => ({
    meta: [
      { title: "Monthly Rental Income Tax (MRI) Kenya — Landlord Filing | Assetech" },
      { name: "description", content: "MRI registration, monthly 7.5% filing on gross rent, and full-income-tax transition for landlords above KES 15M. Kenya rental tax handled by Assetech Nakuru." },
      { property: "og:title", content: "Rental Income Tax — Assetech" },
      { property: "og:description", content: "MRI compliance and landlord tax planning for Kenyan property owners." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Tax · Rental Income"
      title="Landlord tax, done every month without stress"
      intro="Whether you own a single flat or a portfolio of properties, we run your Monthly Rental Income compliance and step you up to full income tax cleanly when your rent roll grows."
      overview={{
        heading: "MRI in plain language",
        paragraphs: [
          "Monthly Rental Income (MRI) is a simplified tax regime for resident landlords earning between KES 288,000 and KES 15 million per year in rental income from residential property in Kenya. It is charged at 7.5% of gross monthly rent collected — with no expense deductions — and filed on iTax by the 20th of the following month.",
          "Landlords below KES 288,000 per year are exempt but must still file where they have an active MRI obligation. Landlords above KES 15 million per year, and commercial-property landlords of any size, are taxed under normal income tax rules — with allowable expenses (interest, repairs, agent fees, depreciation) and the standard corporate or personal rate applied to net income.",
          "MRI is often filed wrong. Landlords forget to deduct WHT already withheld by tenants; property managers report inconsistently; nil returns are missed in vacant months. Each mistake attracts a KES 2,000 monthly penalty and blocks your tax compliance certificate.",
          "We manage your MRI end-to-end — registration, monthly filings, reconciliation with your property manager, and planning the switch to full income tax the year your portfolio crosses KES 15M.",
        ],
      }}
      whyImportant={[
        { title: "Portfolio scaling threshold", desc: "Crossing KES 15M without switching regimes creates back-tax and interest exposure — timing that transition matters." },
        { title: "WHT credit recovery", desc: "Tenants and property managers often withhold 10% on rent. Without proper accounting these credits are lost." },
        { title: "TCC required for transfers", desc: "Selling a property requires a valid TCC. Unfiled MRI returns freeze the sale until every month is cleared." },
        { title: "Compounding penalties", desc: "KES 2,000 a month per PIN adds up quickly across a multi-property portfolio." },
        { title: "Full-income-tax planning", desc: "Above KES 15M, expense claims and capital allowances materially reduce your effective rate — if properly documented." },
        { title: "Vacant months trap", desc: "Nil returns are still required in months with no rent. Skipping them attracts the same monthly penalty as under-declaration." },
      ]}
      includes={[
        { icon: Building2, title: "MRI Registration", desc: "Activate the MRI obligation on your PIN and set opening data on iTax." },
        { icon: Receipt, title: "Monthly Filing", desc: "Gross rent schedule prepared and lodged on iTax by the 20th, every month." },
        { icon: Calculator, title: "WHT Reconciliation", desc: "Match tenant withholdings and reconcile them against your MRI liability." },
        { icon: RefreshCcw, title: "Back-filing", desc: "Missed months reconstructed, filed and waiver applications lodged where warranted." },
        { icon: ShieldCheck, title: "Transition Planning", desc: "Structured migration from MRI to full income tax as your rent roll grows." },
        { icon: MessageSquare, title: "KRA Support", desc: "Response to landlord-focused audits, assessments and objections." },
      ]}
      process={[
        { title: "Assess", desc: "Confirm which regime applies and set your obligations correctly." },
        { title: "Collect", desc: "Monthly rent roll gathered from you or the property manager." },
        { title: "File", desc: "Return prepared, WHT credits applied and lodged on iTax." },
        { title: "Review", desc: "Quarterly view on portfolio, expenses and regime transition." },
      ]}
      whyAssetech={[
        { title: "Multi-property experience", desc: "Live engagements with landlords running 1 to 40+ units across Nakuru, Naivasha and Nairobi." },
        { title: "Property manager coordination", desc: "We work directly with your caretaker or management company to reconcile rent rolls, WHT and vacancies." },
        { title: "Regime-switch planning", desc: "We time and structure your move from MRI to full income tax so it saves you money instead of triggering exposure." },
        { title: "Registered tax agents", desc: "We lodge, correct and defend rental filings under our own KRA agent credentials." },
        { title: "Fixed monthly fee", desc: "Simple per-property or per-portfolio pricing — no per-hour billing." },
        { title: "Refund recovery", desc: "Where WHT credits and reliefs create a net refund, we prepare and pursue the claim." },
      ]}
      audience={[
        "Individual landlords with residential property",
        "Family portfolios and diaspora landlords",
        "SACCOs and pension schemes with rental holdings",
        "Landlords crossing the KES 15M threshold",
        "Commercial property owners on full income tax",
      ]}
      faqs={[
        { q: "I live abroad. Can you still handle my MRI?", a: "Yes. We run MRI for diaspora landlords with local property managers — you never need to touch iTax." },
        { q: "My tenant withholds 10%. Do I still pay MRI?", a: "Yes, MRI is settled on the gross rent. WHT withheld is credited against the liability, and any excess claimed as a refund." },
        { q: "When should I move off MRI?", a: "Legally, above KES 15M gross rent per year. Strategically, sometimes earlier — when allowable expenses would save more tax than the 7.5% flat rate." },
        { q: "Do you handle commercial property tax?", a: "Yes. Commercial rents fall under normal income tax, with VAT if commercial and above the threshold. We handle both layers." },
      ]}
    />
  ),
});