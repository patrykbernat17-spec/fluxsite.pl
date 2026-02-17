import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="start" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated mesh background */}
      <div className="absolute inset-0 gradient-mesh-animated" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-neon-violet/10 blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-neon-cyan/10 blur-[120px] animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight max-w-4xl mx-auto">

          Tworzenie stron internetowych dla Firm –{" "}
          <span className="text-primary neon-text-cyan">Nowoczesne i Szybkie</span>{" "}
          Strony WWW
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">Profesjonalne projektowanie i tworzenie stron internetowych dla firm. Jako agencja interaktywna dostarczamy szybkie, responsywne i zoptymalizowane pod SEO strony WWW, które skutecznie budują wizerunek Twojej marki w sieci.


        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-10">

          <button
            onClick={scrollToContact}
            className="group inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-xl bg-primary text-primary-foreground neon-glow-cyan hover:brightness-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50">

            Darmowa Wycena
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>);

};

export default HeroSection;