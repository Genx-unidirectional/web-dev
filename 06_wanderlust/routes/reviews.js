const express = require('express');
const router = express.Router({mergeParams: true});

const wrapAsync = require("../utils/wrapAsync.js")
const {validateReview,isAuthor,isLoggedIn} = require("../middleware.js");
const { postReview, destroyReview } = require('../controllers/review.js');




  router.post("/",isLoggedIn,validateReview,wrapAsync(postReview))
    
  //delete for review
  router.delete("/:reviewId",isLoggedIn,isAuthor,wrapAsync(destroyReview))

module.exports = router