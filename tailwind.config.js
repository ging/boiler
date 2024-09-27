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
        "ubuntu": ['var(--font-ubuntu)', 'sans-serif'],
        "sourceSans": ['var(--font-sourceSans)', 'sans-serif'],
      },
      fontSize: {
        // 'xs': ['0.75rem', { lineHeight: '1.4' }],
        'sm': ['0.75rem', { lineHeight: '1.4' }],
        'base': ['1rem', { lineHeight: '1.4' }], // body

        // con Hs creo que es mejor la verdad y así reservamos los tamañosde tw por si acaso
        'h1': ['3rem', { lineHeight: '1.4em' }],
        'h2': ['2.5rem', { lineHeight: '1.4' }],
        'h3': ['1.75rem', { lineHeight: '1.4' }],
        'h4': ['1.5rem', { lineHeight: '1.4' }],
        'h5': ['1.25rem', { lineHeight: '1.4' }],
        'h6': ['0.9rem', { lineHeight: '1.4' }],
      },
      colors: {
        // whiteFull: "#ffffff",
        snow: "#EFF7FB",
        black: "#0D0D1C",
        primary: { // azul oscuro
          DEFAULT: "#24234C",
         //900: "#3302BF",
          800: "#4507C9",
          // 700: "#4F1BE4",
          600: "#5441FF",
          // 500: "#6E76FF",
          400: "#97A7FF",
          300: "#b2bef7",
          200: "#DBE2FF",
          // 100: "#EBF0FF",
          // 50: "#F5F8FF",
          foreground: "#FFFFFF",
         
        },
        secondary: { // azul claro
          DEFAULT: "#9CD7F5",
          // 900: "#3302BF",
          // 800: "#4507C9",
          700: "#45bbf7",
          600: "#56b9ea",
          500: "#76c9f2",
          400: "#9CD7F5",
          300: "#B0DFF7",
          200: "#C4E7F9",
          100: "#D7EFFB",
          50: "#EBF7FD",
          foreground: "#24234C"
        },
        accent: { // morado
          DEFAULT: "#62388E",
          // 300: "#FF9900",
          // 200: "#FFBD1B",
          // 100: "#FFE685",
        },
        background: {
          DEFAULT:"#323238",
          400: "525259",
          300: "74747a"
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
        'h1': { fontFamily: theme('fontFamily.ubuntu') },
        'h2': { fontFamily: theme('fontFamily.ubuntu') },
        'h3': { fontFamily: theme('fontFamily.ubuntu') },
        'h4': { fontFamily: theme('fontFamily.ubuntu') },
        'h5': { fontFamily: theme('fontFamily.ubuntu') },
        'h6': { fontFamily: theme('fontFamily.ubuntu') },
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