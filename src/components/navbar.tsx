import React from "react";
import NavLink from "./nav-link";

const Navbar = () => {
  return (
    <div className="hidden md:flex">
      <NavLink
        containerStyle="flex justify-between items-center gap-x-5"
        linkStyle="relative hover:text-primary transition-all font-semibold"
        underlineStyle="absolute left-0 top-full h-[2px] bg-primary w-full"
      />
    </div>
  );
};

export default Navbar;
