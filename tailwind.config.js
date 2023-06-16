/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    },
    screens: {
      xs: '320px',
      sm: '568px',
      md: '768px',
      lg: '968px',
      xl: '1024px',
      xxl: '1200px',
    },
    extend: {},
  },
  plugins: [],
}

