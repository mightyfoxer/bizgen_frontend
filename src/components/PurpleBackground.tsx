import { FC } from "react";

const PurpleBackground: FC = () => {
  return (
    <div
      className="absolute left-0 top-0 w-full h-full min-h-screen overflow-hidden pointer-events-none"
      style={{
        background:
          "linear-gradient(102deg, #5B58F5 0%, #AFADFF 0.01%, #5B58F5 100%)",
      }}
    >
      <div
        className="w-[830px] h-[830px] rounded-full -top-[220px] -left-[220px] absolute"
        style={{ background: "rgba(134, 131, 254, 0.35)" }}
      />
      <div
        className="w-[830px] h-[830px] rounded-full -bottom-[400px] -right-[260px] absolute"
        style={{ background: "rgba(134, 131, 254, 0.37)" }}
      />
    </div>
  );
};

export default PurpleBackground;
