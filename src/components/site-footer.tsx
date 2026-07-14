import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Mail } from "lucide-react";
import logo from "@/assets/assetech-logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary text-secondary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Assetech" className="h-10 w-auto brightness-0 invert" />
            <span className="text-xl font-semibold">Assetech</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-secondary-foreground/70">
            Your partner in growing a smarter business — tax compliance, audit,
            and fixed asset management done right.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-secondary-foreground/80">
            Explore
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-secondary-foreground/70">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-secondary-foreground/80">
            Reach Us
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-secondary-foreground/70">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-primary" />
              <a href="tel:+254757553243" className="hover:text-primary">0757 553 243</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-primary" />
              <span>Meems Building, Kenyatta Avenue, Nakuru</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-primary" />
              <a href="mailto:info@assetech.co.ke" className="hover:text-primary">info@assetech.co.ke</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-secondary-foreground/60">
        © {new Date().getFullYear()} Assetech. All rights reserved.
      </div>
    </footer>
  );
}
