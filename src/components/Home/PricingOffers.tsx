import React, { FC } from "react";
import { ReactSVG } from "react-svg";
import { ButtonGradient } from "../Widget";

const PricingOffers = () => {
  return (
    <div className="mt-[208px] flex flex-col items-center">
      <ReactSVG src="/icons/clip@lg.svg" className="scale-75 lg:scale-100" />
      <h2 className="text-h5 md:text-h4 lg:text-h3 leading-h5 md:leading-h4 lg:leading-h3 gradient-text-1 font-aeonik font-bold my-6 text-center">
        Check out our full price offer
      </h2>
      <p className="text-black text-sm md:text-md lg:text-l leading-sm md:leading-md lg:leading-l only:max-w-[555px] mx-auto text-center font-jakarta">
        Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis
      </p>
      <div className="w-full px-6 xl:w-[1180px] mx-auto mt-[60px] lg:mt-[96px]">
        <div className="grid grid-cols-4 gap-4 xl:gap-6">
          {PRICING_LIST.map((item, key) => (
            <PricingItem key={key} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingOffers;

interface PricingItemProps {
  title: string;
  description: string;
  price: number;
  priceName: string;
  featuresTitle: string;
  features: string[];
  isInModal?: boolean;
}

export const PricingItem: FC<PricingItemProps> = ({
  title,
  description,
  price,
  priceName,
  featuresTitle,
  features,
  isInModal,
}) => {
  return (
    <div className={`p-[25px] rounded-xl relative overflow-hidden`}>
      {price === 12 ? (
        <ButtonGradient />
      ) : (
        <>
          {isInModal ? (
            <ButtonGradient className="opacity-40 rotate-180" />
          ) : (
            <div className="absolute left-0 top-0 bg-secondary-600 w-full h-full" />
          )}
        </>
      )}
      <div className="absolute left-[1px] top-[1px] w-[calc(100%-2px)] h-[calc(100%-2px)] bg-bg-light rounded-[11px]" />
      <div className="relative">
        <div
          className={`font-jakarta ${
            !isInModal ? "text-l leading-l" : "text-2xl"
          } font-bold ${price !== 12 ? "text-primary-100" : "gradient-text-1"}`}
        >
          {title}
        </div>
        <p className="font-jakarta text-md leading-md text-primary-700 min-h-[65px] mt-2">
          {description}
        </p>
        <div className="flex gap-2 items-center">
          <div className="text-[30px] leading-10 font-helvetica tracking-[-0.9px] font-black">
            {price === 0 ? "Free" : `$${price}`}
          </div>
          <div
            className={`${
              !isInModal ? "font-inter" : "font-inter"
            } text-xs leading-4 max-w-[120px] ${
              price === 12 ? "text-primary-700" : ""
            }`}
          >
            {priceName}
          </div>
        </div>
        <button className="mt-4 lg:mt-8 rounded-lg w-full h-10 relative overflow-hidden">
          {price !== 12 ? (
            <span className="relative z-10 gradient-text-1 font-jakarta text-sm leading-sm font-semibold px-8">
              Get Started
            </span>
          ) : (
            <span className="relative z-10 text-white font-jakarta text-sm leading-sm font-semibold px-8">
              Get Started
            </span>
          )}
          <ButtonGradient />
          {price !== 12 && (
            <div className="absolute w-[calc(100%-2px)] h-[calc(100%-2px)] left-[1px] top-[1px] bg-bg-light z-[3px] rounded-[7px]"></div>
          )}
        </button>
        <p className="text-primary-700 text-sm leading-sm font-jakarta mt-4 lg:mt-8">
          {featuresTitle}:
        </p>
        <ul className="flex flex-col gap-1 mt-1">
          {features.map((list, index) => (
            <li
              className="flex items-center gap-2 font-jakarta text-sm leading-sm text-primary-700"
              key={index}
            >
              <ReactSVG src="/icons/check@sm.svg" />
              {list}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const PRICING_LIST = [
  {
    title: "Starter",
    description: "For anyone just getting started with motion.",
    price: 0,
    priceName: "",
    featuresTitle: "Key features",
    features: [
      "Invite your whole team",
      "Up to 2 team editors",
      "Unlimited persolan projects",
      "Inline commenting & review",
      "Up to 30 seconds projects",
      "30-day version history",
      "Export up to 1080p, 30fps",
      "Export .mp4, .mov, gif, Lottle",
    ],
  },
  {
    title: "Professional",
    description: "For power users who want access to enhanced",
    price: 12,
    priceName: "Per editor/month billed annually",
    featuresTitle: "Everything in Starter, plus",
    features: [
      "Up to 5 team editors",
      "Unlimited team projects",
      "Unlimited version history",
      "Organize project into folders",
      "Export 4k Ultra HD, 60fps",
      "Export projects up to 5 min long",
    ],
  },
  {
    title: "Organization",
    description: "For teams that want to colaborate all in one place.",
    price: 45,
    priceName: "per editor/month billed annually",
    featuresTitle: "Everithing in Pro, plus",
    features: [
      "Up to 15 team editors",
      "Multiple teams",
      "Rstricted teams",
      "Unified admin and billing",
      "Priority support",
    ],
  },
  {
    title: "Enterprise",
    description: "For organizations that needs full control & support.",
    price: 75,
    priceName: "per editor/month annual billing only",
    featuresTitle: "Everithing in Org, plus",
    features: [
      "Unlimited team editors",
      "SSO+ advanced security",
      "Dedicated support",
      "Hands-on rollout & training",
    ],
  },
];
