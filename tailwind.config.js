/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // fontFamily: {
    //   sans: ['Graphik', 'sans-serif'],
    //   serif: ['Merriweather', 'serif'],
    // },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'status-color':'#DBDCDE',
        'status-pending-color':'#E66C02',
        'scan-vin-color':'#58595B',
        'form-label-color':'#58595B',
        'placeholder-color':"#B6B8BB",
        'layout-bg-color':'#F5F5F5'
      },
    },
  },
  plugins: [],
}
