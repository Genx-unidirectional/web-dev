const Listing = require("../models/listing.js")

const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN
const geocodingClient = mbxGeocoding({ accessToken: mapToken });
 

module.exports.index = async(req, res)=>{
    const allListings = await Listing.find({})    
    res.render("listings/index.ejs",{allListings})
}

module.exports.postNewList= async(req,res,next)=>{
  let response= await geocodingClient.forwardGeocode({
    query:req.body.listing.location,
    limit:1
  }).send()

  // console.log(response.body.features[0].geometry) 
  // res.send("done")
  const url =req.file.path;
  const  filename =req.file.filename
    const {title,description,price,location,country} = req.body.listing
    const newListing = new Listing({title,description,price,location,country})
    newListing.owner = req.user._id 
    newListing.image = {url,filename}
    newListing.geometry = response.body.features[0].geometry
    const savedListing= await newListing.save()
    console.log(savedListing)
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
      let originalImageUrl  = list.image.url
      originalImageUrl.replace("/upload","/upload/h_300,w_250")
      res.render("listings/edit.ejs",{list,originalImageUrl})
    }
  }

module.exports.editList =async(req,res)=>{
    const {id} = req.params
    
    const listing =  await Listing.findByIdAndUpdate(id, {...req.body.listing})
    if(typeof req.file !== undefined){
      const url = req.file.path
      const filename = req.file.filename
      listing.image = {url,filename }
      await listing.save();
    }
    req.flash("success","listing updated!")
    res.redirect(`/listings/${id}`)
}

module.exports.destroyList = async(req,res)=>{
    const {id} = req.params
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings")
}