import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Scene1() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 200), // Name drops in
      setTimeout(() => setPhase(2), 800), // "Premium Digital Engineer" slides up
      setTimeout(() => setPhase(3), 1500), // Glitch/shift
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center z-20"
      initial={{ filter: 'blur(20px)', opacity: 0, scale: 1.1 }}
      animate={{ filter: 'blur(0px)', opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.5, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="text-center relative">
        <motion.h1 
          className="text-[8vw] font-display font-black leading-none tracking-tighter"
          style={{ color: 'var(--color-text-primary)' }}
        >
          {'TGhabib.com'.split('').map((char, i) => (
            <motion.span 
              key={i} 
              className="inline-block"
              initial={{ y: '100%', opacity: 0, rotateX: 90 }}
              animate={phase >= 1 ? { y: '0%', opacity: 1, rotateX: 0 } : { y: '100%', opacity: 0, rotateX: 90 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30, delay: phase >= 1 ? i * 0.05 : 0 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div 
          className="mt-[2vh] flex items-center justify-center gap-[1vw]"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="h-[1px] w-[4vw] bg-[var(--color-primary)] opacity-50" />
          <span className="text-[1.2vw] font-mono tracking-[0.2em] text-[var(--color-primary)] uppercase">
            Premium Digital Engineer
          </span>
          <div className="h-[1px] w-[4vw] bg-[var(--color-primary)] opacity-50" />
        </motion.div>

        {/* Glitch Overlay */}
        {phase >= 3 && (
          <motion.div 
            className="absolute inset-0 bg-[var(--color-text-primary)] mix-blend-difference"
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: [0, 0.8, 0], x: ['-100%', '0%', '100%'] }}
            transition={{ duration: 0.4, times: [0, 0.5, 1], ease: 'linear' }}
          />
        )}
      </div>
    </motion.div>
  );
}
