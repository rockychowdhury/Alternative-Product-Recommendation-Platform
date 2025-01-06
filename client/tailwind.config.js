/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        marble: '#F2F8FC',
        action: '#FF5722',
        newBg: '#f3f6f8',
        primary: '#1E90FF', // Added a primary color for buttons and accents
        secondary: '#FFB400', // Added a secondary color
        dark: '#1C1C1E', // Added a dark theme color
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        logo: ['Concert One', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'], // Added Roboto for variety
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem', // Default padding
          sm: '2rem', // Increased padding on small screens
          lg: '4rem', // Increased padding on large screens
        },
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1440px',
        },
        
      },
      boxShadow: {
        'custom-light': '0 4px 6px rgba(0, 0, 0, 0.1)', // Light shadow
        'custom-dark': '0 4px 6px rgba(0, 0, 0, 0.4)', // Dark shadow
      },
      spacing: {
        128: '32rem', // Custom large spacing
        144: '36rem', // Extra-large spacing
      },
      borderRadius: {
        '4xl': '2rem', // Extra rounded corners
      },
      screens: {
        xs: '480px', // Added custom breakpoint for extra small screens
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Adds better form styles
    require('@tailwindcss/typography'), // Adds typography utilities
    require('tailwind-scrollbar')({ nocompatible: true }), // Adds scrollbar styling
  ],
}
