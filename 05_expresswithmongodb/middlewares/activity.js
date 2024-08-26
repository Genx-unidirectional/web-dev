const express = require("express");
const app = express();
const ExpressError = require("./expressError");

app.get("/admin", (req, res) => {
  throw new ExpressError(403, "Access to admin is forbidden");
});

app.use((err, req, res, next) => {
  const { status, message } = err;
  res.status(status).send(message);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
