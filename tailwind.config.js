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
          DEFAULT: '#C9A962',
          light: '#E5D4A1',
          dark: '#A68B4B',
        },
        teal: {
          DEFAULT: '#1A5F5E',
          light: '#2A7F7E',
          dark: '#0D3D3C',
        },
        cream: '#FAF8F5',
        charcoal: '#2C2C2C',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['Cinzel', 'Playfair Display', 'serif'],
        elegant: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

