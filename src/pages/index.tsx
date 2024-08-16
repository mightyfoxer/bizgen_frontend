import HeroVideo from "@/components/HeroVideo";
import MeetBizzy from "@/components/Home/MeetBizzy";
import OurCoreBenefits from "@/components/Home/OurCoreBenefits";
import PricingOffers from "@/components/Home/PricingOffers";
import ScheduleCta from "@/components/Home/ScheduleCta";
import SimplifiedStepProcess from "@/components/Home/SimplifiedStepProcess";
import MarketplaceTools from "@/components/Home/MarketplaceTools";
import Layout from "@/components/Layout";
import { ButtonGradient } from "@/components/Widget";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <div className="pt-[160px] lg:pt-[236px] text-center flex flex-col items-center">
        <h1 className="max-w-[970px] font-aeonik font-bold text-h5 lg:text-h3 mx-auto text-center text-primary-100 leading-h5 lg:leading-h3 px-6">
          Welcome to <span className="text-primary-200">Bizgen</span> create end
          to end business and go to market in 24hrs or less!
        </h1>
        <p className="max-w-[814px] mx-auto text-md lg:text-xl leading-md lg:leading-xl text-primary-200 text-center mt-4 lg:mt-6 font-jakarta font-medium px-5">
          Designed to be a full business in a box solution, taking you from
          ideation to brand over night leveraging the full potential of AI!
        </p>
        <Link href={"#"}>
          <div className="relative px-10 lg:px-[88px] py-3 lg:py-4 my-6 lg:my-9 rounded-lg overflow-hidden">
            <span className="uppercase relative z-10 font-graphik text-md leading-md lg:text-l lg:leading-l font-semibold text-white">
              free client avatar
            </span>
            <ButtonGradient />
          </div>
        </Link>
      </div>
      <HeroVideo />
      <MarketplaceTools />
      <SimplifiedStepProcess />
      <OurCoreBenefits />
      <MeetBizzy />
      <PricingOffers />
      <ScheduleCta />
      <div className="h-20 lg:h-[320px]" />
    </Layout>
  );
}
