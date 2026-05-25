/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'bg-flumee-character-gradient',
    'bg-flumee-gradient',
    'bg-insight-gradient',
    'text-gradient-flumee',
    'text-gradient-insight',
  ],
  theme: {
    extend: {
      colors: {
        page: '#F7FAFF',
        'page-alt': '#EEF6FF',
        'page-mint': '#F0FFF9',
        'page-violet': '#F5F1FF',
        ink: '#172033',
        'ink-secondary': '#5F6B7A',
        'ink-muted': '#8A97A8',
        cyan: '#35D8FF',
        telegram: '#2AABEE',
        mint: '#45E6B0',
        'soft-green': '#7DFFB2',
        violet: '#8B5CFF',
        purple: '#B66BFF',
        'soft-yellow': '#FFE59A',
        'soft-pink': '#FF8BD4',
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter Tight', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        card: '28px',
      },
      boxShadow: {
        card: '0 24px 60px rgba(23, 32, 51, 0.08), 0 8px 24px rgba(53, 216, 255, 0.06)',
        'card-hover':
          '0 32px 70px rgba(139, 92, 255, 0.14), 0 12px 32px rgba(53, 216, 255, 0.12)',
        glow: '0 0 40px rgba(53, 216, 255, 0.35)',
        btn: '0 12px 28px rgba(42, 171, 238, 0.38), 0 4px 14px rgba(40, 116, 217, 0.22)',
      },
      backgroundImage: {
        /* Градиент персонажа Flumee: светлый cyan → telegram blue → глубокий синий */
        'flumee-character-gradient':
          'linear-gradient(165deg, #7DF0FF 0%, #35D8FF 28%, #2AABEE 58%, #2874D9 100%)',
        'flumee-gradient':
          'linear-gradient(135deg, #35D8FF 0%, #45E6B0 45%, #8B5CFF 100%)',
        'insight-gradient':
          'linear-gradient(135deg, #8B5CFF 0%, #FF8BD4 45%, #FFB86B 100%)',
        'page-mesh':
          'radial-gradient(circle at 10% 10%, rgba(90, 220, 255, 0.22), transparent 28%), radial-gradient(circle at 85% 20%, rgba(166, 132, 255, 0.22), transparent 30%), radial-gradient(circle at 50% 90%, rgba(125, 255, 178, 0.16), transparent 35%), #F7FAFF',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 1.5s infinite',
        marquee: 'marquee 40s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
