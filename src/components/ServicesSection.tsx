import { User, Monitor, Heart, Brain, ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: User,
    title: "Psicoterapia Individual",
    description: "Atendimento personalizado focado em suas necessidades específicas, promovendo autoconhecimento e crescimento pessoal.",
    accent: "from-primary/20 to-primary/5",
  },
  {
    icon: Monitor,
    title: "Atendimento Online",
    description: "Sessões realizadas por videochamada, com a mesma qualidade do atendimento presencial, no conforto da sua casa.",
    accent: "from-amber-500/20 to-amber-500/5",
  },
  {
    icon: Heart,
    title: "Acompanhamento Emocional",
    description: "Suporte contínuo para momentos de dificuldade, ajudando você a desenvolver resiliência e equilíbrio emocional.",
    accent: "from-rose-500/20 to-rose-500/5",
  },
  {
    icon: Brain,
    title: "Ansiedade e Autoestima",
    description: "Tratamento especializado para questões relacionadas à ansiedade, estresse e fortalecimento da autoestima.",
    accent: "from-violet-500/20 to-violet-500/5",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="section-padding relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/[0.02] blur-3xl" />
      
      <div className="section-container relative">
        {/* Section header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="label-premium text-primary">Serviços</span>
          </span>
          
          <h2 className="heading-section text-foreground mb-6">
            Como posso te ajudar
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent mx-auto mb-8" />
          
          <p className="text-body-large text-muted-foreground">
            Ofereço diferentes formas de atendimento para atender às suas necessidades 
            e ajudá-lo no caminho do autoconhecimento.
          </p>
        </ScrollReveal>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ScrollReveal
              key={index}
              delay={index * 100}
              animation="scale"
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-card/70 backdrop-blur-sm border border-border/50 transition-all duration-700 hover:border-primary/20 hover:shadow-xl overflow-hidden">
                {/* Gradient accent on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                
                {/* Icon */}
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-5 sm:mb-8 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg">
                  <service.icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary transition-transform duration-500 group-hover:scale-110" />
                </div>
                
                {/* Content */}
                <div className="relative">
                  <div className="flex items-start justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <h3 className="heading-card text-foreground">
                      {service.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 shrink-0" />
                  </div>
                  
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
