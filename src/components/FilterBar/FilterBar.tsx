import IconText from "../ui/IconText";
import FilterIcon from "../../assets/filter-icon.svg";
import Tags from "../ui/Tags/Tags";
import { setModalOpen } from "../../stores/modalStore";
const FilterBar = () => {
  const handleMobliePanel = () => {
    setModalOpen(true);
  };
  return (
    <div className="flex md:hidden items-center justify-between w-full">
      <div
        className="flex justify-start items-start w-max "
        onClick={handleMobliePanel}
      >
        <IconText icon={FilterIcon} text="Filter" textClasses="text-primary" />
      </div>

      <Tags />
    </div>
  );
};

export default FilterBar;
