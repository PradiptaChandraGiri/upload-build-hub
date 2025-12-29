import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const outlinePos = useRef({ x: 0, y: 0 });
  const particles = useRef<HTMLDivElement[]>([]);
  const frameCount = useRef(0);

  useEffect(() => {
    const checkDesktop = window.matchMedia('(pointer: fine)').matches;
    setIsDesktop(checkDesktop);

    if (!checkDesktop) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      createParticle(e.clientX, e.clientY);
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        document.body.classList.add('cursor-hover');
      }
    };

    const handleMouseLeave = () => {
      document.body.classList.remove('cursor-hover');
    };

    const createParticle = (x: number, y: number) => {
      frameCount.current++;
      if (frameCount.current % 4 !== 0) return;

      const particle = document.createElement('div');
      particle.className = 'cursor-particle';
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      document.body.appendChild(particle);

      particles.current.push(particle);

      setTimeout(() => {
        particle.remove();
        particles.current = particles.current.filter(p => p !== particle);
      }, 800);

      if (particles.current.length > 10) {
        const old = particles.current.shift();
        old?.remove();
      }
    };

    const animateCursor = () => {
      const dotSpeed = 0.25;
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * dotSpeed;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * dotSpeed;

      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${cursorPos.current.x}px`;
        cursorDotRef.current.style.top = `${cursorPos.current.y}px`;
      }

      const outlineSpeed = 0.15;
      outlinePos.current.x += (mousePos.current.x - outlinePos.current.x) * outlineSpeed;
      outlinePos.current.y += (mousePos.current.y - outlinePos.current.y) * outlineSpeed;

      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.style.left = `${outlinePos.current.x}px`;
        cursorOutlineRef.current.style.top = `${outlinePos.current.y}px`;
      }

      requestAnimationFrame(animateCursor);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.querySelectorAll('a, button, [role="button"]').forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    animateCursor();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      particles.current.forEach(p => p.remove());
    };
  }, []);

  // Re-attach hover listeners when DOM changes
  useEffect(() => {
    if (!isDesktop) return;

    const observer = new MutationObserver(() => {
      document.querySelectorAll('a, button, [role="button"]').forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      <div ref={cursorDotRef} className="cursor-dot" />
      <div ref={cursorOutlineRef} className="cursor-outline" />
    </>
  );
};

export default CustomCursor;
