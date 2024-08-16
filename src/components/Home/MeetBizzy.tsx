import Image from "next/image";
import { FC } from "react";

const MeetBizzy: FC = () => {
  return (
    <div className="mt-10">
      <h2 className="text-h5 md:text-h4 lg:text-h3 leading-h5 md:leading-h4 lg:leading-h3 font-bold font-montserrat text-center text-primary-100">
        Meet <span className="gradient-text-2">Bizzy</span> your helpfull AI{" "}
        <br />
        Companion
      </h2>
      <p className="text-sm md:text-md lg:text-l leading-sm md:leading-md lg:leading-l text-primary-700 font-jakarta w-full xl:w-[1120px] mx-auto text-center mt-4 lg:mt-10">
        Bizzy is a harmonious blend of Content Management System (CMS) and
        Customer Relationship Management (CRM) tailored to meet and exceed
        modern entrepreneurial demands. At its core, Bizzy endeavors to propel
        your brand into the digital realm with an array of features designed to
        encapsulate your business vision, engage your target clientele, and
        automate crucial business operations. The cornerstone of Bizzy is its
        ability to create a digital “brain” that embodies your business ethos,
        offerings, and ideal client avatars and most importantly in your voice!
      </p>
      <div
        className="grid place-content-center my-10 w-full lg:w-[1080px] relative mx-auto"
        style={{ aspectRatio: 1080 / 680 }}
      >
        <Image src="/images/meet-bizzy-bg.svg" layout="fill" alt="" />
      </div>
    </div>
  );
};

export default MeetBizzy;
