const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const instagram = require("./data.json");
app.use(express.static(path.join(__dirname, "")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`listening on ${port}`);
});

// app.get("/:username", (req, res) => {
//   const { username } = req.params;

//   const user = instagram[username];
//   res.render("ig.ejs", { user });
// });

app.get("/register", (req, res) => {
  const { username, password } = req.params;
  res.render("user.ejs", { user: { username, password } });
});
app.post("/register", (req, res) => {
  const { username, password } = req.body;
  res.render("user.ejs", { user: { username, password } });
});
