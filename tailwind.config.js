/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        default: '#CBD2A4',
        primary: '#54473F',
        secondary: '#E9EED9',
        activeRowBg: '#54473F',
        textDefault: '#000',
        textPrimary: '#fff',
        textPagination: "#F87171"
      }
    },
  },
  plugins: [],
}