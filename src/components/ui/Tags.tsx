import clsx from "clsx";
import CloseIcon from "../../assets/close-icon.svg";
import { TAGS } from "../../constants/Tags";
import { useState } from "react";

type TagProps = {
  onClick: () => void;
  tag: { label: string; isActive: boolean };
};

const Tag = ({ onClick, tag }: TagProps) => (
  <div
    className={clsx(
      "flex justify-start items-center rounded-2xl border-1 border-solid border-gray-200 px-2 py-1 mx-1",
      tag?.isActive && "bg-slate-100"
    )}
    onClick={onClick}
  >
    <p className="text-sm font-light mr-1">{tag?.label} </p>
    {tag?.isActive && (
      <img src={CloseIcon} alt="Close Icon" className="size-3" />
    )}
  </div>
);
const Tags = () => {
  const [activeTags, setActiveTags] = useState([...TAGS]);

  const toggleTagClick = (index: number) => {
    const clickedTag = activeTags[index];
    clickedTag.isActive = !clickedTag.isActive;
    const newTags = [...activeTags];
    newTags[index] = clickedTag;
    setActiveTags(newTags);
  };
  return (
    <div className="md:hidden flex justify-end items-center w-full ">
      {activeTags.map((tag, index) => (
        <Tag key={tag.label} tag={tag} onClick={() => toggleTagClick(index)} />
      ))}
    </div>
  );
};

export default Tags;
