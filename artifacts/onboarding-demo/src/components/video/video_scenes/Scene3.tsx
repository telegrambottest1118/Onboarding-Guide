import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Scene3() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1500),
      setTimeout(() => setPhase(3), 2500)
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const templates = [
    { title: 'Project Tracker', color: 'bg-blue-500/20 text-blue-400 border-blue-500/50' },
    { title: 'Content Calendar', color: 'bg-purple-500/20 text-purple-400 border-purple-500/50' },
    { title: 'CRM Dashboard', color: 'bg-green-500/20 text-green-400 border-green-500/50' },
  ];

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center"
      initial={{ y: '100%', opacity: 0 }}
      animate={{ y: '0%', opacity: 1 }}
      exit={{ scale: 2, opacity: 0, filter: 'blur(20px)' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.h2 
        className="text-[4vw] font-display font-bold text-[var(--color-text-primary)] mb-[1vh]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Choose a Template
      </motion.h2>
      <motion.p
        className="text-[1.5vw] text-[var(--color-text-secondary)] mb-[6vh]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Or start from scratch. We've got you covered.
      </motion.p>

      <div className="flex gap-[3vw] perspective-1000 transform-style-3d">
        {templates.map((template, i) => (
          <motion.div
            key={i}
            className={`w-[20vw] h-[25vw] rounded-[1vw] border flex flex-col items-center justify-center relative overflow-hidden backdrop-blur-sm ${template.color}`}
            initial={{ opacity: 0, rotateY: 45, x: 100, z: -100 }}
            animate={
              phase >= 1 ? { 
                opacity: 1, 
                rotateY: phase >= 2 && i === 1 ? 0 : (phase >= 2 ? (i===0?-20:20) : 0), 
                x: 0, 
                z: phase >= 2 && i === 1 ? 50 : 0,
                scale: phase >= 2 && i === 1 ? 1.1 : 1
              } : { opacity: 0, rotateY: 45, x: 100, z: -100 }
            }
            transition={{ type: 'spring', stiffness: 200, damping: 20, delay: i * 0.2 }}
            style={{ zIndex: i === 1 && phase >= 2 ? 10 : 1 }}
          >
            <div className="text-[1.5vw] font-bold mb-[1vh]">{template.title}</div>
            
            {/* Minimal mockup inside template card */}
            <div className="w-[80%] h-[60%] border border-current/30 rounded-[0.5vw] mt-[2vh] p-[1vw] flex flex-col gap-[1vh]">
              <div className="w-[40%] h-[1vh] bg-current/20 rounded-full" />
              <div className="w-full h-[3vh] bg-current/10 rounded-sm" />
              <div className="w-full h-[3vh] bg-current/10 rounded-sm" />
              <div className="w-[70%] h-[3vh] bg-current/10 rounded-sm" />
            </div>

            {/* Selection highlight for the middle one */}
            {i === 1 && phase >= 3 && (
              <motion.div 
                className="absolute inset-0 border-[0.5vw] border-white/50 rounded-[1vw]"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}