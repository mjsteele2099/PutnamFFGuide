/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'book': {
          'bg': '#f5f1e8',
          'page': '#fffef9',
          'text': '#2c2416',
          'accent': '#8b6f47',
          'cover': '#2c1810',
        }
      },
      fontFamily: {
        'serif': ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        'sans': ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'book': '0 10px 40px rgba(0,0,0,0.3)',
        'page': 'inset 0 0 20px rgba(0,0,0,0.05)',
      }
    },
  },
  plugins: [],
}

