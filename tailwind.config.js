/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        luxury: {
          950: '#09030e', // deepest obsidian velvet
          900: '#12071d', // primary dark royal purple background
          850: '#1a0b2a', // elevated container / card purple
          800: '#26113d', // card border & hover states
          700: '#381c54',
          600: '#522b7a',
          500: '#7c4d9e',
          400: '#a982c7',
          300: '#d1b9e5',
          200: '#ebdff4',
          100: '#f7f2fa',
          50: '#fdfbfe',
        },
        gold: {
          50: '#fbf8ea',
          100: '#f5eecc',
          200: '#ebd998',
          300: '#dec263',
          400: '#d4af37', // primary metallic luxury gold
          500: '#be992c',
          600: '#9d7b1e',
          700: '#7a5d16',
          800: '#5c4514',
          900: '#463412',
        },
        whatsapp: {
          500: '#25d366',
          600: '#1ebd5b',
          700: '#128c7e',
        },
        crimson: {
          500: '#e11d48',
          600: '#be123c',
          700: '#9f1239',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cinzel"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-gold': '0 0 25px rgba(212, 175, 55, 0.25)',
        'glow-gold-lg': '0 0 45px rgba(212, 175, 55, 0.45)',
        'glow-purple': '0 0 35px rgba(124, 77, 158, 0.3)',
        'card-dark': '0 10px 30px -10px rgba(0,0,0,0.8), 0 0 1px 1px rgba(212, 175, 55, 0.15)',
      },
      backgroundImage: {
        'purple-radial': 'radial-gradient(circle at top, rgba(82, 43, 122, 0.35) 0%, rgba(18, 7, 29, 0) 70%)',
        'gold-gradient': 'linear-gradient(135deg, #f5eecc 0%, #d4af37 50%, #9d7b1e 100%)',
      }
    },
  },
  plugins: [],
}
