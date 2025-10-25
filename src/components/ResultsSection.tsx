import { DollarSign, Headphones, TrendingUp, Users, Settings } from "lucide-react";
import { Card } from "@/components/ui/card";

const results = [
  {
    icon: DollarSign,
    area: "Financeiro",
    impact: "Redução de 30-40% em custos operacionais",
  },
  {
    icon: Headphones,
    area: "Atendimento",
    impact: "70% das dúvidas resolvidas automaticamente",
  },
  {
    icon: TrendingUp,
    area: "Vendas",
    impact: "Aumento de 25% em conversão de leads",
  },
  {
    icon: Users,
    area: "RH",
    impact: "80% menos tempo em processos burocráticos",
  },
  {
    icon: Settings,
    area: "Operações",
    impact: "Eliminação de 90% das tarefas repetitivas",
  },
];

const ResultsSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Resultados Comprovados</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Impacto <span className="gradient-text">Mensurável</span> em Todas as Áreas
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dados reais de empresas que já transformaram suas operações
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {results.map((result, index) => {
            const Icon = result.icon;
            return (
              <Card
                key={index}
                className="gradient-card p-6 border-border/50 hover:border-primary/50 transition-all duration-300 group hover:scale-105"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 rounded-xl bg-primary/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{result.area}</h3>
                  <p className="text-muted-foreground leading-relaxed">{result.impact}</p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Before/After comparison */}
        <div className="mt-20 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="gradient-card p-8 border-destructive/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                <span className="text-2xl">❌</span>
              </div>
              <h3 className="text-2xl font-bold">ANTES</h3>
            </div>
            <ul className="space-y-3">
              {[
                "Processos manuais lentos",
                "Erros e retrabalho constantes",
                "Dados dispersos e subutilizados",
                "Atendimento limitado ao horário",
                "Decisões baseadas em intuição",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-destructive"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="gradient-card p-8 border-primary/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-2xl font-bold">COM IA-TECH</h3>
            </div>
            <ul className="space-y-3">
              {[
                "⚡ Automação instantânea",
                "🎯 Precisão de 99%+",
                "📊 Insights acionáveis",
                "🤖 Disponibilidade 24/7",
                "📈 Decisões data-driven",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-foreground font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
