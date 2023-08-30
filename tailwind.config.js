/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        third: "#6D7481",
        white: "#F0F3FF",
        border: 'rgba(109, 116, 129, 0.50)',
        White: '#fff',
        lightorange: '#F47425',
        zzz: "#F0F3FF"
      },
      spacing: {
        '99': '40rem',
      },
      boxShadow: {
        ez: '4px 4px 24px 0px rgba(0, 0, 0, 0.25)',
        ezz: ' -30px 30px 0px -1px #F47425',
        ezze: ' -10px 10px 0px -1px #F47425'
      },
      animation: {
        xxx: "wiggle 1s"
      },
      keyframes: {
        wiggle: {
          '0%': {opacity: 0},
          '100%': {opacity: 1},
        }
      }
    },
  },
  plugins: [],
}


