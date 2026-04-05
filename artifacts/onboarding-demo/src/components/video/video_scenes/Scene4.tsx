import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Scene4() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 400),  // Sidebar expands
      setTimeout(() => setPhase(2), 1000), // Main content layout
      setTimeout(() => setPhase(3), 1600), // Cards pop in
      setTimeout(() => setPhase(4), 2400), // Progress bar fills
      setTimeout(() => setPhase(5), 3200), // New task created
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 z-20 flex items-center justify-center p-[4vw]"
      initial={{ clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)' }}
      animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
      exit={{ scale: 1.1, opacity: 0, filter: 'blur(20px)' }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="w-full h-full glass-panel rounded-[1vw] border border-white/10 flex overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)]">
        
        {/* Sidebar */}
        <motion.div 
          className="w-[18vw] border-r border-white/10 bg-black/40 flex flex-col p-[2vw]"
          initial={{ x: '-100%' }}
          animate={phase >= 1 ? { x: '0%' } : { x: '-100%' }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        >
          <div className="flex items-center gap-[1vw] mb-[4vh]">
            <div className="w-[2vw] h-[2vw] rounded bg-[var(--color-primary)] flex items-center justify-center">
              <div className="w-[1vw] h-[1vw] bg-white rounded-sm" />
            </div>
            <div className="text-[1.2vw] font-bold text-white tracking-widest uppercase font-display">TGHABIB</div>
          </div>

          <div className="space-y-[1.5vh]">
            {['Overview', 'Projects', 'Analytics', 'Settings'].map((item, i) => (
              <motion.div 
                key={item}
                className="h-[4vh] rounded-[0.5vw] flex items-center px-[1vw] gap-[1vw]"
                style={{ backgroundColor: i === 1 ? 'rgba(124, 58, 237, 0.2)' : 'transparent' }}
                initial={{ opacity: 0, x: -20 }}
                animate={phase >= 1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.2 + (i * 0.1) }}
              >
                <div className={`w-[1vw] h-[1vw] rounded-sm ${i === 1 ? 'bg-[var(--color-primary)]' : 'bg-white/20'}`} />
                <span className={`text-[1vw] ${i === 1 ? 'text-[var(--color-primary)] font-bold' : 'text-[var(--color-text-secondary)] font-mono'}`}>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col p-[3vw]">
          {/* Header */}
          <motion.div 
            className="flex justify-between items-end mb-[4vh]"
            initial={{ opacity: 0, y: -20 }}
            animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="text-[3vw] font-display font-black text-white leading-none mb-[1vh]">Project Alpha</h2>
              <p className="text-[1vw] font-mono text-[var(--color-text-secondary)]">Vibecoding in progress.</p>
            </div>
            
            {/* Progress indicator */}
            <div className="w-[20vw] flex flex-col gap-[1vh]">
              <div className="flex justify-between text-[0.8vw] font-mono text-[var(--color-text-secondary)] uppercase">
                <span>System Status</span>
                <motion.span 
                  animate={phase >= 4 ? { color: 'var(--color-success)' } : { color: 'var(--color-text-secondary)' }}
                >
                  {phase >= 4 ? '78% Optimal' : '0%'}
                </motion.span>
              </div>
              <div className="h-[0.5vh] bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]"
                  initial={{ width: 0 }}
                  animate={phase >= 4 ? { width: '78%' } : { width: 0 }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>
          </motion.div>

          {/* Cards Grid */}
          <div className="flex gap-[2vw] h-full">
            {['Pipeline', 'Processing', 'Deployed'].map((col, colIdx) => (
              <motion.div 
                key={col}
                className="flex-1 bg-black/20 rounded-[1vw] border border-white/5 p-[1.5vw] flex flex-col gap-[1.5vh] relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: 0.3 + (colIdx * 0.1) }}
              >
                <div className="text-[0.9vw] font-mono text-[var(--color-text-secondary)] uppercase tracking-widest">{col}</div>
                
                {/* Existing Cards */}
                {[1, 2].map((card, cardIdx) => (
                  <motion.div 
                    key={card}
                    className="bg-white/5 border border-white/10 rounded-[0.5vw] p-[1.5vw]"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={phase >= 3 ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25, delay: 0.6 + (colIdx * 0.15) + (cardIdx * 0.1) }}
                  >
                    <div className="w-[70%] h-[1vh] bg-white/40 rounded-full mb-[2vh]" />
                    <div className="flex gap-[1vw]">
                      <div className="w-[30%] h-[0.5vh] bg-[var(--color-primary)]/50 rounded-full" />
                      <div className="w-[20%] h-[0.5vh] bg-[var(--color-accent)]/50 rounded-full" />
                    </div>
                  </motion.div>
                ))}

                {/* New Task Appears in first col */}
                {colIdx === 0 && phase >= 5 && (
                  <motion.div 
                    className="bg-[var(--color-primary)]/20 border border-[var(--color-primary)]/50 rounded-[0.5vw] p-[1.5vw] relative overflow-hidden"
                    initial={{ height: 0, opacity: 0, scale: 0.9 }}
                    animate={{ height: 'auto', opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: '-100%' }}
                      animate={{ x: '200%' }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <div className="w-[90%] h-[1vh] bg-white/80 rounded-full mb-[2vh] relative z-10" />
                    <div className="w-[40%] h-[0.5vh] bg-[var(--color-primary)] rounded-full relative z-10" />
                  </motion.div>
                )}
                
                {/* Background column number watermark */}
                <div className="absolute right-[-2vw] bottom-[-2vw] text-[10vw] font-display font-black text-white/5 pointer-events-none select-none">
                  0{colIdx + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
}
