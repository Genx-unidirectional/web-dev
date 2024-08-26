const express = require("express");
const app = express();

//creating the custom middleware which runs and check the access tokes in order to redirect the user on requested route

// app.use("/beta", (req, res, next) => {
//   const { token } = req.query;
//   if (token === "give access") {
//     next();
//   }
//   res.send("ACCESS DENIED!");
// });
// or we can do this

//CHAINING THE MIDDLEWARES

const checkToken = (req, res, next) => {
  const { token } = req.query;
  if (token === "give access") {
    next();
  }
  res.send("ACCESS DENIED!");
};
app.get("/beta", checkToken, (req, res) => {
  res.send("this is beta version");
});
app.listen(3000, () => {
  console.log("listening on 3000 port");
});
