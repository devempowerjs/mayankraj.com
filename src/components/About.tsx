import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 px-4 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#00fff7 1px, transparent 1px), linear-gradient(90deg, #00fff7 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      {/* Floating Data Streams */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-[#8a2be2] to-transparent"
            style={{
              width: '200px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: ['-200px', '100vw'],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Orbiting Elements */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`orbit-${i}`}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${20 + i * 20}%`,
            top: `${30 + i * 10}%`,
            backgroundColor: ['#00fff7', '#8a2be2', '#ff00ff', '#f5ff7d'][i],
            boxShadow: `0 0 15px ${['#00fff7', '#8a2be2', '#ff00ff', '#f5ff7d'][i]}`,
          }}
          animate={{
            x: [0, 50, 0, -50, 0],
            y: [0, -50, 0, 50, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 text-center section-title px-4">
            Who I Am Beneath the Code
          </h2>
          <div className="h-1 w-32 mx-auto mb-12 bg-gradient-to-r from-transparent via-[#00fff7] to-transparent glow-line" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="holographic-card p-6 sm:p-8 md:p-12"
        >
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Profile Photo */}
            <motion.div
              className="md:col-span-1 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="profile-photo-container">
                <div className="profile-photo-placeholder">
                  <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="90" stroke="#00fff7" strokeWidth="2" opacity="0.5"/>
                    <circle cx="100" cy="100" r="75" stroke="#8a2be2" strokeWidth="2" opacity="0.3"/>
                    <circle cx="100" cy="70" r="30" fill="#00fff7" opacity="0.2"/>
                    <path d="M50 150 Q100 120 150 150" stroke="#00fff7" strokeWidth="2" opacity="0.3"/>
                    <text x="100" y="180" textAnchor="middle" fill="#00fff7" fontSize="14" opacity="0.5">PHOTO LOADING...</text>
                  </svg>
                </div>
                <div className="profile-rings">
                  <div className="ring ring-1"></div>
                  <div className="ring ring-2"></div>
                  <div className="ring ring-3"></div>
                </div>
              </div>
            </motion.div>

            {/* About Text */}
            <div className="md:col-span-2 space-y-6 text-[#e6e6e6] text-base sm:text-lg leading-relaxed">
              <p>
                My journey began in <span className="highlight-text">Grade 3</span>, when curiosity led me from modding games to mastering full-stack development. 
                Over the years, I've crafted tools and systems that blend creativity with logic — transforming imagination into interactivity.
              </p>
              <p>
                Beyond the screen, I capture life through my lens and craft cinematic edits — merging emotion and motion in one frame.
              </p>
              <p>
                My digital world is driven by <span className="highlight-text">innovation</span>, <span className="highlight-text">consistency</span>, 
                and <span className="highlight-text">passion</span> — every project, a reflection of who I am becoming.
              </p>
              <p className="text-[#00fff7] italic">
                — @devempowerjs
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .section-title {
          color: #e6e6e6;
          text-shadow: 0 0 20px #8a2be2;
        }

        .holographic-card {
          background: linear-gradient(135deg, rgba(0, 255, 247, 0.05) 0%, rgba(138, 43, 226, 0.05) 100%);
          border: 2px solid rgba(0, 255, 247, 0.3);
          border-radius: 12px;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
        }

        .holographic-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 255, 247, 0.1), transparent);
          animation: shimmer 3s infinite;
        }

        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        .profile-photo-container {
          position: relative;
          width: 200px;
          height: 200px;
        }

        .profile-photo-placeholder {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(0, 255, 247, 0.1) 0%, rgba(138, 43, 226, 0.1) 100%);
          border: 3px solid rgba(0, 255, 247, 0.5);
          box-shadow: 0 0 30px rgba(0, 255, 247, 0.4), inset 0 0 30px rgba(0, 255, 247, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
          overflow: hidden;
        }

        .profile-rings {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          border: 1px solid;
          opacity: 0.3;
        }

        .ring-1 {
          width: 220px;
          height: 220px;
          border-color: #00fff7;
          animation: ring-pulse 3s ease-in-out infinite;
        }

        .ring-2 {
          width: 250px;
          height: 250px;
          border-color: #8a2be2;
          animation: ring-pulse 3s ease-in-out infinite 0.5s;
        }

        .ring-3 {
          width: 280px;
          height: 280px;
          border-color: #ff00ff;
          animation: ring-pulse 3s ease-in-out infinite 1s;
        }

        @keyframes ring-pulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 0.1;
          }
        }

        .highlight-text {
          color: #00fff7;
          text-shadow: 0 0 10px #00fff7;
        }

        .glow-line {
          box-shadow: 0 0 10px #00fff7, 0 0 20px #00fff7;
          animation: pulse-glow 2s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }

        @media (max-width: 768px) {
          .profile-photo-container {
            width: 160px;
            height: 160px;
          }

          .ring-1 {
            width: 180px;
            height: 180px;
          }

          .ring-2 {
            width: 210px;
            height: 210px;
          }

          .ring-3 {
            width: 240px;
            height: 240px;
          }
        }
      `}</style>
    </section>
  );
}
