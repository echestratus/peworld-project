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
      listStyleImage: {
        checkgreen: 'url("/src/assets/LandingPage/checkGreen.svg")',
        checkblue: 'url("/src/assets/LandingPage/checkBlue.svg")',
      },
      backgroundImage: {
        'auth-bgoverlay': 'url("/src/assets/Auth/bg-overlay.svg")',
        'auth-bgimage': 'url("/src/assets/Auth/bg-image.png")',
      },
    },
  },
  plugins: [],
}

