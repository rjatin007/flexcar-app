import React from "react";
import type { carType } from "../../../constants/appTypes";

const Card = ({ car }: { car: carType }) => {
  return (
    <div className="col-span-1 border-1 border-slate-200 border-solid rounded-2xl overflow-hidden flex flex-col justify-start item-center md:hover:shadow-2xl">
      <img
        src={car?.image}
        alt="Car Image"
        className="w-full object-cover rounded-t-2xl"
      />
      <div className="w-full flex flex-col justify-start items-start border-b-1 border-slate-200 border-solid p-4 bg-white">
        <p className="font-semibold flex justify-start items-center">
          {car?.year} <span className="mx-1 mb-2"> . </span> {car?.model}
        </p>
        <p className="text-sm text-gray-700 flex justify-start items-center ">
          LT<span className=" font-semibold mx-1 mb-2"> . </span> {car?.mileage}{" "}
          miles <span className=" mx-1 mb-2 font-semibold"> . </span>{" "}
          {car?.color}
        </p>
        <p className="font-semibold text-lg ">${car?.price} / mo</p>
      </div>
      <p className="p-4 text-xs bg-white">Get it by Aug 22</p>
    </div>
  );
};

export default Card;
