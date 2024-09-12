if(process.env.NODE_ENV!="production"){
  require("dotenv").config();
}
const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const MONGODB_URL = "mongodb://127.0.0.1:27017/wanderlust";
const dbUrl = process.env.ATLASDB_URL
const port = 8080;
const path = require("path");
const methodOverride = require("method-override")
const ejsMate = require("ejs-mate");
const ExpressError= require("./utils/ExpressError.js")
const reviewsRoute = require("./routes/reviews.js")
const listingsRoute  = require("./routes/listing.js")
const userRoute  = require("./routes/user.js")
const session = require("express-session")
const MongoStore = require('connect-mongo');
const flash = require("connect-flash")
const passport = require("passport")
const localStrategy = require("passport-local")
const User = require("./models/user.js");

const store = MongoStore.create({
  mongoUrl:dbUrl,
  crypto:{
    secret:"mysupersecretcode"
  },
  touchAfter:24*3600
})
store.on("error",()=>{
  console.log("Error in mongo session store",err)
})
const sessionOptions = {
  store,
  secret:"mysupersecretstring",
  resave:false,
  saveUninitialized:true,
  cookie:{
    expires:Date.now()*7*24*60*60*1000,
    maxAge:7*24*60*60*1000
  },
  httpOnly:true
};
app.use(express.static(path.join(__dirname,"public")))
app.set("views",path.join(__dirname,"views"))
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))
app.engine("ejs",ejsMate)
app.use(session(sessionOptions))
app.use(flash());
app.use(passport.initialize())
app.use(passport.session())
passport.use(new localStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
async function main() {
  mongoose.connect(dbUrl);
}
main()
  .then((res) => console.log("connection made at app.js top level file"))
  .catch((err) => {
    console.log(err);
});




app.get("/demouser",async(req,res)=>{
  let fakeUser = new User({
    email:"some@example.com",
    username:"delta-student"
  })
  const registeredUser =await  User.register(fakeUser,"helloWorld")
  console.log(registeredUser)
  res.send(registeredUser)
})

//FOR MAKING SINGLE MESSAGE SHOWN ON PAGE WHEN USER ADDS NEW LISTING
app.use((req,res,next)=>{
  res.locals.success = req.flash("success")
  res.locals.error = req.flash("error")
  res.locals.currUser = req.user
  next();
})


//FOR ALL LISTING RELATED ROUTES
app.use("/listings",listingsRoute)

//FOR ALL REVIEWS RELATED ROUTES
app.use("/listings/:id/review",reviewsRoute)

//FOR ALL USER RELATED ROUTES
app.use("/",userRoute)



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