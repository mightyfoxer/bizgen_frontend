import { FC } from "react";
import Link from "next/link";

const TextLogo: FC = () => {
  return (
    <Link href={"/"} className="font-graphik font-semibold text-primary-500 text-[30px] leading-10">
      Bizgen.io
    </Link>
  );
};

export default TextLogo;
