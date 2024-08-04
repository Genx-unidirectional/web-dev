/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")
module.exports = {
    content: ["./build/*.html", "./build/*.js"],
    theme: {
      extend: {
        backgroundImage:{
          "custom-image1":"url(https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170)"
        },
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
      
    ],
  };
  