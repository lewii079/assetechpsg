import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { Factory, Receipt, FileCheck2, ShieldCheck, MessageSquare, RefreshCcw } from "lucide-react";

export const Route = createFileRoute("/services/excise-duty")({
  head: () => ({
    meta: [
      { title: "Excise Duty Services in Kenya — Licensing & Filing | Assetech" },
      { name: "description", content: "Excise licence applications, excisable-supply mapping, monthly filing and excise-stamp compliance under the Excise Duty Act 2015. By Assetech Nakuru." },
      { property: "og:title", content: "Excise Duty — Assetech" },
      { property: "og:description", content: "Excise licensing, filing and stamps for regulated Kenyan sectors." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Tax · Excise Duty"
      title="Excise duty compliance for regulated sectors"
      intro="Whether you manufacture beverages, deal in imported plastics, offer digital services or run a betting platform, we handle excise licensing, filing and stamp management end-to-end."
      overview={{
        heading: "What excise duty covers",
        paragraphs: [
          "Excise duty is a tax on specific excisable goods and services listed in the Excise Duty Act 2015 and its schedules. It targets both locally manufactured and imported products deemed to warrant an additional tax — for revenue, public health or environmental reasons.",
          "Typical excisable items include alcoholic beverages, cigarettes and tobacco, sugary drinks, bottled water, imported plastics, mobile airtime and data, mobile money transfers, betting stakes, motor vehicles above certain engine sizes, and various fees on financial services. Rates and scope change with almost every Finance Act.",
          "Manufacturers and importers of excisable goods must hold an excise licence, apply KRA excise stamps where required (beverages, cigarettes, cosmetics), file returns monthly by the 20th on iTax and pay the duty in the same window. Service providers file on a self-assessment basis on the excisable service value.",
          "We map your excisable exposure, apply for and renew licences, manage stamp requisitions, file monthly returns and advise on structural changes when the Finance Act moves the goalposts.",
        ],
      }}
      whyImportant={[
        { title: "Licence is a trading permit", desc: "Manufacturing or importing excisable goods without a licence is not just penalty exposure — it is prosecution risk under the Excise Duty Act." },
        { title: "Stamp non-compliance = seizure", desc: "Excisable goods missing valid KRA stamps can be seized in the market, at ports or in transit, wiping out entire batches." },
        { title: "Rates change every year", desc: "The Finance Act routinely reprices excise. Businesses filing on last year's rates walk into penalty and interest liabilities." },
        { title: "Complex service scope", desc: "Digital services, fintech and telco excise scope has expanded rapidly. Getting the base wrong under- or over-taxes materially." },
        { title: "Customs interaction", desc: "Imported excisables interact with import duty, VAT and IDF fees. A joined-up view avoids double-taxation and missed reliefs." },
        { title: "Reputational stakes", desc: "Retailers, distributors and financial partners drop suppliers who cannot show clean excise compliance." },
      ]}
      includes={[
        { icon: FileCheck2, title: "Excise Licensing", desc: "Applications, renewals and variations of your excise licence with KRA." },
        { icon: Factory, title: "Scope Mapping", desc: "Product-by-product and service-by-service analysis of your excise exposure." },
        { icon: Receipt, title: "Monthly Filing", desc: "Excise return prepared and lodged on iTax by the 20th, with payment slip issued." },
        { icon: ShieldCheck, title: "Stamp Management", desc: "Requisition, custody and reconciliation of KRA excise stamps for stamped categories." },
        { icon: RefreshCcw, title: "Finance Act Updates", desc: "Rate and scope changes tracked and applied the month they take effect." },
        { icon: MessageSquare, title: "KRA Correspondence", desc: "Response to excise-specific audits, assessments and stamp reconciliations." },
      ]}
      process={[
        { title: "Map", desc: "Identify all excisable products and services on your line card." },
        { title: "License", desc: "Apply for or renew your excise licence and stamp allocations." },
        { title: "File", desc: "Monthly returns and payments on iTax by the 20th." },
        { title: "Monitor", desc: "Track law changes and reconcile stamps quarterly." },
      ]}
      whyAssetech={[
        { title: "Regulated-sector experience", desc: "We have handled excise for beverage producers, distributors, telcos, fintechs and importers." },
        { title: "Stamp process expertise", desc: "We know the KRA stamp requisition, custody and reconciliation drill — including online stamp systems." },
        { title: "Law-change discipline", desc: "Every Finance Act is reviewed for excise moves, and impact notes are shared with clients before it takes effect." },
        { title: "Cross-tax view", desc: "Excise rarely stands alone. We coordinate with VAT, WHT and customs so decisions are made once, not three times." },
        { title: "Registered tax agents", desc: "We correspond with KRA and lodge licence variations under our own credentials." },
        { title: "Onsite in Nakuru", desc: "For manufacturers we can be onsite at the plant for stock and stamp counts." },
      ]}
      audience={[
        "Beverage manufacturers and importers",
        "Cigarette and tobacco distributors",
        "Imported-plastic and packaging businesses",
        "Telcos and digital service providers",
        "Betting and gaming operators",
        "Cosmetics manufacturers",
      ]}
      faqs={[
        { q: "Do I need an excise licence even to import?", a: "Yes, for most excisable categories. Importation without a licence exposes goods to seizure and you to prosecution." },
        { q: "Excise stamps have gone missing. What now?", a: "Immediate incident report to KRA, stock reconciliation and a structured explanation. We manage the whole response." },
        { q: "Are digital services excisable?", a: "Some are — most notably mobile airtime and data, and specific fintech fees. Scope shifts with each Finance Act and we advise per service." },
        { q: "Can you take over from another consultant mid-year?", a: "Yes. We reconcile the year-to-date position, close open exposures and take over from the next return cycle." },
      ]}
    />
  ),
});