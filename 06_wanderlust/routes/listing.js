const express = require('express');
const router = express.Router()
const Listing = require("../models/listing");
const wrapAsync = require("../utils/wrapAsync.js")

const {isLoggedIn,isOwner,validateListing} = require('../middleware.js')
const {index, postNewList, newListingForm, showListing, getEditForm, editList, destroyList} =require("../controllers/listings.js") 


router.route("/").get(wrapAsync(index)).post(validateListing,wrapAsync(postNewList))


//NEW ROUTE
router.get("/new",isLoggedIn,newListingForm)


router.route("/:id").get(wrapAsync(showListing)).put(isLoggedIn,isOwner,validateListing,wrapAsync(editList)).delete(isLoggedIn,isOwner,wrapAsync(destroyList))


//EDIT ROUTE
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(getEditForm))

module.exports =router