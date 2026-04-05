import { motion } from 'framer-motion';

export function Scene5() {
  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center"
      initial={{ opacity: 0, scale: 1.2 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, filter: 'blur(20px)' }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="text-center z-10 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.2 }}
          className="w-[12vw] h-[12vw] mb-[4vh] rounded-full bg-[var(--color-primary)] flex items-center justify-center shadow-[0_0_8vw_rgba(168,85,247,0.6)]"
        >
           <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[6vw] h-[6vw]">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </motion.div>

        <motion.h1 
          className="text-[8vw] font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 leading-none"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          You're Ready.
        </motion.h1>

        <motion.p
          className="text-[2.5vw] text-[var(--color-text-secondary)] mt-[3vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Get to work.
        </motion.p>
      </div>

      {/* Confetti or particles effect in background */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[1vw] h-[1vw] rounded-full bg-[var(--color-primary)]/50"
          initial={{ 
            x: 0, 
            y: 0,
            scale: 0
          }}
          animate={{ 
            x: (Math.random() - 0.5) * 100 + 'vw', 
            y: (Math.random() - 0.5) * 100 + 'vh',
            scale: Math.random() * 2,
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 2 + Math.random() * 2, 
            ease: "easeOut",
            delay: 0.2
          }}
        />
      ))}
    </motion.div>
  );
}