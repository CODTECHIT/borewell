import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-card/98 backdrop-blur-md border-b border-border shadow-md h-16 md:h-20" : "bg-card/95 backdrop-blur-md border-b border-border h-20 md:h-24"
    }`}>
      <div className="container mx-auto flex items-center justify-between h-full px-4">
        <Link to="/" className="flex items-center gap-3 md:gap-4" onClick={() => setOpen(false)}>
          <img 
            src="moni_borewells_logo.png" 
            alt="Moni Borewells Logo" 
            className={`transition-all duration-300 rounded-xl object-contain shadow-green ${
              scrolled ? "w-12 h-12 md:w-14 md:h-14" : "w-14 h-14 md:w-16 md:h-16"
            }`}
          />
          <div className="flex flex-col">
            <span className={`font-heading font-bold tracking-wide text-foreground leading-tight transition-all duration-300 ${
              scrolled ? "text-lg md:text-xl" : "text-xl md:text-2xl"
            }`}>
              Moni Borewells
            </span>
            <span className={`text-muted-foreground font-heading tracking-[0.15em] -mt-0.5 hidden sm:block transition-all duration-300 ${
              scrolled ? "text-[10px] md:text-xs" : "text-xs md:text-sm"
            }`}>
              TRUSTED BOREWELL SERVICES
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-3.5 py-2 rounded-lg font-heading text-sm tracking-wider transition-colors ${
                pathname === l.to
                  ? "text-primary bg-primary/10 font-bold"
                  : "text-foreground font-medium hover:text-primary hover:bg-primary/5"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="tel:9663862061"
            className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-heading text-sm tracking-wider hover:bg-primary/90 transition-colors shadow-green"
          >
            <Phone size={14} /> Call Now
          </a>
          <button
            className="lg:hidden text-foreground p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`font-heading text-sm tracking-wider py-3 px-3 rounded-lg transition-colors ${
                    pathname === l.to
                      ? "text-primary bg-primary/10 font-bold"
                      : "text-foreground font-medium hover:bg-muted"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <a
                href="tel:9663862061"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-lg font-heading text-sm mt-3 shadow-green"
              >
                <Phone size={14} /> Call Now — 96638 62061
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
