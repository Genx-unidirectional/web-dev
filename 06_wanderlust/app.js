const express = require("express");
const app = express();
const mongoose = require("mongoose");
const MONGODB_URL = "mongodb://127.0.0.1:27017/wanderlust";
const port = 8080;
const path = require("path");
const methodOverride = require("method-override")
const ejsMate = require("ejs-mate");
const ExpressError= require("./utils/ExpressError.js")
const reviews = require("./routes/reviews.js")
const listings  = require("./routes/listing.js")
const session = require("express-session")
const flash = require("connect-flash")
const sessionOptions = {
  secret:"mysupersecretstring",
  resave:false,
  saveUninitialized:true,
  cookie:{
    expires:Date.now()*7*24*60*60*1000,
    maxAge:7*24*60*60*1000
  },
  httpOnly:true
}
app.use(express.static(path.join(__dirname,"public")))
app.set("views",path.join(__dirname,"views"))
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))
app.engine("ejs",ejsMate)
app.use(session(sessionOptions))
app.use(flash());
async function main() {
  mongoose.connect(MONGODB_URL);
}
main()
  .then((res) => console.log("connection made at app.js top level file"))
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("i am root");
});

//FOR MAKING SINGLE MESSAGE SHOWN ON PAGE WHEN USER ADDS NEW LISTING
app.use((req,res,next)=>{
  res.locals.success = req.flash("success")
  res.locals.error = req.flash("error")
  next();
})


//FOR ALL LISTING RELATED ROUTES
app.use("/listings",listings)

//FOR ALL REVIEWS RELATED ROUTES
app.use("/listings/:id/review",reviews)

app.all("*",(req,res,next)=>{
  next(new ExpressError(404,"page not found"))
})

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  const { statusCode = 500, message = "something went wrong!" } = err;
  res.status(statusCode).render("error.ejs", { err });
});

// app.use((err,req,res,next)=>{
//   res.send("something went wrong")
// })

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});