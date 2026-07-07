import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { Receipt, ClipboardCheck, RefreshCw, MessageSquare, ShieldCheck, FileSpreadsheet } from "lucide-react";

export const Route = createFileRoute("/services/vat")({
  head: () => ({
    meta: [
      { title: "VAT Registration & Monthly Returns — Assetech Nakuru" },
      { name: "description", content: "VAT registration, monthly VAT returns, input VAT reviews and KRA correspondence by Assetech Nakuru." },
      { property: "og:title", content: "VAT Services — Assetech" },
      { property: "og:description", content: "Timely, accurate VAT compliance for Kenyan businesses." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Value Added Tax"
      title="VAT registration, returns and advisory"
      intro="We keep your VAT position clean and defensible — from registration to monthly returns, input VAT reviews and KRA correspondence."
      includes={[
        { icon: ClipboardCheck, title: "VAT Registration", desc: "Registration and deregistration guidance based on your turnover." },
        { icon: Receipt, title: "Monthly VAT Returns", desc: "Computation, reconciliation and filing by the 20th every month." },
        { icon: FileSpreadsheet, title: "Input VAT Review", desc: "Ensure only valid claims are made to avoid disallowances." },
        { icon: RefreshCw, title: "VAT Refunds", desc: "Preparation and follow-up of VAT refund claims where applicable." },
        { icon: MessageSquare, title: "KRA Correspondence", desc: "Responses to assessments, audits and objection letters." },
        { icon: ShieldCheck, title: "VAT Health Check", desc: "Diagnostic review of prior filings and eTIMS reconciliation." },
      ]}
      process={[
        { title: "Reconcile", desc: "Match sales and purchases to eTIMS and supplier invoices." },
        { title: "Compute", desc: "Prepare the monthly VAT computation and workings." },
        { title: "File", desc: "Submit the return on iTax before the 20th of the month." },
        { title: "Report", desc: "Share filing confirmations and highlight any exposures." },
      ]}
      audience={[
        "Businesses with taxable turnover above KES 5M",
        "Companies dealing in mixed taxable and exempt supplies",
        "Exporters claiming VAT refunds",
        "Startups preparing for VAT registration",
      ]}
      faqs={[
        { q: "When are VAT returns due?", a: "By the 20th of the month following the tax period. Nil returns must also be filed even when there is no activity." },
        { q: "Do I need to register for VAT?", a: "You must register once your taxable turnover exceeds KES 5 million in any 12-month period. Voluntary registration is also possible." },
        { q: "What is input VAT?", a: "VAT paid on qualifying business purchases that can be offset against VAT charged on your sales. We ensure claims are properly supported." },
        { q: "How do VAT and eTIMS interact?", a: "Only invoices transmitted through eTIMS are recognised by KRA for input VAT. We reconcile eTIMS to your books before every filing." },
      ]}
    />
  ),
});
