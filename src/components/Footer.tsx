import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react";

const ScrollToTopLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <Link 
      to={to} 
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="text-sm opacity-60 hover:opacity-100 transition-opacity flex items-center gap-1"
    >
      {children}
    </Link>
  );
};

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Brand */}
      <div>
        <div className="flex items-center gap-2.5 mb-4">
          <img 
            src="moni_borewells_logo.png" 
            alt="Moni Borewells Logo" 
            className="w-10 h-10 rounded-xl object-contain"
          />
          <span className="font-heading text-xl font-bold tracking-wide">Moni Borewells</span>
        </div>
        <p className="text-sm opacity-70 font-body leading-relaxed mb-4">
          Professional borewell drilling, cleaning, and annual maintenance services across Bangalore. Trusted by 500+ customers.
        </p>
<a href="tel:9663862061" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-heading text-xs tracking-wider">
              <Phone size={14} /> Call Now: 96638 62061
            </a>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="font-heading text-sm tracking-[0.15em] mb-4 opacity-90">QUICK LINKS</h3>
        <div className="flex flex-col gap-2">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About Us" },
            { to: "/services", label: "Services" },
            { to: "/services#amc", label: "AMC Plans" },
            { to: "/gallery", label: "Gallery" },
            { to: "/contact", label: "Contact" },
          ].map((l) => (
            <ScrollToTopLink key={l.to + l.label} to={l.to}>
              <ChevronRight size={12} /> {l.label}
            </ScrollToTopLink>
          ))}
        </div>
      </div>

      {/* Service Areas */}
      <div>
        <h3 className="font-heading text-sm tracking-[0.15em] mb-4 opacity-90">SERVICE AREAS</h3>
        <div className="flex flex-wrap gap-2">
          {["All around Bangalore", "Electronic City", "Bommasandra", "Anekal", "Chandapura", "HSR Layout", "Sarjapur", "Whitefield", "JP Nagar"].map(a => (
            <span key={a} className="text-xs opacity-60 bg-background/10 rounded-full px-3 py-1">{a}</span>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div>
        <h3 className="font-heading text-sm tracking-[0.15em] mb-4 opacity-90">CONTACT INFO</h3>
        <div className="flex flex-col gap-3 text-sm opacity-70">
          <a href="tel:9663862061" className="flex items-center gap-2 hover:opacity-100 transition-opacity">
            <Phone size={14} className="shrink-0" /> 96638 62061
          </a>
          <a href="mailto:n.ranjithkumar18@gmail.com" className="flex items-center gap-2 hover:opacity-100 transition-opacity">
            <Mail size={14} className="shrink-0" /> n.ranjithkumar18@gmail.com
          </a>
          <span className="flex items-start gap-2">
            <MapPin size={14} className="mt-0.5 shrink-0" /> Electronic City, Bangalore - 560100
          </span>
        </div>
        <div className="mt-4 pt-4 border-t border-background/10">
          <p className="text-xs opacity-50">Working Hours</p>
          <p className="text-sm opacity-70">Mon - Sun: 6:00 AM - 9:00 PM</p>
          <p className="text-xs opacity-50 mt-1">Working hours 24/7</p>
        </div>
      </div>
    </div>
    <div className="border-t border-background/10 py-4">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-xs opacity-40">© {new Date().getFullYear()} Moni Borewells. All rights reserved.</p>
        <p className="text-xs opacity-40">Owner: Ranjithkumar | Electronic City, Bangalore</p>
      </div>
    </div>
  </footer>
);

export default Footer;
