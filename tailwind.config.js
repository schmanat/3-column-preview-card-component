module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        big: "'Big Shoulders Display', cursive",
        lexend: "'Lexend Deca', sans-serif",
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
      colors: {
        "orange-bright": "hsl(31, 77%, 52%)",
        "cyan-dark": "hsl(184, 100%, 22%)",
        "cyan-very-dark": "hsl(179, 100%, 13%)",
        "gray-very-light": "hsl(0, 0%, 95%)",
        "white-transparent": "hsla(0, 0%, 100%, 0.75)",
      },
      fontSize: {
        normal: "0.938rem",
      },
    },
  },
  plugins: [],
};
