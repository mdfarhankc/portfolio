"use client";

import React, { useState } from "react";
import { SkillData, skillsData } from "@/datas/skills";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const uniqueCategories = [
  "fullstack",
  ...Array.from(new Set(skillsData.map((item) => item.category))),
];

const SkillsPage = () => {
  const [categories] = useState(uniqueCategories);
  const [category, setCategory] = useState("fullstack");

  const filteredSkills = skillsData.filter((skill) => {
    return category === "fullstack" ? skill : skill.category === category;
  });

  return (
    <section
      id="skills"
      className="py-12 bg-orange-50 dark:bg-inherit dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]"
    >
      <div className="container mx-auto">
        <h3 className="section-title mb-8 md:mb-16 text-center mx-auto">
          My Skills
        </h3>
        <Tabs defaultValue={category}>
          <TabsList className="w-full grid h-full md:grid-cols-5 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  key={index}
                  value={category}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="text-lg md:mt-8 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 place-items-center">
            {filteredSkills.map((skill, index) => {
              return (
                <TabsContent className="relative" value={category} key={index}>
                  <SkillCard skill={skill} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

const SkillCard = ({ skill }: { skill: SkillData }) => {
  return (
    <Card className="w-[300px]">
      <CardHeader>
        <div className="relative w-full h-[120px] flex items-center justify-center">
          {skill.icon !== undefined ? (
            skill.icon
          ) : (
            <h2 className="text-[orange] text-3xl font-semibold">
              {skill.title}
            </h2>
          )}
        </div>
      </CardHeader>
      <div>
        <Badge className="uppercase absolute top-4 left-5">
          {skill.category}
        </Badge>
        <h6 className="text-sm text-center font-bold p-5">{skill.title}</h6>
      </div>
    </Card>
  );
};

export default SkillsPage;
