const mongoose = require("mongoose");
const { Schema } = mongoose;
const MONGODB_URL = "mongodb://localhost:27017/randomuser";

main();
async function main() {
  await mongoose.connect(MONGODB_URL);
}

const userSchema = new Schema({
  username: String,
  addresses: [
    {
      _id: false,
      location: String,
      city: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

const user1 = new User({
  username: "genx",
  addresses: [
    {
      location: "metropolis",
      city: "gotham",
    },
  ],
});
user1.addresses.push({ location: "bronx", city: "new york" });

user1.save();
