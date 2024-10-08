const express = require("express");
const app = express();
const port = 3000;

// app.use("/beta", (req, res, next) => {
//   const { token } = req.query;
//   if (token === "giveAccess") {
//     next();
//   }
//   res.send("Access denied");
// });

const tokenCheck = function (req, res, next) {
  const { token } = req.query;
  if (token === "giveAccess") {
    next();
  }
  res.send("Access denied");
};
app.get("/beta", tokenCheck, (req, res) => {
  res.send("this is beta");
});

app.listen(port, () => {
  console.log("listening on port 3000");
});
