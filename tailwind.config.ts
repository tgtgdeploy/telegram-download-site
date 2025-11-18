import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'telegram-blue': '#0088cc',
        'telegram-light': '#64B5F6',
        'telegram-dark': '#006699',
      },
    },
  },
  plugins: [],
}
export default config
