import clsx from "clsx";

type IconTextProps = {
  icon: string;
  text: string;
  containerClasses?: string;
  textClasses?: string;
  iconClasses?: string;
};
const IconText = ({
  icon,
  text,
  containerClasses,
  iconClasses,
  textClasses,
}: IconTextProps) => {
  return (
    <div
      className={clsx(
        "flex justify-start items-center rounded-md w-full px-2 py-1 ",
        containerClasses
      )}
    >
      <img
        src={icon}
        alt="Location Icon"
        className={clsx("size-4 font-bold", iconClasses)}
      />
      <span
        className={clsx(
          "mx-1 font-bold min-w-max leading-tight text-sm ",
          textClasses
        )}
      >
        {text}{" "}
      </span>
    </div>
  );
};

export default IconText;
