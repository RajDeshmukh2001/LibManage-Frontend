const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
          // Tablet (min-width: 469px)
          'md': '469px',
    
          // Laptop/Desktop (min-width: 770px)
          'lg': '770px',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}

