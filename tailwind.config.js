/** @type {import('tailwindcss').Config} */
export const content = ['./index.html', './src/**/*.jsx'];
export const mode = 'jit';
export const theme = {
  extend: {
    colors: {
      '--openfoundation-primary': '#000000',
      '--openfoundation-secondary': '#ffffff',
      '--openfoundation-tertiary': '#85868b',
      '--openfoundation-black': '#000000',
      '--openfoundation-white': '#ffffff',
      '--openfoundation-quaternary': '#161617',
      '--openborder-primary': '#85868b',
      '--openborder-secondary': '#dddada',
      '--open-gradiant-bt-w':
        'linear-gradient( 90deg, rgba(56, 56, 56, 1) 0%, rgba(255, 255, 255, 0) 100% ), linear-gradient(to left, #ffffff, #ffffff)',
      '--open-gradiant-wt-b':
        'linear-gradient( 90deg, rgba(255, 255, 255, 0) 0%, rgba(56, 56, 56, 1) 100% ), linear-gradient(to left, #ffffff, #ffffff)',
      '--open-gray-50': '#f5f5f6',
      '--open-gray-100': '#e6e6e7',
      '--open-gray-200': '#cfcfd2',
      '--open-gray-300': '#aeafb2',
      '--open-gray-400': '#85868b',
      '--open-gray-500': '#6a6b70',
      '--open-gray-600': '#5b5b5f',
      '--open-gray-700': '#4d4d51',
      '--open-gray-800': '#444546',
      '--open-gray-900': '#3b3b3e',
      '--open-gray-950': '#161617',
      '--open-accent-accent': '#0071E3',
      '--open-accent-accent-1': '#3fa9f5',
      '--open-accent-accent-2': '#0b6399',
      '--open-accent-linear':
        'linear-gradient( 90deg, rgba(63, 169, 245, 1) 0%, rgba(11, 99, 153, 1) 100% )',
    },
    fontFamily: {
      'open-font': ['Pretendard', 'sans-serif'],
    },
    fontSize: {
      'open-font-small': ['14px', '140%'],
      'open-font-medium': ['16px', '140%'],
      'open-font-large': ['18px', '140%'],
      'open-font-xl': ['21px', '140%'],
      'open-font-xxl': ['30px', '140%'],
      'open-font-xxxl': ['36px', '140%'],
      'open-font-xxxxl': ['48px', '140%'],
      'open-font-xxxxxl': ['60px', '140%'],
    },
    fontWeight: {
      'open-heading': ['700'],
      'open-label': ['600'],
      'open-highlight': ['500'],
      'open-paragraph': ['400'],
    },
    screens: {
      pointerhover: {
        raw: '(hover: hover) and (pointer: fine) ',
      },
      mobile: {
        min: '375px',
        max: '1023px',
      },
      tablet: {
        min: '1024px',
        max: '1439px',
      },
      desktop: {
        min: '1440px',
        // max: '1920px',
      },
    },
    maxWidth: {
      'mobile-max': '1023px',
      'tablet-max': '1439px',
      // 'desktop-max': '1920px',
    },
    minWidth: {
      'mobile-min': '375px',
      'tablet-min': '1024px',
      'desktop-min': '1440px',
    },
    gap: {
      'mobile-gap': '16px',
      'desktop-gap': '64px',
    },
    spacing: {
      'open-sm': '4px',
      'open-md': '8px',
      'open-lg': '10px',
      'open-xl': '20px',
      'open-2xl': '40px',
      'open-3xl': '40px',
      'open-4xl': '50px',
      'open-5xl': '80px',
      'open-6xl': '100px',
      'open-7xl': '120px',
      'open-8xl': '200px',
      'open-gutter-mobile': '16px',
      'open-gutter-desktop': '36px',
      'open-margin-mobile': '16px',
      'open-margin-desktop': '64px',
    },
  },
};
export const plugins = [];
