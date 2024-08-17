import React from "react";
import StepOne from "./StepOne";
import DotStepper from "./DotStepper";
import Image from "next/image";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import { useModal } from "@/contexts/ModalProvider";
import { UpgradeMiniModal } from "../Modal";
import PricingModal from "@/components/Modal/PricingModal";
import { useState } from "react";

const OnboardingPage = () => {
  const { isUpgradeMiniModal, isPricingModal } = useModal();
  const [currentPage, setCurrentPage] = useState<number>(3);
  return (
    <>
      <main className="grid grid-cols-2 bg-white">
        {
          currentPage === 1 && <StepOne setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        }
        {
          currentPage === 2 && <StepTwo setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        }
        {
          currentPage === 3 && <StepThree setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        }
      </main>

      {isUpgradeMiniModal && <UpgradeMiniModal />}
      {isPricingModal && <PricingModal />}
    </>
  );
};

export default OnboardingPage;

interface TagHeadProps {
  currentPage: number;
}

export const TagHead: React.FC<TagHeadProps> = ({currentPage}) => {
  return (
    <div className="flex items-center justify-between mt-9">
      <div className="flex items-center gap-2">
        <Image
          src={"/images/logo@head.png"}
          width={46}
          height={46}
          alt="logo"
        />
        <span className="font-aeonik font-bold gradient-text-1 text-h5">
          Bizgen
        </span>
      </div>
      <DotStepper currentPage={currentPage}/>
    </div>
  );
};
