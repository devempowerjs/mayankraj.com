import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Achievements', id: 'achievements' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0b0f14]/95 backdrop-blur-lg shadow-lg shadow-[#00fff7]/10' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection('hero')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <motion.div
                className="text-lg md:text-xl lg:text-2xl font-bold cyber-logo"
                animate={{
                  textShadow: [
                    '0 0 20px #00fff7, 0 0 40px #00fff7',
                    '0 0 30px #8a2be2, 0 0 60px #8a2be2',
                    '0 0 20px #ff00ff, 0 0 40px #ff00ff',
                    '0 0 20px #00fff7, 0 0 40px #00fff7',
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                @devempowerjs
              </motion.div>
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00fff7] via-[#8a2be2] to-[#ff00ff]" />
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="nav-link px-3 lg:px-4 py-2 rounded-lg text-sm lg:text-base"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg border-2 border-[#00fff7]/30 text-[#00fff7] hover:border-[#00fff7] hover:bg-[#00fff7]/10 transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              className="md:hidden py-4 border-t border-[#00fff7]/20"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="nav-link-mobile px-4 py-3 rounded-lg text-left"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ x: 10 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        .cyber-logo {
          background: linear-gradient(135deg, #00fff7 0%, #8a2be2 50%, #ff00ff 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          font-family: monospace;
          letter-spacing: 2px;
        }

        .nav-link {
          color: #e6e6e6;
          transition: all 0.3s ease;
          position: relative;
          font-weight: 500;
          background: transparent;
          border: 1px solid transparent;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #00fff7, #8a2be2, #ff00ff);
          transition: width 0.3s ease;
        }

        .nav-link:hover {
          color: #00fff7;
          text-shadow: 0 0 10px #00fff7;
          border-color: rgba(0, 255, 247, 0.2);
          background: rgba(0, 255, 247, 0.05);
        }

        .nav-link:hover::before {
          width: 80%;
        }

        .nav-link-mobile {
          color: #e6e6e6;
          transition: all 0.3s ease;
          background: rgba(0, 255, 247, 0.03);
          border: 1px solid rgba(0, 255, 247, 0.2);
          font-weight: 500;
        }

        .nav-link-mobile:hover {
          color: #00fff7;
          text-shadow: 0 0 10px #00fff7;
          border-color: #00fff7;
          background: rgba(0, 255, 247, 0.1);
        }

        @media (max-width: 768px) {
          .cyber-logo {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </motion.header>
  );
}
