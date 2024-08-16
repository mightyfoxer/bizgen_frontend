import { FC, useState } from "react";
import moment from "moment";
import {
  ClipboardIconFill,
  ClipboardIconTwoTone,
  ExportCircleIconFill,
  HeartIconFill,
  HeartIconTwoTone,
  HistoryIconFill,
  HistoryIconTwoTone,
} from "../SvgIcons";
import { RatingStars } from "../Widget";

const ArchiveDocument: FC = () => {
  const [tab, setTab] = useState("all");

  return (
    <div className="py-5 px-6 bg-primary-600 h-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[14px]">
          <button
            className={`p-2 flex items-center gap-2 font-jakarta text-l leading-l rounded-lg font-semibold ${
              tab === "all"
                ? "bg-primary-200 text-white"
                : "bg-[#E7EAFF] text-primary-100"
            }`}
            onClick={() => setTab("all")}
          >
            {tab === "all" ? <ClipboardIconTwoTone /> : <ClipboardIconFill />}
            All
          </button>
          <button
            className={`p-2 flex items-center gap-2 font-jakarta text-l leading-l rounded-lg font-semibold ${
              tab === "history"
                ? "bg-primary-200 text-white"
                : "bg-[#E7EAFF] text-primary-100"
            }`}
            onClick={() => setTab("history")}
          >
            {tab === "history" ? <HistoryIconTwoTone /> : <HistoryIconFill />}
            History
          </button>
          <button
            className={`p-2 flex items-center gap-2 font-jakarta text-l leading-l rounded-lg font-semibold ${
              tab === "saved"
                ? "bg-primary-200 text-white"
                : "bg-[#E7EAFF] text-primary-100"
            }`}
            onClick={() => setTab("saved")}
          >
            {tab === "saved" ? <HeartIconTwoTone /> : <HeartIconFill />}
            Saved
          </button>
        </div>
        <button className="flex items-center gap-2 font-jakarta font-semibold text-lg leading-lg">
          <ExportCircleIconFill />
          Share
        </button>
      </div>
      <div className="mt-[18px]">
        <DocumentItem
          id="4g4we313"
          content="<p>Dear Liza</p><br/><p>Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis <br/>
          Condimentum lobortis. Ut commodo efficitur neque. Ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.<br/><br/>Regards<br/>Gerald Sanchez</p>"
          createdAt={new Date().getTime()}
          no={1}
          rate={4}
        />
        <div className="h-[18px]" />
        <DocumentItem
          id="3g4we313"
          content="<p>Dear Liza</p><br/><p>Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis <br/>
          Condimentum lobortis. Ut commodo efficitur neque. Ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.<br/><br/>Regards<br/>Gerald Sanchez</p>"
          createdAt={new Date().getTime()}
          no={2}
          rate={4}
        />
        <div className="h-[18px]" />
      </div>
    </div>
  );
};

export default ArchiveDocument;

interface Document {
  id: string;
  createdAt: number;
  no: number;
  content: string;
  rate: number;
}

const DocumentItem: FC<Document> = ({ id, createdAt, no, content, rate }) => {
  const borderColors = ["#0F77FF", "#FF1389", "#00FF5D"];
  return (
    <div
      className="rounded-lg p-6 bg-white border-2"
      style={{
        borderColor: borderColors[no % 3 - 1],
      }}
    >
      <div className="flex flex-col gap-[18px] font-jakarta">
        <div className="flex items-center justify-between text-lg leading-lg text-secondary-600">
          <div className="">{moment(createdAt).fromNow()}</div>
          <div className="">{no}/5</div>
        </div>
        <div
          className="text-primary-100 font-medium text-l leading-l"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <div className="flex items-center font-jakarta justify-between">
          <div className="flex items-center gap-[14px] font-medium">
            <button className="bg-[#E7EAFF] rounded-lg text-primary-100 px-2 py-1">
              Save
            </button>
            <button className="bg-[#E7EAFF] rounded-lg text-primary-100 px-2 py-1">
              Copy
            </button>
            <button className="bg-[#E7EAFF] rounded-lg text-primary-100 px-2 py-1">
              Like
            </button>
          </div>
          <div className="">
            <RatingStars rate={4} />
          </div>
        </div>
      </div>
    </div>
  );
};
