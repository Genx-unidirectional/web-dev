const express = require("express");
const app = express();

app.get("/err", (req, res) => {
  abcd = abcd;
});

app.use((err, req, res, next) => {
  console.log("____Error1____");
  const { status = 500, message = "some error occurred" } = err;
  res.status(status).send(message);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
