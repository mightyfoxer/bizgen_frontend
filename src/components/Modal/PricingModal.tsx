import { FC, useState } from "react";
import Modal from ".";
import { PRICING_LIST, PricingItem } from "../Home/PricingOffers";
import { CloseIcon } from "../SvgIcons";
import { useModal } from "@/contexts/ModalProvider";

const PricingModal: FC = () => {
  const [periodTab, setPeriodTab] = useState<"monthly" | "yearly">("monthly");
  const { closePricingModal } = useModal();
  return (
    <Modal>
      <div className="w-[1360px] pt-[78px] px-[64px] pb-[55px] bg-white rounded-3xl relative">
        <button className="absolute right-11 top-6" onClick={closePricingModal}>
          <CloseIcon />
        </button>
        <div className="text-center">
          <h1 className="text-h3 leading-h3 font-bold tracking-sm gradient-text-1 font-aeonik">
            Take your journey to the next level!
          </h1>
          <p className="mt-3 font-jakarta font-semibold text-primary-80 text-l leading-l">
            Temporibus autem quibusdam et aut officiis debitis aut rerum
            necessitatibus saepe
          </p>
        </div>
        <div className="my-10 grid place-content-center">
          <div className="border-2 border-primary-300 rounded-lg items-center relative text-2xl font-bold font-aeonik overflow-hidden">
            <button
              className={`capitalize px-6 py-2.5 relative -mr-2 rounded-r-lg ${
                periodTab === "monthly"
                  ? "bg-primary-300 text-white z-10"
                  : "bg-white text-primary-100"
              }`}
              onClick={() => setPeriodTab("monthly")}
            >
              monthly
            </button>
            <button
              className={`capitalize px-6 py-2.5 relative rounded-l-lg ${
                periodTab === "yearly"
                  ? "bg-primary-300 text-white z-10"
                  : "bg-white text-primary-100"
              }`}
              onClick={() => setPeriodTab("yearly")}
            >
              yearly
            </button>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {PRICING_LIST.map((item, key) => (
            <PricingItem key={key} isInModal {...item} />
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default PricingModal;
