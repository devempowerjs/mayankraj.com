import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const words = [
  'MAYANK',
  'DEVELOPER',
  'CYBERPUNK',
  'REACT',
  'FULL-STACK',
  'INNOVATION',
  'CODE',
  'FUTURE',
  'DIGITAL',
  'TECH'
];

interface FallingWord {
  id: number;
  word: string;
  x: number;
  delay: number;
  duration: number;
  fontSize: number;
  color: string;
}

export function FallingText() {
  const [fallingWords, setFallingWords] = useState<FallingWord[]>([]);

  useEffect(() => {
    const colors = ['#00fff7', '#8a2be2', '#ff00ff', '#f5ff7d'];
    
    // Reduce number of words on mobile for better performance
    const isMobile = window.innerWidth < 768;
    const wordCount = isMobile ? 8 : 15;
    
    const createFallingWord = (id: number) => ({
      id,
      word: words[Math.floor(Math.random() * words.length)],
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
      fontSize: 12 + Math.random() * 8,
      color: colors[Math.floor(Math.random() * colors.length)],
    });

    // Initialize with words based on screen size
    const initialWords = Array.from({ length: wordCount }, (_, i) => createFallingWord(i));
    setFallingWords(initialWords);

    // Add new word every 3 seconds (or 4 seconds on mobile)
    const intervalDuration = isMobile ? 4000 : 3000;
    const maxWords = isMobile ? 7 : 14;
    
    const interval = setInterval(() => {
      setFallingWords(prev => {
        const newId = prev.length > 0 ? Math.max(...prev.map(w => w.id)) + 1 : 0;
        const newWords = [...prev.slice(-maxWords), createFallingWord(newId)];
        return newWords;
      });
    }, intervalDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[5]">
      {fallingWords.map((item) => (
        <motion.div
          key={item.id}
          className="absolute whitespace-nowrap"
          style={{
            left: `${item.x}%`,
            fontSize: `${item.fontSize}px`,
            color: item.color,
            opacity: 0.15,
            textShadow: `0 0 10px ${item.color}`,
            fontFamily: 'monospace',
            fontWeight: 'bold',
          }}
          initial={{ y: -100, opacity: 0 }}
          animate={{ 
            y: '100vh', 
            opacity: [0, 0.15, 0.15, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {item.word}
        </motion.div>
      ))}
    </div>
  );
}
