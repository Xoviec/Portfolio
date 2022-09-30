/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation:{
        'show-up': 'show-up 2s ease-in'
      },
      keyframes:{
        'show-up': {
          '0%': {
            opacity: '0',
            // transform: 'translate(-90rem)',
            
          

        },
          '100%': {
            // tranform: 'translate(0)',
            opacity: '1'
        }
        }
      }
    },
  },
  plugins: [],
};
