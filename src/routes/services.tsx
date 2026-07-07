import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  FileCheck2, Receipt, ClipboardList, ShieldCheck, Boxes, Users, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Assetech | Tax, Audit & Fixed Assets" },
      { name: "description", content: "eTIMS filing, VAT, income tax, audit support, fixed asset tagging & register updates, and business consultancy from Assetech Nakuru." },
      { property: "og:title", content: "Services — Assetech" },
      { property: "og:description", content: "Tax compliance, audit and fixed asset management services." },
    ],
  }),
  component: Services,
});

const services = [
  { icon: FileCheck2, title: "eTIMS Onboarding & Filing", points: ["eTIMS registration & setup", "Invoice compliance training", "Monthly filing & reconciliation"] },
  { icon: Receipt, title: "VAT Returns", points: ["Monthly VAT computation & filing", "Input VAT review", "KRA correspondence"] },
  { icon: ShieldCheck, title: "Income Tax", points: ["Individual & corporate returns", "Installment tax planning", "Tax health checks"] },
  { icon: ClipboardList, title: "Audit & Assurance", points: ["Statutory audit preparation", "Internal audit reviews", "Risk & controls assessment"] },
  { icon: Boxes, title: "Fixed Asset Management", points: ["Asset tagging & barcoding", "Physical verification", "Updated fixed asset register"] },
  { icon: Users, title: "Business Consultancy", points: ["Bookkeeping & advisory", "Process improvement", "Compliance training"] },
];

function Services() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Our Services</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Complete tax, audit and asset services
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Every engagement is handled by qualified consultants who understand
            Kenyan tax law and the realities of running a business.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-20 md:grid-cols-2">
        {services.map(({ icon: Icon, title, points }) => (
          <div
            key={title}
            className="rounded-xl border border-border bg-card p-8"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon className="h-6 w-6" />
            </div>
            <h2 className="mt-5 text-xl font-semibold">{title}</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 md:flex-row md:items-center">
          <h2 className="text-2xl font-bold md:text-3xl">Not sure where to start?</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
            Talk to a consultant <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
