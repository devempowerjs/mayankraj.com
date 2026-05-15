'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type ProjectCardProps = {
  image: string;
  title: string;
  description: string;
  github?: string;
  liveDemo?: string;
  isSignature?: boolean;
  shouldLoad?: boolean; // controlled by parent for "View More" items
};

const SkeletonCard = ({ isSignature }: { isSignature?: boolean }) => (
  <div
    className={`w-full mx-auto relative overflow-hidden rounded-xl border border-[#2A0E61] bg-[#16142a] flex flex-col animate-pulse ${
      isSignature ? "max-w-2xl" : "max-w-md"
    }`}
    aria-hidden="true"
  >
    {/* shimmer overlay */}
    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent skeleton-shimmer pointer-events-none z-10" />
    <div className={`bg-[#1a1831] rounded-t-xl w-full ${isSignature ? "h-64" : "h-44"}`} />
    <div className="p-5 flex flex-col gap-3 flex-grow">
      <div className="h-6 w-3/4 rounded bg-[#2a2554]" />
      <div className="h-4 w-full rounded bg-[#221f45]" />
      <div className="h-4 w-5/6 rounded bg-[#221f45]" />
      <div className="flex gap-3 mt-auto pt-2">
        <div className="h-9 w-24 rounded bg-[#2a2554]" />
        <div className="h-9 w-24 rounded bg-[#2a2554]" />
      </div>
    </div>
  </div>
);

export const ProjectCard = ({
  image,
  title,
  description,
  github,
  liveDemo,
  isSignature = false,
  shouldLoad = true,
}: ProjectCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!shouldLoad) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "80px" }
    );
    const el = cardRef.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [shouldLoad]);

  const buttonClass =
    "py-2 px-4 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-semibold shadow-md hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-200";

  const showCard = shouldLoad && isVisible;

  return (
    <div
      ref={cardRef}
      className={`w-full mx-auto transition-all duration-700 ${isSignature ? "max-w-2xl" : "max-w-md"}`}
      style={{ minHeight: isSignature ? "22rem" : "19rem" }}
    >
      {!showCard ? (
        <SkeletonCard isSignature={isSignature} />
      ) : (
        <div
          className={`
            w-full h-full relative overflow-hidden rounded-xl shadow-lg flex flex-col
            border bg-[#16142a]
            transition-all duration-300
            hover:scale-[1.03] hover:shadow-2xl
            ${
              isSignature
                ? "border-purple-500/60 shadow-purple-500/20 hover:shadow-purple-500/40 ring-1 ring-purple-500/30"
                : "border-[#2A0E61] hover:border-purple-500/40"
            }
          `}
        >
          {isSignature && (
            <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-purple-500/30">
              <span>🚀</span>
              <span>Signature Project</span>
            </div>
          )}

          {/* Image area */}
          <div
            className={`bg-[#1a1831] rounded-t-xl w-full flex items-center justify-center relative overflow-hidden ${
              isSignature ? "min-h-[16rem]" : "min-h-[9rem]"
            }`}
          >
            {!imgLoaded && (
              <div
                className={`absolute inset-0 bg-[#1a1831] animate-pulse ${
                  isSignature ? "h-64" : "h-44"
                }`}
              >
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent skeleton-shimmer" />
              </div>
            )}
            <Image
              src={image}
              alt={title}
              width={700}
              height={isSignature ? 500 : 400}
              className={`w-full object-contain rounded-t-xl bg-[#181629] transition-opacity duration-500 ${
                isSignature ? "h-64" : "h-44 md:h-52"
              } ${imgLoaded ? "opacity-100" : "opacity-0"}`}
              style={{ display: "block" }}
              loading="lazy"
              onLoad={() => setImgLoaded(true)}
            />
          </div>

          {/* Content */}
          <div className="relative p-5 flex flex-col gap-3 flex-grow">
            {isSignature && (
              <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mb-1" />
            )}
            <h2 className={`font-semibold text-white mb-1 ${isSignature ? "text-2xl md:text-3xl" : "text-xl"}`}>
              {title}
            </h2>
            <p className="text-gray-400 text-sm md:text-base mb-3 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-row flex-wrap gap-3 mt-auto">
              {github && (
                <Link
                  href={github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={buttonClass}
                >
                  View Code
                </Link>
              )}
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
      )}
    </div>
  );
};
