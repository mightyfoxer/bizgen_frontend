import { FC } from "react";
import { SearchOutline } from "../SvgIcons";

const AutocompleteSearch: FC = () => {
  return (
    <div className="relative">
      <span className="absolute left-2.5 top-[14px]">
        <SearchOutline />
      </span>
      <input
        className="border border-secondary-600 py-[14px] pl-[46px] pr-[14px] font-jakarta text-md leading-md w-[520px] rounded-[10px] bg-[#F2F2F2] font-semibold"
        placeholder="Search"
      />
    </div>
  );
};

export default AutocompleteSearch;
