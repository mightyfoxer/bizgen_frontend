import Image from "next/image";
import { FC, useState } from "react";

const ConnectButton: FC = () => {
  const [isConnected, setIsConnected] = useState(false);
  return !isConnected ? (
    <button
      className="font-aeonik text-white text-2xl py-2 px-5 rounded-lg bg-primary-300 font-medium"
      onClick={() => setIsConnected(true)}
    >
      Connect Facebook
    </button>
  ) : (
    <button
      className="font-aeonik text-2xl py-2 px-5 rounded-lg bg-[#C5E9FF] text-primary-300"
      onClick={() => setIsConnected(false)}
    >
      <div className="flex items-center justify-center gap-2 font-medium">
        <Image
          src="/images/default-avatar.png"
          className="rounded-full "
          alt=""
          width={28}
          height={28}
        />
        @ltsjakeeee
      </div>
    </button>
  );
};

export default ConnectButton;
