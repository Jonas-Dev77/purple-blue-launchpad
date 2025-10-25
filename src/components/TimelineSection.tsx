import { Calendar, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const timeline = [
  {
    month: "Mês 1",
    title: "Primeiros Resultados",
    items: [
      "Primeira automação implementada",
      "Redução de 30-50% no tempo de processos",
      "Equipe treinada e confortável",
      "Dashboard de métricas funcionando",
    ],
  },
  {
    month: "Mês 2-3",
    title: "Expansão",
    items: [
      "3-5 processos principais automatizados",
      "Economia de 20-40% em custos operacionais",
      "Melhoria de 40% na satisfação da equipe",
      "ROI positivo comprovado",
    ],
  },
  {
    month: "Mês 3-6",
    title: "Transformação",
    items: [
      "Cultura de automação estabelecida",
      "Escalabilidade sem expandir equipe",
      "Vantagem competitiva no mercado",
      "Decisões estratégicas baseadas em dados",
    ],
  },
];

const TimelineSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Jornada de Transformação</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sua Evolução em <span className="gradient-text">90 Dias</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Um plano estruturado para transformação digital completa
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection line - hidden on mobile */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary"></div>

            {timeline.map((phase, index) => (
              <Card
                key={index}
                className="gradient-card p-6 border-border/50 hover:border-primary/50 transition-all duration-300 relative z-10"
              >
                {/* Month badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold mb-4">
                  {phase.month}
                </div>

                <h3 className="text-xl font-bold mb-4">{phase.title}</h3>

                <ul className="space-y-3">
                  {phase.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* Process steps */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12">
            Comece Agora: <span className="gradient-text">5 Passos Simples</span>
          </h3>

          <div className="grid gap-4">
            {[
              { step: "1", title: "Entre em Contato", desc: "Agende uma conversa inicial" },
              { step: "2", title: "Diagnóstico Gratuito", desc: "Analisamos seus processos" },
              { step: "3", title: "Proposta Personalizada", desc: "Apresentamos soluções sob medida" },
              { step: "4", title: "Implementação Rápida", desc: "Transformamos seu negócio" },
              { step: "5", title: "Resultados Concretos", desc: "Mensuramos o impacto juntos" },
            ].map((item, index) => (
              <Card
                key={index}
                className="gradient-card p-4 border-border/50 hover:border-primary/50 transition-all duration-300 flex items-center gap-4 group hover:scale-102"
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {item.step}
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
