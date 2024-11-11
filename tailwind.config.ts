import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'color-primary': '#473bf0',
        'p-text-color': '#161C2D',
        'bold-text-color': '#4F4F4F',
      },
      screens: {
        md: '800px',
      },
    },
  },
  plugins: [],
};
export default config;
