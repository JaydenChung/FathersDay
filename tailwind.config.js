/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'wave': 'wave 5s ease-in-out infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'drift': 'drift 15s ease-in-out infinite',
        'zigzag': 'zigzag 20s ease-in-out infinite',
        'spiral': 'spiral 25s linear infinite',
        'bounce-rotate': 'bounce-rotate 6s ease-in-out infinite',
        'float-diagonal': 'float-diagonal 12s ease-in-out infinite',
        'scale-fade': 'scale-fade 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '25%': { transform: 'translateY(-20px) translateX(15px)' },
          '50%': { transform: 'translateY(-5px) translateX(30px)' },
          '75%': { transform: 'translateY(15px) translateX(15px)' },
        },
        wave: {
          '0%, 100%': { transform: 'rotate(-3deg) scale(1)' },
          '50%': { transform: 'rotate(3deg) scale(1.1)' },
        },
        sparkle: {
          '0%, 100%': { opacity: 0.2, transform: 'scale(1)' },
          '50%': { opacity: 0.7, transform: 'scale(1.2)' },
        },
        drift: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(50px, -30px) rotate(90deg)' },
          '50%': { transform: 'translate(100px, 0) rotate(180deg)' },
          '75%': { transform: 'translate(50px, 30px) rotate(270deg)' },
          '100%': { transform: 'translate(0, 0) rotate(360deg)' },
        },
        zigzag: {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(50px, -50px)' },
          '50%': { transform: 'translate(100px, 0)' },
          '75%': { transform: 'translate(150px, -50px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        spiral: {
          '0%': { transform: 'rotate(0deg) translateX(0) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        },
        'bounce-rotate': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(180deg)' },
        },
        'float-diagonal': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(100px, -100px)' },
        },
        'scale-fade': {
          '0%, 100%': { transform: 'scale(0.5)', opacity: 0.3 },
          '50%': { transform: 'scale(1.5)', opacity: 0.7 },
        },
      },
    },
  },
  plugins: [],
}
