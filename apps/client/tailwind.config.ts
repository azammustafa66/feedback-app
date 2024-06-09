/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ghostwhite: {
          '100': '#f7f8fd',
          '200': '#f2f4ff',
          '300': '#f2f4fe'
        },
        white: '#fff',
        darkslateblue: {
          '100': '#3a4374',
          '200': '#373f68',
          '300': 'rgba(58, 67, 116, 0.5)'
        },
        royalblue: '#4661e6',
        slategray: '#647196',
        gainsboro: '#d9dbe6',
        darkviolet: {
          '100': '#d445ff',
          '200': '#ad1fea'
        },
        deepskyblue: '#62bcfa',
        darksalmon: '#f49f85',
        gray: 'rgba(255, 255, 255, 0.75)'
      },
      spacing: {},
      fontFamily: {
        jost: 'Jost'
      },
      borderRadius: {
        '3xs': '10px'
      }
    },
    fontSize: {
      base: '16px',
      smi: '13px',
      lg: '18px',
      sm: '14px',
      inherit: 'inherit'
    },
    screens: {
      mq850: {
        raw: 'screen and (max-width: 850px)'
      },
      mq675: {
        raw: 'screen and (max-width: 675px)'
      },
      mq450: {
        raw: 'screen and (max-width: 450px)'
      }
    }
  },
  corePlugins: {
    preflight: false
  }
}
