const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://localhost:27017/test");
}

main()
  .then((r) => {
    console.log("connection successful");
  })
  .catch((err) => console.error(err));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

// const user1 = new User({
//   name: "adam",
//   email: "adam@example.com",
//   age: 23,
// });

// user1
//   .save()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// User.insertMany([
//   { name: "jane", email: "jane@gamil.com", age: 22 },
//   { name: "timothi", email: "timothi@gamil.com", age: 27 },
//   { name: "vera", email: "vera@gamil.com", age: 20 },
// ])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// User.find({})
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// User.find({ age: { $gte: 23 } })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// User.updateOne({ name: "adam" }, { age: 100 })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// User.insertMany([
//   { name: "gex", email: "gex@gmail.com", age: 44 },
//   { name: "rex", email: "rex@gmail.com", age: 45 },
//   { name: "tex", email: "tex@gmail.com", age: 49 },
// ])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// User.updateMany({ age: { $gt: 40 } }, { age: 50 })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// User.findOneAndUpdate({ age: 20 }, { age: 19 }, { new: true })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

User.findByIdAndUpdate("66c2c3b42c1fccdb162c65be")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
