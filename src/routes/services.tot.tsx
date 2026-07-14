import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { Receipt, FileCheck2, Calculator, MessageSquare, RefreshCcw, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/services/tot")({
  head: () => ({
    meta: [
      { title: "Turnover Tax (TOT) Services in Kenya — Assetech" },
      { name: "description", content: "TOT registration, monthly filing and nil returns for Kenyan small businesses turning over KES 1M–25M per year. 3% on gross sales, filed on iTax by the 20th." },
      { property: "og:title", content: "Turnover Tax (TOT) — Assetech" },
      { property: "og:description", content: "Simple monthly TOT compliance for small businesses in Kenya." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Tax · TOT"
      title="Turnover Tax without the monthly worry"
      intro="For small businesses between KES 1 million and KES 25 million turnover, TOT is the simplest tax regime — but only if it is filed on time, every month. We take that off your plate."
      theme={{
        heroGradient: "linear-gradient(135deg, oklch(0.22 0.05 235) 0%, oklch(0.36 0.10 232) 60%, oklch(0.60 0.17 228) 100%)",
        iconBg: "bg-sky-500/10 text-sky-600",
        numberBg: "bg-sky-600 text-white",
        checkColor: "text-sky-600",
      }}
      overview={{
        heading: "What TOT is and who qualifies",
        paragraphs: [
          "Turnover Tax is a simplified tax regime for Kenyan resident businesses whose gross annual turnover is between KES 1 million and KES 25 million. It is charged at 3% of gross monthly sales — no expense deductions allowed — and filed on iTax by the 20th of the following month.",
          "TOT replaces income tax on that business income, but does not replace PAYE if you have employees, VAT if you cross the VAT threshold, or WHT on payments you make. It also does not apply to rental income, management or professional fees, or income already subject to a final withholding.",
          "Failure to file — including nil returns in months with no sales — attracts a KES 1,000 monthly penalty. A run of unfiled months quickly compounds into a real bill, and blocks your tax compliance certificate.",
          "We register you for TOT (or migrate you off it once you graduate), collect monthly sales, file on iTax, generate the payment slip and keep nil returns lodged for quiet months.",
        ],
      }}
      whyImportant={[
        { title: "Small penalties, big compounding", desc: "KES 1,000 a month sounds minor — until 12 months of missed nil returns turn into blocked TCC and back-tax." },
        { title: "Simpler than income tax", desc: "For eligible businesses, TOT means no complex accounts, no capital allowances, no installment tax — just 3% of sales." },
        { title: "Wrong regime = double work", desc: "Businesses accidentally left on income tax when they qualify for TOT often overpay and file the wrong return type." },
        { title: "Graduation planning", desc: "Once turnover exceeds KES 25M, you must switch to VAT and income tax. Timing that switch matters for cash flow and pricing." },
        { title: "TCC dependency", desc: "You still need a TCC for tenders and licences. That means TOT must be current, even in loss-making months." },
        { title: "Nil returns still required", desc: "Zero sales does not mean zero filing. The nil return is what protects you from the monthly penalty." },
      ]}
      includes={[
        { icon: FileCheck2, title: "TOT Registration", desc: "Activate the TOT obligation on your PIN and deactivate income tax where appropriate." },
        { icon: Receipt, title: "Monthly Filing", desc: "Sales schedule prepared and lodged on iTax by the 20th, every month." },
        { icon: Calculator, title: "Payment Slips", desc: "iTax payment slip generated and payment instructions issued." },
        { icon: RefreshCcw, title: "Nil Returns", desc: "Quiet months still filed on time so no penalty ever accrues." },
        { icon: ShieldCheck, title: "Graduation Advice", desc: "Planning and switch-over the month you cross into VAT / income tax." },
        { icon: MessageSquare, title: "KRA Support", desc: "Response to notices, back-filing of missed months and waiver applications." },
      ]}
      process={[
        { title: "Assess", desc: "Confirm you qualify and set up TOT correctly on iTax." },
        { title: "Collect", desc: "Monthly sales figures gathered — M-Pesa, bank, cash and eTIMS." },
        { title: "File", desc: "Return prepared, reviewed with you and lodged." },
        { title: "Monitor", desc: "Track your turnover so you graduate at the right moment." },
      ]}
      whyAssetech={[
        { title: "Small-business focus", desc: "TOT is our bread-and-butter — we run monthly cycles for shops, salons, agencies and one-person businesses across Nakuru." },
        { title: "Cheap, fixed fee", desc: "TOT is a light-touch tax and our pricing reflects that. You do not pay full accounting fees for a 3% filing." },
        { title: "M-Pesa savvy", desc: "We know how to extract clean monthly sales from Till/Paybill statements without you exporting reports yourself." },
        { title: "Backfilling ready", desc: "Missed six months? We reconstruct and file, then apply for waiver of the accrued penalties." },
        { title: "Registered agents", desc: "We deal with KRA on your behalf — no forgotten iTax passwords blocking you." },
        { title: "Graduation planning", desc: "We tell you the month before you cross KES 25M, and prep the VAT/income tax switch cleanly." },
      ]}
      audience={[
        "Small retailers, salons, cafés and workshops",
        "One-person businesses and micro-enterprises",
        "Agencies and small service providers under KES 25M",
        "Businesses recovering from PAYE / VAT arrears",
        "New businesses formalising their first tax obligation",
      ]}
      faqs={[
        { q: "Do I still file if I had no sales this month?", a: "Yes. A nil return protects you from the KES 1,000 monthly penalty and keeps your TCC alive." },
        { q: "Can I claim expenses under TOT?", a: "No. TOT is 3% of gross sales — no expense deduction. That is the trade-off for the simpler regime." },
        { q: "What happens when I cross KES 25M?", a: "You must register for VAT (above KES 5M) and switch from TOT back to income tax. We plan and execute that transition." },
        { q: "Does TOT cover my rental income?", a: "No. Rental income has its own regime (MRI) or falls under standard income tax." },
      ]}
    />
  ),
});