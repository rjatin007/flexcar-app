import HamburgerIcon from "../../assets/hamburger-icon.svg";
import { Link } from "react-router";

const HeaderMenu = () => {
  return (
    <div className="flex justify-end items-center pr-0  md:w-full">
      <img
        src={HamburgerIcon}
        alt="Menu Icon"
        className="md:hidden size-5 max-md:flex "
      />
      <div className="hidden md:flex justify-around items-center space-x-4">
        <Link
          to="https://www.flexcar.com/how-it-works"
          className="cursor-pointer text-sm"
        >
          {" "}
          How it works
        </Link>
        <Link to="" className="cursor-pointer text-sm">
          {" "}
          Login
        </Link>
      </div>
    </div>
  );
};

export default HeaderMenu;
