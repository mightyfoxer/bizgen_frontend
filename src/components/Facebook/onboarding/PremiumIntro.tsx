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
          Its time To Go Pro! Only For $99/mo{" "}
          <span className="absolute right-2 bottom-2">
            <CrawnColoredIcon />
          </span>
        </h2>
        <p className="text-l leading-l text-white font-jakarta font-semibold mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.{" "}
        </p>
        <div className="grid grid-cols-2 mt-9 font-aeonik text-white text-2xl font-medium gap-y-9">
          <div className="flex items-center gap-2">
            <BsBriefcaseFill />
            Unlimited Business
          </div>
          <div className="flex items-center gap-2">
            <DesignToolsIcon />
            Customize Brand
          </div>
          <div className="flex items-center gap-2">
            <UsersIconFill />
            Create Your Team
          </div>
          <div className="flex items-center gap-2">
            <MagicIconFill className="w-6 h-6" color="white" />
            AI Powered Tools
          </div>
        </div>
        <div className="mt-[64px]">
          <button className="bg-[#5200FF] w-full py-2.5 rounded-[10px] text-white  text-l leading-l font-semibold flex gap-2 items-center justify-center font-jakarta">
            Upgrade to PRO <PremiumIconTwoTone />
          </button>
          <button className="bg-[#1b0054ab] w-full py-2.5 rounded-[10px] text-white  text-l leading-l font-semibold flex gap-2 items-center justify-center font-jakarta mt-2">
            Watch Tutorial
          </button>
        </div>
      </div>
    </div>
  );
};

export default PremiumIntro;
