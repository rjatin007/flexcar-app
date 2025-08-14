import type { ReactNode } from "react";
import ArrowDownIcon from "../../../assets/arrow-down-icon.svg";
import clsx from "clsx";
// import ArrowUpIcon from "../../../assets/arrow-up-icon.svg";

type CollapsableProps = {
  children: ReactNode;
  onClick: () => void;
  isOpen: boolean;
  title: string;
};
const Collapsable = ({
  children,
  onClick,
  isOpen,
  title,
}: CollapsableProps) => {
  return (
    <div className="flex flex-col justify-start items-start w-full bg-white p-4 border-b-1 border-solid border-slate-200 last:border-b-0 ">
      <div className="flex justify-between items-center w-full">
        <p className="font-semibold">{title}</p>
        <img
          src={ArrowDownIcon}
          alt="Arrow Down Icon"
          className={clsx(
            "size-6 duration-100 ease-in-out transition-transform ",
            `${isOpen ? "-rotate-180" : "rotate-0"}`
          )}
          onClick={onClick}
        />
        {/* <img src={ArrowUpIcon} alt="Arrow Up Icon" className="size-6" /> */}
      </div>
      <div
        className={clsx(
          "flex flex-col justify-start items-start pt-2 transition-all ease-in-out duration-300 ",
          `${
            isOpen
              ? "overscroll-y-contain max-h-[500px]"
              : "max-h-0  overflow-hidden "
          }`
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapsable;
