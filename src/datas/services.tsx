import { MonitorDown, MonitorSmartphone, Server } from "lucide-react";

export type ServicesData = {
  icon: JSX.Element;
  title: string;
  description: string;
};

export const servicesData: ServicesData[] = [
  {
    icon: <MonitorDown size={72} strokeWidth={0.8} />,
    title: "Full-Stack Development",
    description:
      "Creating end-to-end solutions by combining powerful frontend and backend technologies for a seamless user experience.",
  },
  {
    icon: <MonitorSmartphone size={72} strokeWidth={0.8} />,
    title: "Frontend Development",
    description:
      "Designing and implementing visually appealing user interfaces with the latest frontend technologies to captivate your audience.",
  },
  {
    icon: <Server size={72} strokeWidth={0.8} />,
    title: "Backend Development",
    description:
      "Building robust server-side applications and databases to ensure the functionality and security of your web and mobile applications.",
  },
];
