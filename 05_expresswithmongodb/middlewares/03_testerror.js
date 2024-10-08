const express = require("express");
const app = express();
const port = 3000;
const ExpressError = require("./04_expressError");
const checkToken = function (req, res, next) {
  const { token } = req.query;
  if (token === "giveAccess") {
    next();
  } else {
    throw new ExpressError(404, "Access denied!");
  }
};
app.get("/data", checkToken, (req, res) => {
  res.send("this is data page");
});

app.use((err, req, res, next) => {
  console.log("____Error____");
  res.send(err);
});
app.listen(port, () => {
  console.log("listening on port 3000");
});
