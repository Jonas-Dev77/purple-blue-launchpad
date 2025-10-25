import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "5551999824777";
  const message = "Olá! Gostaria de agendar meu diagnóstico gratuito de automação.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <div className="relative">
        {/* Tooltip */}
        <div className="absolute right-20 bottom-3 bg-card text-card-foreground px-4 py-3 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:right-24 transition-all duration-300 whitespace-nowrap">
          <span className="text-sm font-medium">Fale com a IA-TECH</span>
          <div className="absolute right-[-8px] top-1/2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-card border-t-8 border-t-transparent border-b-8 border-b-transparent"></div>
        </div>

        {/* Pulsing rings */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse opacity-30"></div>

        {/* Button */}
        <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
          <MessageCircle className="w-8 h-8 text-white" strokeWidth={2} />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
