import { TAGS } from "../../../constants/Tags";
import { useState } from "react";
import Tag from "./Tag";

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
    <div className=" flex justify-end items-center w-full ">
      {activeTags.map((tag, index) => (
        <Tag key={tag.label} tag={tag} onClick={() => toggleTagClick(index)} />
      ))}
    </div>
  );
};

export default Tags;
