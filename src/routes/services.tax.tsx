import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ArrowRight, Receipt, Landmark, Users, Coins, Percent, Building2, Factory, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/services/tax")({
  head: () => ({
    meta: [
      { title: "Tax Services — VAT, Income Tax, PAYE, TOT & More | Assetech" },
      { name: "description", content: "Full-service Kenyan tax compliance — VAT, Income Tax, PAYE, TOT, Withholding Tax, Rental Income, Excise Duty and CGT. Registration, filing, planning and KRA correspondence by Assetech Nakuru." },
      { property: "og:title", content: "Tax Services — Assetech" },
      { property: "og:description", content: "Every Kenyan tax head, handled by qualified consultants." },
    ],
  }),
  component: TaxHub,
});

type TaxHead = {
  icon: typeof Receipt;
  title: string;
  summary: string;
  to:
    | "/services/vat"
    | "/services/income-tax"
    | "/services/paye"
    | "/services/tot"
    | "/services/withholding-tax"
    | "/services/rental-income-tax"
    | "/services/excise-duty"
    | "/services/capital-gains-tax";
};

const heads: TaxHead[] = [
  { icon: Receipt, title: "Value Added Tax (VAT)", to: "/services/vat", summary: "16% on most goods and services. Registration above KES 5M turnover. Monthly iTax filing tied to eTIMS." },
  { icon: Landmark, title: "Income Tax — Individual & Corporate", to: "/services/income-tax", summary: "30% on company profits; graduated rates for individuals. Annual returns and quarterly installment tax." },
  { icon: Users, title: "PAYE, NSSF, SHIF, AHL & NITA", to: "/services/paye", summary: "Full monthly payroll stack — remitted across iTax, NSSF, SHA and NITA portals by the 9th." },
  { icon: Coins, title: "Turnover Tax (TOT)", to: "/services/tot", summary: "3% of gross monthly sales for businesses turning over KES 1M–25M. Simple, monthly, on iTax." },
  { icon: Percent, title: "Withholding Tax (WHT)", to: "/services/withholding-tax", summary: "Tax deducted at source on professional fees, rent, interest, dividends and cross-border payments." },
  { icon: Building2, title: "Monthly Rental Income (MRI)", to: "/services/rental-income-tax", summary: "7.5% on gross residential rent up to KES 15M per year. Monthly iTax filing for landlords." },
  { icon: Factory, title: "Excise Duty", to: "/services/excise-duty", summary: "Licence, stamps and monthly filing for excisable goods and services under the Excise Duty Act 2015." },
  { icon: TrendingUp, title: "Capital Gains Tax (CGT)", to: "/services/capital-gains-tax", summary: "15% on gains from transfer of land, buildings and unquoted shares. Cleared before conveyancing." },
];

function TaxHub() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />

      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, oklch(0.22 0.05 235) 0%, oklch(0.36 0.10 232) 60%, oklch(0.60 0.17 228) 100%)" }}>
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28 text-white">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/70">Tax Services</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            Every Kenyan tax head — each with its own dedicated page
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            Pick the tax that applies to you. Each page explains the law, the rate, the deadlines,
            the penalties for getting it wrong and how our team owns it end-to-end.
          </p>
          <Link
            to="/contact"
            className="group/link mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-[1.02]"
          >
            Book a Consultation <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Choose a tax</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Tax obligations we handle</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Kenya operates a self-assessment regime. Every business is responsible for identifying
          which of these taxes apply, computing the amounts due and filing on time. We cover all
          eight — click any card for the full detail.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {heads.map(({ icon: Icon, title, summary, to }) => (
            <Link
              key={to}
              to={to}
              className="group flex flex-col rounded-xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-sky-500/10 text-sky-600">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{summary}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:underline">
                Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Why it matters</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Tax is where most SMEs quietly bleed</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { t: "Compounding penalties", d: "5% late-filing, 5% late-payment (25% for PAYE) plus 1% monthly interest — a forgotten return grows fast." },
              { t: "TCC gateway", d: "No tax compliance certificate means no tenders, no licence renewals, no property transfer." },
              { t: "Overpayment", d: "Most SMEs pay more tax than they legally owe because reliefs, credits and allowances are missed." },
              { t: "Cash-flow shocks", d: "Unplanned installment tax and VAT drains cripple businesses that never budgeted for them." },
              { t: "Audit exposure", d: "Inconsistent filings across iTax, eTIMS and books are the fastest way to attract a KRA review." },
              { t: "Focus drain", d: "Every hour spent wrestling with iTax is an hour not spent running your business." },
            ].map((x) => (
              <div key={x.t} className="rounded-xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:border-primary/30" style={{ boxShadow: "var(--shadow-soft)" }}>
                <h3 className="text-lg font-semibold">{x.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Why Assetech</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">One team across every tax head</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Registered tax agents", d: "We correspond and transact with KRA on your behalf under our own agent credentials." },
            { t: "All eight taxes, one desk", d: "You do not chase three specialists. One consultant owns your PIN across every obligation." },
            { t: "Planning, not just filing", d: "Installment projections, capital allowance strategy and restructuring — not just typing numbers at the deadline." },
            { t: "Backfilling capacity", d: "Missed six or twelve months on any tax? We reconstruct, file and lodge waiver applications." },
            { t: "Sector experience", d: "NGOs, SACCOs, schools, hospitality, real estate, manufacturing and professional services — each with its own quirks." },
            { t: "Fixed monthly fee", d: "One transparent retainer, no hourly billing surprises." },
          ].map((x) => (
            <div key={x.t} className="rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30" style={{ boxShadow: "var(--shadow-soft)" }}>
              <h3 className="text-lg font-semibold">{x.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Not sure which tax applies?</h2>
            <p className="mt-2 text-secondary-foreground/70">Book a free 20-minute review — we map your PIN and tell you exactly what to file.</p>
          </div>
          <Link to="/contact" className="group/link inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] hover:bg-primary/90">
            Talk to a consultant <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
