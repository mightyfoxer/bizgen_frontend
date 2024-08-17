import { useState } from "react";
import { FC } from "react";
import AvatarStepOne from "./AvatarStepOne";
import AvatarStepTwo from "./AvatarStepTwo";
import Image from "next/image";

const AvatarOnboardingPage: FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    return (
        <main className="grid grid-cols-2 bg-white">
            {
                currentPage === 1 && <AvatarStepOne currentPage={currentPage} setCurrentPage={setCurrentPage} />
            }
            {
                currentPage === 2 && <AvatarStepTwo currentPage={currentPage} setCurrentPage={setCurrentPage} />
            }
        </main>
    )
}

export default AvatarOnboardingPage;

export const AvatarTagHead: React.FC = () => {
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
        </div>
    );
};