import { FC, ReactNode } from "react";

interface ModalProps {
  children?: ReactNode;
}

const Modal: FC<ModalProps> = ({ children }) => {
  return (
    <div className="fixed left-0 top-0 w-screen h-screen grid place-content-center bg-[#000000ad] backdrop-blur-sm z-[999]">
      {children}
    </div>
  );
};

export default Modal;
