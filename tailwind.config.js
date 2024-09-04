 
  
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {

        t1:[ "Poiret One", "sans-serif"],
        ex:[ "Exo 2", "sans-serif"],
        baro:[ "Barrio", "system-ui"],
        pr:[   "Press Start 2P", "system-ui"],
        unco:[ "Uncial Antiqua", "system-ui"],
        buda:["Buda", "serif"],
        amar:["Amarante", "serif"],
        gal:[ "Galindo", "sans-serif"],
        moli:[ "Mooli", "sans-serif"],
        ori:[ "Original Surfer", "sans-serif"],

        
     
      },
    },
  },
  plugins: [],
};
