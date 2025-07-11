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
        primary: "#4F46E5",
        secondary: "#F59E0B",
        accent: "#10B981",
        background: "#F9FAFB",
        text: "#111827",
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
