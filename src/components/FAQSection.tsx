import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    q: "Jak wygląda proces tworzenia strony?",
    a: "Nasz proces składa się z 4 etapów: konsultacja i analiza potrzeb, projekt graficzny (UI/UX), kodowanie i wdrożenie, oraz optymalizacja i testy. Na każdym etapie pozostajemy w stałym kontakcie z klientem.",
  },
  {
    q: "Ile czasu zajmuje realizacja projektu?",
    a: "Standardowa strona wizytówkowa to 2-3 tygodnie. Bardziej rozbudowane projekty, takie jak sklepy e-commerce, mogą zająć od 4 do 8 tygodni. Dokładny termin ustalamy indywidualnie.",
  },
  {
    q: "Jakie są koszty stworzenia strony?",
    a: "Każdy projekt wyceniamy indywidualnie na podstawie jego złożoności i wymagań. Oferujemy darmową wycenę — skontaktuj się z nami, aby poznać szczegóły dopasowane do Twojego budżetu.",
  },
  {
    q: "Czy zapewniacie opiekę nad stroną po wdrożeniu?",
    a: "Tak! Oferujemy pakiety opieki technicznej obejmujące aktualizacje, monitorowanie bezpieczeństwa, kopie zapasowe oraz wsparcie techniczne. Twoja strona jest w dobrych rękach.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-32 gradient-mesh">
      <div className="container mx-auto px-4 max-w-3xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Często zadawane <span className="text-primary neon-text-cyan">pytania</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass-surface rounded-xl border border-glass-border/30 px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-heading font-semibold hover:text-primary transition-colors py-5 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQSection;
