/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      // sm: '480px',
      // md: '768px',
      // lg: '1150px',
      // xl: '1440px',
    },
    extend: {
      colors: {
        ColorPrimary: 'hsla(148, 100%, 33%, 1)',
        ColorSecondary: 'hsla(104, 77%, 20%, 1)',
        ColorDark : 'hsla(0, 0%, 50%, 1)',
        ColorBlack: 'hsla(0, 0%, 0%, 1)',
        ColorYellow: 'hsla(37, 100%, 54%, 1)',
        ColorRed: 'hsla(0, 100%, 50%, 1)',
      }
    }
  },
  plugins: [],
}