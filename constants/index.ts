import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
  RxEnvelopeClosed,
  RxReader,
} from "react-icons/rx";


export type Skill = {
  skill_name: string;
  image: string;
  width: number;
  height: number;
};

export const SKILL_DATA: Skill[] = [
  { skill_name: "HTML", image: "html.png", width: 80, height: 80 },
  { skill_name: "CSS", image: "css.png", width: 80, height: 80 },
  { skill_name: "JavaScript", image: "js.png", width: 65, height: 65 },
  { skill_name: "Tailwind CSS", image: "tailwind.png", width: 80, height: 80 },
  { skill_name: "React", image: "react.png", width: 80, height: 80 },
  { skill_name: "Redux", image: "redux.png", width: 80, height: 80 },
  { skill_name: "TypeScript", image: "ts.png", width: 80, height: 80 },
  { skill_name: "Next.js 14", image: "next.png", width: 80, height: 80 },
  { skill_name: "Framer Motion", image: "framer.png", width: 80, height: 80 },
  { skill_name: "Stripe", image: "stripe.png", width: 80, height: 80 },
  { skill_name: "Node.js", image: "node.png", width: 80, height: 80 },
  { skill_name: "MongoDB", image: "mongodb.png", width: 40, height: 40 },
];

export const SOCIALS = [
  {
    name: "Email",
    icon: RxEnvelopeClosed,
    link: "mailto:mayankrajpis2013@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://linkedin.com/in/devempowerjs",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/devempowerjs",
  },
  {
    name: "Medium",
    icon: RxReader,
    link: "https://medium.com/@devempowerjs",
  },
] as const;

export const FRONTEND_SKILL: Skill[] = [
  { skill_name: "HTML", image: "html.png", width: 80, height: 80 },
  { skill_name: "CSS", image: "css.png", width: 80, height: 80 },
  { skill_name: "JavaScript", image: "js.png", width: 65, height: 65 },
  { skill_name: "Tailwind CSS", image: "tailwind.png", width: 80, height: 80 },
  { skill_name: "React", image: "react.png", width: 80, height: 80 },
  { skill_name: "Next.js 14", image: "next.png", width: 80, height: 80 },
];

export const BACKEND_SKILL: Skill[] = [
  { skill_name: "Node.js", image: "node.png", width: 80, height: 80 },
  { skill_name: "Express.js", image: "express.png", width: 80, height: 80 },
  { skill_name: "MongoDB", image: "mongodb.png", width: 40, height: 40 },
];


export const FULLSTACK_SKILL: Skill[] = [];

export const OTHER_SKILL: Skill[] = [
  {
    skill_name: "Video Editing",
    image: "framer.png", 
    width: 80,
    height: 80,
  },
  {
    skill_name: "Cinematic Content Creation",
    image: "go.png", 
    width: 80,
    height: 80,
  },
  {
    skill_name: "UI/UX Design",
    image: "figma.png",
    width: 80,
    height: 80,
  },
];

export type Project = {
  title: string;
  description: string;
  image: string;
  github?: string;
  liveDemo?: string;
  isSignature?: boolean;
  isHidden?: boolean;
};

export const SIGNATURE_PROJECT: Project = {
  title: "Digital Guard",
  description: "Real-time web security extension keeping you safer online.",
  image: "/projects/digitalguard.webp",
  github: "https://github.com/devempowerjs/DigitalGuard",
  liveDemo: "https://digitalguard.vercel.app/",
  isSignature: true,
};

export const DEFAULT_PROJECTS: Project[] = [
  {
    title: "CarSalesInsight",
    description:
      "Analyzes car sales data (2000–2024), predicts 2025 sales using linear regression, and visualizes insights.",
    image: "/projects/carsalesinsight.webp",
    github: "https://github.com/devempowerjs/CarSalesInsight",
  },
  {
    title: "MusicForecast",
    description:
      "Predicts song popularity using features like tempo, duration, genre, and release year with machine learning models.",
    image: "/projects/musicforecast.webp",
    github: "https://github.com/devempowerjs/MusicForecast",
  },
  {
    title: "ForestFiresOccPrediction",
    description: "Predicts forest fire occurrence using logistic regression.",
    image: "/projects/forestfiresoccurenceprediction.webp",
    github: "https://github.com/devempowerjs/ForestFiresOccPrediction",
  },
];

export const HIDDEN_PROJECTS: Project[] = [
  {
    title: "CarSalesForecast",
    description:
      "Analyzes and visualizes large-scale car sales data and predicts trends.",
    image: "/projects/carsalesforcast.webp",
    github: "https://github.com/devempowerjs/CarSalesForecast",
  },
  {
    title: "CarPoolingFareDistAlgorithm",
    description:
      "Algorithm to fairly distribute ride fares based on boarding, drop points, and waiting time.",
    image: "/projects/carpoolingfaredistributionalogrithm.webp",
    github: "https://github.com/devempowerjs/CarPoolingFareDistAlgorithm",
  },
  {
    title: "student-performance-ds",
    description:
      "Data science project analyzing and predicting student performance trends.",
    image: "/projects/studentperformanceds.webp",
    github: "https://github.com/devempowerjs/student-performance-ds",
  },
  {
    title: "macOS Theme Portfolio Website",
    description: "macOS-style portfolio website built for a client.",
    image: "/projects/macos-project.webp",
    github: "https://github.com/devempowerjs/ayusharyan-macos-theme-website",
    liveDemo: "https://aayusharyan28-delta.vercel.app/",
  },
  {
    title: "Neumorphism Theme Portfolio Website",
    description: "Neumorphism-inspired portfolio for a client.",
    image: "/projects/neumorphism-project.webp",
    github: "https://github.com/devempowerjs/ayushprabhakhar-neumorphism-theme-website",
    liveDemo: "https://ayushprabhakhar-neumorphism-theme-w.vercel.app/",
  },
  {
    title: "Uday Bhaskar Portfolio Website",
    description: "Clean, responsive portfolio with smooth animations.",
    image: "/projects/udaybhaskarpy.webp",
    github: "https://github.com/devempowerjs/udaybhaskarpy-website",
    liveDemo: "https://udaybhaskarpy.vercel.app",
  },
  {
    title: "Kr Sudhanshu Portfolio Website",
    description: "High-performance, scalable portfolio with clean architecture.",
    image: "/projects/krsudhanshuwebsite.webp",
    github: "https://github.com/devempowerjs/krsudhanshu-funky-theme-website",
    liveDemo: "https://krsudhanshu.vercel.app",
  },
  {
    title: "Safepost Checker Extension",
    description: "Instantly checks post safety using advanced algorithms.",
    image: "/projects/safepost.webp",
    github: "https://github.com/devempowerjs/SafePost-Checker-Extension",
  },
  {
    title: "PassX Password Manager",
    description: "Securely store and manage credentials with ease.",
    image: "/projects/passx.webp",
    github: "https://github.com/devempowerjs/PassX_Password_Manager",
  },
];

// Legacy export kept for backward compatibility (unused after refactor)
export const PROJECTS: Project[] = [SIGNATURE_PROJECT, ...DEFAULT_PROJECTS, ...HIDDEN_PROJECTS];

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/devempowerjs/",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:mayankrajpis2013@gmail.com",
      },
    ],
  },
];

export const NAV_LINKS = [
  { title: "About me", link: "#about-me" },
  { title: "Skills", link: "#skills" },
  { title: "Projects", link: "#projects" },
  { title: "Achievements", link: "#achievements" },
  { title: "Contact", link: "mailto:mayankrajpis2013@gmail.com" },
];
