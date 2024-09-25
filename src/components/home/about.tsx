import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  infoDatas,
  qualificationDatas,
  skillData,
  QualificationDataItem,
  QualificationData,
  InfoData,
} from "@/datas/about";

const About = () => {
  // Type the `arr` parameter and the `title` to ensure type safety
  const getData = (
    arr: QualificationData[],
    title: string
  ): QualificationData | undefined => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="py-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 text-center mx-auto">About Me</h2>
        <div className="flex flex-col lg:flex-row lg:gap-x-2">
          <div className="hidden lg:flex items-center justify-center flex-1 relative">
            <div className="hidden lg:flex bg-about_light dark:bg-about_dark w-[500px] h-[300px] bg-contain bg-top bg-no-repeat" />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <div className="flex justify-center">
                <TabsList className="rounded-[50px]">
                  <TabsTrigger value="personal">Personal Infos</TabsTrigger>
                  <TabsTrigger value="qualifications">
                    Qualifications
                  </TabsTrigger>
                  <TabsTrigger value="skills">Skills</TabsTrigger>
                </TabsList>
              </div>
              <div className="xl:text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center lg:text-left">
                    <h3 className="h3 mb-4">
                      Mastering the Art of Innovation.
                    </h3>
                    <p className="subtitle text-sm max-w-xl mx-auto xl:mx-0">
                      Turning visions into reality, I specialize in crafting
                      tailored solutions that align with your goals, ensuring
                      your business achieves new heights with high-quality
                      projects.
                    </p>
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoDatas.map((item: InfoData, index: number) => {
                        return (
                          <div
                            key={index}
                            className="flex items-center gap-x-4 mx-auto ml:mx-0"
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    <div className="grid grid-cols-2 gap-x-8">
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px]">
                          <Briefcase size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationDatas, "Experience")?.title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationDatas, "Experience")?.data.map(
                            (item: QualificationDataItem, index: number) => {
                              const { company, position, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div
                                      className="w-[11px] h-[11px] rounded-full bg-primary 
                                          absolute -left-[5px] group-hover:translate-y-[84px]
                                          transition-all duration-500"
                                    ></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {position}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px]">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationDatas, "Education")?.title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationDatas, "Education")?.data.map(
                            (item: QualificationDataItem, index: number) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div
                                      className="w-[11px] h-[11px] rounded-full bg-primary 
                                          absolute -left-[5px] group-hover:translate-y-[84px]
                                          transition-all duration-500"
                                    ></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">What I Know</h3>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      <div>
                        {skillData.map((item: string, index: number) => {
                          return (
                            <Badge key={index} className="m-1 uppercase">
                              {item}
                            </Badge>
                          );
                        })}
                      </div>
                      <div className="flex flex-col gap-y-2 mt-5">
                        <div className="text-primary">Languages Known</div>
                        <div className="border-b border-border"></div>
                        <div>Malayalam, English, Hindi</div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
