/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./src/pages/**/*.{html,js,jsx}",
    "./src/components/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#007bff",
        lightblue: "#e0f7fa",
        darkblue: "#0056b3",
        grey: "#7c9299",
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
