/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          beige: {
            50: '#f5f5f4',  // stone-100
            100: '#e7e5e4', // stone-200
            200: '#d6d3d1', // stone-300
            300: '#a8a29e', // stone-400
            400: '#78716c', // stone-500
          },
          professional: {
            DEFAULT: '#263238', // Blue Grey 900
            light: '#455a64',   // Blue Grey 700
            dark: '#1e292d',
          },
          accent: {
            DEFAULT: '#3b82f6', // blue-500
            light: '#60a5fa',   // blue-400
          },
          pastel: {
            DEFAULT: '#bbf7d0', // green-200
            text: '#14532d',    // green-900
          },
        },
        animation: {
          fadeIn: 'fadeIn 0.5s ease-in-out forwards',
          pulse: 'pulse 1.5s infinite',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0.5', transform: 'translateY(10px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
        },
      },
    },
    plugins: [],
  };
  