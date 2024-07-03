import { FaHtml5, FaCss3Alt, FaJava, FaNodeJs, FaReact, FaGitAlt, FaGithub } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiIntellijidea, SiMongodb, SiMysql, SiPostman, SiSpringboot } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

import SlashMark from "./assets/company/SlashMark.png";

export const skills = [
  { icon: FaHtml5, title: "HTML", level: "Experienced", category: "Frontend" },
  {
    icon: FaCss3Alt,
    title: "CSS",
    level: "Intermediate",
    category: "Frontend",
  },
  {
    icon: IoLogoJavascript,
    title: "JavaScript",
    level: "Intermediate",
    category: "Frontend",
  },
  {
    icon: RiTailwindCssFill,
    title: "Tailwind CSS",
    level: "Intermediate",
    category: "Frontend",
  },
  {
    icon: FaReact,
    title: "ReactJS",
    level: "Intermediate",
    category: "Frontend",
  },
  { icon: FaJava, title: "Java", level: "Intermediate", category: "Backend" },
  {
    icon: SiSpringboot,
    title: "Spring Boot",
    level: "Beginner",
    category: "Backend",
  },
  { icon: FaNodeJs, title: "Node.js", level: "Beginner", category: "Backend" },
  { icon: SiMysql, title: "MySQL", level: "Intermediate", category: "Backend" },
  { icon: SiMongodb, title: "MongoDB", level: "Beginner", category: "Backend" },
  { icon: FaGitAlt, title: "Git", level: "Intermediate", category: "Other" },
  { icon: FaGithub, title: "Github", level: "Intermediate", category: "Other" },
  {
    icon: VscVscode,
    title: "VS Code",
    level: "Experienced",
    category: "Tools",
  },
  {
    icon: SiIntellijidea,
    title: "IntelliJ IDEA",
    level: "Experienced",
    category: "Tools",
  },
  {
    icon: SiPostman,
    title: "Postman",
    level: "Intermediate",
    category: "Tools",
  },
];

export const experience = [
  {
    type: "Internship",
    role: "Full Stack Developer Intern",
    company: "Slash Mark",
    image: SlashMark,
    startDate: "Jan 2024",
    endDate: "Apr 2024"
  }
]