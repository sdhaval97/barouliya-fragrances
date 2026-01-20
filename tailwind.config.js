/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#F4D06F',
          DEFAULT: '#D4AF37',
          dark: '#AA8C2C',
        },
        'rich-black': '#0A0A0A',
        navy: '#0F172A',
        cream: '#FAFAF9',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Lato"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

