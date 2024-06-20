/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-colour": "#040404",
        "border-lines": "#3a506b",
        greytext: "#919191",
        grey: "#979daa",
        "sub-primary": "#5bc0be",
        darkcyan: "#298c8a",
        slategray: "#617591",
        gray: {
          "100": "#07100e",
          "200": "#011210",
        },
        white: "#fff",
        lightgray: "rgba(211, 216, 222, 0.5)",
        "button-green": "#167e6e",
        darkgray: "#a9a9a9",
        "primary-colour": "#6fffe9",
        "light-black": "#1d1d1d",
      },
      spacing: {},
      fontFamily: {
        sarabun: "Sarabun",
        cpmono_v07: "CPMono_v07",
        "train-one": "'Train One'",
      },
      borderRadius: {
        "3xs": "10px",
        "12xs": "1px",
        xl: "20px",
        "8xs": "5px",
      },
    },
    fontSize: {
      sm: "0.875rem",
      "5xs": "0.5rem",
      "181xl": "12.5rem",
      "61xl": "5rem",
      "31xl": "3.125rem",
      xl: "1.25rem",
      xs: "0.75rem",
      base: "1rem",
      "29xl": "3rem",
      "19xl": "2.375rem",
      "10xl": "1.813rem",
      "5xl": "1.5rem",
      lgi: "1.188rem",
      "53xl": "4.5rem",
      "39xl": "3.625rem",
      "24xl": "2.688rem",
      "23xl": "2.625rem",
      "15xl": "2.125rem",
      "6xl": "1.563rem",
      "17xl": "2.25rem",
      "3xl": "1.375rem",
      "27xl": "2.875rem",
      "16xl": "2.188rem",
      "13xl": "2rem",
      "7xl": "1.625rem",
      "sm-3": "0.831rem",
      inherit: "inherit",
    },
    screens: {
      mq1400: {
        raw: "screen and (max-width: 1400px)",
      },
      lg: {
        max: "1200px",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
