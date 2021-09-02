const colors = require('tailwindcss/colors');

const light = {
  DEFAULT: '#FFFFFF',
  ...colors.gray,
};
const dark = '#111827';

const primary50 = '#EEF2FF';
const primary100 = '#E0E7FF';
const primary200 = '#C7D2FE';
const primary300 = '#A5B4FC';
const primary400 = '#818CF8';
const primary500 = '#6366F1';
const primary600 = '#4F46E5';
const primary700 = '#4338CA';
const primary800 = '#3730A3';
const primary900 = '#312E81';

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        light,
        dark,
        primary: {
          50: primary50,
          100: primary100,
          200: primary200,
          300: primary300,
          400: primary400,
          500: primary500,
          600: primary600,
          700: primary700,
          800: primary800,
          900: primary900,
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
