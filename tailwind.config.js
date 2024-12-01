/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'float-delay-1': 'float 3s ease-in-out infinite 1s',
        'float-delay-2': 'float 3s ease-in-out infinite 2s',
        'float-delay-3': 'float 3s ease-in-out infinite 3s',
      },
    },
  },
  plugins: [],
};
