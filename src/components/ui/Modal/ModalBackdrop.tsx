import type { ReactNode } from "react";

type ModalBackdropProps = {
  children: ReactNode;
};
const ModalBackdrop = ({ children }: ModalBackdropProps) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black/85 flex flex-col justify-end items-center">
      {children}
    </div>
  );
};

export default ModalBackdrop;
