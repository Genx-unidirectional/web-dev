const Listing = require("./models/listing.js")
const ExpressError= require("./utils/ExpressError.js")
const {listingSchema,reviewsSchema} = require("./schema.js");
const Reviews = require("./models/reviews.js");
module.exports.isLoggedIn = (req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("error","you must be logged in to create listing!")
        res.redirect('/login')
    }else{
        next()
    }
    }

module.exports.validateReview = (req,res,next)=>{
        const {error} = reviewsSchema.validate(req.body);
        if(error){
          throw new ExpressError(400,error)
        }else{
          next()
        }
      }


module.exports.saveRedirectUrl = (req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl
    }
    next();
}


module.exports.isOwner = async(req,res,next)=>{
    const {id} = req.params 
        const list = await Listing.findById(id); 
    if(!list.owner.equals(res.locals.currUser._id)){
      req.flash("error","you are not owner of this listing")
      return res.redirect(`/listings/${id}`)
    }
    next()
}

module.exports.isAuthor = async(req,res,next)=>{
  const {id,reviewId}= req.params
  const review = await Reviews.findById(reviewId);
  if(!review.author.equals(res.locals.currUser._id)){
    req.flash("error","you are not author of this review")
    return res.redirect(`/listings/${id}`)
  }
  next()
}

module.exports.validateListing = (req,res,next)=>{
    const {error} = listingSchema.validate(req.body); 
    if(error){
      throw new ExpressError(400,error)
    }else{
      next(); 
    }
  }