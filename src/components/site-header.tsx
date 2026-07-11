import { Link } from "@tanstack/react-router";
import { useState, useEffect, useRef, memo } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/assetech-logo.png.asset.json";

const coreServices = [
  { to: "/services/etims-filing", label: "eTIMS & iTax" },
  { to: "/services/tax", label: "Tax (all heads)" },
  { to: "/services/audit-assurance", label: "Audit & Assurance" },
  { to: "/services/fixed-asset-management", label: "Fixed Asset Management" },
  { to: "/services/business-consultancy", label: "Business Consultancy" },
] as const;

const taxServices = [
  { to: "/services/vat", label: "VAT" },
  { to: "/services/income-tax", label: "Income Tax" },
  { to: "/services/paye", label: "PAYE & Statutory" },
  { to: "/services/tot", label: "Turnover Tax (TOT)" },
  { to: "/services/withholding-tax", label: "Withholding Tax" },
  { to: "/services/rental-income-tax", label: "Rental Income (MRI)" },
  { to: "/services/excise-duty", label: "Excise Duty" },
  { to: "/services/capital-gains-tax", label: "Capital Gains Tax" },
] as const;

function SiteHeaderComponent() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!servicesOpen) return;
    const onClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setServicesOpen(false); };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [servicesOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo.url} alt="Assetech" className="h-9 w-auto" />
            <span className="text-lg font-semibold tracking-tight text-foreground">
              Assetech
            </span>
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              to="/"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: true }}
            >
              Home
            </Link>

            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesOpen((v) => !v)}
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                aria-haspopup="true"
                aria-expanded={servicesOpen}
              >
                Services <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {servicesOpen && (
                <div className="absolute left-1/2 top-full z-50 w-[560px] -translate-x-1/2 pt-2">
                  <div className="rounded-xl border border-border bg-background p-5 shadow-xl">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">Core services</p>
                        <ul className="space-y-1">
                          <li>
                            <Link to="/services" onClick={() => setServicesOpen(false)} className="block rounded px-2 py-1.5 text-sm font-semibold text-foreground hover:bg-muted">
                              All services →
                            </Link>
                          </li>
                          {coreServices.map((s) => (
                            <li key={s.to}>
                              <Link to={s.to} onClick={() => setServicesOpen(false)} className="block rounded px-2 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-primary">
                                {s.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">Tax services</p>
                        <ul className="space-y-1">
                          {taxServices.map((s) => (
                            <li key={s.to}>
                              <Link to={s.to} onClick={() => setServicesOpen(false)} className="block rounded px-2 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-primary">
                                {s.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              Contact
            </Link>

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
              <Link to="/" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-primary" activeProps={{ className: "text-primary bg-muted" }} activeOptions={{ exact: true }}>
                Home
              </Link>
              <Link to="/services" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm font-semibold text-foreground hover:bg-muted hover:text-primary" activeProps={{ className: "text-primary bg-muted" }}>
                Services
              </Link>
              <div className="ml-3 border-l border-border pl-3">
                <p className="mt-1 mb-1 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Core</p>
                {coreServices.map((s) => (
                  <Link key={s.to} to={s.to} onClick={() => setOpen(false)} className="block rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-primary" activeProps={{ className: "text-primary bg-muted" }}>
                    {s.label}
                  </Link>
                ))}
                <p className="mt-3 mb-1 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Tax</p>
                {taxServices.map((s) => (
                  <Link key={s.to} to={s.to} onClick={() => setOpen(false)} className="block rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-primary" activeProps={{ className: "text-primary bg-muted" }}>
                    {s.label}
                  </Link>
                ))}
              </div>
              <Link to="/about" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-primary" activeProps={{ className: "text-primary bg-muted" }}>
                About
              </Link>
              <Link to="/contact" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-primary" activeProps={{ className: "text-primary bg-muted" }}>
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

// Memoize to prevent unnecessary re-renders when parent updates
export const SiteHeader = memo(SiteHeaderComponent);
