import ArchiveDocument from "@/components/Email/ArchiveDocument";
import CreateDocument from "@/components/Email/CreateDocument";
import Layout from "@/components/Layout";
import { DownLine, PlusFill, UntitledFill } from "@/components/SvgIcons";
import Topbar from "@/components/Topbar";
import { ButtonGradientSecond } from "@/components/Widget";
import Image from "next/image";
import React from "react";

export default function index() {
  return (
    <Layout signed>
      <Topbar
        title="Email Generator"
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
      <div className="flex min-h-[calc(100vh-125px)] bg-white">
        <div className="w-[203px] border-r border-secondary-600">
          <div className="flex items-center justify-center font-jakarta text-md leading-md p-6 font-semibold gap-2 cursor-pointer border-b border-secondary-600">
            <PlusFill /> New Campaign
          </div>
          <div className="p-[14px]">
            <button className="flex gap-2 items-center bg-[#E7EAFF] rounded-lg p-2 text-primary-100 font-jakarta font-semibold text-sm leading-sm whitespace-nowrap overflow-hidden text-ellipsis w-full">
              <UntitledFill /> Untitled Document
            </button>
          </div>
        </div>
        <div className="w-[calc(100%-203px)] min-h-screen">
          <div className="flex ">
            <div className="w-1/2">
              <CreateDocument />
            </div>
            <div className="w-1/2 border-l border-secondary-600">
              <ArchiveDocument />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
