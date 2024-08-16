import { FC, ReactNode } from "react";

interface MeterNumber {
  children: ReactNode;
}

const OdometerNumber: FC<MeterNumber> = ({ children }) => {
  return <>{children}</>;
};

export default OdometerNumber;
