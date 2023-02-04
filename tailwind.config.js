/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],

  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Poppins'],
      serif: ['Merriweather'],
      mono: ['Poppins'],
      display: ['Poppins'],
      body: ['Poppins'],
    },
    extend: {
      colors: {
        dark: '#161616',
        light: '#F6F6FF',
      },
      borderRadius: {
        '8xl': '40px',
      },
    },
  },
  plugins: [],
};
