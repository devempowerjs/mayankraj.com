import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';

const typewriterTexts = [
  "⚡ Hi, I'm Mayank Raj",
  "👨‍💻 Code Alchemist & Web Innovator",
  "👁 Best Developer Of The Year @ E-Cell IIT Bombay 2025 Award",
  "🏆 Community Builder @ Developers Hub 2025"
];

export function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = typewriterTexts[textIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % typewriterTexts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f14] via-[#1a1f2e] to-[#0b0f14]">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(#00fff7 1px, transparent 1px), linear-gradient(90deg, #00fff7 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }} />
        </div>
        
        {/* Particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: ['#00fff7', '#8a2be2', '#ff00ff', '#f5ff7d'][i % 4],
                boxShadow: `0 0 10px ${['#00fff7', '#8a2be2', '#ff00ff', '#f5ff7d'][i % 4]}`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 2, 1],
                y: [0, -100, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Scanning Lines */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`scan-${i}`}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#00fff7] to-transparent"
            style={{ top: `${30 * i}%` }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 1.5,
              ease: 'linear',
            }}
          />
        ))}

        {/* Floating Rings */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`ring-${i}`}
            className="absolute border-2 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 20}%`,
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              borderColor: ['#00fff7', '#8a2be2', '#ff00ff', '#f5ff7d', '#00fff7'][i],
              opacity: 0.1,
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        {/* Typewriter Text */}
        <div className="mb-8 min-h-[80px] md:min-h-[100px] flex items-center justify-center px-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl neon-text text-center leading-tight">
            {displayText}
            <span className="animate-pulse">|</span>
          </h1>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-[#e6e6e6] text-base sm:text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed px-4"
        >
          Greetings, traveler of the digital realm ⚙️ — I'm Mayank Raj (known online as <span className="text-[#00fff7] font-semibold">@devempowerjs</span>), a young innovator and full-stack web developer. 
          I merge logic and art to create futuristic digital experiences that shape tomorrow's web.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={() => scrollToSection('projects')}
            className="cyber-button bg-transparent border-2 border-[#00fff7] text-[#00fff7] hover:bg-[#00fff7] hover:text-[#0b0f14] transition-all duration-300 px-6 py-5 sm:px-8 sm:py-6 text-sm sm:text-base"
          >
            ⚡ Explore My Creations
          </Button>
          <Button
            onClick={() => scrollToSection('contact')}
            className="cyber-button bg-transparent border-2 border-[#ff00ff] text-[#ff00ff] hover:bg-[#ff00ff] hover:text-[#0b0f14] transition-all duration-300 px-6 py-5 sm:px-8 sm:py-6 text-sm sm:text-base"
          >
            📡 Connect With Me
          </Button>
        </motion.div>
      </motion.div>

      <style>{`
        .neon-text {
          color: #00fff7;
          text-shadow: 0 0 10px #00fff7,
                       0 0 20px #00fff7,
                       0 0 30px #00fff7,
                       0 0 40px #8a2be2,
                       0 0 70px #8a2be2,
                       0 0 80px #8a2be2;
        }

        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }

        .cyber-button {
          position: relative;
          overflow: hidden;
        }

        .cyber-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s;
        }

        .cyber-button:hover::before {
          left: 100%;
        }
      `}</style>
    </section>
  );
}
