/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { FC } from "react";
import { ReactSVG } from "react-svg";

const HeroVideo: FC = () => {
  return (
    <div
      className="mt-9 flex items-center justify-center max-w-[945px] w-[calc(100%-32px)] relative mx-4 lg:mx-auto"
      style={{
        aspectRatio: 945 / 528,
      }}
    >
      <div className="">
        <Image
          className="absolute z-[2]"
          layout="fill"
          src="/images/hero-thumb.png"
          alt=""
        />
        <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[60px] lg:w-[118px] h-[60px] lg:h-[118px] bg-gradient-to-b from-secondary-400 to-secondary-500 grid place-content-center rounded-full">
          <ReactSVG src="/icons/play@lg.svg" className="ml-2 scale-50 lg:scale-100" />
        </button>
      </div>
      <div className="w-[1080px] h-[987px] pointer-events-none absolute left-[-440px] top-[-350px] scale-50 lg:scale-100">
        <img src="/images/hero-gradient-1.png" alt="" />
      </div>
      <div className="w-[1080px] h-[987px] pointer-events-none absolute right-[-440px] top-[-350px] scale-50 lg:scale-100">
        <img src="/images/hero-gradient-1.png" alt="" />
      </div>

      <div className="w-[1208px] h-[1031px] pointer-events-none absolute right-[-200px] lg:left-[-440px] top-[-350px] lg:top-[-210px] scale-50 lg:scale-100">
        <img src="/images/hero-gradient-2.png" alt="" />
      </div>
      <div className="w-[1208px] h-[1031px] pointer-events-none absolute right-[-200px] lg:right-[-340px] top-[-350px] lg:top-[-210px] scale-50 lg:scale-100">
        <img src="/images/hero-gradient-2.png" alt="" />
      </div>
    </div>
  );
};

export default HeroVideo;
