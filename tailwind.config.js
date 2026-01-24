/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D49459",
        secondary: "#003B5C",
        tertiary: '#FFF6EE',
        accent: '#1A535C',
      },
      fontFamily: {
        haviland: ['Mr De Haviland', ...defaultTheme.fontFamily.sans],
        dancing: ['Dancing Script', ...defaultTheme.fontFamily.sans]
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "0.5rem",
        lg: "2rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1582px",
        "3xl": "1786px",
      },
    },
  },
  plugins: [],
}