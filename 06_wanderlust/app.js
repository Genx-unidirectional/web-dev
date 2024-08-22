const express = require("express");
const app = express();
const mongoose = require("mongoose");
const MONGODB_URL = "mongodb://127.0.0.1:27017/wanderlust";
const port = 8080;
const Listing = require("./models/listing");
const path = require("path");
const methodOverride = require("method-override")
const ejsMate = require("ejs-mate");
app.use(express.static(path.join(__dirname,"public")))
app.set("views",path.join(__dirname,"views"))
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))
app.engine("ejs",ejsMate)
async function main() {
  mongoose.connect(MONGODB_URL);
}
main()
  .then((res) => console.log("connection made at app.js top level file"))
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("i am root");
});

// app.get("/testListing", async (req, res) => {
//   const sampleListing = new Listing({
//     title: "My New Villa",
//     description: "By the beach",
//     price: 1200,
//     location: "Calangute, Goa",
//     country: "india",
//   });

//   await sampleListing.save();
//   console.log("sample was save");
//   res.send("successful testing");
// });



app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

app.get("/listings",async(req, res)=>{
    const allListings = await Listing.find({})    
    res.render("listings/index.ejs",{allListings})
})
    
    //new 
    
app.get("/listings/new",(req,res)=>{
    res.render("listings/new.ejs")
})

app.post("/listings",async(req,res)=>{
    const {title,description,imageurl,price,location,country} = req.body.listing
    const newListing = new Listing({title,description,image:{url:imageurl},price,location,country})
    await newListing.save()
    res.redirect("/listings")
})

app.get("/listings/:id",async(req,res)=>{
    const {id} = req.params
    const listing = await Listing.findById(id)
    res.render("listings/show.ejs",{listing})
})


//edit routes
app.get("/listings/:id/edit",async(req,res)=>{
  const {id} = req.params
  const list = await Listing.findById(id)
  res.render("listings/edit.ejs",{list})
})

app.patch("/listings/:id",async(req,res)=>{
  const {id} = req.params
  await Listing.findByIdAndUpdate(id, {...req.body.listing})
  res.redirect(`/listings/${id}`)
})
//delete route
app.delete("/listings/:id",async(req,res)=>{
  const {id} = req.params
  await Listing.findByIdAndDelete(id);
  res.redirect("/listings")
})