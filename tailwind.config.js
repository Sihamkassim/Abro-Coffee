/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': 'var(--color-bg-primary)',
        'bg-secondary': 'var(--color-bg-secondary)',
        'bg-card': 'var(--color-bg-card)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-muted': 'var(--color-text-muted)',
        'accent': 'var(--color-accent)',
        'accent-hover': 'var(--color-accent-hover)',
        'button': 'var(--color-button)',
        'button-hover': 'var(--color-button-hover)',
        'button-text': 'var(--color-button-text)',
        'border-theme': 'var(--color-border)',
        'border-light': 'var(--color-border-light)',
      },
      boxShadow: {
        'theme': 'var(--color-shadow)',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}