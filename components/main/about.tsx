'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { RxEnvelopeClosed } from "react-icons/rx";

export const About = () => {
  return (
    <section
      id="about-me"
      className="flex flex-col md:flex-row items-center justify-center py-20 gap-10 px-4 md:px-24"
    >
      {/* Profile Picture */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-shrink-0"
      >
        <div className="rounded-full overflow-hidden shadow-xl border-4 border-purple-600/40 p-1 bg-[#16142a]">
          <Image
            src="/mayank-profile.png"
            alt="Mayank Raj profile photo"
            width={320}
            height={320}
            className="rounded-full object-contain w-[240px] h-[240px] md:w-[320px] md:h-[320px] bg-[#16142a]"
            priority
          />
        </div>
      </motion.div>
      {/* Textual About */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl text-gray-200 text-center md:text-left w-full"
      >
        <h2 className="text-[36px] font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">About Me</h2>
        <p className="text-lg md:text-xl mb-4">
          My journey began in Grade 3, when curiosity led me from modding games to mastering full-stack development.<br/><br/>
          Over the years, I've crafted tools and systems that blend creativity with logic — transforming imagination into interactivity.<br/><br/>
          Beyond the screen, I capture life through my lens and craft cinematic edits — merging emotion and motion in one frame.<br/><br/>
          My digital world is driven by innovation, consistency, and passion — every project, a reflection of who I am becoming.<br/>
        </p>
        <p className="italic font-medium text-[16px] text-purple-300 mb-6">— @devempowerjs</p>
        <div className="flex items-center justify-center md:justify-start gap-2 mt-3 text-base md:text-lg text-purple-300 font-medium">
          <RxEnvelopeClosed className="w-6 h-6 md:w-7 md:h-7 text-cyan-400" />
          <span className="break-all">mayankrajpis2013@gmail.com</span>
        </div>
      </motion.div>
    </section>
  );
};
