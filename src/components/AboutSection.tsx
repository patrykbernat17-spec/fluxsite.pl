import ScrollReveal from "./ScrollReveal";
import workspaceImg from "@/assets/workspace.jpg";

const AboutSection = () => {
  return (
    <section id="o-nas" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden glass-surface p-2">
              <img
                src={workspaceImg}
                alt="Nowoczesne stanowisko pracy programisty z kolorowym oświetleniem"
                className="w-full h-auto rounded-xl object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Kim <span className="text-primary neon-text-cyan">jesteśmy</span>?
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              FluxSite to zespół pasjonatów technologii i designu. Łączymy kreatywność z zaawansowanymi rozwiązaniami technicznymi, tworząc strony internetowe, które nie tylko wyglądają oszałamiająco, ale przede wszystkim — sprzedają.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Nasz stos technologiczny to najnowsze narzędzia: React, Vite, Tailwind CSS oraz AI. Wierzymy, że każdy projekt zasługuje na indywidualne podejście i perfekcyjne wykonanie.
            </p>
            <div className="flex flex-wrap gap-3">
              {["React", "Vite", "Tailwind CSS", "TypeScript", "AI"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-1.5 text-sm font-medium rounded-full glass-surface text-primary border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
