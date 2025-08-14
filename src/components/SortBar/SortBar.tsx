import React from "react";
import ArrowDownIcon from "../../assets/arrow-down-icon.svg";
import SortMenu from "./SortMenu";

const SortBar = () => {
  return (
    <div className="relative flex items-center justify-between w-full my-4 ">
      <p className="ml-2 md:ml-4 text-sm">45 results</p>
      <p className="flex justify-start items-center text-sm">
        Sort by <span className="ml-2 font-semibold">Popularity</span>{" "}
        <img src={ArrowDownIcon} alt="Arrow Down" className="size-4 " />
      </p>
      {/* <SortMenu /> */}
    </div>
  );
};

export default SortBar;
