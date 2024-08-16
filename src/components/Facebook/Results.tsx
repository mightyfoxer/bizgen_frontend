import { FC, useState } from "react";
import { HeartIconFill, MagicTwoTone } from "../SvgIcons";
import FacebookItem from "./FacebookItem";

const Results: FC = () => {
  const [tab, setTab] = useState<"result" | "favorite">("result");
  return (
    <div className="px-10 py-8">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-[14px] mb-5">
          <button
            className={`p-2 rounded-lg flex items-center justify-center gap-2 font-jakarta font-semibold ${
              tab === "result"
                ? "bg-primary-200 text-white"
                : "bg-[#E7EAFF] text-primary-100"
            }`}
            onClick={() => setTab("result")}
          >
            <MagicTwoTone color={tab === "result" ? "white" : "#0B0A10"} />{" "}
            Result
          </button>
          <button
            className={`p-2 rounded-lg flex items-center justify-center gap-2 font-jakarta font-semibold ${
              tab === "favorite"
                ? "bg-primary-200 text-white"
                : "bg-[#E7EAFF] text-primary-100"
            }`}
            onClick={() => setTab("favorite")}
          >
            <HeartIconFill color={tab === "result" ? "white" : "#0B0A10"} />{" "}
            Favorite
          </button>
        </div>
        <p className="text-primary-700 font-jakarta text-l">5 Results</p>
      </div>

      <FacebookItem
        conceptId={1}
        date={new Date("2023-05-12")}
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
        images={[
          "/images/generated/1.png",
          "/images/generated/4.png",
          "/images/generated/2.png",
          "/images/generated/5.png",
          "/images/generated/3.png",
        ]}
      />
      {/* <FacebookItem
        conceptId={1}
        date={new Date("2023-05-12")}
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
        images={[
          "/images/generated/1.png",
          "/images/generated/2.png",
          "/images/generated/3.png",
          "/images/generated/4.png",
          "/images/generated/5.png",
        ]}
      /> */}
    </div>
  );
};

export default Results;
