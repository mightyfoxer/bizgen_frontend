import React from "react";
import { ReactSVG } from "react-svg";

const MarketplaceTools = () => {
  return (
    <div className="mt-[100px] lg:mt-[208px] flex flex-col items-center">
      <ReactSVG src="/icons/bolt@lg.svg" className="scale-75 lg:scale-100" />
      <h2 className="text-h5 md:text-h4 lg:text-h3 leading-h5 md:leading-h4 lg:leading-h3 gradient-text-1 font-aeonik font-bold my-4 lg:my-6">
        Marketplace of tools
      </h2>
      <p className="text-black text-sm md:text-md lg:text-l leading-sm md:leading-md lg:leading-l max-w-[555px] mx-auto text-center font-jakarta">
        Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. <br />
      </p>
      <div className="w-full xl:w-[1180px] mx-auto mt-5 lg:mt-9 pt-9">
        <div className="flex flex-wrap w-[calc(100%-40px)] gap-5 mx-5">
          {list.map((item, key) => (
            <div
              key={key}
              className="pt-[18px] pl-4 pb-2 rounded-lg bg-primary-600 shadow-list-card w-[calc(100%/2-12px)] md:w-[calc(100%/4-16px)] lg:w-[calc(100%/5-16px)] xl:w-[calc(100%/6-18px)]"
            >
              <div className="w-[34px] h-[34px] grid place-content-center">
                <ReactSVG src={item.icon} className="h-6 w-6" />
              </div>
              <p className="text-sm md:text-md lg:text-l leading-sm md:leading-md lg:leading-l text-secondary-300 font-jakarta mt-1">
                {item.title.map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i === 0 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketplaceTools;

const list = [
  {
    title: ["Businesess", "Ideation"],
    icon: "/icons/business.svg",
  },
  {
    title: ["Client Avatar", "Generator"],
    icon: "/icons/client.svg",
  },
  {
    title: ["CRM", "Integration"],
    icon: "/icons/crm.svg",
  },
  {
    title: ["Content", "Scheduler"],
    icon: "/icons/scheduler.svg",
  },
  {
    title: ["Chatbot", "Generator"],
    icon: "/icons/chatbot.svg",
  },
  {
    title: ["Product", "Ideation"],
    icon: "/icons/product.svg",
  },
  {
    title: ["Email", "Scription"],
    icon: "/icons/mail.svg",
  },
  {
    title: ["Ad Script", "Generation"],
    icon: "/icons/megaphone.svg",
  },
  {
    title: ["AI Powered", "Funnel Builder"],
    icon: "/icons/automation.svg",
  },
  {
    title: ["Social Media", "Strategy planning"],
    icon: "/icons/social.svg",
  },
  {
    title: ["Webinar", "Scripting"],
    icon: "/icons/scripting.svg",
  },
  {
    title: ["AI VA", "Assistang"],
    icon: "/icons/ai-va.svg",
  },
];
