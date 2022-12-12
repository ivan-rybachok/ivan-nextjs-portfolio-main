/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        heroCircle: "#333333",
        accentColor: "#F7AB0A",
        gray_900: "hsl(0, 0%, 15%)",
        gray_800: "hsl(0, 0%, 25%)",
        gray_700: "hsl(0, 0%, 35%)",
        gray_600: "hsl(0, 0%, 45%)",
        gray_500: "hsl(0, 0%, 55%)",
        gray_400: "hsl(0, 0%, 65%)",
        gray_300: "hsl(0, 0%, 75%)",
        gray_200: "hsl(0, 0%, 85%)",
        gray_100: "hsl(0, 0%, 90%)",
        gray_50: "hsl(0, 0%, 100%)",
        blue_900: "#4341b1",
        blue_800: "#4862d1",
        blue_700: "#4b74e4",
        blue_600: "#4e87f9",
        blue_500: "#4e96ff",
        blue_400: "#5ba6ff",
        blue_300: "#73b6ff",
        blue_200: "#99cbff",
        blue_100: "#c1deff",
        blue_50: "#e5f2ff",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
