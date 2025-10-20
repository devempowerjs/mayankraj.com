import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FallingText } from './components/FallingText';
import { SEOHead } from './components/SEOHead';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0f14] text-white overflow-x-hidden">
      {/* SEO and Favicon */}
      <SEOHead />
      
      {/* Header Navigation */}
      <Header />
      
      {/* Falling Text Animation */}
      <FallingText />

      {/* Background Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00fff7] opacity-5 blur-[120px] rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#8a2be2] opacity-5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-[#ff00ff] opacity-5 blur-[120px] rounded-full" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
      </div>

      {/* Cursor Glow Effect */}
      <style>{`
        * {
          cursor: default;
        }

        a, button {
          cursor: pointer;
        }

        ::selection {
          background: rgba(0, 255, 247, 0.3);
          color: #fff;
        }

        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #0b0f14;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #00fff7 0%, #8a2be2 50%, #ff00ff 100%);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #00fff7 0%, #ff00ff 100%);
        }

        body {
          overflow-x: hidden;
        }

        @media (prefers-reduced-motion: no-preference) {
          html {
            scroll-behavior: smooth;
          }
        }
      `}</style>
    </div>
  );
}
