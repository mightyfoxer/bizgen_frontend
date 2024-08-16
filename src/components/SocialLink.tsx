import { FC, ReactNode } from "react";
import Link from "next/link";

interface LinkProps {
  url: string;
  icon?: ReactNode;
}

const SocialLink: FC<LinkProps> = ({ url, icon }) => {
  return (
    <Link
      className="w-10 h-10 grid place-content-center rounded-full border border-[#A1A1A1] bg-[#E6E6E6]"
      href={url}
    >
      {icon}
    </Link>
  );
};

export default SocialLink;
