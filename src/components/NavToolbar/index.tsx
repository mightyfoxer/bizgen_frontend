import { FC } from "react";
import AutocompleteSearch from "./AutocompleteSearch";
import SelectDropdown from "./SelectDropdown";
import Link from "next/link";
import { BellIcon, SettingIcon } from "../SvgIcons";
import CircleAvatar from "../CircleAvatar";

const NavToolbar: FC = () => {
  return (
    <div className="py-6 px-5 bg-white border-b border-[#B6B6B8]">
      <div className="flex items-center justify-between">
        <AutocompleteSearch />
        <div className="flex gap-[18px] items-center">
          <SelectDropdown defaultLabel="Select Businesss" />
          <Link
            href={"#"}
            className="font-aeonik font-bold gradient-text-2 text-h6 leading-h6"
          >
            Whats New?
          </Link>
          <div className="">
            <SettingIcon />
          </div>
          <div className="">
            <BellIcon />
          </div>
          <CircleAvatar src="/images/default-avatar.png" size="small" />
        </div>
      </div>
    </div>
  );
};

export default NavToolbar;
