const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

const sessionOptions = {
  secret: "mysupersecretstring",
  resave: false,
  saveUninitialized: true,
};
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(session(sessionOptions));
app.use(flash());
//let's say we want to create the flash message when user first time created we use flash package
app.use((req, res, next) => {
  // console.log("here middleware is run");
  res.locals.success = req.flash("success");
  next();
});
app.get("/register", (req, res) => {
  // console.log("here register is run");
  const { name = "anonymous" } = req.query;
  req.session.name = name;
  req.flash("success", "the user register successfully");
  res.redirect("/hello");
});

app.get("/hello", (req, res) => {
  console.log(req.flash("success"));
  res.render("index.ejs", {
    name: req.session.name,
  });
});

// app.get("/test", (req, res) => {
//   res.send("test successful");
// });

// let's check the session count

// app.get("/reqcount", (req, res) => {
//   if (req.session.count) {
//     req.session.count++;
//   } else {
//     req.session.count = 1;
//   }
//   res.send(`the session count is ${req.session.count}`);
// });

app.listen(3000, () => {
  console.log("listening on port 3000");
});

// const cookieParser = require("cookie-parser");
// app.use(cookieParser("secretCode"));

// app.get("/", (req, res) => {
//   console.dir(req.cookies);
//   console.dir(req.signedCookies);
//   res.send("this is root user");
// });

// app.get("/greet", (req, res) => {
//   const { name = "anonymous" } = req.cookies;
//   res.send(`hello,${name}`);
// });

// app.get("/cookiepage", (req, res) => {
//   res.cookie("greet", "hello");
//   res.send("this is cookie page");
// });

// app.get("/signCook", (req, res) => {
//   res.cookie("country", "india", { signed: true });
//   res.send("this is signed cookie page");
// });
