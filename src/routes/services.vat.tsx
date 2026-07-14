import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { Receipt, FileCheck2, RefreshCcw, Calculator, MessageSquare, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/services/vat")({
  head: () => ({
    meta: [
      { title: "VAT Services in Kenya — Registration, Filing & Refunds | Assetech" },
      { name: "description", content: "VAT registration, monthly iTax filing, eTIMS reconciliation, input VAT reviews and refund claims by Assetech Nakuru. Stay compliant with KRA's 16% VAT regime." },
      { property: "og:title", content: "VAT Services — Assetech" },
      { property: "og:description", content: "Registration, monthly filing, refunds and audit defence for Kenyan VAT." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Tax · VAT"
      title="Value Added Tax, filed right every month"
      intro="From the KES 5 million registration threshold to refund claims and audit defence, we own your VAT cycle end-to-end on iTax and eTIMS."
      theme={{
        heroGradient: "linear-gradient(135deg, oklch(0.22 0.05 235) 0%, oklch(0.36 0.10 232) 60%, oklch(0.60 0.17 228) 100%)",
        iconBg: "bg-sky-500/10 text-sky-600",
        numberBg: "bg-sky-600 text-white",
        checkColor: "text-sky-600",
      }}
      overview={{
        heading: "How VAT works in Kenya",
        paragraphs: [
          "Value Added Tax is charged at the standard rate of 16% on most goods and services supplied in Kenya, with a zero rate for exports and specified essentials and an exempt list for items like unprocessed food, education and financial services. Any business whose taxable turnover exceeds — or is expected to exceed — KES 5 million in any 12-month period must register for VAT with KRA.",
          "Once registered, you charge VAT on every taxable sale, claim VAT on qualifying business purchases, and pay the net difference to KRA. Returns are filed monthly on iTax by the 20th of the following month, and a nil return is required even in months with no activity.",
          "VAT and eTIMS are tightly linked. From 2024, only invoices transmitted through eTIMS count as valid input VAT for the buyer. A supplier who is not on eTIMS effectively costs their customers 16% — which is why non-compliance loses you business, not just KRA points.",
          "We handle registration or deregistration, run the monthly computation, reconcile purchases and sales against eTIMS, file the return on iTax and generate the payment slip. Where you are due a refund, we prepare the claim file and manage the KRA verification process.",
        ],
      }}
      whyImportant={[
        { title: "Mandatory above KES 5M", desc: "Trading above the threshold without registering exposes you to back-tax, 5% late-filing penalties plus 1% monthly interest, and criminal prosecution in severe cases." },
        { title: "Input VAT is real cash", desc: "Every unclaimed shilling of input VAT is money left with KRA. Proper eTIMS matching typically recovers meaningful amounts most SMEs are silently forfeiting." },
        { title: "Customers demand it", desc: "Corporates, NGOs and government buyers will not transact with suppliers who cannot issue a valid eTIMS VAT invoice — you get disqualified from tender lists." },
        { title: "Refunds unlock cash", desc: "Exporters and zero-rated suppliers accumulate VAT credits. A properly documented refund claim can release millions of shillings back into working capital." },
        { title: "Audit exposure", desc: "VAT is KRA's most-audited tax. Inconsistencies between iTax, eTIMS and your books trigger reviews that can drag on for months." },
        { title: "Cash-flow discipline", desc: "VAT collected is not your money. Treating it as such and missing the 20th is one of the fastest ways SMEs fall into a debt spiral with KRA." },
      ]}
      includes={[
        { icon: FileCheck2, title: "VAT Registration", desc: "PIN update, obligation activation and setup of your VAT profile on iTax." },
        { icon: Receipt, title: "Monthly VAT Return", desc: "Sales and purchase schedules, output/input reconciliation and iTax filing by the 20th." },
        { icon: RefreshCcw, title: "eTIMS Reconciliation", desc: "Line-by-line matching of iTax records against eTIMS transmissions to defend every claim." },
        { icon: Calculator, title: "Refund Claims", desc: "Preparation of refund files, supporting schedules and KRA verification support." },
        { icon: ShieldCheck, title: "Audit Defence", desc: "Response to KRA assessments, objections and appeals on VAT matters." },
        { icon: MessageSquare, title: "Advisory", desc: "Zero-rated vs exempt calls, mixed-supply apportionment and cross-border VAT questions." },
      ]}
      process={[
        { title: "Register", desc: "Activate the VAT obligation on your PIN and set opening balances." },
        { title: "Capture", desc: "We collect invoices, receipts and eTIMS data each month." },
        { title: "File", desc: "Return prepared, reviewed with you and lodged on iTax." },
        { title: "Reconcile", desc: "Balances agreed against eTIMS and your ledger; refunds tracked." },
      ]}
      whyAssetech={[
        { title: "eTIMS-native team", desc: "We already run eTIMS onboarding for dozens of clients — we know exactly how transmitted invoices flow into your VAT return." },
        { title: "Refund track record", desc: "We have prepared and unlocked VAT refunds for exporters, zero-rated suppliers and businesses winding down." },
        { title: "Registered tax agents", desc: "We correspond with KRA on your behalf under our own agent credentials — no chasing you for iTax logins mid-audit." },
        { title: "Fixed monthly fee", desc: "You know your VAT compliance cost upfront. No hourly billing surprises." },
        { title: "Sector experience", desc: "Live VAT work across construction, manufacturing, hospitality, retail, professional services and NGOs." },
        { title: "Backfilling capacity", desc: "Missed six or twelve months? We reconstruct, file and lodge waiver applications for the penalties." },
      ]}
      audience={[
        "SMEs at or above the KES 5M threshold",
        "Exporters and zero-rated suppliers claiming refunds",
        "Businesses selling to corporate and NGO buyers",
        "Companies with mixed taxable and exempt supplies",
        "Anyone with unresolved VAT arrears or KRA notices",
      ]}
      faqs={[
        { q: "Should I register for VAT voluntarily?", a: "If your buyers are VAT-registered they will value your invoices; if they are consumers, voluntary registration usually raises your effective price. We advise case by case." },
        { q: "What happens if I miss the 20th?", a: "5% of the tax due (minimum KES 10,000) plus 1% interest per month. We move fast to file, pay and lodge waivers where the circumstances qualify." },
        { q: "Can I claim VAT on fuel and entertainment?", a: "Fuel input VAT is largely restricted; passenger vehicle purchases and entertainment are non-deductible. We flag these in the monthly review." },
        { q: "How long does a refund take?", a: "KRA targets 90 days for a clean claim, though verification often stretches it. A well-documented file with matched eTIMS records moves fastest." },
      ]}
    />
  ),
});