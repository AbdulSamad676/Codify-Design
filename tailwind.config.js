module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      purpleb: '#4953CF',
      bhlum:'#000C4B',
      white: "#fff",
      black: "#000",
      red:"#dc2626",
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    
  ],
  extends:[
  ],
}
