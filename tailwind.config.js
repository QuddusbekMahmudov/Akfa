/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'foto': "url('/src/Img/foto4.webp')", 
        'kuchuk': "url('/src/Img/kuchuk.webp')", 
        'mushuk': "url('/src/Img/mushuk.webp')", 
      },
      fontFamily: {
        'livvic': ['Livvic', 'sans-serif'],
      },
      colors: {
        '014e56': '#014e56',
        'f67e7e': '#f67e7e',
        '79c8c7': '#79c8c7',
        '2c6269': '#2c6269',
        '004047': '#004047',
        '012f34': '#012f34',
        '002529': '#002529',
        'f3f4f6': '#ebecf0',
        '087ea4': '#087ea4',
        'ebecf0': '#ebecf0',
        '63b700': '#63b700',
        'f7f7f7': '#f7f7f7',
      },
      maxWidth: {
        base: '1450px',
      },
      scale: {
        '110': '1.10',
      },
      scale: ['group-hover'],
      transitionProperty: {
        'transform': 'transform',
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out',
      },
      transitionDuration: {
        '500': '500ms',
      },
    },
  },
  plugins: [],
}
