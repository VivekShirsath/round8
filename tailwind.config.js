/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary_bg: 'lightgray',
      secondary_bg : 'white',
      button_bg : 'red',
    }
  },
  plugins: [],
}

