/** @type {import('tailwindcss').Config} */
export default {
  purge: [],
  darkMode: false,
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "dika-primary": "#5a87da"
      },
      backgroundImage: {
        "dikaBg": "url('/DIKA.svg')"
      },
      fontFamily: {
        chakraPetch: ["Chakra Petch", "sans-serif"],
      },
      container: {
        center: true,
        padding: 2
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

