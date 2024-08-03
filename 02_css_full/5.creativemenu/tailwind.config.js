/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")
module.exports = {
    content: ["./build/*.html", "./build/*.js"],
    theme: {
      extend: {
        animation: {
        //   delay1: "loadbub 0.5s ease-in-out 0.3s infinite",
        
        },
        keyframes: {
          loadbub: {
            "0%": { transform: "scale(0.8)" },
            "50%": { transform: "scale(1)" },
            "100%": { transform: "scale(0.8)" },
          },
        },
      },
    },
    plugins: [
      plugin(({addUtilities,matchUtilities,theme})=>{
        const newUtilities = {
          ".rotateX1":{
            transform:"rotateX(-270deg)"
          },
          ".rotateX2":{
            transform:"rotateX(0deg)"
          },
          ".seeText":{
            mixBlendMode:"multiply"
          },
          ".perspectiveRotate1":{
            transform:"perspective(1000px) rotateX(70deg)"
          },
          ".perspectiveRotate2":{
            transform:"perspective(1000px) rotateX(-70deg)"
          }
        }
        addUtilities(newUtilities,["responsive","hover"])
      //   matchUtilities({
      //     rotateAtX:(value)=>({
      //       transform:value
      //     })
      //   },
      //   {values:theme("transform")}
      // )
      })
    ],
  };
  