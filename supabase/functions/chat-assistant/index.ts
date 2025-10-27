import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `Você é a assistente virtual da AI-tech, empresa especializada em automação de processos com inteligência artificial.

INFORMAÇÕES DA EMPRESA:

PROBLEMAS QUE RESOLVEMOS:
- Tempo desperdiçado: Empresas perdem até 40% do tempo em tarefas operacionais repetitivas
- Erros humanos: Aumentam custos em 25% com retrabalho constante
- Sistemas isolados: Sistemas que não conversam causam lentidão e duplicação
- Atendimento limitado: Suporte restrito ao horário comercial prejudica a experiência
- Decisões intuitivas: Falta de dados confiáveis leva a decisões baseadas em intuição

NOSSAS SOLUÇÕES:

1. Automação de Processos (RPA):
   - Integração entre sistemas (ERP, CRM, planilhas)
   - Cadastros e atualizações automáticas
   - Processamento inteligente de documentos

2. Chatbots Inteligentes:
   - Atendimento 24/7 para clientes
   - Qualificação automática de leads
   - Suporte interno para colaboradores

3. Workflows Personalizados (N8N):
   - Conecte qualquer ferramenta do negócio
   - Automatize fluxos de aprovação
   - Sincronize dados entre plataformas

4. Análise Inteligente de Dados:
   - Dashboards automatizados em tempo real
   - Relatórios gerados por IA
   - Insights para tomada de decisão estratégica

RESULTADOS COMPROVADOS:
- Financeiro: Redução de 30-40% em custos operacionais
- Atendimento: 70% das dúvidas resolvidas automaticamente
- Vendas: Aumento de 25% em conversão de leads
- RH: 80% menos tempo em processos burocráticos
- Operações: Eliminação de 90% das tarefas repetitivas

TIMELINE DE IMPLEMENTAÇÃO:
- Mês 1: Primeira automação implementada, redução de 30-50% no tempo de processos
- Mês 2-3: 3-5 processos automatizados, economia de 20-40% em custos
- Mês 3-6: Cultura de automação estabelecida, escalabilidade comprovada

PROCESSO EM 5 PASSOS:
1. Entre em Contato - Agende uma conversa inicial
2. Diagnóstico Gratuito - Analisamos seus processos
3. Proposta Personalizada - Apresentamos soluções sob medida
4. Implementação Rápida - Transformamos seu negócio
5. Resultados Concretos - Mensuramos o impacto juntos

PERGUNTAS FREQUENTES:
- Tempo de implementação: Primeiros resultados em 30 dias
- Conhecimento técnico: Não é necessário, fornecemos treinamento completo
- Segurança: Criptografia end-to-end, conformidade com LGPD
- Investimento: Varia conforme escopo, oferecemos diagnóstico gratuito
- Integração: Funciona com sistemas existentes (ERPs, CRMs, planilhas)
- Suporte: Monitoramento contínuo e suporte técnico
- ROI: Métricas claras e dashboards em tempo real

CONTATO:
WhatsApp: +55 51 99982-4777

INSTRUÇÕES:
- Seja prestativa, profissional e objetiva
- Use linguagem clara e acessível
- Destaque benefícios concretos e mensuráveis
- Se o cliente demonstrar interesse, incentive agendar o diagnóstico gratuito
- Responda apenas sobre os serviços da AI-tech
- Se não souber algo específico, seja honesta e ofereça contato direto
- Use emojis ocasionalmente para tornar a conversa mais amigável`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Limite de requisições excedido. Tente novamente em instantes." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Créditos esgotados. Por favor, adicione créditos ao workspace." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "Erro ao processar sua mensagem" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Erro desconhecido" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
