'use client';

import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[32px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-12 md:py-20 text-center">
        My Projects
      </h1>
      <div className="flex flex-col md:flex-row md:flex-wrap md:gap-10 gap-y-10 justify-center items-stretch px-2 md:px-10 w-full">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            image={project.image}
            title={project.title}
            description={project.description}
            github={project.github}
          />
        ))}
      </div>
    </section>
  );
};
