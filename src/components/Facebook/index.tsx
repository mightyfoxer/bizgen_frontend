import React, { ChangeEvent, useState, useEffect } from "react";
import Layout from "../Layout";
import Topbar from "../Topbar";
import { ButtonGradientSecond } from "../Widget";
import Image from "next/image";
import {
  CloseIcon,
  DownLine,
  FacebookIconFill,
  InfoIconSm,
  MagicTwoTone,
  NoteFavoriteIconTwoTone,
  PlusCircleFill,
} from "../SvgIcons";
import ToggleSwitch from "../ToggleSwitch/indext";
import ConnectButton from "./ConnectButton";
import { useModal } from "@/contexts/ModalProvider";
import { FacebookImageUploadModal, GenerateImageModal, UpgradeMiniModal } from "./Modal";
import GeneratingSkeleton from "./GeneratingSkeleton";
import FacebookItem from "./FacebookItem";
import Results from "./Results";

export default function FacebookPage() {
  const [switchAds, setSwitchAds] = useState(false);
  const {
    isFacebookImageUploadModal,
    openFacebookImageUploadModal,
    isGenerateImageModal
  } = useModal();

  const [selectedFile, setSelectedFile] = useState<File[]>([]);

  const handleFileChange = (files: File[]) => {
    if (files) {
      setSelectedFile(files);
    }
  };

  useEffect(() => {
    console.log(selectedFile);
  }, [selectedFile]);

  const files = selectedFile.map((file, key) => (
    <li key={key}>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-[14px]">
          <Image
            src="/images/demo-watch.jpg"
            width={44}
            height={29}
            className="rounded"
            alt=""
          />
          <p className="text-primary-300 font-semibold font-jakarta">
            {file.name}
          </p>
        </div>
        <button>
          <CloseIcon />
        </button>
      </div>
    </li>
  ));

  const [isGenerating, setIsGenerating] = useState(true);
  const [results, setResults] = useState([]);

  const handleGenerating = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <>
      <Layout signed>
        <Topbar
          title="Facebook Post"
          description="Generate email campaign that will captivate your readers."
          action={
            <div className="flex items-center gap-2 bg-[#FFF0EF] py-3 px-[14px] rounded-[10px] cursor-pointer">
              <div className="flex items-center gap-1.5">
                <div className="relative rounded-full h-8 w-8 overflow-hidden">
                  <ButtonGradientSecond />
                  <Image
                    src="/images/default-avatar.png"
                    className="m-0.5 relative"
                    width={28}
                    height={28}
                    objectFit="cover"
                    alt=""
                  />
                </div>
                <span className="gradient-text-2 relative z-10 font-aeonik font-bold text-2xl">
                  Avatar Sam
                </span>
              </div>
              <button>
                <DownLine color="#FF1389" />
              </button>
            </div>
          }
        />
        <div className="flex min-h-screen">
          <div className="w-1/2 bg-white py-5 px-9">
            <div className="grid gap-[30px] pb-20">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl text-primary-100 font-bold font-aeonik">
                  Switch to Facebook Ads?
                </h2>
                <ToggleSwitch
                  isChecked={switchAds}
                  size="medium"
                  color="blue"
                  onChange={() => setSwitchAds(!switchAds)}
                />
              </div>
              <div className="">
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-center gap-2">
                    <FacebookIconFill color="#0F77FF" />
                    <p className="text-2xl font-bold text-primary-100 font-aeonik">
                      Social Profile
                    </p>
                  </div>
                  <ConnectButton />
                </div>
                <p className="font-jakarta text-primary-700 flex items-center gap-2 mt-2">
                  <InfoIconSm />
                  Connect your social for better preview
                </p>
              </div>
              <div className="">
                <div className="flex items-center justify-between">
                  <p className="font-jakarta text-xl leading-xl font-bold text-primary-200">
                    What do you want to write about?
                  </p>
                  <p className="font-jakarta text-xl leading-xl text-secondary-600">{`(0/100)`}</p>
                </div>
                <input
                  className="rounded-md border border-secondary-600 px-4 py-2.5 font-jakarta font-semibold text-l leading-l w-full mt-2"
                  placeholder="Upcoming event, discount season, launch..."
                />
              </div>
              <div className="">
                <div className="flex items-center justify-between">
                  <p className="font-jakarta text-xl leading-xl font-bold text-primary-200">
                    What are the main points you want to include?
                  </p>
                  <p className="font-jakarta text-xl leading-xl text-secondary-600">{`(0/500)`}</p>
                </div>
                <textarea
                  className="rounded-md border border-secondary-600 px-4 py-2.5 font-jakarta font-semibold text-l leading-l w-full mt-2 min-h-[160px]"
                  placeholder="This filed can be used to input the main points or topics to be covered in the post"
                />
              </div>
              <div className="">
                <div className="flex items-center justify-between">
                  <p className="font-jakarta text-xl leading-xl font-bold text-primary-200">
                    Add Image
                  </p>
                  <button
                    className="cursor-pointer"
                    onClick={openFacebookImageUploadModal}
                  >
                    <PlusCircleFill />
                  </button>
                </div>
                <ul className="grid gap-[14px] mt-6">{files}</ul>
              </div>

              <div className="">
                <div className="flex items-center justify-between">
                  <p className="font-jakarta text-xl leading-xl font-bold text-primary-200">
                    Keywords to include
                  </p>
                </div>
                <input
                  className="rounded-md border border-secondary-600 px-4 py-2.5 font-jakarta font-semibold text-l leading-l w-full mt-2"
                  placeholder="Campaign, Product Launch, Fun..."
                />
                <div className="text-right mt-2 flex justify-end">
                  <button className="border border-primary-300 p-2 text-md leading-md text-primary-300 rounded-md flex items-center font-jakarta justify-center gap-2 font-semibold">
                    <NoteFavoriteIconTwoTone /> Research The Best Keywords
                  </button>
                </div>
              </div>
              <div className="">
                <p className="font-jakarta text-xl leading-xl font-bold text-primary-200">
                  Try our generated template that base on your business
                </p>

                <div className="pb-3 custom-scroll mt-6">
                  <div className="grid gap-2 text-primary-100 font-jakarta items-center">
                    <div className="p-6 rounded-[14px] bg-[#EEF8FF] w-[415px]">
                      <div className="rounded-lg p-2 bg-[#C5E9FF] text-lg inline-block font-semibold">
                        Product Campaign
                      </div>
                      <p className="text-sm leading-sm mt-[14px]">
                        Vorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate libero et velit interdum, ac aliquet odio
                        mattis.
                      </p>
                    </div>
                    <div className="p-6 rounded-[14px] bg-[#FFD4D1] w-[415px]">
                      <div className="rounded-lg p-2 bg-[#FFAEA9] text-lg inline-block font-semibold">
                        Sales Announcement
                      </div>
                      <p className="text-sm leading-sm mt-[14px]">
                        Vorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate libero et velit interdum, ac aliquet odio
                        mattis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="">
                <p className="font-jakarta text-xl leading-xl font-bold text-primary-200">
                  Tone of Voice
                </p>
                <input
                  className="rounded-md border border-secondary-600 px-4 py-2.5 font-jakarta font-semibold text-l leading-l w-full mt-2"
                  placeholder="Professional, Casual, Bold"
                />
              </div>

              <button
                className="p-6 rounded-lg relative leading-lg overflow-hidden"
                onClick={handleGenerating}
                type="submit"
              >
                <ButtonGradientSecond />
                <div className="flex gap-2 relative font-jakarta text-h6 leading-h6 font-bold justify-center items-center text-white">
                  Generate Campaign <MagicTwoTone />
                </div>
              </button>
            </div>
          </div>
          <div className="w-1/2 border-l border-secondary-600">
            {!results ? (
              <div className="h-screen flex items-center flex-col justify-center">
                <div className="w-[calc(100%-120px)] mx-5 2xl:mx-0 2xl:w-[516px] relative opacity-20 aspect-square">
                  <Image
                    src="/images/bizzy@outline.svg"
                    className=""
                    fill
                    alt=""
                  />
                </div>
                <p className="text-primary-700 text-l leading-l font-semibold font-jakarta text-center max-w-[620px] mt-7 px-10">
                  {`Create your perfect Facebook ad quickly: just enter your details,
            pick your style, and click 'Generate Campaign' to get started right
            away!`}
                </p>
              </div>
            ) : (
              <>{!isGenerating ? <GeneratingSkeleton /> : <Results />}</>
            )}
          </div>
        </div>
      </Layout>
      {isFacebookImageUploadModal && (
        <FacebookImageUploadModal handleFileChange={handleFileChange} />
      )}
      {isGenerateImageModal && <GenerateImageModal />}
    </>
  );
}
