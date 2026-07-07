import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Assetech — Nakuru Office" },
      { name: "description", content: "Call 0757 553 243 or visit Assetech at Meems Building, Kenyatta Avenue, Nakuru for tax and audit consultancy." },
      { property: "og:title", content: "Contact Assetech" },
      { property: "og:description", content: "Meems Building, Kenyatta Avenue, Nakuru · 0757 553 243" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Contact</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Let's talk about your business
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Reach us by phone, email or at our Nakuru office. We respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-5">
        <div className="space-y-6 md:col-span-2">
          {[
            { icon: Phone, title: "Call us", body: "0757 553 243", href: "tel:+254757553243" },
            { icon: Mail, title: "Email", body: "info@assetech.co.ke", href: "mailto:info@assetech.co.ke" },
            { icon: MapPin, title: "Office", body: "Meems Building, Kenyatta Avenue, Nakuru" },
            { icon: Clock, title: "Hours", body: "Mon – Fri · 8:00 AM – 5:00 PM" },
          ].map(({ icon: Icon, title, body, href }) => (
            <div key={title} className="flex items-start gap-4 rounded-xl border border-border bg-card p-5" style={{ boxShadow: "var(--shadow-soft)" }}>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">{title}</div>
                {href ? (
                  <a href={href} className="text-sm text-muted-foreground hover:text-primary">{body}</a>
                ) : (
                  <div className="text-sm text-muted-foreground">{body}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-xl border border-border bg-card p-8 md:col-span-3"
          style={{ boxShadow: "var(--shadow-soft)" }}
        >
          <h2 className="text-xl font-semibold">Send a message</h2>
          <p className="mt-1 text-sm text-muted-foreground">Tell us a bit about what you need.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="text-sm">
              <span className="mb-1 block font-medium">Name</span>
              <input required className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
            </label>
            <label className="text-sm">
              <span className="mb-1 block font-medium">Phone</span>
              <input required className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
            </label>
          </div>
          <label className="mt-4 block text-sm">
            <span className="mb-1 block font-medium">Email</span>
            <input type="email" required className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
          </label>
          <label className="mt-4 block text-sm">
            <span className="mb-1 block font-medium">How can we help?</span>
            <textarea required rows={5} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
          </label>
          <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
            {sent ? "Message sent — we'll be in touch" : "Send message"}
          </button>
        </form>
      </section>
      <SiteFooter />
    </div>
  );
}
