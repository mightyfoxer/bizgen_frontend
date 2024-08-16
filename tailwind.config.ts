import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        skeleton: "linear-gradient(90deg, #E2E8F0 0%, #EDF2F7 100%)",
      },
      fontSize: {
        h1: "72px",
        h2: "60px",
        h3: "48px",
        h4: "36px",
        h5: "30px",
        h6: "24px",
        xl: "20px",
        l: "18px",
        md: "16px",
        sm: "14px",
        xs: "12px",
      },
      lineHeight: {
        h1: "90px",
        h2: "72px",
        h3: "60px",
        h4: "44px",
        h5: "38px",
        h6: "32px",
        xl: "30px",
        l: "28px",
        md: "24px",
        sm: "20px",
        xs: "18px",
      },
      letterSpacing: {
        sm: "-2%"
      },
      colors: {
        primary: {
          50: "000000",
          60: "#96D7FF",
          80: "#3B3C40",
          100: "#0B0A10",
          200: "#5B58F5",
          300: "#0F77FF",
          400: "#0B0A10",
          500: "#3F3CDA",
          600: "#F4F6FF",
          700: "#666666",
          800: "#FCFCFC",
          900: "#1A1D1F",
        },
        secondary: {
          50: "#FF9CCE",
          100: "#FF746B",
          200: "#F561AB",
          300: "#312D70",
          400: "#5558FF",
          500: "#00C0FF",
          600: "#B6B6B8",
          700: "rgba(220, 220, 220, 0.20)",
        },
        bg: {
          light: "#F8FAFF",
          dark: "#1A1D1F",
        },
        t: {
          inactive: "#6F767E",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        graphik: ["Graphik", "sans-serif"],
        aeonik: ["Aeonik", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        helvetica: ["Helvetica Neue", "sans-serif"],
      },
      boxShadow: {
        "list-card": "0px 3px 6px rgba(0, 0, 0, 0.25)",
        toggle:
          "0px 4px 8px -4px rgba(0, 0, 0, 0.25), 0px 2px 0px 0px rgba(255, 255, 255, 0.25) inset, 0px -1px 1px 0px rgba(0, 0, 0, 0.04) inset",
        "card-1": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        "toggle-1":
          "0px 4px 8px -4px rgba(0, 0, 0, 0.25), 0px 2px 1px 0px rgba(255, 255, 255, 0.06) inset, 0px -1px 1px 0px rgba(0, 0, 0, 0.49) inset",
      },
    },
  },
  plugins: [],
};
export default config;
