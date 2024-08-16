/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import Image from "next/image";
import Link from "next/link";

export default function index() {
  const login = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
  });

  return (
    <main className="min-h-screen flex">
      <div className="h-full relative w-full lg:w-1/2 xl:w-[57%]">
        <div className="pt-5 lg:pt-5 lg:px-[35px] grid lg:block place-content-center">
          <Link href={"/"}>
            <div
              className="relative h-[60px]"
              style={{
                aspectRatio: 214 / 60,
              }}
            >
              <Image src="/images/logo@normal.svg" fill alt="" />
            </div>
          </Link>
        </div>
        <div className="mt-9 max-w-[700px] mx-auto">
          <div className="px-4 lg:px-10 xl:px-[67px]">
            <h1 className="text-h5 md:text-h4 lg:text-h2 leading-h5 md:leading-h4 lg:leading-h2 font-aeonik gradient-text-1 font-bold">
              Let{"'"}s get you set up
            </h1>
            <p className="font-jakarta font-semibold text-sm md:text-md lg:text-xl leading-md lg:leading-xl text-primary-700 mt-3">
              If your team is already using Casual, sign in here.
            </p>
            <div className="grid grid-cols-2 gap-4 md:gap-10 lg:gap-[50px]">
              <div className="mt-6 flex flex-col gap-1">
                <label
                  htmlFor="first-name"
                  className="text-md lg:text-h6 leading-md lg:leading-h6 font-aeonik"
                >
                  First Name
                </label>
                <input
                  className="rounded-lg text-md lg:text-l leading-md lg:leading-l h-12 lg:h-[58px] px-4 bg-[#B6B6B824]"
                  id="first-name"
                  name="first-name"
                  type="text"
                />
              </div>
              <div className="mt-6 flex flex-col gap-1">
                <label
                  htmlFor="last-name"
                  className="text-md lg:text-h6 leading-md lg:leading-h6 font-aeonik"
                >
                  Last Name
                </label>
                <input
                  className="rounded-lg text-md lg:text-l leading-md lg:leading-l h-12 lg:h-[58px] px-4 bg-[#B6B6B824]"
                  id="last-name"
                  name="last-name"
                  type="text"
                />
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-1">
              <label
                htmlFor="email"
                className="text-md lg:text-h6 leading-md lg:leading-h6 font-aeonik"
              >
                Email
              </label>
              <input
                className="rounded-lg text-md lg:text-l leading-md lg:leading-l h-12 lg:h-[58px] px-4 bg-[#B6B6B824]"
                id="email"
                type="email"
              />
            </div>
            <div className="mt-[18px] flex flex-col gap-1">
              <label
                htmlFor="password"
                className="text-md lg:text-h6 leading-md lg:leading-h6 font-aeonik"
              >
                Password
              </label>
              <input
                className="rounded-lg text-md lg:text-l leading-md lg:leading-l h-12 lg:h-[58px] px-4 bg-[#B6B6B824]"
                id="password"
                type="password"
              />
            </div>
            <button className="bg-primary-300 rounded-lg w-full py-3 lg:py-[18px] text-md lg:text-h6 leading-md lg:leading-h6 font-aeonik font-bold mt-5 text-white">
              Get Started Free
            </button>
            <div className="relative border-t border-primary-700 w-full mt-10">
              <div className="absolute left-1/2 -top-3 md:-top-5 -translate-x-1/2 text-sm md:text-h6 text-primary-700 px-6 bg-white">
                or
              </div>
            </div>
            <div className="mt-10">
              <button
                className="border rounded-lg border-primary-700 py-2.5 flex items-center gap-2 w-full justify-center font-aeonik text-md lg:text-h6 leading-md lg:leading-h6"
                onClick={() => {
                  login();
                }}
              >
                <Image src="/icons/google.png" width={24} height={24} alt="" />
                Sign in with Google
              </button>
            </div>
            <div className="flex justify-between items-center mt-10 flex-col gap-2 lg:flex-row pb-10">
              <div className="flex items-center gap-3 text-sm md:text-l xl:text-xl leading-l xl:leading-xl font-jakarta">
                Dont{"'"}t have an account?{" "}
                <Link
                  href="/register"
                  className="text-primary-300 underline font-semibold font-jakarta"
                >
                  Sign Up
                </Link>
              </div>
              <Link
                className="text-primary-300 font-semibold text-sm md:text-l xl:text-xl leading-l xl:leading-xl font-jakarta underline"
                href="/forgot-password"
              >
                Forgot Password?
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden bg-primary-600 border-l border-[#B6B6B8] lg:grid place-content-center w-1/2 xl:w-[43%] px-10">
        <div className="flex items-center justify-center flex-col">
          <div
            className="relative w-[280px]"
            style={{
              aspectRatio: 280 / 400,
            }}
          >
            <Image src="/images/bizzy-whole-body.svg" layout="fill" alt="" />
          </div>
          <p className="font-aeonik text-md leading-md font-medium max-w-[663px] text-center mt-9 text-[#7270FF]">
            Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>
      </div>
    </main>
  );
}
