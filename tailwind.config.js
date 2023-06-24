/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Libre: ["Libre Franklin", "sans-serif"],
        Merriweather: ["Merriweather", "serif"],
      },
      gridTemplateRows: {
        rootLayout: "auto 1fr",
      },
      gridTemplateColumns: {
        rootColLayout: "13rem 1fr 16rem",
      },
    },
  },
  plugins: [],
};
