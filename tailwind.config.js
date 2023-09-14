/** @type {import('tailwindcss').Config} */

export default {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2563eb",
          neutral: "#201c26",
        },
      },
    ],
  },
  important: true,
  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
  },

  plugins: [require("daisyui")],
};
