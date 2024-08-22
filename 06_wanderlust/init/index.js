const mongoose = require("mongoose");
const initData = require("./data.js");
const MONGODB_URL = "mongodb://127.0.0.1:27017/wanderlust";
const Listing = require("../models/listing.js");
async function main() {
  mongoose.connect(MONGODB_URL);
}
main()
  .then((res) => console.log("connection made at initdb top level file"))
  .catch((err) => {
    console.log(err);
  });

const initDb = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log("data wa initialized");
};

initDb();
