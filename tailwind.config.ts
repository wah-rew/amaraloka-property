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
        navy: "#1B2B4B",
        navyLight: "#2C3E5D",
        cream: "#F8F5EE",
        white: "#FFFFFF",
        sand: "#E8DDD0",
        driftwood: "#9B7B5C",
        brass: "#C4973A",
        sage: "#7B9E87",
        slate: "#6B7A8D",
        rattan: "#D4B896",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
