/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#C99A57",
        "secondary-color": "#000000",
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
