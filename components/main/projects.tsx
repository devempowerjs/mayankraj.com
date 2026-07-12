'use client';

import { useState, useRef, useEffect } from "react";
import { ProjectCard } from "@/components/sub/project-card";
import {
  SIGNATURE_PROJECT,
  DEFAULT_PROJECTS,
  HIDDEN_PROJECTS,
} from "@/constants";

export const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const [hiddenLoaded, setHiddenLoaded] = useState(false);
  const [animateHidden, setAnimateHidden] = useState(false);

  const hiddenRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  
  const handleToggle = () => {
    if (!showMore) {
      setHiddenLoaded(true); 
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimateHidden(true));
      });
      setShowMore(true);
    } else {
      setAnimateHidden(false);
      
      setTimeout(() => {
        setShowMore(false);
        
        btnRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 420);
    }
  };

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 px-4"
    >
      {/* ─── Section heading ─── */}
      <h1 className="text-[32px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-12 md:py-20 text-center">
        My Projects
      </h1>

      {/* ════════════════════════════════════════
          SIGNATURE PROJECT – Digital Guard
      ════════════════════════════════════════ */}
      <div className="w-full max-w-5xl mb-14 flex justify-center">
        <ProjectCard
          image={SIGNATURE_PROJECT.image}
          title={SIGNATURE_PROJECT.title}
          description={SIGNATURE_PROJECT.description}
          github={SIGNATURE_PROJECT.github}
          liveDemo={SIGNATURE_PROJECT.liveDemo}
          isSignature
          shouldLoad
        />
      </div>

      {/* ════════════════════════════════════════
          DEFAULT VISIBLE PROJECTS (3 DS cards)
      ════════════════════════════════════════ */}
      <div className="w-full max-w-5xl">
        {/* Sub-heading */}
        <h2 className="text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-8 text-center tracking-wide uppercase">
          Learning Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center w-full">
          {DEFAULT_PROJECTS.map((project) => (
            <ProjectCard
              key={project.title}
              image={project.image}
              title={project.title}
              description={project.description}
              github={project.github}
              liveDemo={project.liveDemo}
              shouldLoad
            />
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════
          HIDDEN PROJECTS – "View More" Section
      ════════════════════════════════════════ */}
      <div
        ref={hiddenRef}
        className="w-full max-w-5xl overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          maxHeight: showMore ? "9999px" : "0px",
          opacity: animateHidden ? 1 : 0,
          transform: animateHidden ? "translateY(0)" : "translateY(24px)",
          transition:
            "max-height 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease, transform 0.4s ease",
          pointerEvents: showMore ? "auto" : "none",
        }}
        aria-hidden={!showMore}
      >
        <div className="pt-10">
          <h2 className="text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-8 text-center tracking-wide uppercase">
            More Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center w-full">
            {HIDDEN_PROJECTS.map((project) => (
              <ProjectCard
                key={project.title}
                image={project.image}
                title={project.title}
                description={project.description}
                github={project.github}
                liveDemo={project.liveDemo}
                shouldLoad={hiddenLoaded}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ────────────────────────────────────────
          View More / View Less Button
      ──────────────────────────────────────── */}
      <div className="mt-14 flex justify-center">
        <button
          ref={btnRef}
          onClick={handleToggle}
          aria-expanded={showMore}
          className="
            group relative overflow-hidden
            py-3 px-10 rounded-full
            border border-purple-500/50
            bg-gradient-to-r from-purple-600/20 to-cyan-600/20
            text-white font-semibold text-sm tracking-wide
            shadow-lg shadow-purple-500/10
            hover:shadow-purple-500/30 hover:border-purple-400
            hover:from-purple-600/40 hover:to-cyan-600/40
            transition-all duration-300
            focus:outline-none focus:ring-2 focus:ring-purple-500/50
          "
        >
          {/* shimmer on hover */}
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
          <span className="relative flex items-center gap-2">
            <span>{showMore ? "View Less" : "View More"}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform duration-300 ${showMore ? "rotate-180" : "rotate-0"}`}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
};
