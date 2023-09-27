/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      maxWidth: {
        '290': '320px',
    }
  },
  plugins: [],
  fontFamily: {
    montserrat: ['Montserrat'],
    poppins: ['Poppins'],
  },
}
}


