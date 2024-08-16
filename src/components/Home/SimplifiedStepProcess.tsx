import Image from "next/image";
import { FC, ReactNode, CSSProperties } from "react";
import { ReactSVG } from "react-svg";

const SimplifiedStepProcess: FC = () => {
  return (
    <div className="mt-[166px] pb-20">
      <h2 className="text-h5 md:text-h4 lg:text-h3 leading-h5 md:leading-h4 lg:leading-h3 font-bold font-montserrat text-center text-primary-100">
        Simplified{" "}
        <span className="gradient-text-2">
          5-Step
          <br /> Process
        </span>
      </h2>
      <p className="text-sm md:text-md lg:text-l leading-sm md:leading-md lg:leading-l mt-4 lg:mt-6 max-w-[555px] mx-auto text-center font-jakarta px-5 text-primary-100">
        Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis.
      </p>
      <div className="flex flex-row-reverse md:flex-col justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-[60px] md:gap-[80px] xl:gap-[128px] mt-20 mx-6">
          <CardItem
            number={2}
            title={
              <>
                Create Ideal Client
                <br />
                Avatar
              </>
            }
            icon="/icons/s-robot.svg"
            tail={
              <div
                className="absolute w-[100px] xl:w-[125px] -left-[105px] md:left-auto right-auto md:-right-7 lg:-right-10 xl:-right-[60px] -top-2 sm:-top-6 md:top-[84px] rotate-90 md:rotate-0"
                style={{
                  aspectRatio: 125 / 230,
                }}
              >
                <Image src="/images/dash-line-2.svg" layout="fill" alt="" />
              </div>
            }
            style={{ zIndex: 12 }}
          />
          <CardItem
            number={4}
            title={
              <>
                Content Generator
                <br />
                Marketplace
              </>
            }
            icon="/icons/s-content.svg"
            tail={
              <div
                className="absolute w-10 xl:w-[48px] -left-10 md:left-auto right-auto md:right-10 lg:-right-10 xl:-right-[50px] top-[64px] sm:top-12 md:top-[66px] rotate-90 md:rotate-0"
                style={{
                  aspectRatio: 48 / 262,
                }}
              >
                <Image src="/images/dash-line-4.svg" layout="fill" alt="" />
              </div>
            }
            style={{ zIndex: 14 }}
          />
          {/* <div className="w-[620px] lg:w-[655px] xl:w-[745px] h-[230px] lg:h-[256px] xl:h-[276px] absolute z-[2] mt-[200px] left-1/2 -translate-x-1/2">
          <Image src="/images/dashed-line.svg" layout="fill" alt="" />
        </div> */}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-[60px] lg:gap-[80px] xl:gap-[128px] mt-10 lg:mt-[60px] mx-6">
          <CardItem
            number={1}
            title={
              <>
                Build your
                <br />
                business
              </>
            }
            icon="/icons/s-build.svg"
            tail={
              <div
                className="absolute w-[140px] xl:w-[160px] -right-[80px] md:-right-8 lg:-right-10 xl:-right-[60px] top-[56px] md:-top-[84px] -rotate-90 md:rotate-0"
                style={{
                  aspectRatio: 160 / 180,
                }}
              >
                <Image src="/images/dash-line-1.svg" layout="fill" alt="" />
              </div>
            }
          />
          <CardItem
            number={3}
            title={
              <>
                Generate Sales
                <br />
                Funnels
              </>
            }
            icon="/icons/s-generate.svg"
            tail={
              <div
                className="absolute w-20 xl:w-[89px] -right-[60px] sm:-right-8 lg:-right-10 xl:-right-[60px] top-4 md:-top-[160px] rotate-90 md:rotate-0"
                style={{
                  aspectRatio: 89 / 250,
                }}
              >
                <Image src="/images/dash-line-3.svg" layout="fill" alt="" />
              </div>
            }
            style={{ zIndex: 13 }}
          />
          <CardItem
            number={5}
            title={
              <>
                Profit Generating
                <br />
                Machine
              </>
            }
            icon="/icons/s-profit.svg"
            style={{
              zIndex: 15,
            }}
          />
        </div>
      </div>
    </div>
  );
};

const CardItem = ({
  number,
  title,
  icon,
  tail,
  style,
}: {
  number: number;
  title: ReactNode;
  icon: string;
  style?: CSSProperties;
  tail?: ReactNode;
}) => {
  return (
    <div
      className="relative rounded-lg py-4 lg:py-6 px-2.5 flex flex-col items-center w-[140px] sm:w-[180px] md:w-[260px]  shadow-list-card z-10"
      style={style}
    >
      <div className="absolute z-[2] left-0 top-0 w-full h-full bg-primary-600 rounded-lg" />
      <div className="absolute z-10 bg-[#C5E9FF] rounded-full -left-[18.7px] -top-[14px] w-8 lg:w-10 xl:w-12 h-8 lg:h-10 xl:h-12 text-sm lg:text-l xl:text-h6 font-bold font-aeonik grid place-content-center">
        {number}
      </div>
      <ReactSVG src={icon} className="relative z-10 scale-75 lg:scale-100" />
      <p className="relative z-10 text-sm lg:text-xl leading-sm lg:leading-xl mt-2 text-center font-jakarta font-semibold text-primary-100">
        {title}
      </p>
      {tail}
    </div>
  );
};

export default SimplifiedStepProcess;
