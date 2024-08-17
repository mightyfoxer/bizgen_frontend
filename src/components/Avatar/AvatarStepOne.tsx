import { FC } from "react";
import PurpleBackground from "../PurpleBackground";
import { ButtonGradientSecond, InputBox, TextBox } from "@/components/Widget";
import PremiumIntro from "../PremiumIntro";
import { AvatarTagHead } from ".";

interface AvatarStepProps {
    setCurrentPage: (page: number) => void;
    currentPage: number;
}


const AvatarStepOne: FC<AvatarStepProps> = ({currentPage, setCurrentPage}) => {
    const setPageNext = () => {
        setCurrentPage(currentPage + 1);
    }
    return (
    <>
        <div className="py-11 px-[64px]">
            <AvatarTagHead />
            <p className="text-xl leading-xl font-bold gradient-text-1 mt-7 font-jakarta">
                The Perfect Client Avatar Creator
            </p>
            <h2 className="text-[40px] leading-[1.5] font-bold tracking-[-0.8px] max-w-[635px] my-6 text-black font-aeonik">
                Creating The Ideal Client Avatar For Your Business!
            </h2>
            <p className="font-jakarta font-bold text-primary-700">
                Now that your business is set up, we can create the audience you would like to target your messaging 
                towards with just a few simple questions!
            </p>
            <div className="my-6">
                <InputBox
                    label="Name of your avatar"
                    placeholder="Enter your avatar name"
                    />
            </div>
            <div className="">
                <TextBox
                    label="Tell us about who you would like to target"
                    placeholder="Ex: Solo Entrepreneur that needs help marketing their business, dealing with overwhelm and burnout."
                    />
            </div>
            <div className="my-6">
                <InputBox
                    label="Income Bracket (Optional)"
                    placeholder="Ex: 1500000"
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

export default AvatarStepOne;
