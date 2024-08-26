const express = require("express");
const app = express();
const ExpressError = require("./expressError");

const checkToken = (req, res, next) => {
  const { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  throw new ExpressError(404, "ACCESS DENIED!");
};

app.get("/data", checkToken, (req, res) => {
  res.send("this is data file");
});

app.use((err, req, res, next) => {
  console.log("_______ERROR_______");
  res.send(err);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
