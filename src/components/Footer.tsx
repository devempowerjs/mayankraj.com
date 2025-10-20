import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="relative py-8 px-4 overflow-hidden">
      {/* Animated Divider */}
      <motion.div
        className="h-px w-full bg-gradient-to-r from-transparent via-[#00fff7] to-transparent mb-6"
        animate={{
          opacity: [0.5, 1, 0.5],
          boxShadow: [
            '0 0 10px #00fff7',
            '0 0 30px #00fff7, 0 0 60px #8a2be2',
            '0 0 10px #00fff7',
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Main Footer Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.p
            className="text-base md:text-lg mb-4 footer-main-text"
            animate={{
              textShadow: [
                '0 0 10px #00fff7, 0 0 20px #00fff7',
                '0 0 20px #8a2be2, 0 0 40px #8a2be2',
                '0 0 10px #ff00ff, 0 0 20px #ff00ff',
                '0 0 20px #f5ff7d, 0 0 40px #f5ff7d',
                '0 0 10px #00fff7, 0 0 20px #00fff7',
              ],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            ⚡ © 2025 Mayank Raj (@devempowerjs) — Engineered in the Cyber Realm
          </motion.p>

          <motion.p
            className="text-sm md:text-base mb-4 text-[#e6e6e6]"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            Built with{' '}
            <motion.span
              className="tech-badge"
              animate={{ color: ['#00fff7', '#8a2be2', '#00fff7'] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              React
            </motion.span>
            ,{' '}
            <motion.span
              className="tech-badge"
              animate={{ color: ['#8a2be2', '#ff00ff', '#8a2be2'] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              TypeScript
            </motion.span>
            {' '}and{' '}
            <motion.span
              className="tech-badge"
              animate={{ color: ['#ff00ff', '#f5ff7d', '#ff00ff'] }}
              transition={{ duration: 3, repeat: Infinity, delay: 2 }}
            >
              Tailwind CSS
            </motion.span>
          </motion.p>

          <motion.p
            className="text-lg md:text-xl italic motto-text"
            animate={{
              textShadow: [
                '0 0 15px #00fff7, 0 0 30px #8a2be2, 0 0 45px #ff00ff',
                '0 0 30px #8a2be2, 0 0 45px #ff00ff, 0 0 60px #f5ff7d',
                '0 0 15px #ff00ff, 0 0 30px #f5ff7d, 0 0 45px #00fff7',
                '0 0 30px #f5ff7d, 0 0 45px #00fff7, 0 0 60px #8a2be2',
                '0 0 15px #00fff7, 0 0 30px #8a2be2, 0 0 45px #ff00ff',
              ],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            'Dream. Design. Deploy. Dominate the digital future.'
          </motion.p>
        </motion.div>
      </div>

      <style>{`
        .footer-main-text {
          color: #fff;
          font-weight: 600;
        }

        .motto-text {
          background: linear-gradient(
            90deg,
            #00fff7 0%,
            #8a2be2 25%,
            #ff00ff 50%,
            #f5ff7d 75%,
            #00fff7 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift 4s linear infinite;
        }

        @keyframes gradient-shift {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }

        .tech-badge {
          font-weight: 700;
          text-shadow: 0 0 10px currentColor;
        }

        @media (max-width: 640px) {
          .motto-text {
            font-size: 1rem;
          }
        }
      `}</style>
    </footer>
  );
}
