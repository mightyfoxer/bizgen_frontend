import { useRouter } from "next/router";
import React from "react";
import StepOne from "./StepOne";
import DotStepper from "./DotStepper";
import Image from "next/image";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import { useModal } from "@/contexts/ModalProvider";
import { UpgradeMiniModal } from "../Modal";
import PricingModal from "@/components/Modal/PricingModal";

const OnboardingPage = () => {
  const { query } = useRouter();
  const { isUpgradeMiniModal, isPricingModal } = useModal();
  return (
    <>
      <main className="grid grid-cols-2 bg-white">
        {(query.step === "3" || query.step === undefined) && <StepOne />}
        {query.step === "2" && <StepTwo />}
        {query.step === "1" && <StepThree />}
      </main>

      {isUpgradeMiniModal && <UpgradeMiniModal />}
      {isPricingModal && <PricingModal />}
    </>
  );
};

export default OnboardingPage;

export const TagHead = () => {
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
      <DotStepper />
    </div>
  );
};
