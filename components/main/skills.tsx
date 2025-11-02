"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Skill = {
  name: string;
  src: string;
};

const skills: Skill[] = [
  { name: "HTML", src: "/skills/html.png" },
  { name: "CSS", src: "/skills/css.png" },
  { name: "JavaScript", src: "/skills/js.png" },
  { name: "TypeScript", src: "/skills/ts.png" },
  { name: "React", src: "/skills/react.png" },
  { name: "Next.js", src: "/skills/next.png" },
  { name: "Tailwind CSS", src: "/skills/tailwind.png" },
  { name: "Node.js", src: "/skills/node.png" },
  { name: "Express.js", src: "/skills/express.png" },
  { name: "MongoDB", src: "/skills/mongodb.png" },
  { name: "PostgreSQL", src: "/skills/postgresql.png" },
  { name: "MySQL", src: "/skills/mysql.png" },
  { name: "Prisma", src: "/skills/prisma.png" },
  { name: "GraphQL", src: "/skills/graphql.png" },
  { name: "Firebase", src: "/skills/firebase.png" },
  { name: "Docker", src: "/skills/docker.png" },
  { name: "MUI", src: "/skills/mui.png" },
  { name: "Framer Motion", src: "/skills/framer.png" },
  { name: "Figma", src: "/skills/figma.png" },
  { name: "Redux", src: "/skills/redux.png" },
  { name: "React Native", src: "/skills/reactnative.png" },
  { name: "Stripe", src: "/skills/stripe.png" },
  { name: "Tauri", src: "/skills/tauri.png" },
  { name: "Go", src: "/skills/go.png" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center py-16 px-4 overflow-hidden"
    >
      {/* 🌌 Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
        src="/videos/skills-bg.webm"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay for better text visibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Content Layer */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold mb-10 text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.7)]">
          Skills
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center hover:scale-105 transition-transform"
            >
              <Image
                src={skill.src}
                alt={`${skill.name} logo`}
                width={80}
                height={80}
                className="object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
              <p className="mt-2 text-sm text-gray-200">{skill.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
