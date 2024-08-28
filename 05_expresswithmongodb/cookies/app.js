const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser("secretCode"));

app.get("/", (req, res) => {
  console.dir(req.cookies);
  console.dir(req.signedCookies);
  res.send("this is root user");
});

app.get("/greet", (req, res) => {
  const { name = "anonymous" } = req.cookies;
  res.send(`hello,${name}`);
});

app.get("/cookiepage", (req, res) => {
  res.cookie("greet", "hello");
  res.send("this is cookie page");
});

app.get("/signCook", (req, res) => {
  res.cookie("country", "india", { signed: true });
  res.send("this is signed cookie page");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
