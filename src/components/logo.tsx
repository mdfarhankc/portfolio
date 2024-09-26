import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image src={"./logo.png"} height={50} width={50} alt="logo" />
    </Link>
  );
};

export default Logo;
