import { FC } from "react";
import PurpleBackground from "../../PurpleBackground";
import { TagHead } from ".";
import { ButtonGradientSecond, InputBox, TextBox } from "@/components/Widget";
import PremiumIntro from "../../PremiumIntro";

interface StepProps {
  setCurrentPage: (page: number) => void;
  currentPage: number;
}


const StepOne: FC<StepProps> = ({currentPage, setCurrentPage}) => {
  const setPageNext = () => {
    setCurrentPage(currentPage + 1);
  }
  return (
    <>
      <div className="py-11 px-[64px]">
        <TagHead currentPage={currentPage}/>
        <p className="text-xl leading-xl font-bold gradient-text-1 mt-7 font-jakarta">
          Get Started
        </p>
        <h2 className="text-[40px] leading-[1.5] font-bold tracking-[-0.8px] max-w-[635px] my-6 text-black font-aeonik">
          Step One{": "}Let{"’"}s build a profile for your Business and start <br/>
          <span className="gradient-text-1">Supercharging your brand!</span>
        </h2>
        <p className="font-jakarta font-bold text-primary-700">
          We are taking the first steps to building an overview of your business,
          fill out the questions below to move to step two!
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
          onClick={setPageNext}
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
