import { FC, ReactNode, CSSProperties, MouseEventHandler } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler;
  variant?: "outline" | "fill";
}

const Button: FC<ButtonProps> = ({
  className = "",
  style,
  onClick,
  variant = "fill",
  children,
}) => {

  return (
    <button className={"" + className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
