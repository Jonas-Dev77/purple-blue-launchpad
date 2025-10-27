import { Bot, Workflow, MessageSquare, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";

const solutions = [
  {
    icon: Bot,
    title: "Automação de Processos (RPA)",
    features: [
      "Integração entre sistemas (ERP, CRM, planilhas)",
      "Cadastros e atualizações automáticas",
      "Processamento inteligente de documentos",
    ],
    color: "primary",
  },
  {
    icon: MessageSquare,
    title: "Chatbots Inteligentes",
    features: [
      "Atendimento 24/7 para seus clientes",
      "Qualificação automática de leads",
      "Suporte interno para colaboradores",
    ],
    color: "secondary",
  },
  {
    icon: Workflow,
    title: "Workflows Personalizados (N8N)",
    features: [
      "Conecte qualquer ferramenta do seu negócio",
      "Automatize fluxos de aprovação",
      "Sincronize dados entre plataformas",
    ],
    color: "primary",
  },
  {
    icon: BarChart3,
    title: "Análise Inteligente de Dados",
    features: [
      "Dashboards automatizados em tempo real",
      "Relatórios gerados por IA",
      "Insights para tomada de decisão estratégica",
    ],
    color: "secondary",
  },
];

const SolutionsSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Bot className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">A Solução</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Como a <span className="gradient-text">AI-tech</span> Transforma Seu Negócio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas de automação para cada necessidade da sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Card
                key={index}
                className="gradient-card p-8 border-border/50 hover:border-primary/50 transition-all duration-300 group hover:scale-105"
              >
                <div className="inline-flex p-4 rounded-xl bg-primary/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className={solution.color === "primary" ? "w-8 h-8 text-primary" : "w-8 h-8 text-secondary"} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                <ul className="space-y-3">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
