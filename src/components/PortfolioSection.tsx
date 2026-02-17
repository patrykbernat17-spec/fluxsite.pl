import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const projects = [
  { img: portfolio1, title: "Realizacja dla branży korporacyjnej", className: "md:col-span-2" },
  { img: portfolio2, title: "Realizacja dla branży e-commerce", className: "" },
  { img: portfolio3, title: "Realizacja dla branży technologicznej", className: "" },
  { img: portfolio4, title: "Realizacja dla branży gastronomicznej", className: "md:col-span-2" },
];

const PortfolioSection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Nasze <span className="text-primary neon-text-cyan">Portfolio</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Wybrane realizacje, które mówią same za siebie.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <ScrollReveal key={i} delay={i * 0.1} className={p.className}>
              <button
                onClick={() => setLightbox(i)}
                className="group block w-full glass-surface rounded-2xl overflow-hidden p-2 hover:border-primary/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                aria-label={`Otwórz: ${p.title}`}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-primary font-heading font-semibold text-sm">{p.title}</span>
                  </div>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/90 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors focus:outline-none"
              aria-label="Zamknij podgląd"
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={projects[lightbox].img}
              alt={projects[lightbox].title}
              className="max-w-full max-h-[80vh] rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
