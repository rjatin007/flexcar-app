import clsx from "clsx";
import type { ReactNode } from "react";
import { useModalStore } from "../../../stores/modalStore";

type ModalBackdropProps = {
  children: ReactNode;
};
const ModalBackdrop = ({ children }: ModalBackdropProps) => {
  const isModalOpen = useModalStore((state) => state?.isModalOpen);
  return (
    <div
      className={clsx(
        "fixed top-0 left-0 w-screen bg-black/85 flex flex-col justify-end items-center transition-all duration-300 ease-in-out",
        `${isModalOpen ? "h-screen" : "h-0"}`
      )}
    >
      {children}
    </div>
  );
};

export default ModalBackdrop;
