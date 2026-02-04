import { Instagram, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const instagramLink = "https://www.instagram.com/franciscomendespsi?igsh=MXY4dGhkcjFhNzRsZQ==";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="py-16 bg-gradient-to-b from-transparent to-secondary/30">
        <div className="section-container">
          {/* Main footer content */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            {/* Brand */}
            <div className="text-center md:text-left">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                Francisco Mendes
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Psicólogo Clínico
              </p>
              <div className="flex items-center justify-center md:justify-start gap-1 text-xs text-muted-foreground/60">
                <span>Cuidando de você com</span>
                <Heart className="w-3 h-3 text-primary fill-primary" />
              </div>
            </div>

            {/* Social + Back to top */}
            <div className="flex items-center gap-4">
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-card border border-border/50 rounded-full flex items-center justify-center hover:border-primary/30 hover:bg-primary/5 transition-all duration-500"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </a>
              
              <button
                onClick={scrollToTop}
                className="group w-12 h-12 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-500"
                aria-label="Voltar ao topo"
              >
                <ArrowUp className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent mb-8" />

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground/60">
            <p>
              © {new Date().getFullYear()} Francisco Mendes. Todos os direitos reservados.
            </p>
            <p className="text-xs">
              Psicologia • Terapia Cognitivo-Comportamental
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
