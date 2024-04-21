/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'phone': '320px',
      'tablet': '640px',
      'laptop': '1140px',
    },
    extend: {
      fontFamily: {
        'peworld': ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        'peworld-blue': '#5E50A1',
      },
    },
  },
  plugins: [],
}

