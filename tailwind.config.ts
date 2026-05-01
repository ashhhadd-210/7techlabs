import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Page surfaces — warm editorial ivory family
        canvas: '#F4EFE5',
        paper: '#FAF6EC',
        parchment: '#EBE4D2',

        // Brand emphasis
        bottle: {
          DEFAULT: '#06241B',
          deep: '#04190F',
          mid: '#0A3327',
          light: '#0F4332'
        },

        // Accent — warm brass
        brass: {
          DEFAULT: '#9A7B3F',
          soft: '#B89058',
          deep: '#7A5F2E',
          mute: 'rgba(154, 123, 63, 0.12)'
        },

        // Ink — typography on light
        ink: {
          DEFAULT: '#1F1B16',
          secondary: '#4A4540',
          mute: '#7B756D',
          faint: '#A39C92'
        },

        // Text on dark surfaces
        cream: {
          DEFAULT: '#F5F1E8',
          secondary: '#D4CDBC',
          mute: '#9F9784'
        },

        // Hairlines
        rule: {
          DEFAULT: 'rgba(31, 27, 22, 0.10)',
          strong: 'rgba(31, 27, 22, 0.20)',
          brass: 'rgba(154, 123, 63, 0.45)'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']
      },
      letterSpacing: {
        editorial: '-0.022em',
        tight: '-0.015em',
        wide: '0.04em',
        widest: '0.22em'
      },
      maxWidth: {
        prose: '68ch'
      }
    }
  },
  plugins: []
};

export default config;
