/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/*.js"],
  theme: {
    extend: {
      animation: {
        delay1: "loadbub 0.5s ease-in-out 0.3s infinite",
        delay2: "loadbub 0.5s ease-in-out 0.4s infinite",
        delay3: "loadbub 0.5s ease-in-out 0.5s infinite",
        delay4: "loadbub 0.5s ease-in-out 0.6s infinite",
        delay5: "loadbub 0.5s ease-in-out 0.7s infinite",
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
  plugins: [],
};
