import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import type { TransformerFn } from 'tailwindcss/types/config';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/pliny/**/*.js',
  ],
  theme: {
    colors: {
      gray: {
        100: '#f2f2f2',
        200: '#cccccc',
        300: '#a5a5a5',
        400: '#7f7f7f',
        500: '#595959',
        600: '#464646',
        700: '#2e2e2e',
      },
      black: '#141414',
      white: colors.white,
      primary: '#ED960B	',
      secondary: '#C46500	',
      cream: '#ECE1CB	',
      brown: '#1B0C04',
      transparent: colors.transparent,
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      aspectRatio: {
        '5/3': '5 / 3',
      },
      screens: {
        md: '816px',
      },
      typography: (theme: TransformerFn) => ({
        DEFAULT: {
          css: {
            width: '100%',
            maxWidth: 'none',
            '--tw-prose-body': theme('colors.gray.700'),
            '--tw-prose-invert-body': theme('colors.gray.100'),

            '--tw-prose-headings': theme('colors.black'),
            '--tw-prose-invert-headings': theme('colors.white'),
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
