import IconText from "../ui/IconText";
import FlexCarLogo from "../../assets/flexcar-logo.svg";
import LocationIcon from "../../assets/location-icon.svg";

const HeaderLogo = () => {
  const zipCode = "30033";
  return (
    <div className="flex justify-start items-center pl-0 max-md:w-full md:min-w-max md:mx-2">
      <img src={FlexCarLogo} alt="Flexcar Logo" className="h-8 w-24 " />
      <IconText
        icon={LocationIcon}
        text={zipCode}
        containerClasses="hover:bg-slate-100 active:bg-slate-100 md:bg-slate-100 md:mx-2"
      />
    </div>
  );
};

export default HeaderLogo;
