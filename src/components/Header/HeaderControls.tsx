import PersonIcon from "../../assets/person-icon.svg";
import SpeedIcon from "../../assets/speed-icon.svg";
import CalenderIcon from "../../assets/calender-icon.svg";
import IconText from "../ui/IconText";

const HeaderControls = () => {
  return (
    <div className="flex flex-row justify-start items-center  w-full max-md:my-2">
      <div className="flex flex-row justify-start items-center bg-slate-100 rounded-md px-2 py-1 space-x-0">
        <IconText icon={PersonIcon} text="25-34" containerClasses="-ml-2" />
        <span className="text-black font-bold ">|</span>
        <IconText icon={SpeedIcon} text="580-669" />
      </div>
      <div className="flex flex-row justify-start items-center bg-slate-100 rounded-md px-2 py-1  ml-2">
        <IconText icon={CalenderIcon} text="Standard Plan" />
      </div>
    </div>
  );
};

export default HeaderControls;
