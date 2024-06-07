/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./src/pages/**/*.{html,js,jsx}",
    "./src/components/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#e8b71a",
        olive: "#354f2d",
        peach: "#ffb347",
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
