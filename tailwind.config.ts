import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'icon-hover': 'rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false // remove default styles
  },
}
export default config
