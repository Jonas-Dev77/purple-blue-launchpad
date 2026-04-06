import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, MessageCircle, Shield, Zap, Target, Instagram } from "lucide-react";

const ContactSection = () => {
  const whatsappNumber = "5551998459378";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Olá! Gostaria de agendar meu diagnóstico gratuito de automação."
  )}`;

  return (
    <section id="contato" className="py-20 px-4 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <Card className="gradient-card p-8 md:p-12 border-border/50 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <MessageCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Fale com a AI-tech</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Diagnóstico <span className="gradient-text">GRATUITO</span> de Oportunidades
            </h2>

            <p className="text-xl text-muted-foreground mb-8">
              Sem compromisso. Sem letras miúdas. Apenas uma conversa honesta.
            </p>

            <Button
              size="lg"
              onClick={() => window.open(whatsappUrl, "_blank")}
              className="group w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground font-semibold px-5 sm:px-8 py-5 sm:py-6 text-sm sm:text-lg rounded-full glow mb-8 max-w-xs sm:max-w-none mx-auto"
            >
              📱 Agendar Agora Meu Diagnóstico
              <MessageCircle className="ml-2 w-5 h-5 group-hover:animate-pulse" />
            </Button>

            {/* Formulário de Contato */}
            <div className="mt-8 mb-8">
              <h3 className="text-lg font-semibold mb-4">📋 Preencha o formulário abaixo:</h3>
              <div className="w-full rounded-xl overflow-hidden border border-border/50">
                <iframe
                  src="https://n8n.ai-tech.cloud/form/dc57bf0b-4554-419c-b999-e3341db2d30c"
                  style={{ border: 0, width: "100%", height: "600px" }}
                  allowFullScreen
                  title="Formulário de contato AI-tech"
                />
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-12 pt-8 border-t border-border/50">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold text-white">
                  JD
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-lg">Jonas Dorneles</h3>
                  <p className="text-sm text-muted-foreground">Founder & CEO - AI-tech Soluções</p>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card hover:bg-card/80 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>(51) 99845-9378</span>
                </a>

                <a
                  href="mailto:aitech@ai-tech.cloud"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card hover:bg-card/80 transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  <span>aitech@ai-tech.cloud</span>
                </a>

                <a
                  href="https://linkedin.com/in/jonas-dorneles81"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card hover:bg-card/80 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-primary" />
                  <span>jonas-dorneles81</span>
                </a>

                <a
                  href="https://instagram.com/aitech_automacoes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card hover:bg-card/80 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#E4405F]" />
                  <span>@aitech_automacoes</span>
                </a>
              </div>
            </div>
          </Card>

          {/* Differentials */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="gradient-card p-6 border-border/50 text-center">
              <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Segurança Total</h3>
              <p className="text-sm text-muted-foreground">Conformidade 100% com LGPD</p>
            </Card>

            <Card className="gradient-card p-6 border-border/50 text-center">
              <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Resultados Rápidos</h3>
              <p className="text-sm text-muted-foreground">Implementação em semanas</p>
            </Card>

            <Card className="gradient-card p-6 border-border/50 text-center">
              <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Foco em ROI</h3>
              <p className="text-sm text-muted-foreground">Valor real mensurável</p>
            </Card>
          </div>

          {/* Promise */}
          <Card className="gradient-card p-8 border-border/50 mt-12">
            <blockquote className="text-center">
              <p className="text-lg md:text-xl text-muted-foreground italic leading-relaxed mb-4">
                "Transformar complexidade em simplicidade, processos manuais em automações inteligentes, e
                ideias em resultados concretos. Na AI-tech, não vendemos tecnologia - entregamos tempo,
                eficiência e crescimento sustentável."
              </p>
              <footer className="text-sm font-semibold gradient-text">— Jonas Dorneles, Founder</footer>
            </blockquote>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
