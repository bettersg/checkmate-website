/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
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
        checkGray: "#D9D9D9"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        permanentMarker: ["Permanent Marker", "sans-serif"],
      },
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
  plugins: [require("tailwind-gradient-mask-image")]
};
