const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*{html,js,jsx}'],
  theme: {
    colors: {
      ...colors,
    },
  },
};
