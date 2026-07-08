import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/hero.jpg";
import {
  FileCheck2,
  Landmark,
  ClipboardList,
  Boxes,
  Users,
  ArrowRight,
  Phone,
  MapPin,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  { icon: FileCheck2, title: "eTIMS Filing", to: "/services/etims-filing", desc: "Onboarding, invoicing and monthly eTIMS compliance handled end-to-end." },
  { icon: Landmark, title: "Tax", to: "/services/tax", desc: "VAT, Income Tax, TOT, PAYE, Withholding Tax and more — all handled by our tax team." },
  { icon: ClipboardList, title: "Audit Support", to: null, desc: "Independent audit preparation, reviews and assurance engagements." },
  { icon: Boxes, title: "Fixed Asset Management", to: "/services/fixed-asset-management", desc: "Tagging, verification and an always-updated fixed asset register." },
  { icon: Users, title: "Business Consultancy", to: null, desc: "Practical advice to help you build a smarter, more resilient business." },
] as const;

function Index() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 opacity-25">
          <img src={heroImg} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-2 md:py-32">
          <div className="text-white">
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/80 backdrop-blur">
              Nakuru · Kenya
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Your partner in growing a <span className="text-primary-foreground/90 underline decoration-primary decoration-4 underline-offset-8">smarter business</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              Assetech delivers reliable tax compliance, eTIMS filing, audit
              support and fixed asset management for growing organisations across Kenya.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-[1.02]"
              >
                Book a Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div>
          </div>
          <div className="hidden md:block" />
        </div>
      </section>

      {/* Value strip */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-10 sm:grid-cols-3">
          {[
            "KRA-compliant filings",
            "Certified consultants",
            "Transparent pricing",
          ].map((t) => (
            <div key={t} className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-foreground">{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">What we do</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Compliance and clarity, in one trusted partner
          </h2>
          <p className="mt-4 text-muted-foreground">
            From your first eTIMS invoice to a fully updated fixed asset register,
            our team handles the details so you can focus on growth.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc, to }) => (
            <div
              key={title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              {to && (
                <Link to={to} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Ready for stress-free compliance?
            </h2>
            <p className="mt-4 text-secondary-foreground/70">
              Talk to our consultants at our Nakuru office or over the phone. We reply the same day.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <a href="tel:+254757553243" className="flex items-center gap-3 text-lg font-semibold hover:text-primary">
              <Phone className="h-5 w-5 text-primary" /> 0757 553 243
            </a>
            <div className="flex items-start gap-3 text-sm text-secondary-foreground/80">
              <MapPin className="mt-1 h-5 w-5 text-primary" />
              <span>Meems Building, Kenyatta Avenue, Nakuru</span>
            </div>
            <Link
              to="/contact"
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Send us a message <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
