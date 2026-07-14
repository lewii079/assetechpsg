import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Target, HeartHandshake, Award, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Assetech — Nakuru Tax & Audit Consultants" },
      { name: "description", content: "Assetech is a Nakuru-based consultancy helping Kenyan businesses stay compliant and grow smarter through tax, audit and fixed asset services." },
      { property: "og:title", content: "About Assetech" },
      { property: "og:description", content: "Your partner in growing a smarter business." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">About Us</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Your partner in growing a smarter business
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            Assetech is a professional consultancy based in Nakuru, serving
            SMEs, NGOs and corporates across Kenya. We combine deep tax
            expertise with practical asset management to help our clients stay
            compliant, informed and ready to grow.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-20 md:grid-cols-3">
        {[
          { icon: Target, title: "Our Mission", body: "To make tax and asset compliance simple, transparent and stress-free for every client we serve." },
          { icon: HeartHandshake, title: "Our Approach", body: "We work as an extension of your finance team — responsive, discreet and always on your side." },
          { icon: Award, title: "Our Promise", body: "Accurate work, delivered on time, with advice you can actually use." },
        ].map(({ icon: Icon, title, body }) => (
          <div key={title} className="rounded-xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/40" style={{ boxShadow: "var(--shadow-soft)" }}>
            <Icon className="h-8 w-8 text-primary" />
            <h3 className="mt-4 text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{body}</p>
          </div>
        ))}
      </section>

      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-4">
          {[
            { k: "100+", v: "Filings monthly" },
            { k: "10+", v: "Industries served" },
            { k: "24h", v: "Response time" },
            { k: "1", v: "Trusted partner" },
          ].map((s) => (
            <div key={s.v}>
              <div className="text-4xl font-bold text-primary">{s.k}</div>
              <div className="mt-2 text-sm text-secondary-foreground/70">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 md:flex-row md:items-center">
        <h2 className="text-2xl font-bold md:text-3xl">Let's build something smarter together.</h2>
        <Link to="/contact" className="group/link inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] hover:bg-primary/90">
          Get in touch <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </section>
      <SiteFooter />
    </div>
  );
}
