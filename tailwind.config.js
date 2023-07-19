/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontSize: {
        "xs": "0.6rem",
        "sm": "0.8rem",
        "base": "1rem",
        "2xl": "2rem",
        "3xl": "3rem",
        "4xl": "4rem",
        "5xl": "5rem",
        "6xl": "6rem",
        "7xl": "7rem",
        "8xl": "8rem",
        "9xl": "9rem",
        "10xl": "10rem",
      },
      spacing: {
        "1": "1rem",
        "1.5": "1.5rem",
        "2": "2rem",
        "2.5": "2.5rem",
        "3": "3rem",
        "3.5": "3.5rem",
        "4": "4rem",
        "4.5": "4.5rem",
        "5": "5rem",
        "5.5": "5.5rem",
        "6": "6rem",
      },
      colors: {
        "primary": "#293264",
        "button": "#4D5B9E",
        "chosen": "#D6DBF5",
        "correct": "#94D7A2",
        "wrong": "#F8BCBC"
      }
    },
  },
  plugins: [],
}
