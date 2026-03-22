import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'bg-primary',
    'text-primary',
    'bg-secondary',
    'text-secondary',
    'bg-background',
    'text-foreground',
    'cta-button',
    'section-container',
    'section-padding',
    'rounded-cta',
    'text-mobile-heading',
    'text-desktop-heading',
    'bg-primary/5',
    'bg-primary/10',
    'hover:bg-secondary/90',
    'hover:bg-primary/80',
    'border-primary/30',
    'ring-primary/20',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2D5016',
          50: '#F0F7E8',
          100: '#E1F0D1',
          200: '#C3E0A3',
          300: '#A5D175',
          400: '#87C147',
          500: '#69B219',
          600: '#2D5016',
          700: '#234012',
          800: '#19300E',
          900: '#0F200A',
        },
        secondary: {
          DEFAULT: '#F5A623',
          50: '#FEF5E7',
          100: '#FDEBCF',
          200: '#FBD89F',
          300: '#F9C46F',
          400: '#F7B13F',
          500: '#F5A623',
          600: '#E0941A',
          700: '#B87314',
          800: '#90560F',
          900: '#68390A',
        },
        background: '#FAFAF5',
        foreground: '#1F2937',
      },
      fontFamily: {
        sans: ['Pretendard', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'mobile-body': ['16px', { lineHeight: '1.6' }],
        'mobile-heading': ['32px', { lineHeight: '1.2' }],
        'desktop-heading': ['40px', { lineHeight: '1.2' }],
      },
      spacing: {
        'touch': '56px',
      },
      borderRadius: {
        'cta': '8px',
      },
    },
  },
  plugins: [],
};
export default config;