import { FC } from "react";
import Image from "next/image";
import moment from "moment";
import { FacebookContent } from "@/utils/types";
import { ReactSVG } from "react-svg";
import { RatingStars } from "../Widget";
import ImageGallery from "./ImageGallery";

const FacebookItem: FC<FacebookContent> = ({
  conceptId,
  user,
  content,
  date,
  images,
}) => {
  return (
    <div className="p-6 flex flex-col gap-6 bg-white rounded-lg mb-6 overflow-hidden">
      <p className="text-secondary-600 font-jakarta font-medium">
        Concept #{conceptId}
      </p>
      {/* {user && ( */}
      <div className="flex gap-4 items-center">
        <div className="w-[58px] h-[58px] rounded-full relative overflow-hidden">
          <Image src="/images/default-avatar.png" fill alt="" />
        </div>
        <div>
          <h5 className="text-primary-100 text-xl leading-xl font-bold font-jakarta">
            Jake Santos
          </h5>
          <div className="flex items-center gap-1 text-l text-[#3B3C40] font-jakarta">
            {moment(date).format("DD MMM.")}
            <ReactSVG src="/icons/earth-globe.svg" />
          </div>
        </div>
      </div>
      <p className="text-l font-jakarta text-[#3B3C40]">{content}</p>
      {/* )} */}
      {images && <ImageGallery images={images} />}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[14px]">
          <button className="py-1 px-2 font-jakarta text-primary-100 rounded-lg bg-[#E7EAFF] font-medium">
            Edit
          </button>
          <button className="py-1 px-2 font-jakarta text-primary-100 rounded-lg bg-[#E7EAFF] font-medium">
            Use Bizzy
          </button>
          <button className="py-1 px-2 font-jakarta text-primary-100 rounded-lg bg-[#E7EAFF] font-medium">
            Copy
          </button>
          <button className="py-1 px-2 font-jakarta text-primary-100 rounded-lg bg-[#E7EAFF] font-medium">
            Favorite
          </button>
        </div>
        <div className="">
          <RatingStars rate={4} />
        </div>
      </div>
    </div>
  );
};

export default FacebookItem;
