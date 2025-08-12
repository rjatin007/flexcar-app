import React from "react";

const CheckBoxInput = () => {
  return (
    <div className="flex flex-col justify-start items-start w-full py-4 bg-white">
      <div className="flex items-center justify-start w-full">
        <input
          type="checkbox"
          id="checkbox-local"
          className=" relative peer shrink-0 appearance-none w-5 h-5 p-2 border-2 border-solid border-slate-200 mt-1 rounded-sm bg-white  checked:bg-primary checked:border-primary "
        />
        <label htmlFor="checkbox-local" className="font-semibold ml-2">
          {" "}
          Car Name <span className="text-sm text-gray-500">(10)</span>
        </label>
        <svg
          className="absolute left-4.5 w-4 h-4 mt-1 hidden peer-checked:block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
    </div>
  );
};

export default CheckBoxInput;
