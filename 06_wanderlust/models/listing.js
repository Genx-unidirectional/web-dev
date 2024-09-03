const { ref, defaults } = require("joi");
const Review = require("./reviews.js")
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  image: {
    filename: String,
    url: {
      type:String,
      default:"https://images.unsplash.com/photo-1598183092516-6c5d92367a4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBhbG0lMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D",
      set:(v)=>v===""? "https://images.unsplash.com/photo-1598183092516-6c5d92367a4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBhbG0lMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D" :v
    },
  },
  price: Number,
  location: String,
  country: String,
  reviews:[
    {
    type:Schema.Types.ObjectId,
    ref:"Review"
   }
  ],
  owner:{
    type:Schema.Types.ObjectId,
    ref:"User"
  }
});


listingSchema.post("findOneAndDelete",async(listing)=>{
  if(listing){
    await Review.deleteMany({_id:{$in:listing.reviews}})
  }
})

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
