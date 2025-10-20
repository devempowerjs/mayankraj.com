import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Github } from 'lucide-react';
import { Button } from './ui/button';

const projects = [
  {
    emoji: '🛡',
    title: 'DigitalGuard',
    description: 'A platform to raise awareness about digital footprints and online safety.',
    stack: 'React, SEO, Cloudflare',
    github: 'https://github.com/devempowerjs/DigitalGuard'
  },
  {
    emoji: '🔍',
    title: 'SafePost Checker',
    description: 'Chrome extension that prevents posting sensitive or risky content.',
    stack: 'JavaScript, Chrome APIs',
    github: 'https://github.com/devempowerjs/SafePost-Checker-Extension'
  },
  {
    emoji: '🚉',
    title: 'Train Station Indicator',
    description: 'Metro-style simulation of real-time station progression.',
    stack: 'JavaScript, CSS Animations',
    github: 'https://github.com/devempowerjs/train-station-indicator'
  },
  {
    emoji: '🔐',
    title: 'PassX – Password Manager',
    description: 'A minimalist, secure password vault built with Node.js & React.',
    stack: 'Node.js, React, Encryption',
    github: 'https://github.com/devempowerjs/PassX_Password_Manager'
  },
  {
    emoji: '🧠',
    title: 'Jarvis Assistant',
    description: 'A Python-based AI assistant designed to obey voice commands and automate tasks.',
    stack: 'Python, Speech Recognition, AI',
    github: 'https://github.com/devempowerjs/Jarvis-Virtual-Assistant'
  },
  {
    emoji: '🎮',
    title: 'Games Terminal',
    description: 'Classic Python games like Snake, Tic Tac Toe, and Ludo re-engineered with modern logic.',
    stack: 'Python, Game Logic',
    github: '#'
  }
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-32 px-4 overflow-hidden">
      {/* Parallax Background Elements */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 border border-[#8a2be2]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 text-center section-title">
            Digital Missions
          </h2>
          <div className="h-1 w-32 mx-auto mb-16 bg-gradient-to-r from-transparent via-[#f5ff7d] to-transparent glow-line-yellow" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-card p-6"
            >
              <div className="text-5xl mb-4">{project.emoji}</div>
              <h3 className="text-2xl mb-3 project-title">
                {project.title}
              </h3>
              <p className="text-[#e6e6e6] mb-4 leading-relaxed">
                {project.description}
              </p>
              <p className="text-sm text-[#8a2be2] mb-6">
                Stack: {project.stack}
              </p>
              <Button
                variant="outline"
                className="w-full border-[#00fff7] text-[#00fff7] hover:bg-[#00fff7] hover:text-[#0b0f14] transition-all duration-300"
                onClick={() => window.open(project.github, '_blank')}
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .section-title {
          color: #e6e6e6;
          text-shadow: 0 0 20px #f5ff7d;
        }

        .glow-line-yellow {
          box-shadow: 0 0 10px #f5ff7d, 0 0 20px #f5ff7d;
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .project-card {
          background: linear-gradient(135deg, rgba(0, 255, 247, 0.03) 0%, rgba(138, 43, 226, 0.03) 100%);
          border: 2px solid rgba(0, 255, 247, 0.3);
          border-radius: 12px;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
          transition: all 0.4s ease;
        }

        .project-card:hover {
          border-color: rgba(0, 255, 247, 0.8);
          box-shadow: 0 0 40px rgba(0, 255, 247, 0.4), inset 0 0 20px rgba(0, 255, 247, 0.1);
          transform: translateY(-10px) scale(1.02);
        }

        .project-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(0, 255, 247, 0.1) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s;
        }

        .project-card:hover::after {
          opacity: 1;
        }

        .project-title {
          color: #00fff7;
          text-shadow: 0 0 10px rgba(0, 255, 247, 0.5);
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </section>
  );
}
