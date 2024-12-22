/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        desktop: "1440px",
        small: "376px",
      },
      colors: {
        primary: {
          blue: "hsl(220, 98%, 61%)",
          gradient:
            "linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
        },
        neutral: {
          light: {
            veryLightGray: "hsl(0, 0%, 98%)",
            veryLightGrayishBlue: "hsl(236, 33%, 92%)",
            lightGrayishBlue: "hsl(233, 11%, 84%)",
            darkGrayishBlue: "hsl(236, 9%, 61%)",
            veryDarkGrayishBlue: "hsl(235, 19%, 35%)",
          },
          dark: {
            veryDarkBlue: "hsl(235, 21%, 11%)",
            veryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
            lightGrayishBlue: "hsl(234, 39%, 85%)",
            lightGrayishBlueHover: "hsl(236, 33%, 92%)",
            darkGrayishBlue: "hsl(234, 11%, 52%)",
            veryDarkGrayishBlue1: "hsl(233, 14%, 35%)",
            veryDarkGrayishBlue2: "hsl(237, 14%, 26%)",
          },
        },
      },
      fontFamily: {
        josefin: ["'Josefin Sans'", "sans-serif"],
      },
      fontSize: {
        body: "18px",
      },
      backgroundImage: {
        "check-gradient":
          "linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
        "desktop-light": "url('bg-desktop-light.jpg')",
        "desktop-dark": "url('bg-desktop-dark.jpg')",
        "mobile-light": "url('bg-mobile-light.jpg')",
        "mobile-dark": "url('bg-mobile-dark.jpg')",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
