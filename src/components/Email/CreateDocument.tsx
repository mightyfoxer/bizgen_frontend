import React, { FC } from "react";
import Image from "next/image";
import { ButtonGradientSecond } from "../Widget";
import { DownLine, MagicTwoTone } from "../SvgIcons";

const CreateDocument: FC = () => {
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="py-4 pl-11 pr-6">
      <div className="flex items-center justify-between">
        <h3 className="font-aeonik font-bold text-primary-100 text-2xl">
          Current Avatar
        </h3>
        <div className="flex items-center gap-2 bg-[#F4F6FF] py-3 px-[14px] rounded-[10px] cursor-pointer">
          <div className="flex items-center gap-1.5">
            <div className="relative rounded-full h-8 w-8 overflow-hidden">
              <ButtonGradientSecond />
              <Image
                src="/images/default-avatar.png"
                className="m-0.5 relative"
                width={28}
                height={28}
                objectFit="cover"
                alt=""
              />
            </div>
            <span className="gradient-text-2 relative z-10 font-aeonik font-bold text-2xl">
              Avatar Sam
            </span>
          </div>
          <button>
            <DownLine color="#0B0A10" />
          </button>
        </div>
      </div>
      <form onSubmit={onSubmit} className="grid gap-[30px] mt-[30px] pb-[160px]">
        <div className="">
          <label
            className="flex justify-between items-center"
            htmlFor="recipient"
          >
            <div className="text-primary-200 font-jakarta text-l leading-l font-bold">
              Recipient
            </div>
            <div className="font-jakarta font-semibold text-sm text-primary-700">
              Optional
            </div>
          </label>
          <input
            className="w-full py-2.5 px-4 border border-secondary-600 text-black placeholder:text-secondary-600 font-jakarta font-semibold rounded-md mt-2"
            id="recipient"
            placeholder="Campaign Launch"
          />
        </div>
        <div className="">
          <label
            className="flex justify-between items-center"
            htmlFor="subject-line"
          >
            <div className="text-primary-200 font-jakarta text-l leading-l font-bold">
              Email Subject Line
            </div>
            <div className="font-jakarta font-semibold text-sm text-primary-700">
              0/100
            </div>
          </label>
          <input
            className="w-full py-2.5 px-4 border border-secondary-600 text-black placeholder:text-secondary-600 font-jakarta font-semibold rounded-md mt-2"
            id="subject-line"
            placeholder="Campaign Launch"
          />
        </div>
        <div className="">
          <label
            className="flex justify-between items-center"
            htmlFor="content"
          >
            <div className="text-primary-200 font-jakarta text-l leading-l font-bold">
              Key Email Content Points
            </div>
            <div className="font-jakarta font-semibold text-sm text-primary-700">
              0/600
            </div>
          </label>
          <textarea
            className="w-full py-2.5 px-4 border border-secondary-600 text-black placeholder:text-secondary-600 font-jakarta font-semibold rounded-md mt-2 min-h-[160px]"
            id="content"
            placeholder="This field can be used to input the main points or topics to be covered in the email."
          />
        </div>
        <div className="">
          <label
            className="flex justify-between items-center"
            htmlFor="keywords"
          >
            <div className="text-primary-200 font-jakarta text-l leading-l font-bold">
              Keywords to include
            </div>
          </label>
          <input
            className="w-full py-2.5 px-4 border border-secondary-600 text-black placeholder:text-secondary-600 font-jakarta font-semibold rounded-md mt-2"
            id="keywords"
            placeholder="Campaign, Welcome Email, Informative..."
          />
        </div>
        <div className="overflow-x-scroll w-full flex -mt-1.5 pb-3 custom-scroll">
          <div className="flex gap-2 text-primary-100 font-jakarta items-center">
            <div className="p-6 rounded-[14px] bg-[#EEF8FF] w-[415px]">
              <div className="rounded-lg p-2 bg-[#C5E9FF] text-lg inline-block font-semibold">
                Campaign Email
              </div>
              <p className="text-sm leading-sm mt-[14px]">
                Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>
            <div className="p-6 rounded-[14px] bg-[#FFD4D1] w-[415px]">
              <div className="rounded-lg p-2 bg-[#FFAEA9] text-lg inline-block font-semibold">
                Welcome Email
              </div>
              <p className="text-sm leading-sm mt-[14px]">
                Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <label
            className="flex justify-between items-center"
            htmlFor="tone-of-voice"
          >
            <div className="text-primary-200 font-jakarta text-l leading-l font-bold">
              Tone of Voice
            </div>
          </label>
          <input
            className="w-full py-2.5 px-4 border border-secondary-600 text-black placeholder:text-secondary-600 font-jakarta font-semibold rounded-md mt-2"
            id="tone-of-voice"
            placeholder="Professional, Casual, Bold"
          />
        </div>
        <button className="p-6 rounded-lg relative leading-lg overflow-hidden" type="submit">
          <ButtonGradientSecond />
          <div className="flex gap-2 relative font-jakarta text-h6 leading-h6 font-bold justify-center items-center text-white">
            Generate Campaign <MagicTwoTone />
          </div>
        </button>
      </form>
    </div>
  );
};

export default CreateDocument;
