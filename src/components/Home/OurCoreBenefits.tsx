import Image from "next/image";
import { FC } from "react";

const OurCoreBenefits: FC = () => {
  return (
    <div className="my-20 lg:my-[160px]">
      <h2 className="text-h5 md:text-h4 lg:text-h3 leading-h5 md:leading-h4 lg:leading-h3 font-aeonik font-bold text-center tracking-[-0.96px] text-primary-100">
        Our Core Benefits
      </h2>
      <p className="text-sm md:text-md lg:text-l leading-sm md:leading-md lg:leading-l font-jakarta text-center max-w-[555px] mx-auto mt-4 lg:mt-6 text-primary-100">
        Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis.
      </p>
      <div className="flex flex-wrap gap-3 justify-center items-center mt-[60px]">
        <Item
          title="Levaraging the Power of AI"
          description="Harness the full potential of what AI has to offer power the core of all our systems. "
          image="/images/c-ai.png"
        />
        <Item
          title="Agents of Automation"
          description="Leveraging AI agents to create a power house of automation to streamline and work for you 24/7 for optimal results."
          image="/images/c-agent.png"
        />
        <Item
          title="Automation = Time Saved"
          description="Leveraging AI agents to create a power house of automation to streamline and work for you 24/7 for optimal results."
          image="/images/c-time.png"
        />
        <Item
          title="Start profiting right away!"
          description="Сервис работает в полностью автоматическом режиме - вы просто и легко изучаете систематизиро- ванную информацию
          "
          image="/images/c-chart.png"
        />
      </div>
    </div>
  );
};

const Item = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <div className="rounded-lg bg-primary-600 shadow-list-card w-[calc(100%/2-12px)] md:w-[calc(100%/3-12px)] lg:w-[calc(100%/4-12px)] xl:w-[286px] h-[429px] pt-2 md:pt-7 lg:pt-[38px] px-3">
      <div className="flex justify-center scale-75 lg:scale-100">
        <Image src={image} width={111} height={111} alt="" />
      </div>
      <h4 className="mt-0 md:mt-[30px] font-graphik text-l xl:text-xl leading-l xl:leading-xl font-semibold text-secondary-300 text-center">
        {title}
      </h4>
      <p className="text-sm xl:text-l leading-6 font-graphik mt-8 lg:mt-12 xl:mt-[70px] text-secondary-300">
        {description}
      </p>
    </div>
  );
};

export default OurCoreBenefits;
