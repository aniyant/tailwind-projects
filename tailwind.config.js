/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        red:'red',
      },
      backgroundImage: {
        'header-bgimage': "url('https://img2.shaadi.com/assests/2023/images/shaadi-desktop-banner-v1.webp')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}