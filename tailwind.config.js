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
        montserrat: ["var(--montserrat)"],
        prompt: ["var(--prompt)"],
        raleway: ["var(--raleway)"],
        urbanist: ["var(--urbanist)"],
      },
    },
  },
  plugins: [],
};
