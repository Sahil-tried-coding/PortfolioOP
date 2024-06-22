/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},fontFamily:{
      poppins:["Poppins","sans-serif"],
      Rubik:["Rubik","sans-serif"],
      Inter: ["Inter", "sans-serif"]
    },
    // },backgroundColor: {
    //   'custom-blue': '#cbf',
    //   'custom-white': '#ffffff',
    // },
    // textColor: {
    //   'custom-white': '#ffffff',
    // },
  },
  plugins: [],
}

