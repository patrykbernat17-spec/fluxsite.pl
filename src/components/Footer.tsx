import { useState } from "react";
import { Facebook, Instagram, Youtube, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PrivacyModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => (
  <AnimatePresence>
    {open && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl overflow-y-auto"
      >
        <div className="container mx-auto px-4 py-16 max-w-3xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-heading font-bold">Polityka Prywatności</h2>
            <button onClick={onClose} className="text-foreground hover:text-primary transition-colors" aria-label="Zamknij">
              <X size={28} />
            </button>
          </div>
          <div className="text-muted-foreground space-y-4 leading-relaxed text-sm">
            <p>Niniejsza Polityka Prywatności określa zasady przetwarzania danych osobowych pozyskanych za pośrednictwem serwisu fluxsite.pl prowadzonego przez FluxSite.</p>
            <p><strong className="text-foreground">1. Administrator danych</strong><br />Administratorem danych osobowych jest FluxSite z siedzibą w Warszawie, ul. Innowacyjna 42.</p>
            <p><strong className="text-foreground">2. Zakres zbieranych danych</strong><br />Zbieramy dane niezbędne do realizacji usług: imię, adres e-mail, numer telefonu oraz informacje o aktywności na stronie.</p>
            <p><strong className="text-foreground">3. Cel przetwarzania</strong><br />Dane przetwarzane są w celu świadczenia usług, kontaktu zwrotnego oraz doskonalenia jakości naszych usług.</p>
            <p><strong className="text-foreground">4. Prawa użytkownika</strong><br />Użytkownik ma prawo dostępu do swoich danych, ich sprostowania, usunięcia oraz ograniczenia przetwarzania. Kontakt: kontakt@fluxsite.pl.</p>
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

const socials = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

const Footer = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <>
      <footer className="border-t border-border py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © 2026 <span className="text-foreground font-heading font-semibold">FluxSite</span>. Wszelkie prawa zastrzeżone.
              </p>
              <button
                onClick={() => setPrivacyOpen(true)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors mt-1 underline underline-offset-2"
              >
                Polityka Prywatności
              </button>
            </div>

            <div className="flex items-center gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full glass-surface flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:neon-glow-cyan transition-all duration-300"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </>
  );
};

export default Footer;
