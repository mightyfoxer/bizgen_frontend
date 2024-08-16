import { FC } from "react";
import Link from "next/link";
import { ReactSVG } from "react-svg";
import TextLogo from "../Logo/TextLogo";

const Footer: FC = () => {
  return (
    <footer className="mt-20 pb-20 text-primary-100">
      <div className="w-full xl:w-[1134px] mx-auto px-4 xl:px-0">
        <div className="flex flex-col lg:flex-row justify-between mb-8">
          <div className="">
            <TextLogo />
            <p className="font-jakarta text-sm lg:text-md leading-sm lg:leading-md my-6">
              Join our newsletter to stay up to date on features and releases.
            </p>
            <div className="flex items-center gap-2 lg:gap-4">
              <input
                className="w-[358px] h-9 lg:h-12 border border-primary-700 p-3 rounded-md lg:rounded-lg font-jakarta text-sm lg:text-md"
                placeholder="Enter your email"
              />
              <button className="py-2 lg:py-3 px-6 bg-primary-300 text-white rounded-md lg:rounded-lg font-jakarta text-sm lg:text-md leading-sm lg:leading-md">
                Subscribe
              </button>
            </div>
            <p className="font-jakarta text-xs leading-xs mt-4 max-w-[500px]">
              By subscribing you agree to with our{" "}
              <span>
                <Link className="underline" href="/">
                  Privacy Policy
                </Link>
              </span>{" "}
              and provide consent to receive updates from our company.
            </p>
          </div>
          <div className="flex flex-wrap justify-between gap-[20px] mt-8 lg:mt-0 text-primary-100">
            <div className="w-[calc(100%/2-40px)] md:w-[calc(100%/3-14px)]">
              <div className="font-jakarta font-semibold text-sm leading-sm">
                Column One
              </div>
              <ul className="mt-4">
                {Array.from({ length: 5 }).map((_, key) => (
                  <li className="py-1 md:py-2" key={key}>
                    <Link href="#" className="font-jakarta text-sm leading-sm">
                      Link One
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-[calc(100%/2-40px)] md:w-[calc(100%/3-14px)]">
              <div className="font-jakarta font-semibold text-sm leading-sm">
                Column One
              </div>
              <ul className="mt-4">
                {Array.from({ length: 5 }).map((_, key) => (
                  <li className="py-1 md:py-2" key={key}>
                    <Link href="#" className="font-jakarta text-sm leading-sm">
                      Link One
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-[calc(100%/2-40px)] md:w-[calc(100%/3-14px)]">
              <div className="font-jakarta font-semibold text-sm leading-sm">
                Follow Us
              </div>
              <ul className="mt-4">
                <li className="py-1 md:py-2">
                  <Link
                    href="#"
                    className="font-jakarta text-sm leading-sm flex items-center gap-3"
                  >
                    <ReactSVG src="/icons/i-facebook.svg" />
                    Facebook
                  </Link>
                </li>
                <li className="py-1 md:py-2">
                  <Link
                    href="#"
                    className="font-jakarta text-sm leading-sm flex items-center gap-3"
                  >
                    <ReactSVG src="/icons/i-instagram.svg" />
                    Instagram
                  </Link>
                </li>
                <li className="py-1 md:py-2">
                  <Link
                    href="#"
                    className="font-jakarta text-sm leading-sm flex items-center gap-3"
                  >
                    <ReactSVG src="/icons/i-twitter.svg" />
                    Twitter
                  </Link>
                </li>
                <li className="py-1 md:py-2">
                  <Link
                    href="#"
                    className="font-jakarta text-sm leading-sm flex items-center gap-3"
                  >
                    <ReactSVG src="/icons/i-linkedin.svg" />
                    Linkedin
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-0 lg:mt-20 border-t border-black">
          <div className="mt-4 lg:mt-8 flex flex-col-reverse lg:flex-row items-center justify-between">
            <div className="font-jakarta text-xs lg:text-sm leading-xs lg:leading-sm">
              © 2023 Bizgen. All rights reserved.
            </div>
            <ul className="flex gap-2 lg:gap-6 mb-4 lg:mb-0">
              <li>
                <Link className="underline font-jakarta text-xs leading-xs lg:text-sm lg:leading-sm" href="#">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="underline font-jakarta text-xs leading-xs lg:text-sm lg:leading-sm" href="#">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link className="underline font-jakarta text-xs leading-xs lg:text-sm lg:leading-sm" href="#">
                  Cookies Settings
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
