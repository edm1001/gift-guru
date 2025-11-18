/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./src/pages/**/*.{html,js,jsx}",
    "./src/components/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0063cc",
        secondary: "#70b5ff",
        accent: "#7b7263",
        background: "#555358"
      },
      fontSize: {
        "2xxs": "0.625rem",
        xxs: "0.4rem",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
    plugins: [],
  },
};

export default tailwindConfig;
