import { Brain, Lightbulb, Target, Heart, CheckCircle2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const benefits = [
  {
    icon: Brain,
    title: "Compreensão",
    description: "Entenda a relação entre pensamentos, emoções e comportamentos.",
  },
  {
    icon: Lightbulb,
    title: "Consciência",
    description: "Identifique padrões que podem gerar sofrimento emocional.",
  },
  {
    icon: Target,
    title: "Estratégias",
    description: "Desenvolva ferramentas práticas para o dia a dia.",
  },
  {
    icon: Heart,
    title: "Bem-estar",
    description: "Construa uma vida mais equilibrada e saudável.",
  },
];

const tccPoints = [
  "Abordagem prática e estruturada",
  "Orientada para resultados",
  "Respeita sua individualidade",
  "Foco em soluções concretas",
];

const TherapyApproachSection = () => {
  return (
    <section id="abordagem" className="section-padding relative overflow-hidden">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-secondary/30 to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl" />
      
      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <ScrollReveal animation="fade-left">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="label-premium text-primary">Abordagem Terapêutica</span>
              </span>
              
              <h2 className="heading-section text-foreground mb-4">
                Terapia Cognitivo-Comportamental
              </h2>
              
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-full mb-8" />
              
              <div className="space-y-6 text-body text-muted-foreground mb-10">
                <p>
                  A TCC ajuda você a compreender como seus pensamentos influenciam 
                  suas emoções e comportamentos. Juntos, identificamos padrões que 
                  causam sofrimento e desenvolvemos estratégias práticas para superá-los.
                </p>
                <p>
                  É uma abordagem eficaz para ansiedade, estresse, baixa autoestima 
                  e dificuldades emocionais — sempre respeitando seu ritmo e individualidade.
                </p>
              </div>

            {/* TCC points with checkmarks */}
            <div className="grid grid-cols-2 gap-4">
              {tccPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm text-foreground">{point}</span>
                </div>
              ))}
            </div>
            </div>
          </ScrollReveal>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {benefits.map((benefit, index) => (
              <ScrollReveal
                key={index}
                delay={index * 100 + 200}
                animation="scale"
              >
                <div className="group relative p-7 rounded-3xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-all duration-700 overflow-hidden h-full">
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                
                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-semibold text-foreground mb-3 font-serif">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
                
                {/* Bottom accent */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-primary/30 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TherapyApproachSection;
