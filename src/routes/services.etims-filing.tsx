import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { FileCheck2, Receipt, RefreshCw, ShieldCheck, Users, BookOpen } from "lucide-react";

export const Route = createFileRoute("/services/etims-filing")({
  head: () => ({
    meta: [
      { title: "eTIMS Filing & Onboarding — Assetech Nakuru" },
      { name: "description", content: "Full eTIMS onboarding, invoice compliance and monthly filing for Kenyan businesses. Avoid KRA penalties with Assetech." },
      { property: "og:title", content: "eTIMS Filing — Assetech" },
      { property: "og:description", content: "eTIMS onboarding, invoicing and monthly filing done right." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="eTIMS Filing"
      title="eTIMS onboarding, invoicing and monthly filing"
      intro="We register your business on eTIMS, configure invoicing correctly and take over monthly filings so every sales invoice is transmitted to KRA on time."
      includes={[
        { icon: FileCheck2, title: "eTIMS Registration", desc: "Enrolment, business profile setup and device or online portal selection." },
        { icon: Receipt, title: "Invoice Configuration", desc: "Set up compliant tax invoices, credit notes and item catalogues." },
        { icon: RefreshCw, title: "Monthly Transmission", desc: "We reconcile and transmit all invoices before the KRA deadline." },
        { icon: BookOpen, title: "Staff Training", desc: "Practical training for your finance and sales teams on daily eTIMS use." },
        { icon: ShieldCheck, title: "Compliance Review", desc: "Monthly checks so missing or rejected invoices never slip through." },
        { icon: Users, title: "Ongoing Support", desc: "A dedicated consultant on call for eTIMS questions and KRA queries." },
      ]}
      process={[
        { title: "Assess", desc: "Review your invoicing workflow and eTIMS readiness." },
        { title: "Onboard", desc: "Register your business and configure the eTIMS portal or device." },
        { title: "File", desc: "Reconcile invoices and transmit to KRA every month." },
        { title: "Review", desc: "Report on filings, flag issues and refine the process." },
      ]}
      audience={[
        "SMEs newly required to onboard eTIMS",
        "VAT-registered businesses issuing daily invoices",
        "NGOs and service firms with recurring billing",
        "Sole proprietors managing invoicing on the side",
      ]}
      faqs={[
        { q: "When is the eTIMS filing deadline?", a: "Invoices must be transmitted to KRA in real time or by the 20th of the following month at the latest. We take care of both scheduled and catch-up filings." },
        { q: "What documents do you need to onboard?", a: "Your KRA PIN, certificate of registration, director details and a sample of the invoices you currently issue." },
        { q: "Can you help if I'm already behind?", a: "Yes — we regularly help clients backfill missed months and negotiate with KRA where penalties have been assessed." },
        { q: "Do I need an eTIMS device?", a: "Not necessarily. Many businesses use the eTIMS online portal or the client-based option. We recommend the right fit based on your volume." },
      ]}
    />
  ),
});
