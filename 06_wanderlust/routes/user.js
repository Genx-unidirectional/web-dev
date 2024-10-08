const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware.js")
const {signUp,login,logout} = require("../controllers/user.js")

router.route("/signup").get((req, res) => {
    res.render("users/signup.ejs")
}).post(wrapAsync(signUp))

router.route("/login").get((req, res)=>{
    res.render("users/login.ejs")
}).post(saveRedirectUrl,passport.authenticate("local",{failureRedirect:"/login",failureFlash:true}),login)

router.get("/logout",logout)
module.exports = router;