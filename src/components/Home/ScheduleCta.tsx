/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ButtonGradient } from "../Widget";
import Image from "next/image";

const ScheduleCta = () => {
  return (
    <div className="mt-[120px] lg:mt-[208px] relative">
      <div className="w-[300px] lg:w-[512px] absolute -left-[100px] -top-[124px] opacity-30"
      style={{
        aspectRatio: 512 / 780
      }}>
        <Image src="/images/dots-pattern.svg" layout="fill" alt="" />
      </div>
      <div
        className="w-[300px] lg:w-[512px] absolute -right-10 -top-[124px] opacity-30"
        style={{
          transform: "rotateY(180deg)",
          aspectRatio: 512 / 780
        }}
      >
        <Image src="/images/dots-pattern.svg" layout="fill" alt="" />
      </div>
      <div className="relative z-20 w-[calc(100%-20px)] xl:w-[1138px] mx-2.5 xl:mx-auto flex items-center flex-col p-[64px] rounded-[22px]">
        <h2 className="text-h5 md:text-h4 lg:text-h3 leading-h5 md:leading-h4 lg:leading-h3 gradient-text-1 font-aeonik font-bold mb-6 relative z-10">
          Schedule a live demo
        </h2>
        <p className="text-sm md:text-md lg:text-l leading-sm md:leading-md lg:leading-l relative z-10 text-black max-w-[605px] mx-auto text-center font-jakarta">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
        <div className="relative z-10 flex items-center justify-center mt-8">
          <button className="rounded-lg w-full h-10 relative overflow-hidden px-6">
            <span className="relative z-10 text-white font-jakarta text-sm leading-sm font-semibold">
              Get Started For Free
            </span>
            <ButtonGradient />
          </button>
        </div>

        <div className="w-[1080px] h-[987px] pointer-events-none absolute left-[-440px] top-[-350px]">
          <img src="/images/hero-gradient-1.png" alt="" />
        </div>
        <div className="w-[1080px] h-[987px] pointer-events-none absolute right-[-440px] top-[-350px]">
          <img src="/images/hero-gradient-1.png" alt="" />
        </div>
        <div className="w-[1208px] h-[1031px] pointer-events-none absolute left-[-640px] top-[-150px] z-10 opacity-50">
          <img src="/images/hero-gradient-2.png" alt="" />
        </div>
        <div className="w-[1208px] h-[1031px] pointer-events-none absolute right-[-740px] top-[-150px] z-10 opacity-50">
          <img src="/images/hero-gradient-2.png" alt="" />
        </div>

        <div
          className="rounded-t-[22px] absolute z-[1] left-0 top-0 w-full h-[100px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 58, 255, 1) 0%, rgba(0, 58, 255, 1) 70%, rgba(15, 119, 255, 0) 100%)",
          }}
        />
        <div className="absolute z-[2] left-[3px] top-[3px] w-[calc(100%-6px)] h-[100px] rounded-t-[20px] bg-white" />

        <div
          className="rounded-[22px] absolute z-[2] left-0 bottom-0 w-full h-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.00) -36.17%, #fff 25.31%, rgba(255, 255, 255, 0.00) 100%)",
          }}
        />
      </div>
    </div>
  );
};

export default ScheduleCta;
