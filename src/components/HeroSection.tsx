import { MessageCircle, ArrowDown, Sparkles } from "lucide-react";
import franciscoPhoto from "../assets/francisco-mendes.jpg";

const HeroSection = () => {
  const whatsappNumber = "5561995867184";
  const message = "Olá! Gostaria de agendar uma consulta com o Psicólogo Francisco Mendes.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
      {/* Sophisticated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large morphing blob - left */}
        <div 
          className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] blob animate-breathe"
          style={{ 
            background: 'radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 70%)',
          }}
        />
        
        {/* Floating orb - top right */}
        <div 
          className="absolute top-20 right-[15%] w-32 h-32 rounded-full animate-float"
          style={{ 
            background: 'radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />

        {/* Accent blob - bottom */}
        <div 
          className="absolute -bottom-1/3 right-1/4 w-[600px] h-[600px] blob animate-breathe"
          style={{ 
            background: 'radial-gradient(circle, hsl(38 70% 50% / 0.06) 0%, transparent 60%)',
            animationDelay: '4s'
          }}
        />

        {/* Geometric accent lines */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
        
        {/* Decorative circles */}
        <div className="absolute top-1/4 right-[10%] w-64 h-64 border border-primary/5 rounded-full animate-spin-slow" />
        <div className="absolute bottom-1/4 left-[5%] w-48 h-48 border border-primary/5 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '40s' }} />
      </div>
      
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            {/* Premium badge */}
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10 mb-8">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="label-premium text-primary">Psicologia Clínica</span>
              </span>
            </div>
            
            {/* Main heading with elegant typography */}
            <h1 className="heading-display text-foreground mb-6 animate-fade-up animation-delay-100">
              <span className="relative inline-block">
                Francisco Mendes
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/30" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                  <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-primary font-medium text-lg mb-6 animate-fade-up animation-delay-150">
              Psicólogo Clínico • CRP 01/12345
            </p>
            
            {/* Refined description */}
            <p className="text-body-large text-muted-foreground mb-10 animate-fade-up animation-delay-300">
              Especialista em Terapia Cognitivo-Comportamental, ofereço um espaço 
              seguro e acolhedor para você cuidar da sua saúde emocional.
            </p>
            
            {/* CTA buttons with enhanced styling */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 animate-fade-up animation-delay-400">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-3 group"
              >
                <MessageCircle className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>Agendar uma conversa</span>
              </a>
              
              <a
                href="#sobre"
                className="btn-secondary inline-flex items-center gap-2 group"
              >
                <span className="relative z-10">Conhecer mais</span>
                <ArrowDown className="w-4 h-4 relative z-10 transition-transform group-hover:translate-y-1" />
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-col sm:flex-row flex-wrap items-center lg:items-start justify-center lg:justify-start gap-4 sm:gap-6 animate-fade-up animation-delay-500">
              <div className="flex items-center gap-2 text-muted-foreground/60">
                <div className="w-2 h-2 rounded-full bg-primary/40" />
                <span className="text-xs sm:text-sm">Atendimento humanizado</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground/60">
                <div className="w-2 h-2 rounded-full bg-primary/40" />
                <span className="text-xs sm:text-sm">Online & Presencial</span>
              </div>
            </div>
          </div>

          {/* Right side - Photo */}
          <div className="flex-shrink-0 animate-fade-up animation-delay-200">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-primary/10 animate-spin-slow" style={{ animationDuration: '30s' }} />
              <div className="absolute -inset-8 rounded-full border border-primary/5 animate-spin-slow" style={{ animationDuration: '40s', animationDirection: 'reverse' }} />
              
              {/* Photo container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-elevated">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent z-10" />
                
                <img 
                  src={franciscoPhoto} 
                  alt="Francisco Mendes - Psicólogo" 
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-card/95 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-card border border-border/50 z-20">
                <span className="text-sm font-medium text-foreground">+500 vidas transformadas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Elegant scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <a href="#sobre" className="flex flex-col items-center gap-2 text-muted-foreground/40 hover:text-primary transition-colors duration-500 group">
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
