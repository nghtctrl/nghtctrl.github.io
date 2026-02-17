import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-bg': '#151515',
        'lighter-dark-bg': '#202022',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: { marginTop: '1em', marginBottom: '0.5em' },
            h2: { marginTop: '1em', marginBottom: '0.5em' },
            h3: { marginTop: '1em', marginBottom: '0.5em' },
            h4: { marginTop: '1em', marginBottom: '0.5em' },
            h5: { marginTop: '1em', marginBottom: '0.5em' },
            h6: { marginTop: '1em', marginBottom: '0.5em' },
            p: { marginTop: '0.5em', marginBottom: '0.5em' },
            li: { marginTop: '0.5em', marginBottom: '0.5em' },
            img: { marginTop: 0, marginBottom: 0 },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: { color: theme('colors.blue.400') },
            h1: { color: theme('colors.gray.100') },
            h2: { color: theme('colors.gray.100') },
            strong: { color: theme('colors.gray.100') },
            code: { color: theme('colors.gray.100') },
            blockquote: {
              color: theme('colors.gray.200'),
              borderLeftColor: theme('colors.gray.700'),
            },
          },
        },
      }),
    },
  },
};
