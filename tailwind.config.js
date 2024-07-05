/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#279af1",
        secondary: "#2c2c6c",
        dark: "#4c5454",
        muted: "#8989ad",
        success: "#28a745",
      },
      fontFamily: {
        poppins: "Poppins, sans-serif",
      },
      gridTemplateColumns: {
        split: "3fr 9fr",
        contact: "5fr 7fr",
        splitBtns: "2fr 10fr",
      },
    },
  },
  plugins: [],
};