/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#0A7AF9",
      secondary: "#092857",
      black: "#000000",
      white: "#FFFFFF",
      orange:"#FFB321",
      red:"#EB2051"
    },
    extend: {
    
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
