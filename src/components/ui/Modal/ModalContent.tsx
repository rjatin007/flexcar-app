import type { ReactNode } from "react";
import CloseIcon from "../../../assets/close-icon.svg";
import { setModalOpen } from "../../../stores/modalStore";

const ModalContent = ({ children }: { children: ReactNode }) => {
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="relative flex flex-col justify-end items-center rounded-t-3xl min-h-max w-full ">
      <div className="flex justify-between items-center bg-white  border-b-2 border-gray-200 px-2 py-4 text-md  w-full rounded-t-3xl">
        <p className="text-md font-semibold w-full text-center">Title</p>
        <img
          src={CloseIcon}
          alt="Modal Image"
          className="size-10 bg-slate-100 rounded-full p-2"
          onClick={closeModal}
        />
      </div>
      <div className="flex flex-col justify-start items-start w-full">
        {children}
      </div>

      <div className="flex justify-center items-center w-full py-3 px-2 bg-white shadow-xl border-t-1 border-solid border-slate-200">
        <p className="w-full bg-black text-lg text-white font-semibold text-center px-4 py-3 rounded-2xl">
          View Results
        </p>
      </div>
    </div>
  );
};

export default ModalContent;
