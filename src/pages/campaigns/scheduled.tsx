import React from "react";
import Layout from "@/components/Layout";
import {
  CommentIconSm,
  DownLine,
  EmailIconSmTwoTone,
  FacebookSm,
} from "@/components/SvgIcons";
import Topbar from "@/components/Topbar";
import { ButtonGradient, CollapseBox } from "@/components/Widget";
import Calendar from "@/components/Calendar";
import ScheduledTable from "@/components/ScheduledTable";

export default function index() {
  return (
    <Layout signed>
      <Topbar
        title="Schedule Post"
        description="Vorem ipsum dolor sit amet, consectetur adipiscing elit."
        action={
          <div className="flex items-center gap-2 bg-[#E7EAFF] py-3 px-[14px] rounded-[10px] cursor-pointer">
            <div className="flex items-center gap-1.5">
              <span className="gradient-text-1 relative z-10 font-aeonik font-bold text-2xl">
                Select Business
              </span>
            </div>
            <button>
              <DownLine color="#0F44FF" />
            </button>
          </div>
        }
      />
      <div className="flex min-h-[calc(100vh-125px)]">
        <div className="w-[452px] h-full bg-[#F4F6FF] flex justify-between flex-col min-h-[calc(100vh-125px)]">
          <div className="m-6">
            <button className="flex relative rounded-[10px] overflow-hidden w-full justify-center py-3 text-xl font-jakarta font-bold text-white group">
              <ButtonGradient isAnimation={true} />
              <span className="relative">Scheduled New Post</span>
            </button>
            <div className="mt-6">
              <Calendar />
            </div>
          </div>
          <div className="p-6">
            <p className="text-primary-700 font-jakarta text-l leading-l font-semibold mb-7">
              Scheduled Details
            </p>
            <div className="flex flex-col gap-[14px]">
              <CollapseBox title="Today Post" defaultOpened={true}>
                <ul className="flex flex-col gap-[14px]">
                  <li>
                    <div className="font-jakarta text-xl leading-xl font-semibold text-[#3B3C40] flex items-center gap-2">
                      <div className="flex gap-2 items-center">
                        <div className="w-2 h-2 rounded-full bg-primary-700" />
                        Abstract 3D
                      </div>
                      <div className="bg-[#FFC9E4] rounded-lg flex items-center gap-1 text-[#FF1389] font-jakarta text-sm leading-sm p-1">
                        <CommentIconSm />
                        Blog
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="font-jakarta text-xl leading-xl font-semibold text-[#3B3C40] flex items-center gap-2">
                      <div className="flex gap-2 items-center">
                        <div className="w-2 h-2 rounded-full bg-primary-700" />
                        Promotional Email
                      </div>
                      <div className="bg-[#E7EAFF] rounded-lg flex items-center gap-1 text-[#5B58F5] font-jakarta text-sm leading-sm p-1">
                        <EmailIconSmTwoTone />
                        Email
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="font-jakarta text-xl leading-xl font-semibold text-[#3B3C40] flex items-center gap-2">
                      <div className="flex gap-2 items-center">
                        <div className="w-2 h-2 rounded-full bg-primary-700" />
                        Announcement AMA
                      </div>
                      <div className="bg-[#C5E9FF] rounded-lg flex items-center gap-1 text-[#0F77FF] font-jakarta text-sm leading-sm p-1">
                        <FacebookSm />
                        Facebook
                      </div>
                    </div>
                  </li>
                </ul>
              </CollapseBox>
              <CollapseBox title="Tomorrow"></CollapseBox>
              <CollapseBox title="This Week"></CollapseBox>
              <CollapseBox title="Month"></CollapseBox>
            </div>
          </div>
        </div>
        <div className="w-[calc(100%-452px)] h-full bg-white min-h-[calc(100vh-125px)]">
          <ScheduledTable />
        </div>
      </div>
    </Layout>
  );
}
