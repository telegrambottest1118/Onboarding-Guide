import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Scene1() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1200),
      setTimeout(() => setPhase(3), 2000)
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center"
      initial={{ clipPath: 'circle(0% at 50% 50%)' }}
      animate={{ clipPath: 'circle(150% at 50% 50%)' }}
      exit={{ clipPath: 'circle(0% at 50% 50%)' }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="text-center z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={phase >= 1 ? { scale: 1, opacity: 1, y: 0 } : { scale: 0.8, opacity: 0, y: 50 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="w-[8vw] h-[8vw] mx-auto mb-[2vh] rounded-[2vw] bg-gradient-to-tr from-[var(--color-primary)] to-[var(--color-secondary)] shadow-[0_0_4vw_rgba(168,85,247,0.4)] flex items-center justify-center"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[4vw] h-[4vw]">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        </motion.div>
        
        <motion.h1 
          className="text-[6vw] font-display font-bold text-[var(--color-text-primary)] leading-none tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          Start Building
        </motion.h1>
        
        <motion.p
          className="text-[2vw] text-[var(--color-text-secondary)] mt-[2vh]"
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={phase >= 3 ? { opacity: 1, filter: 'blur(0px)' } : { opacity: 0, filter: 'blur(10px)' }}
          transition={{ duration: 0.8 }}
        >
          In under 60 seconds.
        </motion.p>
      </div>
    </motion.div>
  );
}