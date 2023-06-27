/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      main: "#194c33",
      secondary: "#bbb",
      tertirary: "#171717",
      gold: "#ffd700",
      secondarytext: "#9f9e9e",
      white: "#fff",
    },
    extend: {
      keyframes: {
        move: {
          "0%, 100%": { transform: "translateY(-15px)" },
          "50%": { transform: "translateY(15px)" },
        },
      },
    },
  },
  plugins: [],
};
