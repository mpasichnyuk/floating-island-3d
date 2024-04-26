/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          200: "#D5DAE1",
        },
        black: {
          DEFAULT: "#000",
          500: "#1D2235",
        },
        blue: {
          500: "#2b77e7",
        },
      },
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        card: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
      },
    },
    animation: {
      "left-right": "left-right 2s infinite",
      "right-left": "right-left 2s infinite",
      fadeInAndMoveUp: "fadeInAndMoveUp .7s",
      fadeOutAndMoveDown: "fadeOutAndMoveDown .7s",
    },
    keyframes: {
      "left-right": {
        "0%, 100%": { transform: "translateX(-5px)" },
        "50%": { transform: "translateX(5px)" },
      },
      "right-left": {
        "0%, 100%": { transform: "translateX(5px)" },
        "50%": { transform: "translateX(-5px)" },
      },
      fadeInAndMoveUp: {
        "0%": { opacity: 0, transform: "translateY(30px)" },
        "100%": { opacity: 1, transform: "translateY(0px)" },
      },
      fadeOutAndMoveDown: {
        "0%": { opacity: 1, transform: "translateY(0px)" },
        "100%": { opacity: 0, transform: "translateY(30px)" },
      },
    },
  },
  plugins: [],
};
