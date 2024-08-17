import { FC } from "react";
import PurpleBackground from "../../PurpleBackground";
import { ArrowLeft } from "@/components/SvgIcons";
import { TagHead } from ".";
import { ButtonGradientSecond, InputBox, TextBox } from "@/components/Widget";
import PremiumIntro from "../../PremiumIntro";

interface StepProps {
  setCurrentPage: (page: number) => void;
  currentPage: number;
}

const StepTwo: FC<StepProps> = ({currentPage, setCurrentPage}) => {
  const setPageBefore = () => {
    setCurrentPage(currentPage - 1);
  }

  const setPageNext = () => {
    setCurrentPage(currentPage + 1);
  }
  return (
    <>
      <div className="py-11 px-[64px]">
        <div className="">
          <button className="group" onClick={setPageBefore}>
            <ArrowLeft />
          </button>
        </div>
        <TagHead currentPage={currentPage} />
        <p className="text-xl leading-xl font-bold gradient-text-1 mt-7 font-jakarta">
          Let{"'"}s Create Your Business Overview Together!
        </p>
        <h2 className="text-[40px] leading-[1.5] font-bold tracking-[-0.8px] max-w-[635px] my-6 text-black font-aeonik">
          Step Two{": "} Share What Makes Your Business Unique!
        </h2>
        <p className="font-jakarta font-bold text-primary-700">
          Let's discover what you think makes your business unique compared to the competition, 
          this will help Bizzy create a better overview!
        </p>
        <div className="my-6">
          <TextBox
            label="Tell us about your products and services you offer to clients"
            placeholder="Ex: Consulting services, Ebooks, Online Learning Courses on Ai, etc..."
          />
        </div>
        <div className="my-6">
          <TextBox
            label="Tell us about what makes your business unique: Certifications, Experiences, Skill sets (Optional)"
            placeholder="Ex: PHD in Psychology, Certified Hypnotherapist, etc..."
          />
        </div>
        <div className="my-6">
          <InputBox
            label="Business Website (Optional)"
            placeholder="Must Include https/http, Ex: https://bizgen.io"
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

export default StepTwo;
