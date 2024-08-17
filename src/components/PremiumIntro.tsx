import {
  CrawnColoredIcon,
  DesignToolsIcon,
  MagicIconFill,
  PremiumIconTwoTone,
  UsersIconFill,
} from "@/components/SvgIcons";
import Image from "next/image";
import { FC } from "react";
import { BsBriefcaseFill } from "react-icons/bs";

const PremiumIntro: FC = () => {
  return (
    <div className="relative max-w-[550px]">
      <div className="">
        <Image src="/images/logo@colered.png" width={94} height={91} alt="" />
        <h2 className="text-h3 leading-h3 font-bold -tracking-[0.96px] text-white font-aeonik max-w-[423px] relative mt-6">
          Unlock The Pro<br />
          Plan Today! For <br />
          Only $97/Mo!
          <span className="absolute right-2 bottom-2">
            <CrawnColoredIcon />
          </span>
        </h2>
        <p className="text-l leading-l text-white font-jakarta font-semibold mt-4">
          As a Pro Plan member you will take advantage of first access to
          all our new tool and features we create, as we move to full
          launch.
        </p>
        <div className="grid grid-cols-2 mt-9 font-aeonik text-white text-2xl font-medium gap-y-9">
          <div className="flex items-center gap-2">
            <BsBriefcaseFill />
            <span className="text-[15px]">Multiple Avatars</span>
          </div>
          <div className="flex items-center gap-2">
            <DesignToolsIcon />
            <span className="text-[15px]">Generate 5x More Content</span>
          </div>
          <div className="flex items-center gap-2">
            <UsersIconFill />
            <span className="text-[15px]">Pro Community Perks</span>
          </div>
          <div className="flex items-center gap-2">
            <MagicIconFill className="w-6 h-6" color="white" />
            <span className="text-[15px]">First Access To New Tools</span>
          </div>
        </div>
        <div className="mt-[64px]">
          {/* <button className="bg-[#5200FF] w-full py-2.5 rounded-[10px] text-white  text-l leading-l font-semibold flex gap-2 items-center justify-center font-jakarta">
            Upgrade to PRO <PremiumIconTwoTone />
          </button> */}
          <button className="bg-[#1b0054ab] w-full py-2.5 rounded-[10px] text-white  text-l leading-l font-semibold flex gap-2 items-center justify-center font-jakarta mt-2">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default PremiumIntro;
