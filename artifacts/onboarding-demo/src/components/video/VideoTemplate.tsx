import { motion, AnimatePresence } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video';
import { Scene1 } from './video_scenes/Scene1';
import { Scene2 } from './video_scenes/Scene2';
import { Scene3 } from './video_scenes/Scene3';
import { Scene4 } from './video_scenes/Scene4';
import { Scene5 } from './video_scenes/Scene5';

const SCENE_DURATIONS = { open: 2500, problem: 4000, signup: 4500, create: 5000, close: 3500 };

export default function VideoTemplate() {
  const { currentScene } = useVideoPlayer({ durations: SCENE_DURATIONS });

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[var(--color-bg-dark)] font-display text-[var(--color-text-primary)]">
      
      {/* Cinematic AI Video Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen">
        <video 
          src={`${import.meta.env.BASE_URL}videos/bg_particles.mp4`} 
          className="w-full h-full object-cover" 
          autoPlay 
          loop 
          muted 
          playsInline 
        />
      </div>

      {/* Cinematic AI Image Background overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay">
        <img 
          src={`${import.meta.env.BASE_URL}images/bg_tech.png`} 
          className="w-full h-full object-cover" 
          alt=""
        />
      </div>

      {/* Persistent Midground Layer: Glows and Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute w-[80vw] h-[80vw] rounded-full blur-[100px] opacity-20"
          style={{ background: 'radial-gradient(circle, var(--color-primary), transparent 70%)' }}
          animate={{
            x: ['-20vw', '40vw', '10vw', '60vw', '50vw'][currentScene],
            y: ['-20vh', '30vh', '60vh', '10vh', '50vh'][currentScene],
            scale: [1, 1.2, 0.8, 1.4, 0.9][currentScene],
          }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.div 
          className="absolute w-[60vw] h-[60vw] rounded-full blur-[120px] opacity-15"
          style={{ background: 'radial-gradient(circle, var(--color-accent), transparent 70%)' }}
          animate={{
            x: ['60vw', '-10vw', '50vw', '10vw', '40vw'][currentScene],
            y: ['60vh', '-10vh', '20vh', '70vh', '40vh'][currentScene],
            scale: [1.2, 0.9, 1.3, 0.8, 1][currentScene],
          }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      {/* Persistent Geometric Shape (TG Logo placeholder structure) */}
      <motion.div
        className="absolute z-10 pointer-events-none"
        animate={{
          left: ['50%', '10%', '85%', '15%', '50%'][currentScene],
          top: ['50%', '15%', '15%', '85%', '40%'][currentScene],
          x: '-50%',
          y: '-50%',
          scale: [2, 0.4, 0.6, 0.5, 2.5][currentScene],
          rotate: [0, -45, 90, -180, 0][currentScene],
          opacity: currentScene === 0 || currentScene === 4 ? 0.8 : 0.15
        }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <img 
          src={`${import.meta.env.BASE_URL}images/tg_logo.png`} 
          className="w-[15vw] h-[15vw] object-contain drop-shadow-[0_0_30px_rgba(124,58,237,0.5)]" 
          alt=""
        />
      </motion.div>

      {/* Persistent structural lines */}
      <motion.div
        className="absolute h-[1px] bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent pointer-events-none"
        animate={{
          top: ['30%', '80%', '20%', '90%', '55%'][currentScene],
          left: '0',
          width: '100%',
          opacity: [0, 0.3, 0.5, 0.2, 0][currentScene]
        }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />

      <AnimatePresence mode="popLayout">
        {currentScene === 0 && <Scene1 key="open" />}
        {currentScene === 1 && <Scene2 key="problem" />}
        {currentScene === 2 && <Scene3 key="signup" />}
        {currentScene === 3 && <Scene4 key="create" />}
        {currentScene === 4 && <Scene5 key="close" />}
      </AnimatePresence>
    </div>
  );
}