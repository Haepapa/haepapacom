/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark mode colors
        dark: {
          background: '#1D1C14',
          text: '#FFFFFF',
          'button-text': '#2C2C2C',
          main: '#FFFBB4',
          surface: '#262626',
          outline: '#6A6A6A',
          grey: '#C1C1C1',
        },
        // Light mode colors
        light: {
          background: '#FFFEF5',
          surface: '#FFFFFF',
          'button-text': '#2C2C2C',
          main: '#FFFBB4',
          text: '#262626',
          outline: '#2C2C2C',
          grey: '#C1C1C1',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
