import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  plugins: [typography],
  theme: {
    extend: {
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
      }),
    },
  },
};
