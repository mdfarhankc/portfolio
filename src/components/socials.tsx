"use client";

import {
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookBoxFill,
  RiInstagramFill,
  RiSnapchatFill,
  RiWhatsappFill,
} from "react-icons/ri";
import Link from "next/link";

const icons = [
  { path: "https://www.linkedin.com/in/mdfarhankc", name: <RiLinkedinFill /> },
  { path: "https://github.com/mdfarhankc", name: <RiGithubFill /> },
  { path: "https://www.instagram.com/md_farhankc", name: <RiInstagramFill /> },
  { path: "https://www.facebook.com/mdfarhankc", name: <RiFacebookBoxFill /> },
  {
    path: "https://www.snapchat.com/add/md_farhankc?sender_web_id=c168f1c2-35cd-426f-ae14-236355570a7c&device_type=desktop&is_copy_url=true",
    name: <RiSnapchatFill />,
  },
  { path: "https://wa.me/qr/AHPV6TPDGHDDJ1", name: <RiWhatsappFill /> },
];

const Socials = ({
  containerStyles,
  iconStyles,
}: {
  containerStyles: string;
  iconStyles: string;
}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
