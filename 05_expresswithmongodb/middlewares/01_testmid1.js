const express = require("express");
const app = express();
const port = 3000;
app.use((req, res, next) => {
  console.log("this is middleware 1");
  next();
});

app.use((req, res, next) => {
  console.log("this is middleware 2");
  next();
});

app.listen(port, () => {
  console.log("listening on port");
});

app.get("/tim", (req, res) => {
  res.send("lol");
});
