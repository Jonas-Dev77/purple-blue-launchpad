import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Quanto tempo leva para implementar uma automação?",
    answer:
      "Os primeiros resultados aparecem em 30 dias. Automações simples podem estar funcionando em 1-2 semanas, enquanto processos mais complexos levam de 4-8 semanas.",
  },
  {
    question: "Preciso ter conhecimento técnico para usar as automações?",
    answer:
      "Não! Desenvolvemos soluções intuitivas e fornecemos treinamento completo para sua equipe. O objetivo é simplificar, não complicar.",
  },
  {
    question: "Como vocês garantem a segurança dos dados?",
    answer:
      "Utilizamos criptografia end-to-end, conformidade total com LGPD, backups automáticos e auditoria completa de todas as automações. Seus dados permanecem sob seu total controle.",
  },
  {
    question: "Qual é o investimento necessário?",
    answer:
      "O investimento varia conforme a complexidade e escopo do projeto. Oferecemos um diagnóstico gratuito onde apresentamos uma proposta personalizada com custo-benefício transparente.",
  },
  {
    question: "As automações funcionam com os sistemas que já usamos?",
    answer:
      "Sim! Especializamos-nos em integrar sistemas existentes (ERPs, CRMs, planilhas, etc.). Se possui uma API ou permite integração, conseguimos conectar.",
  },
  {
    question: "E se algo der errado com a automação?",
    answer:
      "Oferecemos monitoramento contínuo, alertas automáticos e suporte técnico. Todas as automações incluem logs detalhados e planos de contingência.",
  },
  {
    question: "Como é medido o ROI?",
    answer:
      "Estabelecemos métricas claras antes da implementação (tempo economizado, redução de erros, custos operacionais) e fornecemos dashboards em tempo real para acompanhamento.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Dúvidas Frequentes</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Perguntas <span className="gradient-text">Frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tudo o que você precisa saber sobre automação com IA
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="gradient-card border border-border/50 rounded-lg px-6 data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-semibold text-lg pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
