import { FC } from "react";
import {
  ArrowLeft,
  CircleCheckIcon,
  ClipboardIconTwoTone2,
  CrawnColoredIcon2,
  CrawnIconTwoTone,
  PasteIconFill,
} from "@/components/SvgIcons";
import { TagHead } from ".";
import { ButtonGradient, ButtonGradientSecond } from "@/components/Widget";
import Image from "next/image";
import { useModal } from "@/contexts/ModalProvider";
import { ReactSVG } from "react-svg";

const StepThree: FC = () => {
  const { openUpgradeMiniModal } = useModal();
  return (
    <>
      <div className="py-11 px-[64px]">
        <div className="">
          <button className="group">
            <ArrowLeft />
          </button>
        </div>
        <TagHead />
        <p className="text-xl leading-xl font-bold gradient-text-1 mt-7 font-jakarta relative inline-block">
          Business Overview Complete!{" "}
          <span className="absolute -right-6 top-1">
            <CircleCheckIcon />
          </span>
        </p>
        <h2 className="text-[40px] leading-[1.5] font-bold tracking-[-0.8px] max-w-[700px] my-6 text-black font-aeonik">
          <span className="gradient-text-1">Congratulations!</span>
          {" Your Ideal Business Overview is Ready to Meet the World!"}
        </h2>
        <p className="font-jakarta font-bold text-primary-700 max-w-[700px]">
          Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </p>
        <button className="text-xl leading-xl font-jakarta font-bold rounded-[10px] text-primary-100 py-[18px] px-[45px] border mt-6 border-primary-100">
          Refine Business Overview Further
        </button>
        <div className="flex items-center justify-between p-6 bg-primary-600 rounded-lg mt-9 mb-6">
          <div className="flex items-center gap-2">
            <Image
              src={"/images/logo@head.png"}
              width={24}
              height={24}
              alt=""
            />
            <p className="gradient-text-1 text-2xl font-aeonik font-bold">
              {"Create Your Perfect Avatar! It's Free"}
            </p>
          </div>
          <button className="relative overflow-hidden rounded-[10px] text-white text-xl leading-xl font-bold font-jakarta py-3 px-9 group">
            <ButtonGradient />
            <span className="relative">Create Avatar</span>
          </button>
        </div>
        <div className="flex items-center justify-between p-6 bg-[#FFF8F2] rounded-lg mt-9 mb-6">
          <div className="flex items-center gap-2">
            <CrawnColoredIcon2 className="w-6 h-6" />
            <p className="text-primary-100 font-aeonik font-bold text-2xl">
              {"Create Your Brandina Guide?"}
            </p>
          </div>
          <button
            className="relative overflow-hidden rounded-[10px] text-white text-xl leading-xl font-bold font-jakarta py-3 px-9 group"
            onClick={openUpgradeMiniModal}
          >
            <ButtonGradientSecond isAnimation />
            <div className="relative flex gap-2.5 items-center justify-center">
              Create Branding Guide
              <CrawnIconTwoTone />
            </div>
          </button>
        </div>
      </div>
      <div className="relative bg-primary-600 px-5 border border-l border-secondary-600 h-screen overflow-hidden">
        <div className="flex items-center justify-between pt-8">
          <button className="flex gap-2 items-center bg-[#E7EAFF] rounded-lg p-2 font-jakarta font-semibold">
            <ClipboardIconTwoTone2 />
            Edit
          </button>
          <button className="flex gap-2 items-center bg-[#E7EAFF] rounded-lg p-2 font-jakarta font-semibold">
            <ReactSVG src="/icons/import@gradient.svg" />
            Export
          </button>
        </div>
        <div className="min-h-[400px] border-2 border-primary-300 mt-[18px] rounded-[10px] overflow-auto relative">
          <div className="py-2 px-6 rounded-t-lg overflow-hidden absolute left-0 top-0 w-full z-10">
            <ButtonGradient />
            <div className="relative flex gap-2 items-center text-white font-jakarta font-bold text-xl z-20">
              <PasteIconFill className="relative z-10" />
              You can save this branding or generate a new one
            </div>
          </div>
          <div
            className="py-20 px-6 h-[calc(100vh-220px)] relative"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
        <div className="absolute left-0 bottom-0 w-full p-6 border-t border-secondary-600 bg-white">
          <button className="relative rounded-lg py-[18px] w-full overflow-hidden">
            <ButtonGradient />
            <span className="relative font-aeonik font-bold text-2xl text-white">
              Generate New Business
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default StepThree;

const content = `<div class="content-box">
<h2>
  Based on the overview of your business, we recommend the following profile
  that aligns well with your company's identity and objectives.
</h2>
<h5>Business Description for Your Clothing Business <br/><br/></h5>
<p>
Core Offering and Unique Value Proposition <br/><br/> Your business focuses on print-on-demand (POD) t-shirts,
  utilizing AI for creating unique and innovative designs. This approach
  allows for a wide variety of designs that can be quickly adapted to market
  trends and customer preferences. The use of AI in design sets you apart from
  competitors, providing a unique blend of technology and fashion. Target
  Market and Industry Insights Your target market likely includes young adults
  and tech-savvy individuals who appreciate unique, custom-designed apparel.
  This demographic values personal expression through clothing and is drawn to
  the novelty of AI-generated designs. You might find a strong customer base
  in urban areas and online communities centered around technology, fashion,
  and design. Customer Pain Points and Solutions Customers often struggle to
  find unique and personalized t-shirt designs. Your AI-designed t-shirts
  provide a solution by offering one-of-a-kind designs that cater to
  individual tastes and preferences. The POD model ensures that customers
  receive fresh designs and can even request customizations, enhancing the
  personal connection with your products. Customer Engagement and Feedback
  Engagement likely occurs primarily online, through social media and your
  e-commerce platform. Gathering customer feedback through these channels, as
  well as through post-purchase surveys, can provide insights into design
  preferences and customer satisfaction. Business Goals and Growth Aspirations
  Short-term goals may include establishing a robust online presence and
  building a loyal customer base. Long-term, you might aim to expand your
  product line beyond t-shirts, incorporate more advanced AI in design
  processes, and collaborate with known artists or influencers. Detailed
  Customer Demographics Ideal customers might be in the age range of 18-35, of
  any gender, located in urban areas or tech hubs, with a mid-range income
  level. They are likely to be employed in creative or tech industries and
  have a keen interest in fashion and technology. Business Values and Ethics
  Your business values innovation, creativity, and customer satisfaction.
  Ethically, you might prioritize sustainable and ethical production
  practices, ensuring that your POD t-shirts are not only unique but also
  environmentally responsible. Customer Success Stories You can showcase
  stories where customers found exactly what they were looking for in your
  designs, or how a custom AI-generated design made a special occasion more
  memorable. Marketing and Sales Challenges Challenges may include standing
  out in a crowded online fashion market and educating potential customers
  about the benefits of AI-designed apparel. Your marketing strategy could
  focus on showcasing the uniqueness and personalization aspect of your
  products. Customer Relationship Management An effective CRM system would be
  essential for managing customer interactions, tracking orders, and gathering
  feedback. Integrating a CRM with your e-commerce platform can streamline
  customer service and improve the buying experience. Brand Perception and
  Positioning You might want your brand to be perceived as innovative,
  cutting-edge, and customer-centric. Positioning yourself at the intersection
  of technology and fashion can appeal to a market segment that values both.
  Feedback and Improvement Mechanisms Regularly seeking and implementing
  customer feedback can be a cornerstone of your business, helping to refine
  designs and customer experience continuously. Potential Products and
  Services Limited edition AI-designed t-shirts. Custom design services for
  individual customers. Collaboration lines with digital artists or
  influencers. Expansion into other apparel items like hoodies, hats, or bags.
</p>
</div>
`;
