"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

const ContactImage = () => {
  const { theme } = useTheme();

  return (
    <div className="relative w-[500px] h-[300px]">
      {theme === "dark" ? (
        <Image
          src={"/contact/image-dark.png"}
          width={500}
          height={500}
          alt="contact-dark"
        />
      ) : (
        <Image
          src={"/contact/image-light.png"}
          width={500}
          height={500}
          alt="contact-light"
        />
      )}
    </div>
  );
};

export default ContactImage;
