'use client';

import { motion } from "framer-motion";

const ACHIEVEMENTS = [
  
  "Community Builder Award – Developers Hub (2024)",
  "Eureka! Junior Asia-Level Innovation Finalist (AISA) – 2025 by E-Cell IIT Bombay",
  "Full-Stack Engineering Excellence – 2025",
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
          key={item}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 + 0.4 }}
          className="flex items-center gap-4 text-lg rounded-xl px-5 py-4 bg-[#1a1831] text-gray-200 shadow border border-purple-800/30"
        >
          <span className="inline-block w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 mr-2 flex-shrink-0"></span>
          {item}
        </motion.li>
      ))}
    </ul>
  </section>
);
