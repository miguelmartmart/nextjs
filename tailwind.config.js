/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',       // ✅ App Router
    './components/**/*.{js,ts,jsx,tsx}', // ✅ Componentes
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
