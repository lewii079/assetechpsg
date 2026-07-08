import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { Flame, ClipboardCheck, FileSpreadsheet, MessageSquare, ShieldCheck, Package } from "lucide-react";

export const Route = createFileRoute("/services/excise-duty")({
  head: () => ({
    meta: [
      { title: "Excise Duty Registration & Returns — Assetech" },
      { name: "description", content: "Excise Duty licensing, monthly returns and KRA correspondence for manufacturers, importers and service providers. Assetech Nakuru." },
      { property: "og:title", content: "Excise Duty — Assetech" },
      { property: "og:description", content: "Licensing and monthly excise compliance in Kenya." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Excise Duty"
      title="Excise Duty for manufacturers, importers and service providers"
      intro="Excise Duty is charged on the manufacture, importation or supply of excisable goods and services — including alcoholic drinks, cigarettes, sugary drinks, cosmetics, fuel, airtime, data, money transfers and digital lending. Rates are set per product (specific) or as a percentage (ad valorem) and are filed monthly."
      whyItMatters={[
        { title: "Who is liable", desc: "Local manufacturers of excisable goods, importers, and licensed service providers (telecoms, banks, betting firms, money-transfer operators, digital lenders)." },
        { title: "How it's charged", desc: "Either specific (a fixed shilling amount per unit — e.g. per litre or per stick) or ad valorem (a percentage of value — e.g. 20% on airtime and data, 15% on betting stakes). Rates are inflation-adjusted annually." },
        { title: "Deadlines and penalties", desc: "Excise returns and payment are due by the 20th of the following month. Late filing carries a 5% penalty (min KES 10,000) and 1% interest per month; unlicensed manufacture is a criminal offence." },
        { title: "Excise Goods Management System (EGMS)", desc: "Certain products (spirits, wines, tobacco, bottled water, juices, sodas, cosmetics) must carry KRA excise stamps. We help you enrol, order stamps and reconcile usage." },
      ]}
      includes={[
        { icon: ClipboardCheck, title: "Excise Licence", desc: "Application, renewal and variation of excise licences." },
        { icon: Flame, title: "Monthly Returns", desc: "Prepare and file the excise return on iTax every month." },
        { icon: Package, title: "EGMS Support", desc: "Enrolment, stamp ordering and monthly reconciliation." },
        { icon: FileSpreadsheet, title: "Rate Reviews", desc: "Confirm current rates and rebasing at the start of each year." },
        { icon: MessageSquare, title: "KRA Correspondence", desc: "Responses to audits, assessments and objections." },
        { icon: ShieldCheck, title: "Compliance Review", desc: "Diagnostic of prior filings, stamp usage and returns." },
      ]}
      process={[
        { title: "Licence", desc: "Confirm scope and secure or renew the excise licence." },
        { title: "Track", desc: "Capture production, imports, stamps and sales monthly." },
        { title: "File", desc: "Prepare and submit the excise return on iTax." },
        { title: "Pay", desc: "Generate payment slips and remit before the 20th." },
      ]}
      audience={[
        "Manufacturers of alcohol, spirits, water, juices and cosmetics",
        "Importers of excisable goods",
        "Telecom, banking and money-transfer service providers",
        "Betting and gaming operators",
      ]}
      faqs={[
        { q: "Is excise duty the same as VAT?", a: "No. Excise is charged on specific goods and services in addition to VAT. Excise is normally included in the taxable value on which VAT is computed." },
        { q: "What rate applies to airtime and data?", a: "20% excise duty on the value of airtime, data and SMS. This is passed on to consumers and remitted by the telecom operator." },
        { q: "When are excise stamps required?", a: "For spirits, wines, tobacco, bottled water, juices, sodas, energy drinks and cosmetics. Selling unstamped stock is an offence." },
        { q: "Can I claim excise as a deduction?", a: "Excise on inputs used to manufacture other excisable goods can be offset against the excise on the finished product, subject to KRA approval." },
      ]}
    />
  ),
});