const express = require("express");
const app = express();

// creating hte utility middleware
//below is custom logger
// app.use((req, res, next) => {
//   req.time = new Date(Date.now()).toString();
//   console.log(req.hostname, req.method, req.path, req.time);
//   next();
// });

// app.get("/base", (req, res) => {
// console.log("")
//   res.send("this is base");
// });

//Creating the custom middleware for specific route this middleware will run only for the this below route

app.use("/chat", (req, res, next) => {
  console.log("middleware for chat is triggered");
  next();
});

app.get("/chat", (req, res) => {
  res.send("welcome chat");
});

//creating middleware for 404 page means for all the undeclared pages the user s going to access the following middleware is going to run

app.use((req, res) => {
  res.status(404).send("page not found");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
