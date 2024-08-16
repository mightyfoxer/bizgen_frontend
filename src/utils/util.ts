import { LabelColors } from "./types";

export function getGreeting(currentTime: Date): string {
  const hour = currentTime.getHours();

  if (hour >= 5 && hour < 12) {
    return "Good morning";
  } else if (hour >= 12 && hour < 17) {
    return "Good afternoon";
  } else if (hour >= 17 && hour < 21) {
    return "Good evening";
  } else {
    return "Good night";
  }
}

export function getLabelColor(label: number): LabelColors {
  const colors: LabelColors[] = [
    {
      textColor: "#0F77FF",
      borderColor: "#56BFFF",
      bgColor: "#EEF0F8",
    },
    {
      textColor: "#00FF5D",
      borderColor: "#56BFFF",
      bgColor: "#F4FFF8",
    },
    {
      textColor: "#5B58F5",
      borderColor: "#5B58F5",
      bgColor: "#F4F6FF",
    },
    {
      textColor: "#FF746B",
      borderColor: "#FF7B02",
      bgColor: "#FFF8F2",
    },
    {
      textColor: "#FF1389",
      borderColor: "#F43F5E",
      bgColor: "#FFEAF4",
    },
  ];

  return colors[label % 5];
}
