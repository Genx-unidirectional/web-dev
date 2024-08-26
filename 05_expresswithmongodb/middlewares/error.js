const express = require("express");
const app = express();

//let's define the middleware for error

app.get("/err", (req, res) => {
  abcd = abcd;
});
app.use((err, req, res, next) => {
  console.log("_____ERROR_____");
  //   we have to pass the err inside the next handler so that wit will pass the error handling to the express default error handler
  //   next(); //it searches  for next non error handling route
  next(err);
});
app.use((err, req, res, next) => {
  console.log("_____ERROR2_____");
  next(err);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
