import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { ShieldCheck, FileSearch, ClipboardCheck, AlertTriangle, BookOpen, Users } from "lucide-react";

export const Route = createFileRoute("/services/audit-assurance")({
  head: () => ({
    meta: [
      { title: "Audit & Assurance Services — Assetech Nakuru" },
      { name: "description", content: "Statutory audit preparation, internal audit, risk & controls reviews, forensic and donor audits by Assetech Nakuru. ISA-aligned deliverables that satisfy auditors, regulators and lenders." },
      { property: "og:title", content: "Audit & Assurance — Assetech" },
      { property: "og:description", content: "Audit-ready books, tight controls and clean opinions — every year." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Audit & Assurance"
      title="Audit-ready books and defensible controls"
      intro="We prepare your organisation for external audit, build internal audit capacity and stress-test your controls — so audit season stops being a fire drill and starts being a routine sign-off."
      overview={{
        heading: "What audit and assurance actually deliver",
        paragraphs: [
          "An audit is an independent examination of your financial statements and the systems that produce them. Under the Companies Act 2015, most Kenyan companies with a turnover above KES 50 million or total assets above KES 40 million must appoint an ICPAK-registered auditor and file audited accounts each year. NGOs, donor-funded projects, SACCOs and regulated entities have their own audit mandates on top of that.",
          "Assurance goes broader than the statutory tick-box. It is the umbrella term for any independent work that gives stakeholders — boards, lenders, donors, regulators, buyers — confidence that the numbers, controls and processes in your business actually work the way you say they do.",
          "We do not sign audit opinions ourselves — that would compromise independence. What we do is the heavy lifting that stands between a chaotic trial balance and a clean audit report: cleaning up the books, building working-paper files that meet International Standards on Auditing (ISA), designing and testing internal controls, running internal audits for boards, and investigating suspected fraud when it happens.",
          "The result: your external auditor gets the file they need on day one, your board gets real assurance instead of surprises, and your regulators, lenders and donors get exactly the reporting they expect — on time and without qualifications.",
        ],
      }}
      whyImportant={[
        { title: "Statutory obligation", desc: "Missing an audit deadline breaches the Companies Act 2015 and can trigger fines, disqualification of directors and refusal of tax compliance certificates." },
        { title: "Lender & investor confidence", desc: "Banks, DFIs and equity investors demand clean audited accounts before releasing facilities or funding. A qualified opinion can freeze a deal overnight." },
        { title: "Donor & grant compliance", desc: "NGOs and donor-funded projects must present audited utilisation reports. A failed audit is one of the fastest ways to lose a grant and future funding." },
        { title: "Fraud prevention & detection", desc: "Sound internal controls and periodic internal audits catch leakage — cash, inventory, payroll ghosts, kickbacks — before it becomes existential." },
        { title: "Board & management assurance", desc: "An independent lens on operations tells boards where the real risks are, not where management thinks they are." },
        { title: "Better decisions", desc: "Reliable numbers and mapped processes turn strategic decisions — pricing, expansion, hiring, capex — into informed choices instead of guesses." },
      ]}
      includes={[
        { icon: ClipboardCheck, title: "Audit Preparation", desc: "Trial balance clean-up, schedules, reconciliations and full audit working-paper files ready for your external auditor." },
        { icon: ShieldCheck, title: "Internal Audit", desc: "Outsourced or co-sourced internal audit function reporting directly to your board or audit committee." },
        { icon: FileSearch, title: "Risk & Controls Review", desc: "Documentation, testing and remediation of controls across revenue, procurement, payroll, treasury and IT." },
        { icon: AlertTriangle, title: "Forensic Reviews", desc: "Fraud investigations, whistle-blower response and asset-tracing engagements with evidence-quality reporting." },
        { icon: BookOpen, title: "Donor & Grant Audits", desc: "Grant utilisation audits, expenditure verification and donor-specific reporting formats." },
        { icon: Users, title: "Audit Committee Support", desc: "Papers, reports and briefings that give boards the assurance they need to sign off with confidence." },
      ]}
      process={[
        { title: "Scope", desc: "Agree the assurance need, standards to apply and reporting audience." },
        { title: "Plan", desc: "Risk-assess the engagement and design procedures and sampling." },
        { title: "Execute", desc: "Fieldwork, testing, walk-throughs and documented working papers." },
        { title: "Report", desc: "Findings, root causes and prioritised recommendations to management and the board." },
      ]}
      whyAssetech={[
        { title: "ICPAK-aligned methodology", desc: "Our working papers, sampling and documentation follow International Standards on Auditing — the same framework your external auditor uses." },
        { title: "Independence you can trust", desc: "We deliberately do not sign external audit opinions on clients we serve, protecting independence for everyone in the reporting chain." },
        { title: "Sector experience", desc: "Live engagements across NGOs, SACCOs, schools, hospitality, real estate, manufacturing and professional services — each with its own audit expectations." },
        { title: "Board-ready reporting", desc: "Findings are written for decision-makers, not just accountants — root causes, business impact and clear owners for every recommendation." },
        { title: "Onsite in Nakuru & Rift", desc: "Field teams that can be onsite for stock counts, cash counts, fixed asset verification and controls walk-throughs — not just remote reviews." },
        { title: "Fixed-fee engagements", desc: "You get a scoped, fixed-fee proposal upfront. No hourly-rate surprises after the fieldwork begins." },
      ]}
      audience={[
        "Limited companies with a statutory audit requirement",
        "NGOs and donor-funded projects with grant audits",
        "SACCOs and microfinance institutions",
        "Schools, hospitals and hospitality groups",
        "Family businesses preparing for succession or investment",
        "Boards wanting an independent internal audit function",
      ]}
      faqs={[
        { q: "Do you sign my audit opinion?", a: "No — independence rules prevent that. We prepare your books and working papers so your external auditor can complete the audit efficiently and issue a clean opinion." },
        { q: "How long does audit preparation take?", a: "For a well-run SME, 2–4 weeks. For organisations with backlog or system issues, we scope a preparatory clean-up phase before the audit engagement begins." },
        { q: "Can you run internal audit as an outsourced function?", a: "Yes. We can be your full outsourced internal audit team reporting to the board, or co-source alongside an existing internal audit head." },
        { q: "What do you do in a forensic review?", a: "Scoping with the board, evidence preservation, transaction analysis, interviews, and a report of findings that stands up to disciplinary or legal processes." },
        { q: "Do you handle donor reporting formats?", a: "Yes — we work with USAID, EU, DANIDA, GIZ, FCDO, UN and local trust reporting templates and eligibility rules." },
      ]}
    />
  ),
});
