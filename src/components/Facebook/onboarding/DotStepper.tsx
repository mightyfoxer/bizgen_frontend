import { ButtonGradient } from "@/components/Widget";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";

interface Stepper {
  length?: number;
}

const DotStepper: FC<Stepper> = ({ length }) => {
  const dots = length ? length : 4;
  const { push, pathname, query } = useRouter();

  useEffect(() => {
    if (query.step === undefined) {
      push(`${pathname}?step=1`);
    }
  }, [pathname, query]);

  return (
    <div className="flex items-center gap-3">
      {Array.from({ length: dots }).map((_, index) => (
        <div
          className="w-3 h-3 rounded-full relative bg-[#D9D9D9] overflow-hidden cursor-pointer"
          onClick={() => push(`${pathname}?step=${index + 1}`)}
          key={index}
        >
          {parseInt(query?.step as unknown as string) >= index + 1 && (
            <ButtonGradient />
          )}
        </div>
      ))}
    </div>
  );
};

export default DotStepper;
