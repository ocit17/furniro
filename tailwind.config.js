/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary': "#B88E2F",
        "secondary": "#FFF3E3",
        "third": "#F9F1E7",
        "gold": "#FFC700"
      },
      backgroundImage: {
        'nav': "url('assets/images/Header.png')",
        'banner': "url('assets/images/img-14.png')",
      },
    },
  },
  plugins: [],
}