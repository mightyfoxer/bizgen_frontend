import { FC, useMemo } from "react";

interface ToggleProps {
  size?: "small" | "medium" | "large";
  color?: "blue" | "green" | "teal" | "cyan" | "purple" | "pink";
  isChecked?: boolean;
  isDisabled?: boolean;
  onChange: () => void;
}

const ToggleSwitch: FC<ToggleProps> = ({
  size = "medium",
  color = "blue",
  isChecked = false,
  isDisabled = false,
  onChange,
}) => {
  const styles = useMemo(() => {
    const colorMap = {
      green: "#38A169",
      teal: "#319795",
      cyan: "#00B5D8",
      purple: "#805AD5",
      pink: "#D53F8C",
      blue: "#3182CE",
    };

    const activeColor = colorMap[color] || "#3182CE";

    const sizeMap = {
      small: {
        width: 26,
        height: 16,
        circleSize: 12,
      },
      medium: {
        width: 34,
        height: 20,
        circleSize: 16,
      },
      large: {
        width: 50,
        height: 28,
        circleSize: 24,
      },
    };

    const sizes = sizeMap[size] || sizeMap.medium;

    return { activeColor, ...sizes };
  }, [size, color]);

  return (
    <div
      className="rounded-3xl block relative cursor-pointer"
      style={{
        backgroundColor: !isChecked ? "#CBD5E0" : styles.activeColor,
        width: styles.width,
        height: styles.height,
        opacity: !isDisabled ? 1 : 0.4,
      }}
      onClick={onChange}
    >
      <div
        className="rounded-full bg-white absolute top-0.5 transition-all duration-200"
        style={{
          width: styles.circleSize,
          height: styles.circleSize,
          left: !isChecked ? 2 : styles.circleSize,
        }}
      ></div>
    </div>
  );
};

export default ToggleSwitch;
