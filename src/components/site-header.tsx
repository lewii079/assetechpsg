import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/assetech-logo.png.asset.json";

const topLinks = [
  { to: "/", label: "Home" },
  { to: "/services/etims-filing", label: "eTIMS Filing" },
  { to: "/services/vat", label: "VAT" },
  { to: "/services/income-tax", label: "Income Tax" },
  { to: "/services/fixed-asset-management", label: "Fixed Assets" },
  { to: "/services", label: "More Services" },
  { to: "/contact", label: "Contact" },
] as const;

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Top panel */}
      <div className="bg-secondary text-secondary-foreground">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
          <nav className="hidden items-center gap-5 md:flex">
            {topLinks.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-xs font-medium text-secondary-foreground/70 transition-colors hover:text-secondary-foreground"
                activeProps={{ className: "text-secondary-foreground font-semibold" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <a
            href="tel:+254757553243"
            className="ml-auto flex items-center gap-1.5 text-xs font-semibold text-secondary-foreground/90 hover:text-secondary-foreground"
          >
            <Phone className="h-3 w-3" />
            0757 553 243
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-40 w-full border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo.url} alt="Assetech" className="h-9 w-auto" />
            <span className="text-lg font-semibold tracking-tight text-foreground">
              Assetech
            </span>
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              Get a Quote
            </Link>
          </nav>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-border bg-background md:hidden">
            <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
              {navItems.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-primary"
                  activeProps={{ className: "text-primary bg-muted" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

