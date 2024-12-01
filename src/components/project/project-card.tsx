import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "@/components/ui/card";
import { RiGithubFill, RiLinksFill } from "react-icons/ri";

interface ProjectCardProps {
  project: {
    category: string;
    name: string;
    description: string;
    link: string;
    github: string;
    image?: string;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card>
      <CardHeader className="p-0">
        <div
          className="relative group w-full h-[300px] flex items-center justify-center 
                            bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%]"
        >
          {project.image && (
            <Image
              className="absolute bottom-0 shadow-2xl"
              src={project.image}
              width={247}
              height={250}
              alt=""
              priority
            />
          )}
          <div className="flex gap-x-4">
            <Link
              href={project.link}
              className="bg-black w-[54px] h-[54px] rounded-full 
                                        flex justify-center items-center 
                                        scale-0 opacity-0 
                                        group-hover:scale-100 group-hover:opacity-100
                                        transition-all duration-200"
            >
              <RiLinksFill className="text-white" />
            </Link>
            <Link
              href={project.github}
              className="bg-black w-[54px] h-[54px] rounded-full 
                                        flex justify-center items-center 
                                        scale-0 opacity-0 
                                        group-hover:scale-100 group-hover:opacity-100 
                                        transition-all duration-200"
            >
              <RiGithubFill className="text-white" />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="px-8 py-6">
        <h4 className="h4 mb-1">{project.name}</h4>
        <p className="text-muted-foreground text-sm text-wrap">
          {project.description}
        </p>
      </div>
    </Card>
  );
};

export default ProjectCard;
