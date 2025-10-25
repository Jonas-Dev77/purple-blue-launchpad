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
          <svg
            viewBox="0 0 32 32"
            className="w-8 h-8"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.002 0C7.164 0 0 7.163 0 16c0 2.827.738 5.485 2.032 7.786L.694 30.465l6.875-1.8A15.916 15.916 0 0016.003 32c8.837 0 16-7.163 16-16S24.84 0 16.002 0zm9.378 22.84c-.396 1.116-2.338 2.045-3.224 2.178-.858.122-1.981.196-3.197-.2-1.472-.477-3.36-1.4-5.844-3.738-4.183-3.937-6.896-9.858-7.104-10.317-.197-.459-1.658-2.207-1.658-4.214 0-2.007 1.05-2.991 1.422-3.402.372-.41.81-.513 1.08-.513.27 0 .54.005.777.015.248.01.582-.095.91.695.33.79 1.127 2.747 1.226 2.947.099.2.165.433.033.692-.132.26-.198.422-.396.65-.198.227-.417.508-.595.681-.198.198-.404.412-.173.808.23.396.922 1.52 1.98 2.46 1.36 1.21 2.508 1.585 2.86 1.764.352.18.557.149.761-.09.203-.239.872-.99 1.104-1.331.231-.34.463-.281.781-.169.318.113 2.016.95 2.36 1.122.345.173.575.257.66.396.084.14.084.811-.312 1.593z" />
          </svg>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
