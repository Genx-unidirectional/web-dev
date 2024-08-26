const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("middleware one");
  next();
  // console.log("this is after next") this bad practice of writing code
});

app.use((req, res, next) => {
  console.log("middleware two");
  next();
});
//we can chain the middlewares and middlewares always runs irrespective of which route is called

app.get("/random", (req, res) => {
  res.send("this is random route");
});
app.listen(3000, () => {
  console.log(`listening on port ${3000}`);
});
