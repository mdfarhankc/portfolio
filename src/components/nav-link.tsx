import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { links } from "@/datas/navlink";

const NavLink = ({
  containerStyle = "flex justify-between items-center gap-x-5 bg-secondary p-6",
  linkStyle = "",
  underlineStyle = "",
}: {
  containerStyle: string;
  linkStyle: string;
  underlineStyle?: string;
}) => {
  const pathname = usePathname();

  return (
    <nav className={cn(containerStyle)}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={cn(
              "capitalize",
              linkStyle,
              link.path === pathname && "text-primary"
            )}
          >
            {link.path === pathname && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyle}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavLink;
