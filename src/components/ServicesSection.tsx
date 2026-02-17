import { Palette, Building2, ShoppingCart } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: Palette,
    title: "Projektowanie UI/UX",
    description: "Tworzymy intuicyjne interfejsy, które zachwycają użytkowników i konwertują odwiedzających w klientów.",
  },
  {
    icon: Building2,
    title: "Strony Korporacyjne",
    description: "Profesjonalne witryny firmowe z nowoczesnym designem, zoptymalizowane pod SEO i szybkość działania.",
  },
  {
    icon: ShoppingCart,
    title: "Systemy E-commerce",
    description: "Kompleksowe sklepy internetowe z płynnym procesem zakupowym i integracjami płatności online.",
  },
];

const ServicesSection = () => {
  return (
    <section id="uslugi" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Nasza <span className="text-primary neon-text-cyan">Oferta</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Kompleksowe usługi projektowania i budowy stron internetowych dopasowane do Twoich potrzeb.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.15}>
              <div className="group glass-surface rounded-2xl p-8 h-full hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:neon-glow-cyan">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
