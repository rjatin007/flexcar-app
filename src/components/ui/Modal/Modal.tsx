import type { ReactNode } from "react";

import ModalBackdrop from "./ModalBackdrop";
import ModalContent from "./ModalContent";

const Modal = ({ children }: { children: ReactNode }) => {
  return (
    <ModalBackdrop>
      <ModalContent>{children}</ModalContent>
    </ModalBackdrop>
  );
};

export default Modal;
