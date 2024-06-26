/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#E31383",
          200: "#FF6EC7",
        },
        neutrals: {
          100: "#1E2129",
          200: "#292C34",
          300: "#2F3441",
          400: "#404757",
        },
        white: "#EDEDED",
        gray: "#eee5",
        black: "#0C0C0C",
      },
    },
  },
  plugins: [],
};
