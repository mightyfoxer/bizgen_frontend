"use client";
import { FC, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonActive, MoonInActive, SunActive, SunInActive } from "./SvgIcons";

const ThemeToggle: FC = () => {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    console.log(theme);
  }, [theme]);
  return (
    <div className="rounded-full flex gap-1 bg-[#F4F4F4] dark:bg-[#111315] p-1">
      <button
        className="rounded-full font-jakarta text-l shadow-toggle dark:shadow-none capitalize font-semibold bg-primary-800 dark:bg-transparent dark:text-[#6F767E]"
        onClick={() => setTheme("light")}
      >
        <div className="my-1 ml-7 mr-9 flex items-center gap-2">
          {theme === "light" ? <SunActive /> : <SunInActive />}
          light
        </div>
      </button>
      <button
        className="rounded-full font-jakarta text-l dark:shadow-toggle-1 capitalize font-semibold bg-transparent dark:bg-[#272B30] "
        onClick={() => setTheme("dark")}
      >
        <div className="my-1 ml-7 mr-9 flex items-center gap-2 text-t-inactive dark:text-primary-800">
          {theme === "dark" ? <MoonActive /> : <MoonInActive />}
          dark
        </div>
      </button>
    </div>
  );
};

export default ThemeToggle;
