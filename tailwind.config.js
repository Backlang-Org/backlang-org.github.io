/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  content: [],
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
