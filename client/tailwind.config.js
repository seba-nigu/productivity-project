/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    minHeight: {
      3: "100px",
    },
    minHeight: {
      test: "100vh",
    },
    fontFamily: {
      roboto: ["Roboto, sans-serif"],
    },
  },
  plugins: [],
};
