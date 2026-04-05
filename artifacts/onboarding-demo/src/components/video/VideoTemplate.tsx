import { motion, AnimatePresence } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video';
import { Scene1 } from './video_scenes/Scene1';
import { Scene2 } from './video_scenes/Scene2';
import { Scene3 } from './video_scenes/Scene3';
import { Scene4 } from './video_scenes/Scene4';
import { Scene5 } from './video_scenes/Scene5';

const SCENE_DURATIONS = { hook: 3000, signup: 4000, templates: 4000, build: 4500, outro: 4000 };

export default function VideoTemplate() {
  const { currentScene } = useVideoPlayer({ durations: SCENE_DURATIONS });

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[var(--color-bg-dark)]">
      {/* Persistent Background Layer */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft animated gradient orbs */}
        <motion.div 
          className="absolute w-[50vw] h-[50vw] rounded-full blur-[100px] opacity-20"
          style={{ background: 'radial-gradient(circle, var(--color-primary), transparent)' }}
          animate={{ 
            x: ['-20%', '40%', '-10%'], 
            y: ['-10%', '30%', '-20%'],
            scale: [1, 1.2, 0.9]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
          className="absolute w-[60vw] h-[60vw] rounded-full blur-[120px] opacity-15 right-0 bottom-0"
          style={{ background: 'radial-gradient(circle, var(--color-secondary), transparent)' }}
          animate={{ 
            x: ['10%', '-30%', '20%'], 
            y: ['10%', '-20%', '10%'],
            scale: [0.8, 1.1, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Persistent Midground Grid/Lines */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <motion.div 
          className="w-full h-full border-t border-b border-[var(--color-text-muted)]"
          style={{ 
            backgroundSize: '4vw 4vh',
            backgroundImage: 'linear-gradient(to right, var(--color-text-muted) 1px, transparent 1px), linear-gradient(to bottom, var(--color-text-muted) 1px, transparent 1px)'
          }}
          animate={{
            scale: currentScene === 4 ? 1.1 : 1,
            opacity: currentScene === 4 ? 0 : 0.1,
            rotateX: [0, 10, 20, 30, 0][currentScene]
          }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      {/* Foreground Scenes */}
      <AnimatePresence mode="popLayout">
        {currentScene === 0 && <Scene1 key="hook" />}
        {currentScene === 1 && <Scene2 key="signup" />}
        {currentScene === 2 && <Scene3 key="templates" />}
        {currentScene === 3 && <Scene4 key="build" />}
        {currentScene === 4 && <Scene5 key="outro" />}
      </AnimatePresence>
    </div>
  );
}