"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

const AboutImage = () => {
  const { theme } = useTheme();

  return (
    <div className="relative w-[500px] h-[300px]">
      {theme === "dark" ? (
        <Image
          src={"/about/coding-dark.png"}
          width={500}
          height={500}
          alt="about-dark"
        />
      ) : (
        <Image
          src={"/about/coding-light.png"}
          width={500}
          height={500}
          alt="about-light"
        />
      )}
    </div>
  );
};

export default AboutImage;
