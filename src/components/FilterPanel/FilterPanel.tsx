import { filters, filtersType } from "../../constants/FilterPanel";
import Collapsable from "../ui/Collapsable/Collapsable";
import RangeSelector from "../ui/RangeSelector/RangeSelector";
import CheckBoxSelector from "../ui/CheckBox/CheckBoxSelector";
import { useState } from "react";
import Tags from "../ui/Tags/Tags";

const FilterPanel = () => {
  const [isOpenIndex, setIsOpenIndex] = useState<number | null>(0);

  const handleCollapsableClick = (index: number) => {
    setIsOpenIndex(isOpenIndex === index ? null : index);
  };
  return (
    <div className="flex flex-col justify-start items-center rounded-2xl w-full pt-0 ">
      <div className="bg-slate-100 w-full p-4  md:rounded-t-2xl -mt-2">
        <div className="flex justify-between items-center">
          <p className="py-2 font-semibold">Applied Filters</p>
          <p className="text-xs text-primary font-semibold">Clear All</p>
        </div>
        <Tags />
      </div>
      <div className=" w-full flex flex-col   justify-start items-start overflow-y-scroll max-md:max-h-[600px] md:max-h-[900px] overflow-x-hidden ">
        {filters.map((filter, index) => (
          <Collapsable
            key={filter.id}
            title={filter?.label}
            onClick={() => {
              handleCollapsableClick(index);
            }}
            isOpen={isOpenIndex === index}
          >
            {filter.filterType === filtersType.SELECTOR ? (
              <RangeSelector filter={filter} />
            ) : (
              <CheckBoxSelector filter={filter} />
            )}
          </Collapsable>
        ))}
      </div>
    </div>
  );
};

export default FilterPanel;
