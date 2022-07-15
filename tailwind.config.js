/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      segoe: ["Segoe UI", "sans-serif"],
    },
  },
  plugins: [],
};
