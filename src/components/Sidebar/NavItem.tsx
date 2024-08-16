"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import { FC, ReactNode } from "react";
import { DropOutline } from "../SvgIcons";
import { ButtonGradient } from "../Widget";

interface ItemProps {
  title: string;
  icon?: ReactNode;
  activeIcon?: ReactNode;
  url?: string;
  subList?: ReactNode;
  defaultExtend?: boolean;
  hasList?: boolean;
}

const NavItem: FC<ItemProps> = ({
  icon,
  activeIcon,
  title,
  subList,
  url,
  defaultExtend = false,
  hasList = false,
}) => {
  const { pathname, push } = useRouter();
  const [isOpen, setIsOpen] = useState(defaultExtend);
  const isActive = pathname.split("/")[1] === url?.split("/")[1];

  return (
    <>
      <div
        className={`flex items-center justify-between p-3 cursor-pointer group relative rounded-xl overflow-hidden`}
        onClick={hasList ? () => setIsOpen(!isOpen) : () => push(url ?? "")}
      >
        {isActive && <ButtonGradient />}
        <div className="flex items-center gap-3 relative">
          {isActive ? activeIcon : icon}
          <span
            className={`text-l font-jakarta font-semibold capitalize dark:group-hover:text-[#fcfcfc] group-hover:text-[#1A1D1F] ${
              isActive ? "text-white" : "text-primary-700"
            }`}
          >
            {title}
          </span>
        </div>
        {hasList && (
          <button
            className={`w-6 h-6 ${isOpen ? "rotate-0" : "rotate-180"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <DropOutline color={isActive ? "#fff" : ""} />
          </button>
        )}
      </div>
      <div
        className="overflow-hidden"
        style={{
          height: !isOpen ? 0 : "auto",
        }}
      >
        {subList}
      </div>
    </>
  );
};

export default NavItem;
