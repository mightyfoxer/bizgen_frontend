import { FC, InputHTMLAttributes, ReactNode, useState } from "react";
import { DownLine, StartIconFill } from "./SvgIcons";

interface GradientProps {
  isAnimation?: boolean;
  className?: string;
}

export const ButtonGradient: FC<GradientProps> = ({
  isAnimation,
  className,
}) => {
  return (
    <div
      className={`absolute left-0 w-full gradient from-primary-200 to-primary-300 bg-gradient-to-r ${
        className ? className : ""
      } ${
        isAnimation
          ? " group-hover:rotate-90 duration-200 top-1/2 -translate-y-1/2 h-screen"
          : "top-0 h-full"
      }`}
    />
  );
};

export const ButtonGradientSecond: FC<GradientProps> = ({ isAnimation }) => {
  return (
    <div
      className={`absolute left-0 top-0 w-full gradient from-secondary-100 to-secondary-200 bg-gradient-to-r ${
        isAnimation
          ? " group-hover:rotate-90 duration-200 top-1/2 -translate-y-1/2 h-screen"
          : "top-0 h-full"
      }`}
    />
  );
};

export const ButtonGradientYellow: FC<GradientProps> = ({ isAnimation }) => {
  return (
    <div
      className={`absolute left-0 top-0 w-full bg-gradient-to-r ${
        isAnimation
          ? " group-hover:rotate-90 duration-200 top-1/2 -translate-y-1/2 h-screen"
          : "top-0 h-full"
      }`}
      style={{
        background: "linear-gradient(102deg, #FF772C 0%, #F1B41A 100%)",
      }}
    />
  );
};

export const RatingStars = ({ rate }: { rate: number }) => {
  return (
    <div className="inline-flex gap-1">
      {Array.from({ length: rate }).map((_, key) => (
        <span key={key}>
          <StartIconFill color="#00FF5D" />
        </span>
      ))}
      {Array.from({ length: 5 - rate }).map((_, key) => (
        <span key={key}>
          <StartIconFill color="#000" />
        </span>
      ))}
    </div>
  );
};

interface CollapseBoxProps {
  title: string;
  defaultOpened?: boolean;
  children?: ReactNode;
}

export const CollapseBox: FC<CollapseBoxProps> = ({
  title,
  children,
  defaultOpened = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpened);
  return (
    <div className="">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="gradient-text-1 text-h5 leading-h5 font-bold font-aeonik">
          {title}
        </h3>
        <div className={`${isOpen ? "rotate-180" : "rotate-0"}`}>
          <DownLine color="#0B0A10" />
        </div>
      </div>
      {isOpen && <div className="mt-[14px]">{children}</div>}
    </div>
  );
};

export const SocialPlartform = ({ name }: { name: string }) => {
  return <div className=""></div>;
};

interface InputBoxProps {
  id?: string;
  value?: string | number | readonly string[] | undefined;
  label: string;
  placeholder?: string;
}

export const InputBox: FC<InputBoxProps> = ({
  id = "",
  value,
  label,
  placeholder,
}) => {
  return (
    <>
      <label
        htmlFor={id}
        className="text-xl leading-xl text-primary-300 font-bold font-jakarta"
      >
        {label}
      </label>
      <input
        className="w-full py-2.5 px-4 border border-secondary-600 text-black placeholder:text-secondary-600 font-jakarta font-semibold rounded-md mt-2"
        id={id}
        value={value}
        placeholder={placeholder}
      />
    </>
  );
};

interface TextBoxProps {
  id?: string;
  value?: string | number | readonly string[] | undefined;
  label: string;
  placeholder?: string;
  rows?: number;
}

export const TextBox: FC<TextBoxProps> = ({
  id = "",
  value,
  label,
  placeholder,
  rows = 4,
}) => {
  return (
    <>
      <label
        htmlFor={id}
        className="text-xl leading-xl text-primary-300 font-bold font-jakarta"
      >
        {label}
      </label>
      <textarea
        className="w-full py-2.5 px-4 border border-secondary-600 text-black placeholder:text-secondary-600 font-jakarta font-semibold rounded-md mt-2"
        id={id}
        value={value}
        rows={rows}
        placeholder={placeholder}
      />
    </>
  );
};
