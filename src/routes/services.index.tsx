import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  FileCheck2, Landmark, ClipboardList, Boxes, Users, ArrowRight,
  type LucideIcon,
} from "lucide-react";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Assetech | Tax, Audit, Fixed Assets & Consultancy" },
      { name: "description", content: "eTIMS & iTax filing, tax compliance, audit & assurance, fixed asset management and business consultancy from Assetech Nakuru. Deep specialist detail on every service." },
      { property: "og:title", content: "Services — Assetech" },
      { property: "og:description", content: "Five core services, delivered by qualified consultants who understand Kenyan business." },
    ],
  }),
  component: Services,
});

type Service = {
  icon: LucideIcon;
  title: string;
  summary: string;
  points: string[];
  to:
    | "/services/etims-filing"
    | "/services/tax"
    | "/services/audit-assurance"
    | "/services/fixed-asset-management"
    | "/services/business-consultancy";
};

const services: Service[] = [
  {
    icon: FileCheck2,
    title: "eTIMS & iTax",
    to: "/services/etims-filing",
    summary: "eTIMS onboarding, invoice compliance and iTax filing so every invoice reaches KRA and every return is filed on time.",
    points: [
      "eTIMS registration (Online, OSCU, VSCU)",
      "Invoice, credit note & catalogue setup",
      "Monthly invoice transmission & iTax filing",
      "Staff training on daily eTIMS use",
      "KRA correspondence & backfilling",
    ],
  },
  {
    icon: Landmark,
    title: "Tax",
    to: "/services/tax",
    summary: "The full Kenyan tax lifecycle across every obligation on your PIN — registration, computations, filing, planning and KRA defence.",
    points: [
      "VAT, Income Tax, PAYE & TOT",
      "Withholding, Rental, Excise & CGT",
      "Annual and installment tax returns",
      "Tax planning & health checks",
      "KRA audits, objections & waivers",
    ],
  },
  {
    icon: ClipboardList,
    title: "Audit & Assurance",
    to: "/services/audit-assurance",
    summary: "ISA-aligned audit preparation, internal audit, controls testing and forensic reviews that satisfy regulators, lenders and donors.",
    points: [
      "Statutory audit preparation",
      "Outsourced internal audit function",
      "Risk & internal controls reviews",
      "Forensic and fraud investigations",
      "Donor & grant audit support",
    ],
  },
  {
    icon: Boxes,
    title: "Fixed Asset Management",
    to: "/services/fixed-asset-management",
    summary: "Barcode tagging, physical verification and an IAS 16-aligned fixed asset register that reconciles line-for-line with your ledger.",
    points: [
      "Barcode / QR asset tagging",
      "Physical verification & counts",
      "Register build and updates",
      "Ledger reconciliation",
      "Depreciation & disposal schedules",
    ],
  },
  {
    icon: Users,
    title: "Business Consultancy",
    to: "/services/business-consultancy",
    summary: "Your outsourced finance function — bookkeeping, management accounts, budgets, systems, SOPs and training, at a fraction of an in-house team.",
    points: [
      "Bookkeeping & monthly close",
      "Management accounts & KPI packs",
      "Budgeting & cash-flow forecasting",
      "QuickBooks / Sage / Zoho rollout",
      "Company registration & compliance",
    ],
  },
];

function Services() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />

      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Our Services</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Five services, one accountable team
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Every engagement is handled by qualified consultants who understand Kenyan tax law,
            IFRS reporting and the day-to-day realities of running a business. Each service page
            below explains what we do, why it matters, and why to choose Assetech to do it.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map(({ icon: Icon, title, summary, points, to }) => (
            <div
              key={title}
              className="group flex flex-col rounded-xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/40"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-xl font-semibold">{title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{summary}</p>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                to={to}
                className="group/link mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 md:flex-row md:items-center">
          <h2 className="text-2xl font-bold md:text-3xl">Not sure where to start?</h2>
          <Link to="/contact" className="group/link inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] hover:bg-primary/90">
            Talk to a consultant <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
