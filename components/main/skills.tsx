"use client";
import React from "react";
import { SkillDataProvider } from "@/components/sub/skill-data-provider";

import { motion } from "framer-motion";

type Skill = {
  skill_name: string;
  image: string;
  width: number;
  height: number;
};

const FRONTEND_SKILL: Skill[] = [
  {
    skill_name: "HTML",
    image: "/skills/html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "/skills/css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "/skills/javascript.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "/skills/react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js",
    image: "/skills/nextjs.png",
    width: 80,
    height: 80,
  },
];

const BACKEND_SKILL: Skill[] = [
  {
    skill_name: "Node.js",
    image: "/skills/nodejs.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "/skills/express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "/skills/mongodb.png",
    width: 80,
    height: 80,
  },
];

const FULLSTACK_SKILL: Skill[] = [...FRONTEND_SKILL, ...BACKEND_SKILL];

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center py-16 px-4"
    >
      <h1 className="text-4xl font-bold mb-10">Skills</h1>

      {/* Frontend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-12"
      >
        {FRONTEND_SKILL.map((skill) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
          />
        ))}
      </motion.div>

      {/* Backend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-12"
      >
        {BACKEND_SKILL.map((skill) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
          />
        ))}
      </motion.div>

      {/* Fullstack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
      >
        {FULLSTACK_SKILL.map((skill) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
