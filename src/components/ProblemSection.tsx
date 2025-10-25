import { AlertCircle, Clock, XCircle, Database, Phone, TrendingDown } from "lucide-react";
import { Card } from "@/components/ui/card";

const problems = [
  {
    icon: Clock,
    title: "Tempo Desperdiçado",
    description: "Sua empresa perde até 40% do tempo produtivo em tarefas operacionais repetitivas",
  },
  {
    icon: XCircle,
    title: "Erros Humanos",
    description: "Erros aumentam custos em 25% com retrabalho constante",
  },
  {
    icon: Database,
    title: "Sistemas Isolados",
    description: "Sistemas que não conversam entre si causam lentidão e duplicação",
  },
  {
    icon: Phone,
    title: "Atendimento Limitado",
    description: "Suporte restrito ao horário comercial prejudica a experiência do cliente",
  },
  {
    icon: TrendingDown,
    title: "Decisões Intuitivas",
    description: "Falta de dados confiáveis leva a decisões baseadas em intuição",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 mb-6">
            <AlertCircle className="w-4 h-4 text-destructive" />
            <span className="text-sm font-medium text-destructive">O Problema</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Reconhece Algum Desses <span className="gradient-text">Desafios</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Operações manuais estão custando mais do que você imagina
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Card
                key={index}
                className="gradient-card p-6 border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-destructive/10 shrink-0">
                    <Icon className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{problem.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
