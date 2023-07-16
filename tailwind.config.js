/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        about_bg: 'url("/about_bg.png")',
        hero_bg: 'url("/hero_bg.png")',
      },
      colors: {
        skin: {
          'dark-600': '#323232',
          'cyan-500': '#80EEE9',
        },
      },
      fontFamily: {
        quicksant: ['var(--font-quicksant)'],
        gilroy: ['var(--font-gilroy)'],
      },
    },
  },
  plugins: [],
};
