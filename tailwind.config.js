/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#fafb63",
      secondary: "#75ffed",
      third: "#fafb63",
      black: "#000",
      gray: "#999999",
    },
    extend: {},
  },
  plugins: [],
};
