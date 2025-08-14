import React from "react";
import CheckIcon from "../../assets/check-icon.svg";

const MenuItem = ({ sortByLabel }: { sortByLabel: string }) => {
  return (
    <div className="flex justify-between items-center w-full bg-slate-100 rounded-2xl my-1">
      <p className="py-2 px-3 w-full">{sortByLabel}</p>{" "}
      <img src={CheckIcon} alt="Check Icon" className="size-4 mx-4" />
    </div>
  );
};

const SortMenu = () => {
  return (
    <div className="absolute top-5 right-2 flex flex-col justify-start items-center w-full max-w-[220px]  shadow-xl rounded-2xl border-1 border-solid border-slate-200">
      <p className="border-b-1 border-solid border-slate-200 text-slate-400 w-full py-2 px-4">
        Sort by
      </p>

      <div className="flex flex-col justify-start items-start w-full px-1">
        <MenuItem sortByLabel="Price : Low to High" />
        <MenuItem sortByLabel="Price : High to Low" />
        <MenuItem sortByLabel="Model Name" />
        <MenuItem sortByLabel="Popularity" />
        <MenuItem sortByLabel="Year : New to Old" />
        <MenuItem sortByLabel="Year : Old to New" />
      </div>
    </div>
  );
};

export default SortMenu;
