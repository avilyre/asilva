import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "reaction-reveal": "reaction-reveal 0.3s ease-in-out",
      },
      keyframes: {
        "reaction-reveal": {
          "0%": {
            transform: "translateX(-2px)",
            opacity: "0%",
          },
          "100%": {
            transform: "translateX(0px)",
            opacity: "100%",
          },
        },
      },
      colors: {
        primary: "#F8FAFC",
        secondary: "#94A3B8",
        tertiary: "#1E293B",
        highlight: "#F8FAFC",
        background: "#020617",
        ocean: "#3B82F6",
      },
      backgroundImage: {
        "bg-card-placeholder": "url('/images/card-placeholder-logo.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
