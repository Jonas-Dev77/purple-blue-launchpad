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
    const { prompt, contextId } = await req.json();

    if (!prompt || !contextId) {
      return new Response(
        JSON.stringify({ error: "prompt e contextId são obrigatórios" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const GPTMAKER_API_TOKEN = Deno.env.get("GPTMAKER_API_TOKEN");
    if (!GPTMAKER_API_TOKEN) {
      throw new Error("GPTMAKER_API_TOKEN não está configurado");
    }

    const agentId = "3EFEDD17ED35F09555D29A7668B3134D";
    const agentUrl = `https://api.gptmaker.ai/v2/agent/${agentId}/conversation`;

    const response = await fetch(agentUrl, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${GPTMAKER_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contextId,
        prompt,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("GPTMaker API error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "Erro ao comunicar com o agente Otto", details: errorText }),
        { status: response.status, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await response.json();
    const reply = data?.message || data?.response || data?.reply || JSON.stringify(data);

    return new Response(
      JSON.stringify({ reply }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("GPTMaker chat error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Erro desconhecido" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});