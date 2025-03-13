/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'pale-blue': 'hsl(225, 100%, 94%)',
        'bright-blue': 'hsl(245, 75%, 52%)',
        'very-pale-blue': 'hsl(225, 100%, 98%)',
        'desaturated-blue': 'hsl(224, 23%, 55%)',
        'dark-blue': 'hsl(223, 47%, 23%)',
        'midnight-blue': '#382ae1',
      },
      width: {
        mobile: '375px',
        desktop: '1440px',
      },
      height: {
        mobile: '625px',
        desktop: '1440px',
      },
      colors: {
        'pale-blue': 'hsl(225, 100%, 94%)',
        'bright-blue': 'hsl(245, 75%, 52%)',
        'very-pale-blue': 'hsl(225, 100%, 98%)',
        'desaturated-blue': 'hsl(224, 23%, 55%)',
        'dark-blue': 'hsl(223, 47%, 23%)',
        'midnight-blue': '#382ae1',
      },
      borderColor: {
        'pale-blue': 'hsl(225, 100%, 94%)',
        'bright-blue': 'hsl(245, 75%, 52%)',
        'very-pale-blue': 'hsl(225, 100%, 98%)',
        'desaturated-blue': 'hsl(224, 23%, 55%)',
        'dark-blue': 'hsl(223, 47%, 23',
        'midnight-blue': '#382ae1',
      },
      boxShadow: {
        'midnight-blue': '#382ae1',
      },
      fontFamily: {
        'body': ['Red Hat Display', 'sans-serif'],
        
      },
      fontWeight: {
        'light': 500,
        'regular': 700,
        'bold': 900,
      }
    },
  },
  plugins: [],
}

