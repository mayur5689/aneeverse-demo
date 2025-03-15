/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000', // Black used for primary elements
        secondary: '#ffffff', // White used for text on dark backgrounds
        accent: {
          100: '#f8f9fa', // Light gray for backgrounds
          200: '#e9ecef', // Slightly darker gray for cards
          300: '#dee2e6', // Border colors
          400: '#ced4da', // Light text
          500: '#adb5bd', // Medium text
          600: '#6c757d', // Dark text
          700: '#495057', // Very dark text
          800: '#343a40', // Almost black text
          900: '#212529', // Black text
        },
        success: '#28a745', // Green for success messages
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        'permanent-marker': ['var(--font-permanent-marker)', 'cursive'],
        'rock-salt': ['var(--font-rock-salt)', 'cursive'],
      },
      fontSize: {
        '4xl': ['2.5rem', { lineHeight: '1.2' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
      },
      boxShadow: {
        'custom': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'custom-lg': '0 10px 40px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
}; 