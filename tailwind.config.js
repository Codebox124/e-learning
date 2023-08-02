/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#F0A305",
        darkblue: "#020F24",
        blue: "#055FF0",
        brown: "#AC5415",
        darkslateblue: "#353F50",
        lightslateblue: "#555E6C",
      },
    },
  },
  plugins: [],
};
