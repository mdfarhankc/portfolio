import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download, Send } from "lucide-react";
import { RiArrowDownSLine } from "react-icons/ri";
import Socials from "@/components/socials";

const Hero = () => {
  return (
    <section className="py-24 h-[90vh] md:pt-28 dark:bg-inherit bg-orange-50 dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div
            className="flex flex-col justify-center 
                            mx-auto text-center"
          >
            <div className="text-sm font-semibold mb-4 text-primary tracking-[4px]">
              FULL STACK DEVELOPER
            </div>
            <h1 className="h1 mb-4">Hello, My Name is Farhan. </h1>
            <p className="subtitle max-w-[490px] mx-auto">
              Turning Passion into Pixels: Crafting Code, Building Dreams, and
              Transforming Ideas into Digital Reality.
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto">
              <Link href={`/contact`}>
                <Button className="gap-x-2">
                  Contact me <Send size={15} />{" "}
                </Button>
              </Link>
              <Button variant={`cv`} className="gap-x-2">
                Download My CV <Download size={15} />{" "}
              </Button>
            </div>
            <Socials
              containerStyles={`flex gap-x-6 my-3 mx-auto`}
              iconStyles={`text-foreground text-[22px] hover:text-primary transition-all`}
            />
          </div>
        </div>
        <div
          className="absolute left-2/4 bottom-10 md:bottom-12
                        animate-bounce"
        >
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
