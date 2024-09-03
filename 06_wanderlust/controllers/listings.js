
const Listing = require("../models/listing.js")

module.exports.index = async(req, res)=>{
    const allListings = await Listing.find({})    
    res.render("listings/index.ejs",{allListings})
}

module.exports.postNewList= async(req,res,next)=>{
    const {title,description,imageurl,price,location,country} = req.body.listing
    const newListing = new Listing({title,description,image:{url:imageurl},price,location,country})
    newListing.owner = req.user._id
    await newListing.save()
    req.flash("success","new listing created successfully")
    res.redirect("/listings")
}

module.exports.newListingForm = (req,res)=>{
  
    res.render("listings/new.ejs")
}

module.exports.showListing = async(req,res)=>{
    const {id} = req.params
    const listing = await Listing.findById(id).populate({path:"reviews",populate:{path:"author"}}).populate("owner");
    if(!listing){
      req.flash("error","listing does not exists!")
      res.redirect("/listings")
    }else{
      res.render("listings/show.ejs",{listing})
    }
}

module.exports.getEditForm = async(req,res)=>{
    const {id} = req.params
    const list = await Listing.findById(id)
    if(!list){
      req.flash("error","listing does not exists!")
      res.redirect("/listings")
    }else{
      res.render("listings/edit.ejs",{list})
    }
  }

module.exports.editList =async(req,res)=>{
    const {id} = req.params
    
    await Listing.findByIdAndUpdate(id, {...req.body.listing})
    res.redirect(`/listings/${id}`)
}

module.exports.destroyList = async(req,res)=>{
    const {id} = req.params
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings")
}