import { useState } from "react";
import { BookOpen, Brain, Heart, Lightbulb, X, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Content {
  id: number;
  icon: React.ElementType;
  title: string;
  summary: string;
  fullContent: string;
  color: string;
}

const contents: Content[] = [
  {
    id: 1,
    icon: Brain,
    title: "Como seus pensamentos influenciam suas emoções",
    summary:
      "Na Terapia Cognitivo-Comportamental, entendemos que a forma como interpretamos as situações impacta diretamente nossas emoções. Este conteúdo convida à reflexão sobre padrões de pensamento e como pequenas mudanças podem gerar mais equilíbrio emocional.",
    fullContent: `Na Terapia Cognitivo-Comportamental (TCC), um dos conceitos fundamentais é a relação entre pensamentos, emoções e comportamentos. A forma como interpretamos uma situação influencia diretamente como nos sentimos e agimos.

Por exemplo, imagine que você envia uma mensagem para um amigo e ele demora a responder. Se você pensa "ele deve estar ocupado", provavelmente sentirá tranquilidade. Mas se pensa "ele não gosta mais de mim", pode surgir tristeza ou ansiedade.

**Identificando padrões de pensamento:**

• Pensamento catastrófico: imaginar sempre o pior cenário
• Leitura mental: acreditar saber o que o outro está pensando
• Generalização: usar "sempre" ou "nunca" com frequência
• Filtro mental: focar apenas nos aspectos negativos

**Pequenas mudanças que fazem diferença:**

1. Observe seus pensamentos automáticos
2. Questione: "Há outra forma de ver essa situação?"
3. Busque evidências reais, não suposições
4. Pratique a autocompaixão

Reconhecer esses padrões é o primeiro passo para desenvolver uma relação mais saudável com suas emoções.`,
    color: "from-violet-500/20 to-violet-500/5",
  },
  {
    id: 2,
    icon: Lightbulb,
    title: "Ansiedade: aprendendo a identificar sinais e gatilhos",
    summary:
      "A ansiedade faz parte da vida, mas quando se torna excessiva pode gerar sofrimento. Aqui, você encontra orientações para reconhecer sinais de ansiedade e identificar gatilhos que influenciam seu dia a dia.",
    fullContent: `A ansiedade é uma resposta natural do organismo diante de situações de incerteza ou desafio. No entanto, quando se torna frequente ou desproporcional, pode prejudicar a qualidade de vida.

**Sinais físicos da ansiedade:**

• Coração acelerado
• Respiração curta ou superficial
• Tensão muscular
• Sudorese
• Dificuldade para dormir

**Sinais emocionais e cognitivos:**

• Preocupação excessiva com o futuro
• Dificuldade de concentração
• Sensação de inquietação
• Pensamentos acelerados
• Irritabilidade

**Como identificar seus gatilhos:**

1. Mantenha um diário emocional por uma semana
2. Anote situações que geraram desconforto
3. Observe padrões: horários, pessoas, lugares
4. Identifique pensamentos que surgiram nesses momentos

**Estratégias iniciais de manejo:**

• Respiração diafragmática (4-7-8)
• Técnica de aterramento (5 sentidos)
• Limitar consumo de notícias e redes sociais
• Estabelecer rotina de sono

Lembre-se: buscar ajuda profissional é um ato de autocuidado, não de fraqueza.`,
    color: "from-amber-500/20 to-amber-500/5",
  },
  {
    id: 3,
    icon: Heart,
    title: "Autocuidado emocional: pequenas atitudes que fazem diferença",
    summary:
      "Cuidar da saúde emocional vai além de grandes mudanças. Neste conteúdo, você encontra práticas simples e acessíveis de autocuidado que podem ser incorporadas à rotina.",
    fullContent: `Autocuidado emocional não exige grandes transformações. São as pequenas atitudes diárias que, somadas, constroem uma base sólida para o bem-estar psicológico.

**Práticas simples para o dia a dia:**

**1. Momentos de pausa consciente**
Reserve 5 minutos para apenas respirar e observar como você está se sentindo. Sem julgamento, apenas presença.

**2. Conexões significativas**
Priorize relações que nutrem você. Uma conversa genuína vale mais que horas em interações superficiais.

**3. Limites saudáveis**
Dizer "não" quando necessário é um ato de respeito consigo mesmo. Seus limites protegem sua energia.

**4. Movimento do corpo**
Não precisa ser exercício intenso. Uma caminhada, alongamento ou dança liberam tensões acumuladas.

**5. Alimentação consciente**
Coma com atenção, saboreando. A relação com a comida reflete nossa relação com o autocuidado.

**6. Sono reparador**
Crie rituais noturnos: diminua telas, mantenha horários regulares, cuide do ambiente.

**7. Expressão criativa**
Escrever, desenhar, cozinhar. Qualquer forma de expressão ajuda a processar emoções.

**Lembre-se:**
Autocuidado não é egoísmo. Você não pode oferecer ao outro o que não cultiva em si mesmo.`,
    color: "from-rose-500/20 to-rose-500/5",
  },
];

const SelfHelpSection = () => {
  const [selectedContent, setSelectedContent] = useState<Content | null>(null);

  return (
    <section id="conteudos" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-transparent to-secondary/20" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl" />
      
      <div className="section-container relative">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="label-premium text-primary">Reflexão e autoconhecimento</span>
          </span>
          
          <h2 className="heading-section text-foreground mb-6">
            Conteúdos de Autoajuda
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent mx-auto mb-8" />
          
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            Neste espaço, compartilho conteúdos de autoajuda e reflexão para 
            apoiar o cuidado com a saúde emocional no dia a dia.
          </p>
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {contents.map((content, index) => (
            <article
              key={content.id}
              className="group relative animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-full p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-card/70 backdrop-blur-sm border border-border/50 transition-all duration-700 hover:border-primary/20 hover:shadow-xl overflow-hidden">
                {/* Hover gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${content.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                
                {/* Icon */}
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg">
                  <content.icon className="w-7 h-7 text-primary transition-transform duration-500 group-hover:scale-110" />
                </div>

                {/* Title */}
                <h3 className="relative heading-card text-foreground mb-4 line-clamp-2">
                  {content.title}
                </h3>

                {/* Summary */}
                <p className="relative text-muted-foreground leading-relaxed mb-6 line-clamp-4">
                  {content.summary}
                </p>

                {/* Read More Button */}
                <Button
                  variant="ghost"
                  className="relative text-primary hover:text-primary/80 hover:bg-primary/5 p-0 h-auto font-medium group/btn flex items-center gap-2"
                  onClick={() => setSelectedContent(content)}
                >
                  <BookOpen className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                  <span>Ler mais</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              </div>
            </article>
          ))}
        </div>

        {/* Ethical Disclaimer */}
        <div className="text-center animate-fade-up" style={{ animationDelay: "450ms" }}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card/60 border border-border/50">
            <div className="w-2 h-2 rounded-full bg-primary/40" />
            <p className="text-sm text-muted-foreground/70 italic">
              Este conteúdo é informativo e não substitui acompanhamento psicológico profissional.
            </p>
          </div>
        </div>
      </div>

      {/* Content Modal */}
      <Dialog open={!!selectedContent} onOpenChange={() => setSelectedContent(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-background/95 backdrop-blur-xl border-border/50 rounded-3xl">
          <DialogHeader className="pb-6 border-b border-border/30">
            <div className="flex items-center gap-4 mb-3">
              {selectedContent && (
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <selectedContent.icon className="w-6 h-6 text-primary" />
                </div>
              )}
              <DialogTitle className="text-xl font-serif text-foreground leading-tight flex-1">
                {selectedContent?.title}
              </DialogTitle>
            </div>
            <DialogDescription className="sr-only">
              Conteúdo completo sobre {selectedContent?.title}
            </DialogDescription>
          </DialogHeader>
          
          <div className="prose prose-sm max-w-none pt-6">
            {selectedContent?.fullContent.split('\n\n').map((paragraph, index) => (
              <div key={index} className="mb-4">
                {paragraph.startsWith('**') && paragraph.endsWith('**') ? (
                  <h4 className="font-semibold text-foreground mt-6 mb-3 text-lg font-serif">
                    {paragraph.replace(/\*\*/g, '')}
                  </h4>
                ) : paragraph.startsWith('•') || paragraph.startsWith('1.') ? (
                  <p className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/20 py-1">
                    {paragraph}
                  </p>
                ) : (
                  <p className="text-muted-foreground leading-relaxed">
                    {paragraph.split('**').map((part, i) => 
                      i % 2 === 1 ? <strong key={i} className="text-foreground font-medium">{part}</strong> : part
                    )}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="pt-6 mt-4 border-t border-border/30">
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground/60">
              <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
              <p className="italic">
                Este conteúdo é informativo e não substitui acompanhamento psicológico profissional.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default SelfHelpSection;
