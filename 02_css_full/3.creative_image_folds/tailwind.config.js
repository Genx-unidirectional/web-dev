/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")
module.exports = {
  content: ["./build/*.html", "./build/*.js"],
  theme: {
    extend: {
      
      backgroundImage:{
        "custom-image1":"url(https://images.unsplash.com/photo-1604537466158-719b1972feb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80)",
        "custom-image2":"url(https://images.unsplash.com/photo-1502228213426-d4e9f2add0e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
        "custom-image3":"url(https://images.unsplash.com/photo-1519757043093-285fcb07a4e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80)"
      },
      tabSize: {
        1: '1',
        2: '2',
        4: '4',
        8: '8',
      },
      clipPath:{
        "poly1":"polygon(0 0,20% 0,35% 100%,0 100%)",
        "poly2":"polygon(80% 0,100% 0,100% 100%,65% 100%)",
        "poly3":"polygon(20% 0,80% 0,65% 100%,35% 100%)",
        "poly4":"polygon(100% 0,100% 0,100% 100%,100% 100%)",
        "poly5":"polygon(0 0,100% 0,100% 100%,0 100%)"
      }
      
    },
  },
  plugins: [
    plugin(({addUtilities,matchUtilities,theme})=>{
      // const newUtility = {
      //   ".clip-polygon1":{
      //     clipPath:"polygon(100% 0,50% 50%,100% 100%)"
      //   }
      // }
      // addUtilities(newUtility,["responsive","hover"])
      matchUtilities(
        {
          tab: (value) => ({
            tabSize: value
          }),
        },
        { values: theme('tabSize') }
      )
      matchUtilities(
        {
          clipShape:(value)=>({
            clipPath:value
          })
        },
        {values:theme("clipPath")}
      )
    })
  ],
};
