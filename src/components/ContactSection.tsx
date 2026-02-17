import { Phone, Mail } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  return (
    <section id="kontakt" className="py-20 md:py-32">
      <div className="container mx-auto px-4 max-w-4xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Skontaktuj się <span className="text-primary neon-text-cyan">z nami</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Gotowy na nową stronę? Porozmawiajmy o Twoim projekcie — wycena jest bezpłatna.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="glass-surface rounded-2xl p-8 text-center">
              <Phone size={28} className="text-primary mx-auto mb-4" />
              <h3 className="font-heading font-semibold mb-2">Telefon</h3>
              <a href="tel:+48123456789" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                +48 123 456 789
              </a>
            </div>
            <div className="glass-surface rounded-2xl p-8 text-center">
              <Mail size={28} className="text-primary mx-auto mb-4" />
              <h3 className="font-heading font-semibold mb-2">Email</h3>
              <a href="mailto:kontakt@fluxsite.pl" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                kontakt@fluxsite.pl
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
