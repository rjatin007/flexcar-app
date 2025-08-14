import clsx from "clsx";
import CloseIcon from "../../../assets/close-icon.svg";

type TagProps = {
  onClick: () => void;
  tag: { label: string; isActive: boolean };
};
const Tag = ({ onClick, tag }: TagProps) => (
  <div
    className={clsx(
      "flex justify-start items-center rounded-3xl border-1 border-solid border-gray-200 p-2 px-3 mx-1",
      tag?.isActive && "bg-gray-100"
    )}
    onClick={onClick}
  >
    <p className="text-sm font-light mr-1">{tag?.label} </p>
    {tag?.isActive && (
      <img src={CloseIcon} alt="Close Icon" className="size-3" />
    )}
  </div>
);
export default Tag;
