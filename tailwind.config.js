/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      // Add custom breakpoints
      'tablet': '600px',
      'desktop': '1200px',
    },
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #201034 0%, #0A0312 100%)',
        'p-img-gradient': 'background: radial-gradient(50% 50% at 50% 50%, #9D70FF 0%, rgba(137, 62, 174, 0) 100%)'
      },
      backgroundImage: {
        'custom-radial-gradient': 'radial-gradient(circle at center, #9D70FF 0%, rgba(137, 62, 174, 0) 100%)',
      },
    },

  },
  // plugins: [],
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          '.bg-clip-text': {
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
          },

          // Add more custom utilities here if needed
        },
        ['responsive', 'hover'] // You can add variants like 'responsive', 'hover', etc.
      );
    },
  ],
}



// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
