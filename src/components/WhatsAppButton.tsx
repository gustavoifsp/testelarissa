import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "5561995867184";
  const message = "Olá! Gostaria de agendar uma consulta com o Psicólogo Francisco Mendes.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-whatsapp group !p-3 sm:!p-4"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110" fill="currentColor" />
      
      {/* Tooltip - hidden on mobile */}
      <span className="hidden sm:block absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 rounded-xl bg-card text-foreground text-sm font-medium whitespace-nowrap opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shadow-lg border border-border/50 pointer-events-none">
        Fale comigo
      </span>
    </a>
  );
};

export default WhatsAppButton;
