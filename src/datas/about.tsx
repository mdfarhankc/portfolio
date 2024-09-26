import {
  User2,
  PhoneCall,
  HomeIcon,
  MailIcon,
  GraduationCap,
  Calendar,
} from "lucide-react";

// Qualification Data Type
export type QualificationDataItem = {
  university?: string;
  qualification?: string;
  company?: string;
  position?: string;
  years: string;
};

export type QualificationData = {
  title: string;
  data: QualificationDataItem[];
};

const qualificationDatas: QualificationData[] = [
  {
    title: "Education",
    data: [
      {
        university: "Jamia Hamdard",
        qualification: "Bachelor Of Computer Application",
        years: "2019 - 2022",
      },
      {
        university: "Nithyananda Bhavan English Medium School",
        qualification: "XII Computer Science",
        years: "2017 - 2019",
      },
    ],
  },
  {
    title: "Experience",
    data: [
      {
        company: "AST SOLUTIONS LLC.",
        position: "Python Developer",
        years: "2023 March - Current",
      },
      {
        company: "QUEST INNOVATIVE SOLUTIONS",
        position: "Python Full Stack Developer",
        years: "2022 June - 2023 January",
      },
    ],
  },
];

// Skill Data Type
type SkillData = string[];

const skillData: SkillData = [
  "html",
  "css",
  "javascript",
  "reactjs",
  "nextjs",
  "tailwindcss",
  "bootstrap",
  "python",
  "odoo",
  "django",
  "flask",
  "fastapi",
  "nodejs",
  "expressjs",
  "sql",
  "postgresql",
  "mysql",
  "mongodb",
  "git",
  "powerbi",
];

// Info Data Type
export type InfoData = {
  icon: JSX.Element;
  text: string;
};

const infoDatas: InfoData[] = [
  {
    icon: <User2 size={20} />,
    text: "Mohammed Farhan K C",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+91 9895*****9",
  },
  {
    icon: <MailIcon size={20} />,
    text: "kcfarhan123@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born On 22, Feb 2001",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelor Of Computer Application",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Kannur",
  },
];

export { qualificationDatas, skillData, infoDatas };
