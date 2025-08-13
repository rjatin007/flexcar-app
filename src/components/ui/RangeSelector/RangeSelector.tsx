import { useState } from "react";
import DualRangeSlider from "./DualRangeSlider";

const RangeSelector = () => {
  const [values, setValues] = useState([0, 100]);
  return (
    <div className="w-full py-2 px-2 flex flex-col justify-between items-center overflow-x-hidden">
      <div className="flex justify-start items-center gap-2 w-full my-2">
        <input
          type="text"
          className="px-4 py-3 rounded-2xl border-1 border-solid border-slate-200 w-38 text-center outline-none hover:border-primary focus:border-primary"
          value={20}
        />
        <span className="mx-4">-</span>
        <input
          type="text"
          className="px-4 py-3 rounded-2xl border-1 border-solid border-slate-200 w-38 text-center outline-none hover:border-primary focus:border-primary"
          value={20}
        />
      </div>
      <DualRangeSlider
        label={(value: number | undefined) => value}
        value={values}
        onValueChange={setValues}
        min={0}
        max={100}
        step={1}
        labelPosition="bottom"
      />
      <div className="flex justify-start items-center w-full mt-8">
        <p className="text-xs">Description</p>
      </div>
    </div>
  );
};

export default RangeSelector;
