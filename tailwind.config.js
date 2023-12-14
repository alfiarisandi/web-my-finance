// eslint-disable-next-line
const withMT = require('@material-tailwind/react/utils/withMT');

// eslint-disable-next-line
module.exports = withMT({
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        custom_pink: '#FFC5C5',
        custom_pink_2: '#FC5185',
        custom_dark_green: '#5F6F52',
        custom_light_green: '#C7DCA7',
        custom_light: '#ECF4D6',
        custom_dark_blue: '#161A30',
        custom_light_blue: '#7ED7C1',
        custom_blue: '#4CB9E7',
        custom_light_gray: '#B6C4B6',
        custom_gray: '#607274',
        custom_black: '#191919',
        custom_yellow: '#EEF296',
        button_gradient: 'bg-gradient-to-r from-custom_blue to-custom_pink_2',
      },
    },
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
      serif: ['Inter', 'sans-serif'],
      body: ['Sora', 'sans-serif'],
    },
  },
  plugins: [],
});
