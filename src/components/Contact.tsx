import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Linkedin, Github, Mail, FileText } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission - in production, integrate with a backend service
    console.log('Form submitted:', formData);
    alert('Message transmitted! 📡');
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    { icon: Linkedin, url: 'https://linkedin.com/in/devempowerjs', label: 'LinkedIn' },
    { icon: Github, url: 'https://github.com/devempowerjs', label: 'GitHub' },
    { icon: FileText, url: 'https://medium.com/@devempowerjs', label: 'Medium' }
  ];

  return (
    <section id="contact" className="relative py-32 px-4 overflow-hidden">
      {/* Matrix-style Background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#00fff7] text-xs font-mono"
            style={{
              left: `${i * 5}%`,
              top: -20
            }}
            animate={{
              y: ['0vh', '100vh']
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          >
            {Math.random().toString(36).substring(7)}
          </motion.div>
        ))}
      </div>

      {/* Electric Arcs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`arc-${i}`}
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-[#ff00ff] to-transparent"
            style={{
              width: '300px',
              left: `${Math.random() * 80}%`,
              top: `${Math.random() * 100}%`,
              transformOrigin: 'left center',
            }}
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.8, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Rotating Grid */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`grid-${i}`}
          className="absolute border-2 rounded-lg"
          style={{
            left: `${20 + i * 25}%`,
            top: `${10 + i * 20}%`,
            width: `${80 + i * 40}px`,
            height: `${80 + i * 40}px`,
            borderColor: ['#00fff7', '#8a2be2', '#ff00ff'][i],
            opacity: 0.15,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            ease: 'linear',
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
            Communication Node
          </h2>
          <div className="h-1 w-32 mx-auto mb-8 bg-gradient-to-r from-transparent via-[#00fff7] to-transparent glow-line" />
          <p className="text-center text-[#e6e6e6] text-base sm:text-lg mb-12 px-4">
            Open a direct communication link to my neural network ⚙️.<br />
            Leave a message — and let the frequencies align.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="terminal-card p-4 sm:p-6 md:p-8 mb-12"
        >
          <div className="terminal-header mb-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-[#ff00ff]" />
              <div className="w-3 h-3 rounded-full bg-[#f5ff7d]" />
              <div className="w-3 h-3 rounded-full bg-[#00fff7]" />
            </div>
            <div className="text-[#00fff7] font-mono text-sm">
              {'>'} INITIALIZING_COMMUNICATION_PROTOCOL...
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label className="block text-[#00fff7] mb-2 font-mono">{'>'} NAME:</label>
              <Input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="terminal-input"
                placeholder="Enter your designation..."
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <label className="block text-[#00fff7] mb-2 font-mono">{'>'} EMAIL:</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="terminal-input"
                placeholder="Enter your contact frequency..."
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <label className="block text-[#00fff7] mb-2 font-mono">{'>'} MESSAGE:</label>
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="terminal-input min-h-[150px]"
                placeholder="Transmit your message..."
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button
                type="submit"
                className="w-full bg-transparent border-2 border-[#00fff7] text-[#00fff7] hover:bg-[#00fff7] hover:text-[#0b0f14] transition-all duration-300 py-6"
              >
                ⚡ Transmit Message
              </Button>
            </motion.div>
          </form>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center"
        >
          <p className="text-[#e6e6e6] mb-6">Or connect through these channels:</p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Icon className="w-6 h-6" />
                  <span className="ml-2">{link.label}</span>
                </a>
              );
            })}
          </div>

          <div className="flex items-center justify-center gap-2 text-[#e6e6e6]">
            <Mail className="w-5 h-5 text-[#ff00ff]" />
            <a href="mailto:mayankrajpis2013@gmail.com" className="hover:text-[#00fff7] transition-colors">
              mayankrajpis2013@gmail.com
            </a>
          </div>

          <p className="mt-6 text-sm text-[#8a2be2] italic">
            "Read fractions of my consciousness."
          </p>
        </motion.div>
      </div>

      <style>{`
        .section-title {
          color: #e6e6e6;
          text-shadow: 0 0 20px #00fff7;
        }

        .glow-line {
          box-shadow: 0 0 10px #00fff7, 0 0 20px #00fff7;
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .terminal-card {
          background: rgba(11, 15, 20, 0.9);
          border: 2px solid #00fff7;
          border-radius: 8px;
          box-shadow: 0 0 30px rgba(0, 255, 247, 0.3), inset 0 0 20px rgba(0, 255, 247, 0.05);
          position: relative;
        }

        .terminal-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            rgba(0, 255, 247, 0.03) 0px,
            transparent 1px,
            transparent 2px
          );
          pointer-events: none;
        }

        .terminal-input {
          background: rgba(0, 255, 247, 0.05) !important;
          border: 1px solid rgba(0, 255, 247, 0.3) !important;
          color: #e6e6e6 !important;
          font-family: monospace;
          transition: all 0.3s ease;
        }

        .terminal-input:focus {
          border-color: #00fff7 !important;
          box-shadow: 0 0 20px rgba(0, 255, 247, 0.3) !important;
          outline: none !important;
        }

        .social-link {
          display: inline-flex;
          align-items: center;
          padding: 12px 24px;
          background: linear-gradient(135deg, rgba(0, 255, 247, 0.1) 0%, rgba(138, 43, 226, 0.1) 100%);
          border: 1px solid rgba(0, 255, 247, 0.3);
          border-radius: 8px;
          color: #00fff7;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          border-color: #00fff7;
          box-shadow: 0 0 20px rgba(0, 255, 247, 0.4);
          transform: translateY(-3px);
          background: linear-gradient(135deg, rgba(0, 255, 247, 0.2) 0%, rgba(138, 43, 226, 0.2) 100%);
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </section>
  );
}
