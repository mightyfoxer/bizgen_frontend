"use client";

import { useRouter } from "next/router";
import { FC, ReactNode } from "react";
import { TreeEndLine, TreeLine } from "../SvgIcons";
import Link from "next/link";

interface SubItem {
  title: string;
  icon: ReactNode;
  url: string;
  isEnd?: boolean;
}

const NavSubItem: FC<SubItem> = ({ title, icon, url, isEnd }) => {
  const router = useRouter();
  const isActive = router.pathname === url;
  return (
    <Link href={url}>
      <div className="flex items-center cursor-pointer group">
        {!isEnd ? (
          <TreeLine />
        ) : (
          <span className="-mt-1">
            <TreeEndLine />
          </span>
        )}
        <div className="w-[calc(100%-37px)] flex items-center justify-between p-3">
          <div
            className={`font-jakarta text-l leading-l font-semibold text-primary-700 hover:text-black dark:hover:text-white`}
          >
            {title}
          </div>
          {icon}
        </div>
      </div>
    </Link>
  );
};

export default NavSubItem;
