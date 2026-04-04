'use client';

import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { stiffness: 300, damping: 28, mass: 0.5 };
  const dotX = useSpring(cursorX, { stiffness: 600, damping: 40, mass: 0.2 });
  const dotY = useSpring(cursorY, { stiffness: 600, damping: 40, mass: 0.2 });
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  const isHoveringRef = useRef(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target?.tagName) return;
      const tag = target.tagName.toLowerCase();
      const isClickable =
        tag === 'a' ||
        tag === 'button' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        window.getComputedStyle(target).cursor === 'pointer';

      if (isClickable !== isHoveringRef.current) {
        isHoveringRef.current = isClickable;
        if (dotRef.current) {
          dotRef.current.style.transform = isClickable ? 'scale(3.5)' : 'scale(1)';
          dotRef.current.style.opacity = isClickable ? '0.7' : '1';
        }
        if (ringRef.current) {
          ringRef.current.style.opacity = isClickable ? '0' : '0.5';
          ringRef.current.style.transform = isClickable ? 'scale(1.5)' : 'scale(1)';
        }
      }
    };

    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mouseover', over, { passive: true });

    // Hide real cursor in portfolio areas
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      // Restore real cursor when leaving portfolio
      document.body.style.cursor = 'auto';
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Dot */}
      <motion.div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          width: 10,
          height: 10,
          borderRadius: '50%',
          backgroundColor: 'white',
          willChange: 'transform',
          transition: 'transform 0.15s ease, opacity 0.15s ease',
        }}
      />
      {/* Ring */}
      <motion.div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.5)',
          willChange: 'transform',
          opacity: 0.5,
          transition: 'transform 0.2s ease, opacity 0.2s ease',
        }}
      />
    </>
  );
}
