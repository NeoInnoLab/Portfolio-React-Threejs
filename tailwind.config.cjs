/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#00073d',
        secondary: '#e7bdee',
        tertiary: '#777bfd',
        'black-100': '#002350',
        'black-200': '#0b1574',
        'black-300': '#1515b7',
        'black-400': '#0054d1',
        'black-500': '#00acdb',
        'black-600': '#39cbf9',
        'black-700': '#7efcfe',
        'white-100': '#fbe8fa',
        purple: '#6752b6',
        blue: '#39cbf9',
        pink: '#f998d0',
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35',
      },
      screens: {
        xs: '450px',
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/herobg1.png')",
      },
    },
  },
  plugins: [],
};
