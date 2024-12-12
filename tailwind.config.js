/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(18, 18, 77)",
        secondary: "#EEC759",
      },
    },
  },
  plugins: [],
};
