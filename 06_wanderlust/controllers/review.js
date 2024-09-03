const Review = require("../models/reviews.js")
const Listing = require("../models/listing.js")

module.exports.postReview =async(req,res)=>{
    const listing = await Listing.findById(req.params.id);
    const newReview =new Review(req.body.review)
    newReview.author = req.user._id;
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    req.flash("success","review created successfully")
    res.redirect(`/listings/${req.params.id}`)
  }

module.exports.destroyReview = async(req,res)=>{
    const {id,reviewId} = req.params
    await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}})
    await Review.findByIdAndDelete(reviewId)
    res.redirect(`/listings/${id}`)
  }