import { FC } from "react";
import { MinusIconFill } from "./SvgIcons";
import Link from "next/link";
import { ButtonGradient } from "./Widget";
import Image from "next/image";

const WatchDemoVideo: FC = () => {
  return (
    <div className="bg-[#1C1A2C] rounded-lg pt-[14px] px-9 pb-8 mt-8">
      <div className="flex items-center justify-between">
        <div className=""></div>
        <button className="w-9 h-9">
          <MinusIconFill />
        </button>
      </div>
      <div className="mt-2.5 flex items-start justify-between">
        <div className="w-1/2">
          <h2 className="text-white text-h3 leading-h3 font-bold tracking-[-0.96px] font-aeonik">
            Check out our{" "}
            <span className="gradient-text-3">Walkthrough Demo</span> or better
            experience
          </h2>
          <p className="text-white text-xl leading-xl tracking-[-0.96px] font-jakarta mt-[14px] mb-6">
            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
          <Link href={"#"} className="inline-block">
            <div className="relative py-3 px-6 rounded-[10px] overflow-hidden">
              <ButtonGradient />
              <span className="relative font-jakarta font-bold text-l text-white">
                Watch Demo
              </span>
            </div>
          </Link>
        </div>
        <div className="w-1/2 flex items-start justify-end h-full">
          <div className="relative h-[328px] rounded-lg overflow-hidden aspect-video">
            <Image src="/images/demo-watch.jpg" layout="fill" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchDemoVideo;
