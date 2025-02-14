module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: { 
        darkBackground: '#121212',
        whiteText: '#FFFFFF',
        primaryPink: '#FF4081',
        hoverPink: '#FF80AB',
        secondaryText: '#B0BEC5',
        highlightBlue: '#00E5FF',
        focusGreen: '#00C853',
        errorRed: '#D32F2F',
      },
    },
  },
  plugins: [],
}
