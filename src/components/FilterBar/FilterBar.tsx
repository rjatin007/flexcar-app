import IconText from "../ui/IconText";
import FilterIcon from "../../assets/filter-icon.svg";
import Tags from "../ui/Tags";

const FilterBar = () => {
  return (
    <div className="flex items-center justify-between w-full ">
      <div className="flex justify-start items-start w-max ">
        <IconText icon={FilterIcon} text="Filter" textClasses="text-primary" />
      </div>

      <Tags />
    </div>
  );
};

export default FilterBar;
