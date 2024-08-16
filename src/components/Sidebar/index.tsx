import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import ThemeToggle from "../ThemeToggle";
import NavItem from "./NavItem";
import {
  AddCircle,
  CalendarIconFill,
  CalendarIconOutline,
  DiamondIconFill,
  DiamondIconOutline,
  FacebookIcon,
  HomeIcon,
  HomeIconFill,
  InstagramIcon,
  LinkedinIcon,
  QuesionIcon,
  StopwatchIconOutline,
  TiktokIcon,
  TrendUpIconOutline,
  TwitterIcon,
} from "../SvgIcons";
import NavSubItem from "./NavSubItem";
import SocialLink from "../SocialLink";
import CircleAvatar from "../CircleAvatar";

const Sidebar: FC = () => {
  return (
    <div className="py-4 px-6 w-[340px] h-screen border-r border-secondary-600 bg-white dark:bg-bg-dark min-h-screen sticky top-0">
      <div className="flex flex-col h-full justify-between">
        <div className="">
          <Link href="/" className="py-6 px-5 flex items-center gap-[14px]">
            <Image width={72} height={72} src="/images/logo@head.png" alt="" />
            <Image width={163} height={72} src="/images/text@logo.svg" alt="" />
          </Link>
          <div className="mt-12">
            <div className="grid gap-2">
              <NavItem
                title="dashboard"
                icon={<HomeIcon />}
                activeIcon={<HomeIconFill />}
                url="/dashboard"
              />
              <NavItem
                title="campaigns"
                icon={<DiamondIconOutline />}
                activeIcon={<DiamondIconFill />}
                url="/campaigns"
                hasList
                subList={
                  <>
                    <NavSubItem
                      title="New Campaign"
                      url="/campaigns/new"
                      icon={<AddCircle />}
                    />
                    <NavSubItem
                      title="My Drafts"
                      url="/campaigns/drafts"
                      icon={
                        <div
                          className="w-6 h-6 rounded-md grid place-content-center font-jakarta font-semibold text-white dark:text-[#3B3C40]"
                          style={{
                            background: "var(--gradient-peach-gradient)",
                          }}
                        >
                          2
                        </div>
                      }
                    />
                    <NavSubItem
                      title="Scheduled"
                      url="/campaigns/scheduled"
                      isEnd
                      icon={
                        <div
                          className="w-6 h-6 rounded-md grid place-content-center font-jakarta font-semibold text-white dark:text-[#3B3C40]"
                          style={{
                            background: "var(--gradient-light-blue-gradient)",
                          }}
                        >
                          8
                        </div>
                      }
                    />
                  </>
                }
              />
              <NavItem
                title="marketing"
                icon={<TrendUpIconOutline />}
                url="/marketing"
              />
              <NavItem
                title="calendar"
                icon={<CalendarIconOutline />}
                activeIcon={<CalendarIconFill />}
                url="/calendar"
              />
              <NavItem
                title="scheduler"
                icon={<StopwatchIconOutline />}
                url="/scheduler"
              />
            </div>
            <div className="mt-6 px-3">
              <p className="font-jakarta font-semibold text-l text-primary-700">
                Social Network
              </p>
              <div className="mt-4 flex flex-wrap gap-[14px]">
                <SocialLink url="#" icon={<TwitterIcon />} />
                <SocialLink url="#" icon={<InstagramIcon />} />
                <SocialLink url="#" icon={<FacebookIcon />} />
                <SocialLink url="#" icon={<LinkedinIcon />} />
                <SocialLink url="#" icon={<TiktokIcon />} />
              </div>
            </div>
          </div>
        </div>
        <div className="pb-[52px]">
          <div className="flex gap-[14px] items-center p-3">
            <div className="">
              <CircleAvatar src="/images/default-avatar.png" />
            </div>
            <div className="">
              <h5 className="text-l font-bold font-jakarta gradient-text-1">
                Mark Dwayne
              </h5>
              <address className="text-sm font-jakarta text-primary-700 not-italic">
                markdewayne@gmail.com
              </address>
            </div>
          </div>
          <div className="my-4 h-0.5 w-full bg-[#F4F4F4] dark:bg-[#272B30]" />
          <div className="p-3 flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <QuesionIcon />
              <p className="font-jakarta text-l leading-l font-semibold text-primary-700">
                Help & getting started
              </p>
            </div>
            <div className="w-6 h-6 text-white dark:text-black rounded-lg grid place-content-center bg-[#CABDFF] font-jakarta font-semibold">
              8
            </div>
          </div>
          <div className="mt-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
