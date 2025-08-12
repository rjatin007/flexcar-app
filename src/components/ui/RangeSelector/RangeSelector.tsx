// import React from "react";

const RangeSelector = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <input type="range" min="0" max="100" className="range-selector" />
    </div>
  );
};

export default RangeSelector;
