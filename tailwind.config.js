/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0d0d0d',
          light: '#1a1a1a',
        },
        charcoal: '#2d2d2d',
        'warm-gray': '#8a8a8a',
        'light-gray': '#e8e6e3',
        cream: '#f7f5f2',
        gold: {
          DEFAULT: '#c4a35a',
          light: '#d4b876',
          dark: '#a68942',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-hero': ['clamp(4rem, 15vw, 12rem)', { lineHeight: '0.85', letterSpacing: '-0.04em' }],
        'display-xl': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '0.9', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
      },
      animation: {
        'slow-spin': 'slow-spin 60s linear infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        'slow-spin': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'marquee': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-quint': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
