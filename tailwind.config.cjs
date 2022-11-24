/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionTimingFunction: {
        'in-back': 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      animation:{
        'show-up': 'show-up 2s ease-in'
      },
      keyframes:{
        'show-up': {
          '0%': {
            opacity: '0',
        },
          '100%': {
            opacity: '1'
        }
        }
      }
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1148px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '935px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '500px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
};
