import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { Receipt, ShieldCheck, Coins, Users2, Percent, ClipboardList, FileSpreadsheet, MessageSquare } from "lucide-react";

export const Route = createFileRoute("/services/tax")({
  head: () => ({
    meta: [
      { title: "Tax Services — VAT, Income Tax, PAYE, TOT & More | Assetech" },
      { name: "description", content: "Full-service Kenyan tax compliance — VAT, Income Tax, PAYE, TOT, Withholding Tax, Rental Income, Excise Duty and CGT. Registration, filing, planning and KRA correspondence by Assetech Nakuru." },
      { property: "og:title", content: "Tax Services — Assetech" },
      { property: "og:description", content: "Every Kenyan tax head, handled by qualified consultants." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Tax Services"
      title="Every Kenyan tax, handled with care"
      intro="From registration to filing, planning and defending your position with KRA, we take responsibility for the full tax lifecycle across every obligation on your PIN."
      overview={{
        heading: "Kenyan tax in plain language",
        paragraphs: [
          "Kenya operates a self-assessment tax regime. You are legally responsible for identifying which taxes apply to your business, computing the amounts due, filing returns on iTax and paying on time. KRA's role is to verify — through eTIMS, cross-matching, audits and assessments — and to penalise gaps.",
          "The consequences of getting it wrong are steep and stack quickly. Late filing attracts 5% of the tax due (minimum KES 2,000 for individuals, KES 20,000 for companies). Late payment adds another 5% one-off penalty plus 1% interest every month until the balance is cleared. For PAYE specifically the late-payment penalty jumps to 25%.",
          "Beyond penalties, unresolved tax exposures block tax compliance certificates — which you need to bid for government and NGO work, renew a liquor licence, transfer property, or import goods. A single missed filing can freeze your business in ways that are far more expensive than the tax itself.",
          "We take that entire burden off your desk. Our team maps every obligation on your KRA PIN, sets up a filing calendar, runs the computations, files on iTax, generates payment slips and responds to KRA on your behalf — for VAT, Income Tax, PAYE, TOT, Withholding Tax, Rental Income, Excise Duty and Capital Gains Tax.",
        ],
      }}
      whyImportant={[
        { title: "Steep penalties add up fast", desc: "Late filing, late payment and interest compound monthly. A single forgotten return can grow into a six-figure liability by the time you notice." },
        { title: "Tax compliance certificate", desc: "You cannot bid for tenders, renew critical licences or transfer property without a valid TCC — and KRA will not issue one while any obligation is in arrears." },
        { title: "Cash-flow protection", desc: "Proper planning means installment tax, VAT and PAYE are budgeted for, not scrambled for at the deadline. Refunds we identify put cash back in your account." },
        { title: "Reduce your legal tax bill", desc: "Most SMEs overpay because reliefs, allowances and legitimate expense claims are missed. A qualified review typically finds meaningful savings within the law." },
        { title: "Audit defence", desc: "If KRA audits you, the burden of proof is yours. Consistent, well-documented filings make audits routine instead of existential." },
        { title: "Focus on your business", desc: "Delegating tax to specialists means you and your team stop losing days each month to iTax logins, error messages and reconciliations." },
      ]}
      subServices={[
        {
          title: "Value Added Tax (VAT)",
          desc: "VAT is charged at 16% on most goods and services. Businesses with taxable turnover above KES 5 million in any 12-month period must register, then file monthly on iTax by the 20th. VAT interacts tightly with eTIMS — only transmitted invoices count as valid input VAT.",
          bullets: ["Registration and deregistration", "Monthly VAT returns and eTIMS reconciliation", "Input VAT reviews and refund claims", "Zero-rated, exempt and mixed supply advice"],
        },
        {
          title: "Income Tax — Individual & Corporate",
          desc: "Companies pay 30% on chargeable profits (37.5% for branches of non-residents) and file annually within six months of year-end. Individuals file by 30 June. Installment tax is due quarterly (20th of the 4th, 6th, 9th and 12th month) for those expecting tax over KES 40,000.",
          bullets: ["Annual company and individual returns", "Installment tax computations", "Capital allowances and tax planning", "Back-year returns and penalty waivers"],
        },
        {
          title: "PAYE, NSSF, SHIF, Housing Levy & NITA",
          desc: "PAYE is deducted monthly from salaries on graduated bands from 10% to 35%. Alongside PAYE, employers deduct NSSF (tiered), SHIF (2.75% of gross), Affordable Housing Levy (1.5% employee + 1.5% employer) and NITA (KES 50 per employee). All are due by the 9th of the following month.",
          bullets: ["Monthly payroll processing and payslips", "PAYE, NSSF, SHIF, AHL and NITA remittance", "P10 monthly and P9 year-end certificates", "Payroll health checks and back-filing"],
        },
        {
          title: "Turnover Tax (TOT)",
          desc: "A simplified tax for small businesses with annual turnover between KES 1 million and KES 25 million. Charged at 3% of gross monthly sales — no expense deductions — and filed by the 20th of the following month. Rental income and professional fees are excluded.",
          bullets: ["TOT registration on your PIN", "Monthly sales schedules and iTax filing", "Nil returns to avoid penalties", "Graduation planning to VAT and Income Tax"],
        },
        {
          title: "Withholding Tax (WHT)",
          desc: "Tax deducted at source on payments such as professional fees, consultancy, rent, interest, dividends, royalties and management fees. Rates range from 5% to 20% depending on the payment type and whether the recipient is resident or not. Certificates must be issued and remittance made by the 20th.",
          bullets: ["Correct WHT rate determination", "Monthly WHT remittance on iTax", "Automatic WHT certificate issuance", "WHT credits reconciled against your income tax"],
        },
        {
          title: "Monthly Rental Income Tax (MRI)",
          desc: "Resident landlords earning KES 288,000 to KES 15 million per year in rent pay Monthly Rental Income at 7.5% of gross rent — no expense deductions. Filed monthly by the 20th. Landlords above KES 15 million move to normal income tax with allowable expenses.",
          bullets: ["MRI registration and obligation setup", "Monthly filing of gross rent collected", "Advice on when to shift to full income tax", "Property manager reconciliation"],
        },
        {
          title: "Excise Duty",
          desc: "Charged on specific excisable goods and services under the Excise Duty Act 2015 — airtime, data, mobile money transfers, betting, alcohol, cigarettes, sugary drinks and imported plastics. Filed monthly by the 20th. Rates and scope change with almost every Finance Act.",
          bullets: ["Excisable-supply mapping", "Excise licence applications", "Monthly excise returns", "Excise stamps and compliance advisory"],
        },
        {
          title: "Capital Gains Tax (CGT)",
          desc: "15% tax on gains from the transfer of land, buildings and unquoted shares. Payable at the point of transfer — conveyancers will not complete without proof of CGT settlement. Computed as sale price less acquisition cost, incidentals and any qualifying capital improvements.",
          bullets: ["CGT computations and supporting schedules", "iTax lodgement before conveyancing", "Exemption and relief advice", "Restructuring guidance for share transfers"],
        },
      ]}
      includes={[
        { icon: ClipboardList, title: "PIN & Obligation Setup", desc: "Register or clean up your KRA PIN and activate every obligation that applies." },
        { icon: Receipt, title: "Monthly Filings", desc: "VAT, PAYE, WHT, TOT, MRI and Excise filed accurately, every month, on iTax." },
        { icon: ShieldCheck, title: "Annual Returns", desc: "Company and individual income tax returns with full supporting schedules." },
        { icon: FileSpreadsheet, title: "Tax Planning", desc: "Legitimate strategies — reliefs, allowances, structuring — to reduce your effective rate." },
        { icon: MessageSquare, title: "KRA Correspondence", desc: "We handle audits, assessments, objections, waivers and refund follow-ups." },
        { icon: Coins, title: "Tax Health Check", desc: "Diagnostic review of prior filings to close exposures before KRA finds them." },
      ]}
      process={[
        { title: "Diagnose", desc: "Map every obligation on your PIN and identify open exposures." },
        { title: "Compute", desc: "Prepare accurate computations and supporting workings each cycle." },
        { title: "File & Pay", desc: "Submit on iTax and generate payment slips before every deadline." },
        { title: "Advise", desc: "Quarterly debrief on planning, savings and upcoming law changes." },
      ]}
      whyAssetech={[
        { title: "Every tax, one team", desc: "Instead of chasing three specialists, one Assetech consultant covers VAT, PAYE, income tax, WHT, TOT, MRI, excise and CGT for you." },
        { title: "KRA-registered", desc: "We are registered tax agents and can transact and correspond with KRA on your behalf, end-to-end." },
        { title: "Planning, not just filing", desc: "We look ahead — installment tax projections, capital allowances, restructuring — instead of just typing numbers into iTax at the deadline." },
        { title: "Penalty & waiver experience", desc: "Where penalties have hit, we prepare and lodge waiver applications with the reasoning and evidence KRA expects." },
        { title: "Sector coverage", desc: "Real experience across NGOs, schools, hospitality, real estate, professional services, manufacturing and retail — each with its own tax quirks." },
        { title: "Straight answers", desc: "We tell you plainly what the law says, what the risk is and what we recommend — no jargon, no hedging." },
      ]}
      audience={[
        "SMEs and family businesses managing multiple tax obligations",
        "NGOs and donor-funded projects with PAYE, WHT and VAT exposure",
        "Landlords and property managers with rental income",
        "Consultants and professionals dealing with WHT",
        "Businesses at or approaching the VAT registration threshold",
        "Anyone with unresolved KRA notices or arrears",
      ]}
      faqs={[
        { q: "How do I know which taxes apply to me?", a: "Book a free 20-minute review. We check your KRA PIN, your revenue mix and your structure, and give you a clear list of the obligations you must file — and the ones you don't need to worry about." },
        { q: "I have missed several months of filings. Can you fix it?", a: "Yes. We regularly backfill 6–24 months of missed returns, reconcile balances with KRA and prepare waiver applications for the penalties." },
        { q: "How much do your tax services cost?", a: "It depends on the number of obligations, transaction volume and whether we handle bookkeeping too. We give you a clear fixed monthly fee after the initial review." },
        { q: "Do you handle payment as well as filing?", a: "We generate the iTax payment slip and share payment instructions (M-Pesa Paybill, bank, agent). You retain control over the actual bank transfer." },
        { q: "Can you represent me if KRA audits?", a: "Yes. As registered tax agents we respond to audit queries, attend meetings and lodge objections on your behalf." },
      ]}
    />
  ),
});
