import { Zap, Search, Smartphone, HeadphonesIcon } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const items = [
  {
    icon: Zap,
    title: "Błyskawiczna szybkość",
    description: "Strony ładujące się w ułamku sekundy dzięki optymalizacji kodu i nowoczesnym technologiom.",
  },
  {
    icon: Search,
    title: "Gotowość pod SEO",
    description: "Semantyczny HTML, zoptymalizowane meta tagi i struktura, która podoba się wyszukiwarkom.",
  },
  {
    icon: Smartphone,
    title: "Podejście Mobile-First",
    description: "Każdy projekt zaczyna się od wersji mobilnej — perfekcyjne działanie na każdym urządzeniu.",
  },
  {
    icon: HeadphonesIcon,
    title: "Wsparcie techniczne",
    description: "Nie zostawiamy Cię samego — zapewniamy stałą opiekę techniczną i aktualizacje strony.",
  },
];

const WhyUsSection = () => {
  return (
    <section className="py-20 md:py-32 gradient-mesh">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Dlaczego <span className="text-secondary neon-text-violet">my</span>?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              To, co nas wyróżnia — konkretne korzyści dla Twojego biznesu.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="glass-surface rounded-2xl p-6 text-center h-full hover:border-secondary/40 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} className="text-secondary" />
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
