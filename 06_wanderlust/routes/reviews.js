const express = require('express');
const router = express.Router({mergeParams: true});
const Listing = require("../models/listing");
const Review = require("../models/reviews.js")
const wrapAsync = require("../utils/wrapAsync.js")
const ExpressError= require("../utils/ExpressError.js")
const {reviewsSchema} = require("../schema.js")

const validateReview = (req,res,next)=>{
    const {error} = reviewsSchema.validate(req.body);
    if(error){
      throw new ExpressError(400,error)
    }else{
      next()
    }
  }



  router.post("/",validateReview,wrapAsync(async(req,res)=>{
    const listing = await Listing.findById(req.params.id);
    const newReview =new Review(req.body.review)
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    req.flash("success","review created successfully")
    res.redirect(`/listings/${req.params.id}`)
  }))
  
  //delete for review
  router.delete("/:reviewId",wrapAsync(async(req,res)=>{
    const {id,reviewId} = req.params
    await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}})
    await Review.findByIdAndDelete(reviewId)
    res.redirect(`/listings/${id}`)
  }))

module.exports = router