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
      },
      black: '#2e2e2e',
      white: colors.white,
      primary: '#ee8a4a',
      secondary: '#57392d',
      transparent: colors.transparent,
    },
    extend: {
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
            // '--tw-prose-headings': theme('colors.black'),
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
