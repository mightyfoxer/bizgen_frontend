import { FC, ReactNode } from "react";
import { ButtonGradient, ButtonGradientSecond } from "../Widget";
import { DownLine } from "../SvgIcons";

interface Dropdown {
  defaultLabel: ReactNode;
  list?: [];
  variant?: "primary" | "secondary";
}

const SelectDropdown: FC<Dropdown> = ({
  variant = "primary",
  defaultLabel,
  list,
}) => {
  return (
    <div className="relative rounded-[10px] overflow-hidden">
      <div className="relative py-3 px-5 flex items-center justify-between gap-2">
        {variant === "secondary" ? (
          <ButtonGradientSecond />
        ) : (
          <ButtonGradient />
        )}
        <div className="text-white font-jakarta text-md leading-md font-bold relative">
          {defaultLabel}
        </div>
        <span className="relative">
          <DownLine />
        </span>
      </div>
      <div className=""></div>
    </div>
  );
};

export default SelectDropdown;
