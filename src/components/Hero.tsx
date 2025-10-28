import { Button } from "@/components/ui/button";
import { Sparkles, Zap } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border mb-8 animate-float">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium gradient-text">Soluções em Processos Autônomos</span>
          </div>

          {/* Logo/Title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="gradient-text">AI-tech</span>
          </h1>

          {/* Main headline */}
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Automatize Processos.
            <br />
            <span className="gradient-text">Multiplique Resultados.</span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Liberte sua equipe de tarefas repetitivas e foque no que realmente importa: crescimento e inovação.
          </p>

          {/* Key stat */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-12">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-lg font-semibold">
              Reduzimos até <span className="text-primary">70% do tempo</span> em operações manuais
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full px-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="group w-full sm:w-auto max-w-[90%] sm:max-w-none bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-semibold px-4 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg rounded-full glow transition-all duration-300"
            >
              📱 Agendar Diagnóstico Gratuito
              <Zap className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-pulse" />
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Resultados em 30 dias</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>ROI comprovado</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Conformidade LGPD</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
