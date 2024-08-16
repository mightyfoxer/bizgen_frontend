import { createContext, useContext, ReactNode, useState } from "react";

interface ModalContextType {
  isFacebookImageUploadModal: boolean;
  openFacebookImageUploadModal: () => void;
  closeFacebookImageUploadModal: () => void;

  isGenerateImageModal: boolean;
  openGenerateImageModal: () => void;
  closeGenerateImageModal: () => void;

  isUpgradeMiniModal: boolean;
  openUpgradeMiniModal: () => void;
  closeUpgradeMiniModal: () => void;

  isPricingModal: boolean;
  openPricingModal: () => void;
  closePricingModal: () => void;
}

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}

interface ModalProviderProps {
  children: ReactNode;
}

export function ModalProvider({ children }: ModalProviderProps) {
  const [isFacebookImageUploadModal, setFacebookImageUploadModal] =
    useState(false);

  const [isGenerateImageModal, setGenerateImageModal] = useState(false);
  const [isUpgradeMiniModal, setUpgradeMiniModal] = useState(false);
  const [isPricingModal, setIsPricingModal] = useState(false);

  const openModal = () => {
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    document.body.classList.remove("modal-open");
  };

  const openFacebookImageUploadModal = () => {
    setFacebookImageUploadModal(true);
    openModal();
  };

  const closeFacebookImageUploadModal = () => {
    setFacebookImageUploadModal(false);
    closeModal();
  };

  const openGenerateImageModal = () => {
    setGenerateImageModal(true);
    openModal();
  };

  const closeGenerateImageModal = () => {
    setGenerateImageModal(false);
    closeModal();
  };

  const openUpgradeMiniModal = () => {
    setUpgradeMiniModal(true);
    openModal();
  };

  const closeUpgradeMiniModal = () => {
    setUpgradeMiniModal(false);
    closeModal();
  };

  const openPricingModal = () => {
    setIsPricingModal(true);
    openModal();
  };

  const closePricingModal = () => {
    setIsPricingModal(false);
    closeModal();
  };

  const modalContextValue: ModalContextType = {
    isFacebookImageUploadModal,
    openFacebookImageUploadModal,
    closeFacebookImageUploadModal,
    isGenerateImageModal,
    openGenerateImageModal,
    closeGenerateImageModal,
    isUpgradeMiniModal,
    openUpgradeMiniModal,
    closeUpgradeMiniModal,
    isPricingModal,
    openPricingModal,
    closePricingModal,
  };

  return (
    <ModalContext.Provider value={modalContextValue}>
      {children}
    </ModalContext.Provider>
  );
}
