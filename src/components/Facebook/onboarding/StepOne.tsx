import { FC } from "react";
import PurpleBackground from "./PurpleBackground";
import { ArrowLeft } from "@/components/SvgIcons";
import { useRouter } from "next/router";
import { TagHead } from ".";
import { ButtonGradientSecond, InputBox, TextBox } from "@/components/Widget";
import PremiumIntro from "./PremiumIntro";

const StepOne: FC = () => {
  const router = useRouter();
  return (
    <>
      <div className="py-11 px-[64px]">
        <div className="">
          <button className="group">
            <ArrowLeft />
          </button>
        </div>
        <TagHead />
        <p className="text-xl leading-xl font-bold gradient-text-1 mt-7 font-jakarta">
          Get Started
        </p>
        <h2 className="text-[40px] leading-[1.5] font-bold tracking-[-0.8px] max-w-[635px] my-6 text-black font-aeonik">
          Lets take the first steps to building your{" "}
          <span className="gradient-text-1">Business brain</span> and{" "}
          <span className="gradient-text-1">super charging your brand!</span>
        </h2>
        <p className="font-jakarta font-bold text-primary-700">
          As a free trial user, you have access to generate up to 10,000 words.
          To unlock more possibilities and extend your word limit, consider
          upgrading to our{" "}
          <span className="text-primary-300">Pro plan today!</span>
        </p>
        <div className="my-6">
          <InputBox
            label="Name of your business"
            placeholder="Enter your business name"
          />
        </div>
        <div className="">
          <TextBox
            label="Tell us about your business"
            placeholder="Ex: I have a SAAS platform that works in generative AI, helping entrepreneurs connect with businesses and generate leads from creating online content "
          />
        </div>
        <button
          className="relative py-[18px] px-[45px] rounded-[10px] text-xl leading-xl text-white font-bold font-jakarta overflow-hidden group mt-6"
          onClick={() => router.push(`${router.pathname}?step=${2}`)}
        >
          <ButtonGradientSecond />
          <span className="relative">Continue</span>
        </button>
      </div>
      <div className="relative grid place-content-center">
        <PurpleBackground />
        <PremiumIntro />
      </div>
    </>
  );
};

export default StepOne;
