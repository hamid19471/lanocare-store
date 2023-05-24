/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C99A57",
        secondary: "#000000",
        box: "#141414",
      },
      fontSize: {
        header: "3rem",
        subheader: "1.3rem",
        contnet: "1rem",
      },
      fontFamily: {
        main: ["Oswald", "sans-serif"],
      },
    },
  },
  plugins: [],
};
