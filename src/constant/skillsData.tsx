import React from "react";

import {
  FaGitAlt,
  FaGithub,
  FaMobile,
  FaPython,
  FaReact,
  FaTruckMoving,
  FaBookOpen,
  FaCodeBranch,
  FaRobot,
  FaSquareJs,
} from "react-icons/fa6";

import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPostman,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

import { GiBrain } from "react-icons/gi";
import { MdApi } from "react-icons/md";
import { GrOracle } from "react-icons/gr";

interface LogoProps {
  title: string;
  logoComponent: React.FC;
  color?: string;
}

interface SkillsDataProps {
  title: string;
  data: LogoProps[];
}

export const skillsData: SkillsDataProps[] = [
  {
    title: "Languages & Databases",
    data: [
      { title: "TypeScript", logoComponent: SiTypescript, color: "#3178C6" },
      { title: "JavaScript", logoComponent: FaSquareJs, color: "#F7DF1E" },
      { title: "Python", logoComponent: FaPython, color: "#3776AB" },
      { title: "MongoDB", logoComponent: SiMongodb, color: "#47A248" },
      { title: "PostgreSQL", logoComponent: SiMysql, color: "#336791" }, // Using MySQL icon as placeholder if Postgres isn't imported
      { title: "SQL", logoComponent: GrOracle, color: "#F80000" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    data: [
      { title: "React", logoComponent: FaReact, color: "#61DAFB" },
      { title: "Next.js", logoComponent: SiNextdotjs, color: "#d4d4d8" },
      { title: "Express.js", logoComponent: SiExpress, color: "#d4d4d8" },
      { title: "Tailwind CSS", logoComponent: SiTailwindcss, color: "#06B6D4" },
      { title: "Node.js", logoComponent: FaMobile, color: "#339933" }, // placeholder icon
      { title: "Angular", logoComponent: FaReact, color: "#DD0031" }, // placeholder icon
      { title: "Django / FastAPI", logoComponent: FaPython, color: "#092E20" },
    ],
  },
  {
    title: "AI, ML & LLMs",
    data: [
      { title: "PyTorch", logoComponent: GiBrain, color: "#EE4C2C" },
      { title: "LangChain", logoComponent: FaCodeBranch, color: "#1664C0" },
      { title: "Ollama", logoComponent: FaRobot, color: "#000000" },
      { title: "Groq / VAPI", logoComponent: MdApi, color: "#F55036" },
      {
        title: "Whisper / Gemini",
        logoComponent: FaBookOpen,
        color: "#1A73E8",
      },
      { title: "ChromaDB", logoComponent: SiMongodb, color: "#47A248" },
    ],
  },
  {
    title: "Tools & Platforms",
    data: [
      { title: "Git", logoComponent: FaGitAlt, color: "#F05032" },
      { title: "GitHub", logoComponent: FaGithub, color: "#d4d4d8" },
      {
        title: "CI/CD & Jenkins",
        logoComponent: FaTruckMoving,
        color: "#D24939",
      },
      { title: "Postman", logoComponent: SiPostman, color: "#FF6C37" },
      {
        title: "Supabase & Convex",
        logoComponent: SiFirebase,
        color: "#3ECF8E",
      },
      { title: "AWS EC2", logoComponent: SiVercel, color: "#FF9900" },
    ],
  },
];
