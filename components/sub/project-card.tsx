'use client';

import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  image: string;
  title: string;
  description: string;
  github: string;
  liveDemo?: string;
};

export const ProjectCard = ({
  image,
  title,
  description,
  github,
  liveDemo,
}: ProjectCardProps) => {
  const buttonClass =
    "py-2 px-4 rounded bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium shadow-md hover:scale-105 hover:shadow-lg transition";
  return (
    <div className="w-full max-w-md mx-auto relative overflow-hidden rounded-lg shadow-lg hover:scale-[1.06] transition ring-blue-500 border border-[#2A0E61] bg-[#16142a] flex flex-col">
      <div className="bg-[#1a1831] rounded-t-lg w-full flex items-center justify-center" style={{minHeight:'9rem'}}>
        <Image
          src={image}
          alt={title}
          width={700}
          height={400}
          className="w-full h-36 md:h-60 object-contain rounded-t-lg bg-[#181629]"
          style={{display: 'block'}}
          priority
        />
      </div>
      <div className="relative p-5 flex flex-col gap-3 flex-grow">
        <h1 className="text-2xl font-semibold text-white mb-1">{title}</h1>
        <p className="text-gray-400 text-base mb-3 min-h-[28px]">{description}</p>
        <div className="flex flex-row gap-3 mt-auto">
          <Link
            href={github}
            target="_blank"
            rel="noreferrer noopener"
            className={buttonClass}
          >
            View Code
          </Link>
          {liveDemo && (
            <Link
              href={liveDemo}
              target="_blank"
              rel="noreferrer noopener"
              className={buttonClass}
            >
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
