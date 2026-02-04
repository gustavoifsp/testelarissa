import { Award, BookOpen, Users, Heart, GraduationCap, Shield } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const AboutSection = () => {
  const credentials = [
    { icon: GraduationCap, label: "Psicólogo Clínico" },
    { icon: Shield, label: "CRP Ativo" },
    { icon: BookOpen, label: "Especialista em TCC" },
    { icon: Heart, label: "Atendimento Humanizado" },
  ];

  return (
    <section id="sobre" className="section-padding relative overflow-hidden">
      {/* Section background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/40 to-transparent" />
      
      <div className="section-container relative">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <ScrollReveal className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="label-premium text-primary">Sobre</span>
            </span>
            
            <h2 className="heading-section text-foreground mb-4">
              Prazer, sou o Francisco
            </h2>
            
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-full mx-auto mb-8" />
          </ScrollReveal>

          {/* Main content */}
          <ScrollReveal delay={100}>
            <div className="space-y-6 text-body text-muted-foreground text-center mb-12">
              <p className="text-body-large">
                Sou psicólogo clínico e minha missão é ajudar pessoas a encontrarem 
                equilíbrio emocional e qualidade de vida. Acredito que cada pessoa 
                carrega dentro de si a capacidade de transformação.
              </p>
              <p>
                Minha abordagem é acolhedora e empática. Trabalho para criar um espaço 
                seguro onde você possa se expressar livremente, no seu ritmo e de acordo 
                com suas necessidades individuais.
              </p>
            </div>
          </ScrollReveal>

          {/* Credentials grid */}
          <ScrollReveal delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {credentials.map((item, index) => (
                <div 
                  key={index}
                  className="group p-5 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 text-center transition-all duration-500 hover:border-primary/20 hover:shadow-lg"
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-3 transition-all duration-500 group-hover:bg-primary/15 group-hover:scale-110">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Quote */}
          <ScrollReveal delay={300}>
            <div className="p-8 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 text-center">
              <p className="text-lg text-foreground italic font-serif leading-relaxed">
                "Cuidar da saúde mental é um ato de coragem. Você não precisa 
                passar por isso sozinho."
              </p>
              <div className="mt-4 w-12 h-0.5 bg-primary/30 mx-auto" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
