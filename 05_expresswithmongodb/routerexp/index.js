const express = require("express");
const app = express();
const users = require("./router/user.js");

app.use("/users", users);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
