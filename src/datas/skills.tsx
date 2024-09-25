import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiTailwindcss,
  SiFlask,
  SiFastapi,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiPowerbi,
} from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaSquareGitlab, FaSquareGithub } from "react-icons/fa6";

export type SkillData = {
  icon: JSX.Element | undefined;
  title: string;
  category: string;
};

export const skillsData: SkillData[] = [
  {
    icon: <FaHtml5 color="orange" size={100} />,
    title: "HTML",
    category: "frontend",
  },
  {
    icon: <FaCss3Alt color="orange" size={100} />,
    title: "CSS",
    category: "frontend",
  },
  {
    icon: <IoLogoJavascript color="orange" size={100} />,
    title: "JAVASCRIPT",
    category: "frontend",
  },
  {
    icon: <FaReact color="orange" size={100} />,
    title: "REACTJS",
    category: "frontend",
  },
  {
    icon: <TbBrandNextjs color="orange" size={100} />,
    title: "NEXTJS",
    category: "frontend",
  },
  {
    icon: <SiTailwindcss color="orange" size={100} />,
    title: "TAILWINDCSS",
    category: "frontend",
  },
  {
    icon: <FaBootstrap color="orange" size={100} />,
    title: "BOOTSTRAP",
    category: "frontend",
  },
  {
    icon: <FaPython color="orange" size={100} />,
    title: "PYTHON",
    category: "backend",
  },
  {
    icon: <DiDjango color="orange" size={100} />,
    title: "DJANGO",
    category: "backend",
  },
  {
    icon: undefined,
    title: "ODOO",
    category: "backend",
  },
  {
    icon: <SiFlask color="orange" size={100} />,
    title: "FLASK",
    category: "backend",
  },
  {
    icon: <SiFastapi color="orange" size={100} />,
    title: "FASTAPI",
    category: "backend",
  },
  {
    icon: <FaNodeJs color="orange" size={100} />,
    title: "NODEJS",
    category: "backend",
  },
  {
    icon: <SiExpress color="orange" size={100} />,
    title: "EXPRESSJS",
    category: "backend",
  },
  {
    icon: <BiLogoPostgresql color="orange" size={100} />,
    title: "POSTGRESQL",
    category: "database",
  },
  {
    icon: <SiMysql color="orange" size={100} />,
    title: "MYSQL",
    category: "database",
  },
  {
    icon: <SiMongodb color="orange" size={100} />,
    title: "MONGODB",
    category: "database",
  },
  {
    icon: <FaGitAlt color="orange" size={100} />,
    title: "GIT",
    category: "others",
  },
  {
    icon: <FaSquareGithub color="orange" size={100} />,
    title: "GITHUB",
    category: "others",
  },
  {
    icon: <FaSquareGitlab color="orange" size={100} />,
    title: "GITLAB",
    category: "others",
  },
  {
    icon: <SiPowerbi color="orange" size={100} />,
    title: "POWERBI",
    category: "others",
  },
];
