/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{js,jsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
  ],
  mode: "jit",
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'lower-roman',
      alpha: 'lower-alpha'
    },
    extend: {
      colors: {
        primary: "#ffffff",
        checkWhite: "#ffffff",
        checkPurple: "#453D81",
        checkLightPurple: "#5E54AC",
        checkGreen: "#27A313",
        checkBlack: "#353535",
        checkGray: "#D9D9D9",
        checkDarkGray: "#6b6b6b",
        checkCream: "#FBF6E6",
        checkShadeDark: "#333333",
        checkBG: "#efefef",
        checkBGFooter: "#7c7c7c",
        checkPrimary200: "#ffd3a5",
        checkPrimary400: "#ff8932",
        checkPrimary600: "#ff4d00",
        checkPrimary700: "#cc3502",
        checkPrimary900: "#82250c",
        checkSecondaryYellow200: "#fff485",
        checkSecondaryYellow400: "#ffd81b",
        checkSecondaryYellow500: "#ffbb0b",
        checkSecondaryYellow700: "#bb6302",
        checkSecondaryYellow900: "#7c3f0b",
        checkSecondaryRed200: "#ffc7a5",
        checkSecondaryRed400: "#ff6d31",
        checkSecondaryRed600: "#f62900",
        checkSecondaryRed700: "#ce1a02",
        checkSecondaryRed900: "#82160c",
        checkSecondaryGreen100: "#d0ffc5",
        checkSecondaryGreen300: "#69ff53",
        checkSecondaryGreen500: "#13e900",
        checkSecondaryGreen700: "#088902",
        checkSecondaryGreen900: "#0e5b0c",
        checkCarouselRed: "#ffdbdb",
        checkCarouselYellow: "#fff1bf",
        checkCarouselGreen: "#e3ffe2",
        checkLink: "#278eff"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        permanentMarker: ["Permanent Marker", "sans-serif"],
        workSans: ["Work Sans", "sans-serif"],
      },
      borderRadius: {
        'carousel': '64px'
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [require("tailwind-gradient-mask-image")],
  darkMode: 'false',
};
