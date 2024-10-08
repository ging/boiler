/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx,css,scss,sass}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,css,scss,sass}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,css,scss,sass}",
    "./app/**/**/*.{js,ts,jsx,tsx,mdx,css,scss,sass}",
    "./src/**/*.{js,ts,jsx,tsx,mdx,css,scss,sass}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "inter": ['var(--font-inter)', 'sans-serif'],
        "sourceSans": ['var(--font-sourceSans)', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.5rem', { lineHeight: '1.4' }],
        'sm': ['0.75rem', { lineHeight: '1.4' }],
        'base': ['1rem', { lineHeight: '1.4' }], // body

        // con Hs creo que es mejor la verdad y así reservamos los tamañosde tw por si acaso
        'h1': ['3rem', { lineHeight: '1.15' }],
        'h2': ['2.5rem', { lineHeight: '1.4' }],
        'h3': ['1.75rem', { lineHeight: '1.4' }],
        'h4': ['1.5rem', { lineHeight: '1.4' }],
        'h5': ['1.25rem', { lineHeight: '1.4'}],
        'h6': ['0.9rem', { lineHeight: '1.4' }],
      },
      colors: {
        // whiteFull: "#ffffff",
        snow: "#EFF7FB",
        black: "#0D0D1C",

        primary: { // azul oscuro
          DEFAULT: "#056dc1",
          900: "#0e406c",
          800: "#094b83",
          700: "#05589f",
          600: "#056dc1",
          500: "#118de6",
          400: "#97A7FF",
          300: "#b2bef7",
          200: "#DBE2FF",
          100: "#e0effe",
          50: "#f0f7ff",
          foreground: "#FFFFFF",
         
        },
        secondary: { 
          DEFAULT: "#9ca3af",
          700: "#374151",
          600: "#4b5563",
          500: "#6b7280",
          400: "#9ca3af",
          300: "#d1d5db",
          200: "#e5e7eb",
          100: "#f3f4f6",
          50: "#f9fafb",
          foreground: "#ffffff"
        },
        accent: { // morado
          DEFAULT: "#62388E",
          // 300: "#FF9900",
          // 200: "#FFBD1B",
          // 100: "#FFE685",
        },
        background: {
          DEFAULT:"#f7f7ef",
          400: "#EFF7FB",
          300: "#EFF7FB"
        },
        ring: {
          DEFAULT: "#cbe0ed",
        },
        shadow: {
          DEFAULT:"#cbd5e1",
        },
        title: {
          DEFAULT:"#323232"
        },
        text: {
          DEFAULT:"#323232"
        }
      },
    },
    screens: {
      'xs': '420px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',    
    },
    backgroundImage: {
      'main': "url('/assets/fondos/eunomia_fondo_default.png')",
    }
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontFamily: theme('fontFamily.inter') },
        'h2': { fontFamily: theme('fontFamily.inter') },
        'h3': { fontFamily: theme('fontFamily.inter') },
        'h4': { fontFamily: theme('fontFamily.inter') },
        'h5': { fontFamily: theme('fontFamily.inter') },
        'h6': { fontFamily: theme('fontFamily.inter') },
        'p': { fontFamily: theme('fontFamily.sourceSans') },
        'a': { fontFamily: theme('fontFamily.sourceSans') },
        'button': { fontFamily: theme('fontFamily.sourceSans') },
      })
    })
  ],
  // corePlugins: {
  //   preflight: false,
  // },
};

// export default config;