import { useEffect, useState } from 'react';

const BackgroundEffects = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Sophisticated gradient mesh */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 40%, hsl(var(--primary) / 0.04) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 20%, hsl(38 70% 50% / 0.03) 0%, transparent 50%),
            radial-gradient(ellipse 50% 60% at 60% 80%, hsl(var(--primary) / 0.03) 0%, transparent 50%)
          `
        }}
      />

      {/* Primary floating orb - large - with parallax */}
      <div 
        className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full animate-breathe transition-transform duration-100"
        style={{ 
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.06) 0%, hsl(var(--primary) / 0.02) 40%, transparent 70%)',
          filter: 'blur(60px)',
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />
      
      {/* Secondary orb - top right with golden hue - parallax opposite */}
      <div 
        className="absolute -top-20 -right-32 w-[500px] h-[500px] rounded-full animate-breathe transition-transform duration-100"
        style={{ 
          background: 'radial-gradient(circle, hsl(38 70% 50% / 0.05) 0%, transparent 60%)',
          filter: 'blur(50px)',
          animationDelay: '3s',
          transform: `translateY(${scrollY * -0.05}px)`,
        }}
      />
      
      {/* Center accent blob with morphing shape - subtle parallax */}
      <div 
        className="absolute top-1/3 left-1/4 w-[600px] h-[600px] blob animate-breathe transition-transform duration-100"
        style={{ 
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.04) 0%, transparent 50%)',
          filter: 'blur(80px)',
          animationDelay: '5s',
          transform: `translateY(${scrollY * 0.08}px) translateX(${scrollY * -0.02}px)`,
        }}
      />
      
      {/* Right side floating element - parallax */}
      <div 
        className="absolute top-1/2 -right-48 w-[550px] h-[550px] rounded-full animate-breathe transition-transform duration-100"
        style={{ 
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.05) 0%, transparent 60%)',
          filter: 'blur(70px)',
          animationDelay: '2s',
          transform: `translateY(${scrollY * -0.06}px)`,
        }}
      />
      
      {/* Bottom warm accent - parallax slower */}
      <div 
        className="absolute -bottom-32 left-1/4 w-[500px] h-[400px] rounded-full animate-breathe transition-transform duration-100"
        style={{ 
          background: 'radial-gradient(ellipse, hsl(38 60% 60% / 0.04) 0%, transparent 60%)',
          filter: 'blur(60px)',
          animationDelay: '4s',
          transform: `translateY(${scrollY * -0.15}px)`,
        }}
      />
      
      {/* Bottom right primary accent - parallax */}
      <div 
        className="absolute -bottom-40 -right-20 w-[600px] h-[600px] rounded-full animate-breathe transition-transform duration-100"
        style={{ 
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.05) 0%, transparent 60%)',
          filter: 'blur(70px)',
          animationDelay: '6s',
          transform: `translateY(${scrollY * -0.12}px)`,
        }}
      />

      {/* Subtle geometric grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Radial gradient overlay for depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 0%, hsl(var(--background) / 0.3) 100%)',
        }}
      />

      {/* Subtle noise texture for premium feel */}
      <div 
        className="absolute inset-0 opacity-[0.012] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative circles - very subtle - with parallax */}
      <div 
        className="absolute top-[20%] right-[10%] w-96 h-96 border border-primary/[0.03] rounded-full transition-transform duration-100"
        style={{ transform: `translateY(${scrollY * 0.03}px)` }}
      />
      <div 
        className="absolute top-[25%] right-[12%] w-80 h-80 border border-primary/[0.02] rounded-full transition-transform duration-100"
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
      />
      <div 
        className="absolute bottom-[15%] left-[5%] w-72 h-72 border border-primary/[0.03] rounded-full transition-transform duration-100"
        style={{ transform: `translateY(${scrollY * -0.04}px)` }}
      />
    </div>
  );
};

export default BackgroundEffects;
