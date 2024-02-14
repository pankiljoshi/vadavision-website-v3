/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--inter)"],
        urbaninst: ["var(--urbaninst)"],
        prompt: ["var(--prompt)"],
        montserrat: ["var(--montserrat)"],
      },
    },
  },
  plugins: [],
};
