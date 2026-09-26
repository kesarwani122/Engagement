import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: "#FFFEFA",
          100: "#FAF6EE",
          200: "#F5ECE0",
          300: "#EDE0CD",
          400: "#E0CDAF",
          DEFAULT: "#F9F4EB",
        },
        wine: {
          100: "#F5DCE3",
          200: "#E5A8BA",
          400: "#B83B5E",
          500: "#8B1E3F",
          600: "#70112B",
          700: "#540B20",
          800: "#3D0616",
          DEFAULT: "#70112B",
        },
        blush: {
          50: "#FFF5F7",
          100: "#FDE6EC",
          200: "#FBCFDC",
          300: "#F6A5BD",
          400: "#E87A9A",
          500: "#D95279",
          DEFAULT: "#E88B9E",
        },
        gold: {
          100: "#FCF6E5",
          200: "#F6E7B8",
          300: "#ECD482",
          400: "#DFBF52",
          500: "#C9A436",
          600: "#A9851F",
          700: "#866613",
          DEFAULT: "#C59B27",
        },
        sage: {
          100: "#EBF0EB",
          300: "#B8C9B9",
          500: "#6B856D",
          700: "#445A46",
          DEFAULT: "#526754",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        display: ["var(--font-playfair)", "serif"],
        script: ["var(--font-great-vibes)", "cursive"],
        body: ["var(--font-inter)", "sans-serif"],
        sanskrit: ["var(--font-noto-devanagari)", "serif"],
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 20s linear infinite",
        "shimmer": "shimmer 3s ease-in-out infinite",
        "glow": "glow 3s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(3deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        glow: {
          "0%": { filter: "drop-shadow(0 0 15px rgba(201, 164, 54, 0.3))" },
          "100%": { filter: "drop-shadow(0 0 35px rgba(201, 164, 54, 0.7))" },
        },
      },
      boxShadow: {
        royal: "0 20px 50px -10px rgba(112, 17, 43, 0.15), 0 10px 20px -5px rgba(197, 155, 39, 0.1)",
        gold: "0 0 25px rgba(201, 164, 54, 0.35)",
        card: "0 10px 30px -5px rgba(74, 59, 50, 0.08), 0 0 0 1px rgba(201, 164, 54, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
