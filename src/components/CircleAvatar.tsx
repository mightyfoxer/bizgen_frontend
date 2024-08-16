import { FC, useMemo } from "react";
import Image from "next/image";
import { ButtonGradient } from "./Widget";

interface Avatar {
  src: string;
  size?: "large" | "medium" | "small";
}

const CircleAvatar: FC<Avatar> = ({ src, size = "medium" }) => {
  const width = useMemo(() => {
    if (size === "large") {
      return 60;
    } else if (size === "small") {
      return 36;
    } else {
      return 48;
    }
  }, [size]);
  return (
    <div
      className="rounded-full relative overflow-hidden grid place-content-center"
      style={{
        width: width,
        height: width,
      }}
    >
      <ButtonGradient />
      <div
        className="m-[1px] relative"
        style={{
          width: width - 2,
          height: width - 2,
        }}
      >
        <Image src={src} layout="fill" alt="" />
      </div>
    </div>
  );
};

export default CircleAvatar;
