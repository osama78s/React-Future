
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
   screens:{
      'sp': '500px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1200px',
      '2xl': '1536px',
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        main: 'rgb(15 23 42)',
        green: 'rgb(150 234 99)',
        box: {
          dark: '#183D3D'
        },
        p: {
          dark: 'rgb(100 116 139)',
          light: 'rgb(55 65 81)'
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

