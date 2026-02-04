import { MessageSquare, CalendarCheck, Video, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Primeiro Contato",
    description: "Entre em contato pelo WhatsApp para tirar suas dúvidas e conversarmos sobre suas necessidades.",
    color: "from-primary to-primary/70",
  },
  {
    icon: CalendarCheck,
    step: "02",
    title: "Agendamento",
    description: "Escolhemos juntos o melhor dia e horário para sua sessão, de acordo com sua disponibilidade.",
    color: "from-amber-500 to-amber-500/70",
  },
  {
    icon: Video,
    step: "03",
    title: "Sessão",
    description: "Realizamos a sessão online ou presencial, em um ambiente seguro e acolhedor para você.",
    color: "from-emerald-500 to-emerald-500/70",
  },
];

const ProcessSection = () => {
  return (
    <section id="como-funciona" className="section-padding relative overflow-hidden">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/40 to-transparent" />
      
      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      
      <div className="section-container relative">
        {/* Section header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="label-premium text-primary">Processo</span>
          </span>
          
          <h2 className="heading-section text-foreground mb-6">
            Como funciona o atendimento
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent mx-auto mb-8" />
          
          <p className="text-body-large text-muted-foreground">
            Um processo simples e acolhedor para você dar o primeiro passo 
            em direção ao seu bem-estar emocional.
          </p>
        </ScrollReveal>

        {/* Steps timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-6 relative">
          {/* Connection line - desktop only */}
          <div className="hidden md:block absolute top-[72px] left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-primary/30 via-amber-500/30 to-emerald-500/30" />
          
          {steps.map((step, index) => (
            <ScrollReveal 
              key={index}
              delay={index * 150}
              className="relative group"
            >
              {/* Card */}
              <div className="relative text-center p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-card/70 backdrop-blur-sm border border-border/50 transition-all duration-700 hover:border-primary/20 hover:shadow-xl overflow-hidden">
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Step icon container */}
                <div className="relative inline-flex flex-col items-center mb-5 sm:mb-8">
                  {/* Main icon circle */}
                  <div 
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                    style={{ 
                      background: `linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--secondary)) 100%)`,
                      boxShadow: 'var(--shadow-card)'
                    }}
                  >
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                      <step.icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                    </div>
                  </div>
                  
                  {/* Step number badge */}
                  <div className={`absolute -top-1 -right-1 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br ${step.color} text-white text-xs sm:text-sm font-bold flex items-center justify-center shadow-lg`}>
                    {step.step}
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative">
                  <h3 className="heading-card text-foreground mb-3 sm:mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow to next - mobile and tablet */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-card border border-border/50 flex items-center justify-center z-10">
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-primary rotate-90" />
                  </div>
                )}
              </div>
              
              {/* Arrow between cards - desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-3 top-[72px] w-6 h-6 rounded-full bg-card border border-border/50 items-center justify-center z-10 shadow-sm">
                  <ArrowRight className="w-3 h-3 text-primary" />
                </div>
              )}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
