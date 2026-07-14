import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { FileCheck2, Receipt, RefreshCw, ShieldCheck, Users, BookOpen } from "lucide-react";

export const Route = createFileRoute("/services/etims-filing")({
  head: () => ({
    meta: [
      { title: "eTIMS & iTax Filing — Assetech Nakuru" },
      { name: "description", content: "End-to-end eTIMS onboarding, invoice compliance, iTax filing and KRA correspondence for Kenyan businesses. Avoid penalties with Assetech Nakuru." },
      { property: "og:title", content: "eTIMS & iTax Filing — Assetech" },
      { property: "og:description", content: "eTIMS onboarding, iTax filings and KRA correspondence done right — the first time." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="eTIMS & iTax"
      title="eTIMS onboarding, iTax filing and KRA compliance"
      intro="We register your business on eTIMS, configure compliant invoicing and take over your iTax filings so every invoice is transmitted to KRA on time and every return is filed correctly."
      theme={{
        heroGradient: "linear-gradient(135deg, oklch(0.22 0.05 165) 0%, oklch(0.35 0.09 160) 60%, oklch(0.58 0.15 155) 100%)",
        iconBg: "bg-emerald-500/10 text-emerald-600",
        numberBg: "bg-emerald-600 text-white",
        checkColor: "text-emerald-600",
      }}
      overview={{
        heading: "What eTIMS and iTax actually mean for your business",
        paragraphs: [
          "iTax is the Kenya Revenue Authority's online portal for registering PINs, filing returns and paying taxes. Every VAT, PAYE, Income Tax, Withholding, Turnover and Rental return in Kenya is filed through iTax — it is the single source of truth for your tax history with KRA.",
          "eTIMS (Electronic Tax Invoice Management System) is the newer layer that sits on top of iTax and handles invoices. Since the Finance Act 2023, every business — VAT-registered or not — must issue tax invoices through eTIMS. The invoice data flows in real time to KRA, where it is used to validate your VAT returns and, critically, to allow your buyers to claim input VAT and expense deductions.",
          "That means eTIMS is no longer just a tax obligation, it is a commercial one. If you cannot issue a compliant eTIMS invoice, corporate buyers and NGOs will not pay you, and any expense not backed by an eTIMS invoice is disallowed at the buyer's end. Getting it right protects both your compliance record and your customer relationships.",
          "We handle the entire cycle end-to-end: onboarding your business onto eTIMS (Online, VSCU or OSCU depending on your volume), configuring your item catalogue and invoice templates, training your finance and sales team, transmitting invoices on schedule and filing the corresponding iTax returns before every deadline.",
        ],
      }}
      whyImportant={[
        { title: "Steep KRA penalties", desc: "Failure to issue an eTIMS invoice attracts a penalty of KES 1 million per offence, or twice the tax due — whichever is higher. Late iTax filings attract 5% of the tax due plus 1% monthly interest until settled." },
        { title: "You lose customers", desc: "Corporates, NGOs, government agencies and audited businesses will not settle a supplier invoice that is not eTIMS-compliant, because they cannot claim it as an expense. Non-compliance directly costs you revenue." },
        { title: "Disallowed expenses", desc: "From January 2024, KRA disallows any expense not supported by an eTIMS invoice when computing income tax. Your suppliers' non-compliance can inflate your tax bill significantly." },
        { title: "VAT input claims frozen", desc: "Only invoices transmitted through eTIMS are recognised for input VAT. Missing transmissions mean you cannot offset VAT you have already paid — a direct cash-flow hit every month." },
        { title: "Audit exposure", desc: "eTIMS discrepancies are the fastest trigger for a KRA compliance review. A clean eTIMS record dramatically reduces the risk of audits, assessments and objections." },
        { title: "Peace of mind", desc: "With filings, transmissions and KRA queries handled for you, your team can focus on running the business instead of firefighting deadlines every month." },
      ]}
      includes={[
        { icon: FileCheck2, title: "eTIMS Registration", desc: "Enrolment, business profile setup and device or online portal selection." },
        { icon: Receipt, title: "Invoice Configuration", desc: "Compliant tax invoices, credit notes and item catalogues wired to your accounting system." },
        { icon: RefreshCw, title: "Monthly Transmission & Filing", desc: "We reconcile invoices, transmit them and file the matching iTax returns before every deadline." },
        { icon: BookOpen, title: "Staff Training", desc: "Practical training for your finance and sales teams on daily eTIMS use." },
        { icon: ShieldCheck, title: "Compliance Reviews & KRA Queries", desc: "Monthly checks catch missing invoices; we respond to KRA notices, assessments and audits on your behalf." },
        { icon: Users, title: "Ongoing Support", desc: "A dedicated consultant on call for eTIMS, iTax and day-to-day tax questions." },
      ]}
      process={[
        { title: "Assess", desc: "Review your invoicing workflow and eTIMS readiness." },
        { title: "Onboard", desc: "Register your business and configure the eTIMS portal or device." },
        { title: "File", desc: "Reconcile, transmit invoices and file iTax returns every month." },
        { title: "Review", desc: "Report on filings, flag issues and refine the process each quarter." },
      ]}
      whyAssetech={[
        { title: "KRA-registered consultants", desc: "Our tax team is registered with KRA and ICPAK, so we can transact on iTax on your behalf, sign off returns and represent you in KRA correspondence." },
        { title: "eTIMS across all channels", desc: "We are hands-on with every eTIMS option — Online Portal, Client (OSCU) and Virtual (VSCU) — and pick the right one for your invoice volume and workflow." },
        { title: "Backfill specialists", desc: "Behind on filings or transmissions? We routinely help clients backfill missed months and negotiate reduced penalties with KRA under waiver applications." },
        { title: "Staff training included", desc: "We train your finance and sales staff to issue, edit and reconcile eTIMS invoices daily, so compliance survives long after our onboarding ends." },
        { title: "Nakuru + nationwide", desc: "We are physically in Nakuru for onsite work with SMEs, and we serve clients across Kenya remotely with the same response times." },
        { title: "One point of contact", desc: "You get a dedicated consultant, not a call centre — one person who knows your business, your ledger and your KRA history." },
      ]}
      audience={[
        "SMEs newly required to onboard eTIMS",
        "VAT-registered businesses issuing daily invoices",
        "NGOs and service firms with recurring billing",
        "Sole proprietors managing invoicing on the side",
        "Businesses behind on filings needing to catch up",
      ]}
      faqs={[
        { q: "When is the eTIMS filing deadline?", a: "Invoices must be transmitted to KRA in real time or by the 20th of the following month at the latest. We take care of both scheduled and catch-up filings." },
        { q: "What documents do you need to onboard?", a: "Your KRA PIN, certificate of registration, director details and a sample of the invoices you currently issue." },
        { q: "Can you help if I'm already behind?", a: "Yes — we regularly help clients backfill missed months and negotiate with KRA where penalties have been assessed." },
        { q: "Do I need an eTIMS device?", a: "Not necessarily. Many businesses use the eTIMS online portal or the client-based (OSCU/VSCU) option. We recommend the right fit based on your volume." },
        { q: "Do you also file the returns?", a: "Yes. We handle both the eTIMS invoice transmissions and the iTax returns they feed into — VAT, income tax, PAYE and any other obligation on your PIN." },
        { q: "What if KRA sends me a notice?", a: "Forward it to us. We respond to KRA correspondence on your behalf, from routine queries to full assessments and objections." },
      ]}
    />
  ),
});
