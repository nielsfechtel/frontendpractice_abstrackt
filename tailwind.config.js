/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'color-bg1': 'hsl(var(--color-bg1) / <alpha-value>)',
        'color-bg2': 'hsl(var(--color-bg2) / <alpha-value>)',
        'color-bg3': 'hsl(var(--color-bg3) / <alpha-value>)',
        'color-primary1': 'hsl(var(--color-primary1) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
