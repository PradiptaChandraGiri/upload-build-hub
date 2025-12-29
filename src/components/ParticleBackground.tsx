import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particleCount = 50;
    const particles: HTMLDivElement[] = [];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      const size = Math.random() * 4 + 2;
      const left = Math.random() * 100;
      const animationDuration = Math.random() * 20 + 10;
      const delay = Math.random() * 20;
      const opacity = Math.random() * 0.5 + 0.1;
      
      particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${left}%;
        opacity: ${opacity};
        animation-duration: ${animationDuration}s;
        animation-delay: ${delay}s;
      `;
      
      container.appendChild(particle);
      particles.push(particle);
    }

    return () => {
      particles.forEach(p => p.remove());
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* Gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-200" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-blob animation-delay-400" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
};

export default ParticleBackground;
