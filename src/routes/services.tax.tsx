import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  Receipt, ShieldCheck, Coins, Users2, Percent, Home, Flame, Building2, ArrowRight,
  type LucideIcon,
} from "lucide-react";

export const Route = createFileRoute("/services/tax")({
  head: () => ({
    meta: [
      { title: "Tax Services — VAT, Income Tax, TOT, PAYE & More | Assetech" },
      { name: "description", content: "Full-service Kenyan tax compliance: VAT, Income Tax, Turnover Tax (TOT), PAYE, Withholding Tax, Rental Income Tax and Excise Duty by Assetech Nakuru." },
      { property: "og:title", content: "Tax Services — Assetech" },
      { property: "og:description", content: "Every tax head, handled by qualified consultants. Registration, filing, planning and KRA correspondence." },
    ],
  }),
  component: TaxIndex,
});

type TaxItem = { icon: LucideIcon; title: string; desc: string; to?: "/services/vat" | "/services/income-tax" };

const taxes: TaxItem[] = [
  {
    icon: Receipt,
    title: "Value Added Tax (VAT)",
    desc: "VAT is charged at 16% on most goods and services in Kenya. Businesses with taxable turnover above KES 5 million must register, then file monthly returns by the 20th. We handle registration, monthly computations, input VAT reviews, eTIMS reconciliation and refund claims.",
    to: "/services/vat" as const,
  },
  {
    icon: ShieldCheck,
    title: "Income Tax (Individual & Corporate)",
    desc: "Tax on profits and personal income. Companies pay 30% (resident) or 37.5% (branches of non-residents) on chargeable income and file annual returns within 6 months of year-end. Individuals file by 30 June. We prepare returns, installment tax schedules and tax planning to legally reduce your bill.",
    to: "/services/income-tax" as const,
  },
  {
    icon: Coins,
    title: "Turnover Tax (TOT)",
    desc: "A simplified tax for small businesses with turnover between KES 1 million and KES 25 million. Charged at 3% of gross monthly sales and filed by the 20th of the following month. We register you for TOT, keep the monthly filings current and advise when to graduate to VAT and Income Tax.",
  },
  {
    icon: Users2,
    title: "PAYE (Pay As You Earn)",
    desc: "Monthly tax deducted from employees' salaries under graduated bands up to 35%, plus NSSF, NHIF/SHIF, Housing Levy and NITA. Employers must remit by the 9th of the following month. We run your payroll, generate P9s and file the monthly P10 return.",
  },
  {
    icon: Percent,
    title: "Withholding Tax (WHT)",
    desc: "Tax deducted at source on payments such as professional fees, rent, interest, dividends and management fees. Rates vary from 5% to 20% depending on the payment and residency of the recipient. Certificates must be issued and remitted by the 20th. We compute, remit and reconcile WHT for both payer and recipient.",
  },
  {
    icon: Home,
    title: "Rental Income Tax (MRI)",
    desc: "Monthly Rental Income Tax at 7.5% of gross rent for resident landlords with annual rental income between KES 288,000 and KES 15 million. Filed monthly by the 20th. We handle registration, filing and record-keeping for landlords and property managers.",
  },
  {
    icon: Flame,
    title: "Excise Duty",
    desc: "Levied on specific goods and services such as airtime, data, financial transactions, alcoholic beverages and sugary drinks. Filed monthly by the 20th. We advise on excisable products, register you and manage monthly returns.",
  },
  {
    icon: Building2,
    title: "Capital Gains Tax (CGT)",
    desc: "15% tax on gains from the transfer of property or unquoted shares. Payable at the point of transfer. We compute the gain, prepare supporting schedules and lodge the return with KRA before conveyancing.",
  },
] as const;

function TaxIndex() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />

      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28 text-white">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/70">Tax Services</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            Every Kenyan tax head, handled with care
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            From VAT and Income Tax to TOT, PAYE, Withholding Tax and Rental Income, our
            consultants keep you compliant, penalty-free and confident with KRA.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-[1.02]"
          >
            Book a Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Types of taxes</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          Which taxes affect your business?
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Not every business needs to worry about every tax. Below is a quick guide to the
          main tax heads in Kenya and how we help you stay compliant with each.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {taxes.map(({ icon: Icon, title, desc, to }) => (
            <div
              key={title}
              className="rounded-xl border border-border bg-card p-7"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              {to && (
                <Link
                  to={to}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                >
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Not sure which taxes apply to you?</h2>
            <p className="mt-2 text-secondary-foreground/70">Book a free 20-minute review with our tax team.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
            Talk to a consultant <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}