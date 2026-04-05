import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Scene3() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),  // Card flips in
      setTimeout(() => setPhase(2), 1200), // Type email
      setTimeout(() => setPhase(3), 2200), // Type password
      setTimeout(() => setPhase(4), 3000), // Button hover/pulse
      setTimeout(() => setPhase(5), 3500), // Button click expand
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 z-20 flex items-center justify-center perspective-1000"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, z: 500, rotateX: -20 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute left-[10vw] top-[40vh] w-[30vw]">
        <motion.div
          className="w-[3vw] h-[3px] bg-[var(--color-primary)] mb-[2vh]"
          initial={{ width: 0 }}
          animate={{ width: '3vw' }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.h2
          className="text-[4vw] font-display font-black text-white leading-none mb-[2vh]"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Enter<br/>
          <span className="text-[var(--color-primary)]">The New.</span>
        </motion.h2>
        <motion.p
          className="text-[1.2vw] font-mono text-[var(--color-text-secondary)]"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {'>'} frictionless_auth.init()
        </motion.p>
      </div>

      <motion.div 
        className="absolute right-[15vw] w-[35vw] glass-panel-accent rounded-[1.5vw] p-[3vw] shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform-style-3d overflow-hidden"
        initial={{ opacity: 0, rotateY: 45, x: 100, z: -200 }}
        animate={phase >= 1 ? { 
          opacity: 1, 
          rotateY: phase >= 5 ? -10 : -15, 
          x: 0, 
          z: phase >= 5 ? 100 : 0 
        } : { opacity: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <div className="relative z-10">
          <h3 className="text-[2vw] font-display font-bold text-white mb-[3vh]">Create Workspace</h3>
          
          <div className="space-y-[2.5vh] mb-[4vh]">
            {/* Email Field */}
            <div className="relative">
              <div className="text-[0.9vw] font-mono text-[var(--color-text-secondary)] mb-[1vh] uppercase tracking-wider">Email</div>
              <div className="h-[6vh] bg-black/40 border border-white/10 rounded-[0.5vw] flex items-center px-[1.5vw]">
                <motion.span 
                  className="text-[1.2vw] text-white font-mono"
                  initial={{ width: 0, overflow: 'hidden', whiteSpace: 'nowrap' }}
                  animate={phase >= 2 ? { width: 'auto' } : { width: 0 }}
                  transition={{ duration: 0.6, ease: 'linear' }}
                >
                  hello@tghabib.com
                </motion.span>
                {phase >= 1 && phase < 2 && (
                  <motion.div className="w-[2px] h-[3vh] bg-[var(--color-primary)] ml-[0.5vw]" animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} />
                )}
              </div>
            </div>

            {/* Password Field */}
            <div className="relative">
              <div className="text-[0.9vw] font-mono text-[var(--color-text-secondary)] mb-[1vh] uppercase tracking-wider">Password</div>
              <div className="h-[6vh] bg-black/40 border border-white/10 rounded-[0.5vw] flex items-center px-[1.5vw]">
                <motion.span 
                  className="text-[1.5vw] text-white tracking-[0.5vw]"
                  initial={{ width: 0, overflow: 'hidden', whiteSpace: 'nowrap' }}
                  animate={phase >= 3 ? { width: 'auto' } : { width: 0 }}
                  transition={{ duration: 0.4, ease: 'linear' }}
                >
                  ••••••••••••
                </motion.span>
                {phase >= 2 && phase < 3 && (
                  <motion.div className="w-[2px] h-[3vh] bg-[var(--color-primary)] ml-[0.5vw]" animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} />
                )}
              </div>
            </div>
          </div>

          {/* Action Button */}
          <motion.div 
            className="h-[7vh] bg-[var(--color-primary)] rounded-[0.5vw] flex items-center justify-center relative overflow-hidden"
            animate={{
              scale: phase === 4 ? 0.98 : (phase === 5 ? 1.05 : 1),
              backgroundColor: phase >= 5 ? 'var(--color-bg-light)' : 'var(--color-primary)'
            }}
            transition={{ duration: 0.2 }}
          >
            <motion.span 
              className="text-[1.2vw] font-bold text-white uppercase tracking-widest relative z-10"
              animate={{ color: phase >= 5 ? 'var(--color-bg-dark)' : '#ffffff' }}
            >
              {phase >= 5 ? 'Initializing...' : 'Initialize'}
            </motion.span>
            
            {/* Button pulse effect */}
            {phase >= 3 && phase < 5 && (
              <motion.div 
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%', skewX: -20 }}
                animate={{ x: '200%' }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            )}
          </motion.div>
        </div>

        {/* Ambient glow behind card content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[var(--color-primary)]/20 blur-[60px] rounded-full pointer-events-none" />
      </motion.div>
    </motion.div>
  );
}
