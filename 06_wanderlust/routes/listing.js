const express = require('express');
const router = express.Router()
const Listing = require("../models/listing");
const wrapAsync = require("../utils/wrapAsync.js")
const ExpressError= require("../utils/ExpressError.js")
const {listingSchema} = require("../schema.js")

const validateListing = (req,res,next)=>{
    const {error} = listingSchema.validate(req.body); 
    if(error){
      throw new ExpressError(400,error)
    }else{
      next(); 
    }
  }

router.get("/",wrapAsync(async(req, res)=>{
    const allListings = await Listing.find({})    
    res.render("listings/index.ejs",{allListings})
}))



//NEW ROUTE
router.get("/new",(req,res)=>{
    res.render("listings/new.ejs")
})

router.post("/",validateListing,wrapAsync(async(req,res,next)=>{
    const {title,description,imageurl,price,location,country} = req.body.listing
    const newListing = new Listing({title,description,image:{url:imageurl},price,location,country})
    await newListing.save()
    req.flash("success","new listing created successfully")
    res.redirect("/listings")
}))


//SHOW ROUTE
router.get("/:id",wrapAsync(async(req,res)=>{
    const {id} = req.params
    const listing = await Listing.findById(id).populate("reviews");
    if(!listing){
      req.flash("error","listing does not exists!")
      res.redirect("/listings")
    }else{

      res.render("listings/show.ejs",{listing})
    }
}))


//EDIT ROUTE
router.get("/:id/edit",wrapAsync(async(req,res)=>{
    const {id} = req.params
    const list = await Listing.findById(id)
    if(!list){
      req.flash("error","listing does not exists!")
      res.redirect("/listings")
    }else{
      res.render("listings/edit.ejs",{list})
    }
  }))

router.put("/:id",validateListing,wrapAsync(async(req,res)=>{
    const {id} = req.params
    await Listing.findByIdAndUpdate(id, {...req.body.listing})
    res.redirect(`/listings/${id}`)
}))

//DELETE ROUTE

router.delete("/:id",wrapAsync(async(req,res)=>{
    const {id} = req.params
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings")
}))


module.exports =router