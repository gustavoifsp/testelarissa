import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#abordagem", label: "Abordagem" },
  { href: "#publico", label: "Público" },
  { href: "#contato", label: "Contato" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-2xl border-b border-border/30 shadow-sm"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo with elegant animation */}
          <a 
            href="#" 
            className="group relative"
          >
            <span className="font-serif text-xl md:text-2xl font-semibold text-foreground tracking-tight transition-colors duration-300 group-hover:text-primary">
              Francisco Mendes
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-5 py-2.5 text-sm font-medium transition-all duration-300 rounded-full group ${
                    isActive 
                      ? 'text-primary' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  <span 
                    className={`absolute inset-0 rounded-full transition-all duration-300 ${
                      isActive 
                        ? 'bg-primary/10 scale-100' 
                        : 'bg-primary/5 scale-0 group-hover:scale-100'
                    }`} 
                  />
                </a>
              );
            })}
            <div className="ml-4 pl-4 border-l border-border/50">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-secondary/50 text-foreground hover:bg-secondary transition-colors duration-300"
            aria-label="Menu"
          >
            <span className={`absolute transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`}>
              <Menu className="w-5 h-5" />
            </span>
            <span className={`absolute transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`}>
              <X className="w-5 h-5" />
            </span>
          </button>
        </div>

        {/* Mobile Navigation - Slide down with glass effect */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
            isOpen ? 'max-h-[400px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          <div className="glass-panel p-6 space-y-1">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 px-4 text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 text-sm tracking-wide rounded-xl"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 mt-4 border-t border-border/30 flex items-center justify-between px-4">
              <span className="text-sm text-muted-foreground">Alternar tema</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
