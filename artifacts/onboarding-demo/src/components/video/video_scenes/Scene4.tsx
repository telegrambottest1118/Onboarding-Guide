import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Scene4() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1200),
      setTimeout(() => setPhase(3), 2000),
      setTimeout(() => setPhase(4), 2800)
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute w-[80vw] h-[70vh] bg-[var(--color-bg-muted)] rounded-[2vw] border border-[var(--color-text-muted)]/20 shadow-2xl flex flex-col overflow-hidden transform-style-3d">
        {/* Header */}
        <div className="h-[6vh] border-b border-[var(--color-text-muted)]/20 flex items-center px-[2vw] gap-[1vw]">
          <div className="flex gap-[0.5vw]">
            <div className="w-[0.8vw] h-[0.8vw] rounded-full bg-red-500" />
            <div className="w-[0.8vw] h-[0.8vw] rounded-full bg-yellow-500" />
            <div className="w-[0.8vw] h-[0.8vw] rounded-full bg-green-500" />
          </div>
          <div className="ml-[2vw] font-bold text-[1.2vw] text-[var(--color-text-primary)]">Content Calendar</div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex p-[2vw] gap-[2vw]">
          {/* Sidebar */}
          <motion.div 
            className="w-[15vw] flex flex-col gap-[1vh]"
            initial={{ opacity: 0, x: -20 }}
            animate={phase >= 1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          >
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-[3vh] bg-[var(--color-bg-dark)]/50 rounded-[0.5vw] w-full" />
            ))}
          </motion.div>

          {/* Main Board */}
          <div className="flex-1 flex gap-[1.5vw] overflow-hidden relative">
            {['To Do', 'In Progress', 'Done'].map((col, colIdx) => (
              <motion.div 
                key={col}
                className="flex-1 bg-[var(--color-bg-dark)]/30 rounded-[1vw] p-[1vw] flex flex-col gap-[1vh]"
                initial={{ opacity: 0, y: 50 }}
                animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: colIdx * 0.15 }}
              >
                <div className="font-bold text-[1vw] text-[var(--color-text-secondary)] mb-[1vh]">{col}</div>
                
                {/* Cards */}
                {[1, 2].map((card, cardIdx) => (
                  <motion.div 
                    key={card}
                    className="bg-[var(--color-bg-light)]/5 border border-white/5 rounded-[0.5vw] p-[1vw]"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={phase >= 3 ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                    transition={{ delay: 0.5 + (colIdx * 0.2) + (cardIdx * 0.1) }}
                  >
                    <div className="w-[60%] h-[1vh] bg-[var(--color-text-primary)]/20 rounded-full mb-[1vh]" />
                    <div className="w-[40%] h-[1vh] bg-[var(--color-text-secondary)]/20 rounded-full" />
                  </motion.div>
                ))}

                {/* Animated new card */}
                {colIdx === 0 && phase >= 4 && (
                  <motion.div 
                    className="bg-[var(--color-primary)]/20 border border-[var(--color-primary)]/50 rounded-[0.5vw] p-[1vw]"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  >
                    <div className="w-[80%] h-[1vh] bg-[var(--color-primary)]/60 rounded-full mb-[1vh]" />
                    <div className="w-[30%] h-[1vh] bg-[var(--color-primary)]/40 rounded-full" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}