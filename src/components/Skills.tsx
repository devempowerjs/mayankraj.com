import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const skillsData = [
  {
    category: '⚙️ Frontend Systems',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vite']
  },
  {
    category: '💾 Backend & Tools',
    skills: ['Node.js', 'Git', 'Cloudflare', 'Vercel']
  },
  {
    category: '🧠 Special Ops',
    skills: ['SEO', 'Indexing', 'Optimization']
  },
  {
    category: '🎨 Creative',
    skills: ['Photography', 'Cinematic Editing', 'UI Motion']
  }
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-32 px-4 overflow-hidden">
      {/* Animated Background Lines */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-[#8a2be2] to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              width: '100%'
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Floating Hexagons */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`hex-${i}`}
            className="absolute"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
              width: '30px',
              height: '30px',
              border: '2px solid',
              borderColor: ['#00fff7', '#8a2be2', '#ff00ff'][i % 3],
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              opacity: 0.2,
            }}
            animate={{
              y: [0, -50, 0],
              rotate: [0, 120, 240, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Pulsing Nodes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute w-3 h-3 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundColor: ['#00fff7', '#8a2be2', '#ff00ff', '#f5ff7d'][i % 4],
          }}
          animate={{
            boxShadow: [
              `0 0 10px ${['#00fff7', '#8a2be2', '#ff00ff', '#f5ff7d'][i % 4]}`,
              `0 0 30px ${['#00fff7', '#8a2be2', '#ff00ff', '#f5ff7d'][i % 4]}`,
              `0 0 10px ${['#00fff7', '#8a2be2', '#ff00ff', '#f5ff7d'][i % 4]}`,
            ],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.4,
          }}
        />
      ))}

      <div className="relative z-10 max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 text-center section-title px-4">
            My Cyber Arsenal
          </h2>
          <div className="h-1 w-32 mx-auto mb-16 bg-gradient-to-r from-transparent via-[#ff00ff] to-transparent glow-line-magenta" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="skill-card p-6"
            >
              <h3 className="text-2xl mb-4 skill-category">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .section-title {
          color: #e6e6e6;
          text-shadow: 0 0 20px #ff00ff;
        }

        .glow-line-magenta {
          box-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff;
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .skill-card {
          background: linear-gradient(135deg, rgba(255, 0, 255, 0.05) 0%, rgba(0, 255, 247, 0.05) 100%);
          border: 2px solid rgba(138, 43, 226, 0.3);
          border-radius: 12px;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .skill-card:hover {
          border-color: rgba(138, 43, 226, 0.8);
          box-shadow: 0 0 30px rgba(138, 43, 226, 0.4);
          transform: translateY(-5px);
        }

        .skill-card::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(138, 43, 226, 0.1) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .skill-card:hover::before {
          opacity: 1;
          animation: ripple 1.5s ease-out infinite;
        }

        @keyframes ripple {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(1.2); opacity: 0; }
        }

        .skill-category {
          color: #00fff7;
          text-shadow: 0 0 10px #00fff7;
        }

        .skill-badge {
          padding: 8px 16px;
          background: rgba(0, 255, 247, 0.1);
          border: 1px solid rgba(0, 255, 247, 0.3);
          border-radius: 20px;
          color: #e6e6e6;
          transition: all 0.3s ease;
        }

        .skill-badge:hover {
          background: rgba(0, 255, 247, 0.2);
          border-color: #00fff7;
          box-shadow: 0 0 15px rgba(0, 255, 247, 0.5);
          transform: translateY(-2px);
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </section>
  );
}
