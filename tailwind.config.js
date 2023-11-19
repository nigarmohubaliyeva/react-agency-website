/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'neutralSilver': "#F5F7FA",
        'neutralDGrey': "#4D4D4D",
        'brandPrimary': "#96B6C5",
        'neutralGrey': "#717171",
        "gray900": "#18191F"
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

