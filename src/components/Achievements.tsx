import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Trophy, Lightbulb, Code, Zap } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'Best Developer Of The Year',
    subtitle: 'E-Cell IIT Bombay Award 2025',
    description: 'Honored with the prestigious Best Developer Of The Year award from E-Cell IIT Bombay.'
  },
  {
    icon: Trophy,
    title: 'Community Builder Award',
    subtitle: 'Developers Hub 2025',
    description: 'Recognized for fostering innovation and collaboration among developers.'
  },
  {
    icon: Lightbulb,
    title: 'Eureka! Junior – Round 2',
    subtitle: 'Nurture Category',
    description: 'Qualified for Round 2 of Eureka! Junior – Nurture Category.'
  },
  {
    icon: Code,
    title: 'Production-Grade Projects',
    subtitle: 'As a School Student',
    description: 'Built multiple production-grade projects as a school student.'
  },
  {
    icon: Zap,
    title: 'Disciplined Athlete',
    subtitle: 'Balance & Fitness',
    description: 'Disciplined athlete and sprinter — balancing tech with fitness.'
  }
];

export function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="relative py-32 px-4 overflow-hidden">
      {/* Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="scanlines" />
      </div>

      {/* Energy Waves */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`wave-${i}`}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#f5ff7d] to-transparent"
            style={{ top: `${15 + i * 15}%` }}
            animate={{
              x: ['-100%', '200%'],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.8,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Glowing Orbs */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${10 + Math.random() * 20}px`,
            height: `${10 + Math.random() * 20}px`,
            backgroundColor: ['#00fff7', '#8a2be2', '#ff00ff', '#f5ff7d'][i % 4],
            opacity: 0.1,
            filter: `blur(${5 + Math.random() * 10}px)`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="relative z-10 max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 text-center section-title px-4">
            Logs & Milestones
          </h2>
          <div className="h-1 w-32 mx-auto mb-16 bg-gradient-to-r from-transparent via-[#8a2be2] to-transparent glow-line-purple" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00fff7] via-[#8a2be2] to-[#ff00ff] timeline-glow" />

          <div className="space-y-12">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:gap-8`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-[#00fff7] timeline-node" />

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="achievement-card p-6">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#00fff7] to-[#8a2be2] mb-4`}>
                        <Icon className="w-6 h-6 text-[#0b0f14]" />
                      </div>
                      <h3 className="text-2xl mb-2 achievement-title">
                        {achievement.title}
                      </h3>
                      <p className="text-[#ff00ff] mb-3">
                        {achievement.subtitle}
                      </p>
                      <p className="text-[#e6e6e6] leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .section-title {
          color: #e6e6e6;
          text-shadow: 0 0 20px #8a2be2;
        }

        .glow-line-purple {
          box-shadow: 0 0 10px #8a2be2, 0 0 20px #8a2be2;
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .scanlines {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: repeating-linear-gradient(
            0deg,
            rgba(0, 255, 247, 0.03) 0px,
            transparent 1px,
            transparent 2px,
            rgba(0, 255, 247, 0.03) 3px
          );
          pointer-events: none;
          animation: scanline-move 10s linear infinite;
        }

        @keyframes scanline-move {
          0% { transform: translateY(0); }
          100% { transform: translateY(10px); }
        }

        .timeline-glow {
          box-shadow: 0 0 20px rgba(0, 255, 247, 0.5);
        }

        .timeline-node {
          box-shadow: 0 0 20px #00fff7, 0 0 40px #00fff7;
          animation: pulse-node 2s ease-in-out infinite;
        }

        @keyframes pulse-node {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.3); }
        }

        .achievement-card {
          background: linear-gradient(135deg, rgba(138, 43, 226, 0.05) 0%, rgba(255, 0, 255, 0.05) 100%);
          border: 2px solid rgba(138, 43, 226, 0.3);
          border-radius: 12px;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .achievement-card:hover {
          border-color: rgba(138, 43, 226, 0.8);
          box-shadow: 0 0 30px rgba(138, 43, 226, 0.4);
          transform: scale(1.05);
        }

        .achievement-card::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(from 0deg, transparent, rgba(138, 43, 226, 0.2), transparent 60deg);
          animation: glitch-rotate 4s linear infinite;
          opacity: 0;
        }

        .achievement-card:hover::before {
          opacity: 1;
        }

        @keyframes glitch-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .achievement-title {
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
