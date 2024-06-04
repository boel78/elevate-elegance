/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./pages/Homepage/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'darkBlue': '#102C57',
        'lightTan': '#DAC0A3',
        'superLightTan': '#FEFAF6'
      },
      backgroundImage: {
        'hero': "url('images/Heropic.png')",
      }
    },
    fontFamily: {
      'inter': ['Inter', 'sans-serif', 'system-ui'],
    },

  },
  plugins: [],
  
}

