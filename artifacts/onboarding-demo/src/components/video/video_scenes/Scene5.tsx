import { motion } from 'framer-motion';

export function Scene5() {
  return (
    <motion.div 
      className="absolute inset-0 z-30 flex items-center justify-center bg-[var(--color-bg-dark)]"
      initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
      animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50, filter: 'blur(20px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-[6vw] font-display font-black text-white uppercase tracking-tighter leading-none mb-[2vh]">
            Built by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]">Habib.</span>
          </h1>
          <p className="text-[1.5vw] font-mono text-[var(--color-text-secondary)] tracking-[0.3em]">
            TGHABIB.COM
          </p>
        </motion.div>

        {/* Closing decorative line */}
        <motion.div 
          className="absolute left-1/2 -bottom-[6vh] -translate-x-1/2 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '20vw', opacity: 1 }}
          transition={{ duration: 1.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      {/* Subtle vignette/noise overlay just for the ending */}
      <div className="absolute inset-0 pointer-events-none noise-overlay opacity-10" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_20%,#090909_100%)]" />
    </motion.div>
  );
}
