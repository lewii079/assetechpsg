import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ArrowRight, CheckCircle2, type LucideIcon } from "lucide-react";

export type ServicePageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  overview?: { heading: string; paragraphs: string[] };
  whyImportant?: { title: string; desc: string }[];
  whyAssetech?: { title: string; desc: string }[];
  subServices?: { title: string; desc: string; bullets: string[] }[];
  whyItMatters?: { title: string; desc: string }[];
  includes: { icon: LucideIcon; title: string; desc: string }[];
  process: { title: string; desc: string }[];
  audience: string[];
  faqs: { q: string; a: string }[];
};

export function ServicePage(p: ServicePageProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />

      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28 text-white">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/70">{p.eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">{p.title}</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">{p.intro}</p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-[1.02]"
          >
            Book a Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {p.overview && (
        <section className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Overview</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{p.overview.heading}</h2>
          <div className="mt-6 max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground">
            {p.overview.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>
      )}

      {p.whyImportant && p.whyImportant.length > 0 && (
        <section className="border-y border-border bg-card">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Why it's important</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">The stakes for your business</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {p.whyImportant.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border bg-background p-6"
                  style={{ boxShadow: "var(--shadow-soft)" }}
                >
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {p.whyItMatters && p.whyItMatters.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Why it matters</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">The business case</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {p.whyItMatters.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-card p-6"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">What's included</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Concrete deliverables</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {p.includes.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-xl border border-border bg-card p-6"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {p.subServices && p.subServices.length > 0 && (
        <section className="border-y border-border bg-card">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">In detail</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Each tax head, explained</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {p.subServices.map((s) => (
                <div
                  key={s.title}
                  className="rounded-xl border border-border bg-background p-7"
                  style={{ boxShadow: "var(--shadow-soft)" }}
                >
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <ul className="mt-4 space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Our process</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">How we work with you</h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-4">
            {p.process.map((step, i) => (
              <li key={step.title} className="relative rounded-xl border border-border bg-background p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {i + 1}
                </div>
                <h3 className="mt-4 text-base font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {p.whyAssetech && p.whyAssetech.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Why Assetech</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Why choose our team</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {p.whyAssetech.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-card p-6"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Who it's for</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Built for growing organisations</h2>
          <ul className="mt-6 space-y-3">
            {p.audience.map((a) => (
              <li key={a} className="flex items-start gap-3 text-sm text-foreground">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                {a}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">FAQ</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Common questions</h2>
          <div className="mt-6 space-y-4">
            {p.faqs.map((f) => (
              <details key={f.q} className="group rounded-lg border border-border bg-card p-5" style={{ boxShadow: "var(--shadow-soft)" }}>
                <summary className="cursor-pointer list-none text-sm font-semibold text-foreground marker:hidden">
                  {f.q}
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Ready to get started?</h2>
            <p className="mt-2 text-secondary-foreground/70">Our Nakuru team responds within 24 hours.</p>
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
