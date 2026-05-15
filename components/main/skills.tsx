"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Skill = {
  name: string;
  src: string;
};


const dataScienceSkills: Skill[] = [
  { name: "Python", src: "/skills/python.png" },
  { name: "NumPy", src: "/skills/numpy.png" },
  { name: "Pandas", src: "/skills/pandas.png" },
  { name: "Matplotlib", src: "/skills/matplotlib.png" },
  { name: "Seaborn", src: "/skills/seaborn.png" },
  { name: "Scikit-Learn", src: "/skills/scikit-learn.png" },
  { name: "TensorFlow", src: "/skills/tensorflow.png" },
  { name: "OpenCV", src: "/skills/opencv.png" },
  { name: "Jupyter", src: "/skills/jupyter.png" },
  { name: "Google Colab", src: "/skills/google-colab.png" },
  { name: "Flask", src: "/skills/flask.png" },
  { name: "MySQL", src: "/skills/mysql.png" },
  { name: "Git", src: "/skills/git.png" },
  { name: "GitHub", src: "/skills/github.png" },
];

const devSkills: Skill[] = [
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
  { name: "Figma", src: "/skills/figma.png" },
  { name: "Stripe", src: "/skills/stripe.png" },
];

const SkillGrid = ({
  skillList,
  perRow,
}: {
  skillList: Skill[];
  perRow: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className={`skills-grid skills-grid-${perRow}`}
  >
    {skillList.map((skill, index) => (
      <div
        key={index}
        className="skill-item"
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.transform = "scale(1.1)";
          (e.currentTarget as HTMLDivElement).style.filter =
            "drop-shadow(0 0 8px rgba(255,255,255,0.35))";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
          (e.currentTarget as HTMLDivElement).style.filter = "none";
        }}
      >
        <Image
          src={skill.src}
          alt={`${skill.name} logo`}
          width={72}
          height={72}
          style={{ objectFit: "contain", width: 72, height: 72 }}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
          }}
        />
        <p className="skill-label">{skill.name}</p>
      </div>
    ))}
  </motion.div>
);

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center py-16 px-4 overflow-hidden"
    >
      {/* Scoped styles for Skills section only */}
      <style>{`
        /* ── Base grid: flexbox so last row always centers ── */
        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.75rem 1.5rem;
          width: 100%;
        }

        .skill-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: transform 0.2s ease, filter 0.2s ease;
          cursor: default;
          flex: 0 0 auto;
        }

        .skill-label {
          margin-top: 0.5rem;
          font-size: 0.78rem;
          color: rgba(220, 220, 220, 0.9);
          line-height: 1.3;
          max-width: 90px;
          word-break: break-word;
        }

        /* ── Desktop: DS = 7 per row (7+7 equal rows, centered) ── */
        .skills-grid-7 .skill-item {
          width: calc(100% / 7 - 1.5rem);
          max-width: 130px;
          min-width: 72px;
        }

        /* ── Desktop: Dev = 8 per row (8 top + 5 bottom centered) ── */
        .skills-grid-8 .skill-item {
          width: calc(100% / 8 - 1.5rem);
          max-width: 130px;
          min-width: 72px;
        }

        /* ── Tablet ≤ 900px: 5 per row, centered last row ── */
        @media (max-width: 900px) {
          .skills-grid-7 .skill-item,
          .skills-grid-8 .skill-item {
            width: calc(100% / 5 - 1.25rem);
          }
          .skills-grid {
            gap: 1.5rem 1.25rem;
          }
        }

        /* ── Small tablet ≤ 640px: 4 per row ── */
        @media (max-width: 640px) {
          .skills-grid-7 .skill-item,
          .skills-grid-8 .skill-item {
            width: calc(100% / 4 - 1rem);
          }
          .skills-grid {
            gap: 1.25rem 1rem;
          }
        }

        /* ── Mobile ≤ 480px: 3 per row ── */
        @media (max-width: 480px) {
          .skills-grid-7 .skill-item,
          .skills-grid-8 .skill-item {
            width: calc(100% / 3 - 0.75rem);
          }
          .skills-grid {
            gap: 1rem 0.75rem;
          }
        }
      `}</style>

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
      <div className="relative z-10 text-center w-full max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.7)]">
          Skills
        </h1>

        {/* 📊 Data Science Section — appears FIRST */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold mb-6 text-white/90 drop-shadow-[0_0_4px_rgba(255,255,255,0.5)]">
            📊 Data Science{" "}
            <span className="text-base font-normal text-gray-400">
              (Current Focus)
            </span>
          </h2>
          {/* 14 skills → perRow=7 → two equal rows of 7, centered */}
          <SkillGrid skillList={dataScienceSkills} perRow={7} />
        </div>

        {/* 🌐 Development Background Section — appears BELOW */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-white/90 drop-shadow-[0_0_4px_rgba(255,255,255,0.5)]">
            🌐 Development Background
          </h2>
          {/* 13 skills → perRow=8 → row 1: 8, row 2: 5 centered */}
          <SkillGrid skillList={devSkills} perRow={8} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
