import { MessageCircle, MapPin, Clock, Phone, ArrowRight, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  const whatsappNumber = "5561995867184";
  const message = "Olá! Gostaria de agendar uma consulta com o Psicólogo Francisco Mendes.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section id="contato" className="section-padding relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/[0.03] blur-3xl" />
      
      <div className="section-container relative">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <ScrollReveal animation="scale">
          <div className="relative rounded-[2.5rem] overflow-hidden">
            {/* Card background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-card to-card" />
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/5 via-transparent to-primary/5" />
            
            {/* Decorative corner elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            {/* Content */}
            <div className="relative p-6 sm:p-10 md:p-16 text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-primary/10 border border-primary/20 mb-6 sm:mb-8">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                <span className="label-premium text-primary">Contato</span>
              </div>
              
              {/* Heading */}
              <h2 className="heading-section text-foreground mb-4 sm:mb-6">
                Inicie sua jornada de<br className="hidden sm:block" /> transformação
              </h2>
              
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent mx-auto mb-6 sm:mb-8" />
              
              <p className="text-body text-muted-foreground max-w-xl mx-auto mb-8 sm:mb-12">
                Dê o primeiro passo para cuidar da sua saúde emocional. 
                Entre em contato e vamos conversar sobre como posso te ajudar.
              </p>

              {/* CTA Button */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 sm:gap-4 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground px-6 sm:px-10 py-4 sm:py-6 rounded-full font-medium text-base sm:text-lg transition-all duration-500 hover:shadow-2xl hover:shadow-primary/25 hover:-translate-y-1"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:scale-110" />
                <span>Falar com o psicólogo</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Contact info cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-10 sm:mt-14">
                <div className="group p-4 sm:p-5 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 transition-all duration-500 hover:border-primary/20 hover:shadow-lg">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-2 sm:mb-3 transition-all duration-500 group-hover:bg-primary/15 group-hover:scale-110">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-foreground block mb-0.5 sm:mb-1">Horário</span>
                  <span className="text-[10px] sm:text-xs text-muted-foreground">Seg a Sex: 8h às 20h</span>
                </div>
                
                <div className="group p-4 sm:p-5 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 transition-all duration-500 hover:border-primary/20 hover:shadow-lg">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-2 sm:mb-3 transition-all duration-500 group-hover:bg-primary/15 group-hover:scale-110">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-foreground block mb-0.5 sm:mb-1">Modalidade</span>
                  <span className="text-[10px] sm:text-xs text-muted-foreground">Online e Presencial</span>
                </div>
                
                <div className="group p-4 sm:p-5 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 transition-all duration-500 hover:border-primary/20 hover:shadow-lg">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-2 sm:mb-3 transition-all duration-500 group-hover:bg-primary/15 group-hover:scale-110">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-foreground block mb-0.5 sm:mb-1">WhatsApp</span>
                  <span className="text-[10px] sm:text-xs text-muted-foreground">(61) 99586-7184</span>
                </div>
              </div>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
