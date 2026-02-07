'use client';

import { motion } from "framer-motion";

type AchievementItem = {
  text: string;
  certificate?: { label: string; href: string };
};

const ACHIEVEMENTS: AchievementItem[] = [
  { text: "Community Builder Award – Developers Hub (2024)" },
  { text: "Full-Stack Engineering Excellence – 2025" },
  {
    text: "Eureka! Junior Asia-Level Innovation Finalist (AISA) – 2025 by E-Cell IIT Bombay",
    certificate: { label: "View Certificate", href: "/certificates/eureka-junior-2025.pdf" },
  },
  {
    text: "Foundations of Data Science – Analytics Vidhya",
    certificate: {
      label: "View Credential",
      href: "https://courses.analyticsvidhya.com/certificates/um37ejpw7k",
    },
  },
  {
    text: "Yuva AI – AI for All (Future Prime Skills)",
    certificate: { label: "View Certificate", href: "/certificates/yuva-ai-2026.pdf" },
  },
];

export const Achievements = () => (
  <section
    id="achievements"
    className="flex flex-col items-center justify-center py-20 px-4 md:px-24"
  >
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-[36px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4 text-center"
    >
      Achievements
    </motion.h2>
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mb-10 w-24 md:w-44"
    />
    <ul className="flex flex-col gap-7 w-full max-w-2xl">
      {ACHIEVEMENTS.map((item, i) => (
        <motion.li
          key={item.text}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 + 0.4 }}
          className="flex items-center gap-4 text-lg rounded-xl px-5 py-4 bg-[#1a1831] text-gray-200 shadow border border-purple-800/30"
        >
          <span className="inline-block w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 mr-2 flex-shrink-0"></span>
          <span className="flex-1">{item.text}</span>
          {item.certificate && (
            <a
              href={item.certificate.href}
              target="_blank"
              rel="noreferrer noopener"
              className="py-2 px-4 rounded bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium shadow-md hover:scale-105 hover:shadow-lg transition flex-shrink-0"
            >
              {item.certificate.label}
            </a>
          )}
        </motion.li>
      ))}
    </ul>
  </section>
);
