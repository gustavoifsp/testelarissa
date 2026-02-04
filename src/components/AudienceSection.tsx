import { Users, Heart, Shield } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const AudienceSection = () => {
  const audiences = [
    { 
      icon: Users, 
      label: "Adultos", 
      description: "Homens e mulheres buscando equilíbrio emocional",
      color: "from-primary/20 to-primary/5"
    },
    { 
      icon: Heart, 
      label: "Jovens Adultos", 
      description: "Fase de transições e descobertas pessoais",
      color: "from-rose-500/20 to-rose-500/5"
    },
    { 
      icon: Shield, 
      label: "Adolescentes", 
      description: "A partir dos 12 anos, com acompanhamento familiar",
      color: "from-amber-500/20 to-amber-500/5"
    },
  ];

  return (
    <section id="publico" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-transparent to-secondary/30" />
      
      <div className="section-container relative">
        {/* Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="label-premium text-primary">Público</span>
          </span>
          
          <h2 className="heading-section text-foreground mb-4">
            Para quem é o atendimento
          </h2>
          
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-full mx-auto mb-8" />
          
          <p className="text-body-large text-muted-foreground">
            Atendimento psicológico para pessoas a partir dos 12 anos, 
            respeitando a individualidade e as necessidades de cada fase da vida.
          </p>
        </ScrollReveal>

        {/* Audience cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {audiences.map((item, index) => (
            <ScrollReveal key={index} delay={index * 100} animation="scale">
              <div className="group relative p-8 rounded-3xl bg-card/70 backdrop-blur-sm border border-border/50 text-center transition-all duration-500 hover:border-primary/20 hover:shadow-xl overflow-hidden h-full">
                {/* Hover gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-primary/15 group-hover:scale-110">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 font-serif">{item.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
