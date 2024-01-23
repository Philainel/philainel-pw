/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundImage: {
          t500: "#487DA336",
          500: "#487DA3",
        }
      }
    },
  },
  plugins: [],
}

