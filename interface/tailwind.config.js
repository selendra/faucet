module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        selendra: '#03A9F4',
        black: '#1D3442',
        gray: '#F5F5F5',
        red: '#ED1576',
        yello: '#F0C90A',
        orange: '#D65B09',
      },
    },
  },
  plugins: [require('daisyui')],
};
