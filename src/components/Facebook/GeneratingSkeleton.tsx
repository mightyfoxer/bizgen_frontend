import { FC } from "react";
import { ButtonGradient } from "../Widget";
import { MagicTwoTone } from "../SvgIcons";

const GeneratingSkeleton: FC = () => {
  return (
    <div className="py-3 px-11">
      <div className="">
        <div className="relative p-2 mb-5">
          <ButtonGradient />
          <div className="relative flex items-center justify-center gap-2">
            <MagicTwoTone />
            <span className="text-white text-l font-jakarta font-bold">
              Generating your perfect setup!...
            </span>
          </div>
        </div>
        <ContentLoading />
        <ContentLoading />
      </div>
    </div>
  );
};

export default GeneratingSkeleton;

const ContentLoading = () => {
  return (
    <div className="p-6 flex flex-col gap-6 bg-white rounded-lg mb-6">
      <p className="text-secondary-600 font-jakarta font-medium">Concept #1</p>
      <div className="flex gap-2">
        <div className="w-[58px] h-[58px] rounded-full animate-pulse bg-skeleton" />
        <div className="">
          <div className="rounded-[2px] h-2 w-[160px] animate-pulse bg-skeleton mb-4" />
          <div className="rounded-[2px] h-2 w-[160px] animate-pulse bg-skeleton" />
        </div>
      </div>
      <div className="flex gap-4 flex-col">
        <div className="rounded-[2px] h-2 w-full animate-pulse bg-skeleton" />
        <div className="rounded-[2px] h-2 w-full animate-pulse bg-skeleton" />
        <div className="rounded-[2px] h-2 w-full animate-pulse bg-skeleton" />
      </div>
      <div className="rounded h-[400px] w-full animate-pulse bg-skeleton" />
      <div className="flex items-center gap-2">
        <div className="rounded h-9 w-[100px] animate-pulse bg-skeleton" />
        <div className="rounded h-9 w-[100px] animate-pulse bg-skeleton" />
        <div className="rounded h-9 w-[100px] animate-pulse bg-skeleton" />
        <div className="rounded h-9 w-[100px] animate-pulse bg-skeleton" />
      </div>
    </div>
  );
};
