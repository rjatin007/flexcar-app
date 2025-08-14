import HeaderControls from "./HeaderControls";
import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  return (
    <div className=" flex items-start justify-between w-full pl-2 md:pr-2">
      <div className="flex flex-col items-start justify-start w-full md:w-full md:flex-row ">
        <HeaderLogo />
        <HeaderControls />
      </div>
      <HeaderMenu />
    </div>
  );
};

export default Header;
