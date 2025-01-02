/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        primary: 'var(--color-primary)',
        background: 'var(--color-background)',
        backgroundLighter: 'var(--color-backgroundLighter)',
        text: 'var(--color-text)',
        primaryTransparent: 'var(--color-primary-transparent)',
        shadow: 'var(--color-shadow)',
      },
      fontFamily: {
        roboto: ['Roboto', 'Sans-Serif'],
        robotoSerif: ['RobotoSerif', 'Sans-Serif'],
      },
      dropShadow: {
        glow: [
          '0 0 20px var(--color-shadow)',
          '0 0px 65px var(--color-shadow)',
        ],
        glowGreen: ['0 0 10px limegreen', '0 0 2px limegreen'],
      },
      animation: {
        pingOnce: 'ping 1s cubic-bezier(0, 0, 0.2, 1)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
