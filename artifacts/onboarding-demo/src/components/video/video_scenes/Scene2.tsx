import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Scene2() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300), // Card appears
      setTimeout(() => setPhase(2), 1000), // Type email
      setTimeout(() => setPhase(3), 2000), // Type password
      setTimeout(() => setPhase(4), 2800), // Click button
      setTimeout(() => setPhase(5), 3200)  // Success
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center"
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: -50, filter: 'blur(20px)' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute left-[10vw] w-[30vw]">
        <motion.h2 
          className="text-[4vw] font-display font-bold text-[var(--color-text-primary)] leading-tight mb-[2vh]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Frictionless<br/>Signup
        </motion.h2>
        <motion.p
          className="text-[1.5vw] text-[var(--color-text-secondary)]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          No credit card required. Just your email and you're in.
        </motion.p>
      </div>

      <motion.div 
        className="absolute right-[15vw] w-[35vw] bg-[var(--color-bg-muted)] border border-[var(--color-text-muted)]/20 rounded-[2vw] p-[3vw] shadow-2xl backdrop-blur-xl perspective-1000"
        initial={{ opacity: 0, rotateY: 30, z: -200, x: 100 }}
        animate={{ opacity: 1, rotateY: -5, z: 0, x: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <div className="mb-[2vh]">
          <div className="text-[1vw] text-[var(--color-text-secondary)] mb-[0.5vh]">Email Address</div>
          <div className="h-[4vh] bg-[var(--color-bg-dark)] rounded-[0.5vw] border border-[var(--color-text-muted)]/30 flex items-center px-[1vw]">
            <motion.span 
              className="text-[1.2vw] text-[var(--color-text-primary)] font-mono"
              initial={{ width: 0, overflow: 'hidden', whiteSpace: 'nowrap' }}
              animate={phase >= 2 ? { width: 'auto' } : { width: 0 }}
              transition={{ duration: 0.5, ease: 'linear' }}
            >
              hello@example.com
            </motion.span>
            {phase >= 1 && phase < 2 && (
              <motion.div className="w-[2px] h-[2vh] bg-[var(--color-primary)] ml-[2px]" animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} />
            )}
          </div>
        </div>
        
        <div className="mb-[3vh]">
          <div className="text-[1vw] text-[var(--color-text-secondary)] mb-[0.5vh]">Password</div>
          <div className="h-[4vh] bg-[var(--color-bg-dark)] rounded-[0.5vw] border border-[var(--color-text-muted)]/30 flex items-center px-[1vw]">
            <motion.span 
              className="text-[1.2vw] text-[var(--color-text-primary)] tracking-[0.5vw]"
              initial={{ width: 0, overflow: 'hidden', whiteSpace: 'nowrap' }}
              animate={phase >= 3 ? { width: 'auto' } : { width: 0 }}
              transition={{ duration: 0.5, ease: 'linear' }}
            >
              ••••••••
            </motion.span>
            {phase >= 2 && phase < 3 && (
              <motion.div className="w-[2px] h-[2vh] bg-[var(--color-primary)] ml-[2px]" animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} />
            )}
          </div>
        </div>

        <motion.div 
          className="h-[5vh] bg-[var(--color-primary)] rounded-[0.5vw] flex items-center justify-center text-[1.2vw] font-bold text-white relative overflow-hidden"
          animate={phase >= 4 ? { scale: 0.95 } : { scale: 1 }}
          transition={{ duration: 0.1 }}
        >
          {phase < 5 ? 'Create Account' : 'Welcome!'}
          {phase === 5 && (
            <motion.div 
              className="absolute inset-0 bg-[var(--color-accent)] mix-blend-screen"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}