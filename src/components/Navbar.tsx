import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Start", href: "#start" },
  { label: "O nas", href: "#o-nas" },
  { label: "Usługi", href: "#uslugi" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (href: string) => {
    setOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }, 350);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-surface border-b border-glass-border/20">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4" aria-label="Nawigacja główna">
        <a href="#start" className="text-xl font-heading font-bold tracking-tight" onClick={() => scrollTo("#start")}>
          <span className="text-primary neon-text-cyan">Flux</span>
          <span className="text-foreground">Site</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => scrollTo(l.href)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded px-1"
              >
                {l.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => scrollTo("#kontakt")}
              className="px-5 py-2 text-sm font-semibold rounded-lg bg-primary text-primary-foreground neon-glow-cyan hover:brightness-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              Darmowa Wycena
            </button>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground p-2 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-surface border-t border-glass-border/20 overflow-hidden"
          >
            <ul className="flex flex-col gap-2 p-4">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="w-full text-left py-2 px-3 text-muted-foreground hover:text-primary transition-colors rounded"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => scrollTo("#kontakt")}
                  className="w-full mt-2 px-5 py-3 text-sm font-semibold rounded-lg bg-primary text-primary-foreground neon-glow-cyan"
                >
                  Darmowa Wycena
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
