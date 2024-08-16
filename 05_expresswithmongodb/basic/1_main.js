const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.listen(port, () => {
  console.log(`listening on ${port}`);
});

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/:username/:id", (req, res) => {
  const { username, id } = req.params;
  res.send(`${username} with ${id}`);
});

app.get("/search", (req, res) => {
  const { q } = req.query;
  if (!q) {
    console.log("No query");
  }

  res.send(`your query is ${q}`);
});
