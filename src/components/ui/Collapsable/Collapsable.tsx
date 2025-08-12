import type { ReactNode } from "react";
import ArrowDownIcon from "../../../assets/arrow-down-icon.svg";
// import ArrowUpIcon from "../../../assets/arrow-up-icon.svg";

const Collapsable = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col justify-start items-start w-full bg-white p-4 border-b-2 border-solid border-slate-200">
      <div className="flex justify-between items-center w-full">
        <p className="font-semibold">Title</p>
        <img src={ArrowDownIcon} alt="Arrow Down Icon" className="size-6" />
        {/* <img src={ArrowUpIcon} alt="Arrow Up Icon" className="size-6" /> */}
      </div>
      <div className="flex flex-col justify-start items-start py-2">
        {children}
      </div>
    </div>
  );
};

export default Collapsable;
