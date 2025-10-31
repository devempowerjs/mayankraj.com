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

// ✅ Define a shared Skill type so TS knows structure even if array is empty yo
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

// ✅ Empty but properly typed — no TypeScript errors
export const FULLSTACK_SKILL: Skill[] = [];

export const OTHER_SKILL: Skill[] = [
  {
    skill_name: "Video Editing",
    image: "framer.png", // Placeholder
    width: 80,
    height: 80,
  },
  {
    skill_name: "Cinematic Content Creation",
    image: "go.png", // Placeholder
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

export const PROJECTS = [
  {
    title: "Digital Guard",
    description: "Real-time web security extension keeping you safer online.",
    image: "/projects/digitalguard.webp",
    github: "https://github.com/devempowerjs/DigitalGuard",
  },
  {
    title: "Safepost Checker Website",
    description: "Instantly checks post safety using advanced algorithms.",
    image: "/projects/safepost.webp",
    github: "https://github.com/devempowerjs/SafePost-Checker-Extension",
  },
  {
    title: "Train Station Indicator",
    description: "Live status displays for every Indian train traveler.",
    image: "/projects/trainstation.webp",
    github: "https://github.com/devempowerjs/train-station-indicator",
  },
  {
    title: "Jarvis Virtual Assistant",
    description: "Voice-activated desktop assistant for everyday tasks.",
    image: "/projects/jarvis.webp",
    github: "https://github.com/devempowerjs/Jarvis-Virtual-Assistant",
  },
  {
    title: "PassX Password Manager",
    description: "Securely store and manage your credentials with ease.",
    image: "/projects/passx.webp",
    github: "https://github.com/devempowerjs/PassX_Password_Manager",
  },
];

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
