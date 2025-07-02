import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        grape: {
          50: '#f8f5ff',
          100: '#eee5ff',
          200: '#dcc9ff',
          300: '#c4a3ff',
          400: '#aa6ce0',
          500: '#8b3dff',
          600: '#7916ff',
          700: '#6600ef',
          800: '#5200c5',
          900: '#4400a1',
          950: '#27005e',
        },
        'logo-gray': '#bdbdbe',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config 