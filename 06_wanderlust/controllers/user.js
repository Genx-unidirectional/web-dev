const User = require("../models/user");

module.exports.signUp = async(req, res)=>{
    try{

        const {email,username,password} = req.body;
        const newUser = new User({
            email,username
        })
        const registerUser = await User.register(newUser,password)
        // console.log(registerUser)
        req.login(registerUser,(err)=>{
            if(err){
                return next(err)`       `
            }
            req.flash('success',"welcome to wanderlust!")
            res.redirect("/listings");
        })
    }catch(e){
        req.flash("error",e.message);
        res.redirect("/signup")
    }
}

module.exports.login = async(req, res)=>{
    if(res.locals.redirectUrl){

        req.flash("success","You successfully logged in")
        res.redirect(`${res.locals.redirectUrl}`)
    }else{
        req.flash("success","welcome back to wanderlust")
        res.redirect("/listings")
    }
}

module.exports.logout = (req,res,next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","you are logged out!");
        res.redirect("/listings");
    })
}