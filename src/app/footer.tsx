// import Socials from "./Socials"

import Socials from "@/components/socials";

const Footer = () => {
  return (
    <footer className="bg-black dark:bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          <div className="text-muted-foreground">
            Copyright &copy; Mohammed Farhan KC. All rights Reserved
          </div>
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mt-4 "
            iconStyles={`text-primary text-[20px] dark:text-white/70 hover:text-white dark:hover:text-primary`}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
