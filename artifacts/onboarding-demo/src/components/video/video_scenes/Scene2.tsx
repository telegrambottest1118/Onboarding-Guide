import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Scene2() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 400), // Chaos appears
      setTimeout(() => setPhase(2), 1200), // Chaos scatters more
      setTimeout(() => setPhase(3), 2200), // "The old way" text
      setTimeout(() => setPhase(4), 3200), // Transition out prep
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const fragments = Array.from({ length: 15 });

  return (
    <motion.div 
      className="absolute inset-0 z-20 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.9, filter: 'blur(20px)' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Floating Chaos UI Fragments */}
      <div className="absolute inset-0 pointer-events-none perspective-1000">
        {fragments.map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-[var(--color-bg-muted)] border border-white/5 rounded-[1vw] shadow-2xl glass-panel overflow-hidden"
            style={{
              width: `${10 + Math.random() * 15}vw`,
              height: `${5 + Math.random() * 10}vh`,
              left: `${10 + Math.random() * 70}vw`,
              top: `${10 + Math.random() * 70}vh`,
            }}
            initial={{ opacity: 0, scale: 0.5, rotateX: 45, rotateY: 45, z: -500 }}
            animate={phase >= 1 ? { 
              opacity: phase >= 4 ? 0 : 0.6, 
              scale: phase >= 2 ? 1 + Math.random() * 0.5 : 1,
              rotateX: phase >= 2 ? (Math.random() - 0.5) * 60 : 0,
              rotateY: phase >= 2 ? (Math.random() - 0.5) * 60 : 0,
              z: phase >= 2 ? (Math.random() - 0.5) * 400 : 0,
              x: phase >= 2 ? (Math.random() - 0.5) * 200 : 0,
              y: phase >= 2 ? (Math.random() - 0.5) * 200 : 0,
            } : { opacity: 0 }}
            transition={{ type: 'spring', stiffness: 50, damping: 20, delay: i * 0.05 }}
          >
            <div className="p-[1vw] flex flex-col gap-[1vh] opacity-30">
              <div className="w-[80%] h-[1vh] bg-red-500/50 rounded-full" />
              <div className="w-[50%] h-[1vh] bg-red-500/30 rounded-full" />
              <div className="w-[90%] h-[1vh] bg-red-500/20 rounded-full" />
            </div>
            
            {/* AI Fragment Image mixed in */}
            {i % 4 === 0 && (
              <img 
                src={`${import.meta.env.BASE_URL}images/ui_fragment.png`} 
                className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-screen" 
                alt=""
              />
            )}
          </motion.div>
        ))}
      </div>

      <div className="relative z-30 text-center mix-blend-difference">
        <motion.h2
          className="text-[6vw] font-display font-black leading-tight text-white uppercase"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={phase >= 3 ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          The Old Way<br/>
          <span className="text-red-500">Is Broken.</span>
        </motion.h2>
      </div>

    </motion.div>
  );
}
