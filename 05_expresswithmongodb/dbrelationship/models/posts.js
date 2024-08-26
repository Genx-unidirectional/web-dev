const mongoose = require("mongoose");
const { Schema } = mongoose;
const MONGODB_URL = "mongodb://localhost:27017/relationDemo";

main();
async function main() {
  await mongoose.connect(MONGODB_URL);
}

//making one user
//making posts which has reference to the user
//one to squillions

const userSchema = new Schema({
  username: String,
  email: String,
});

const postSchema = new Schema({
  content: String,
  likes: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

// const addData = async () => {
//   const user1 = new User({
//     username: "rahulKumar",
//     email: "rahulkumar@gmail.com",
//   });
//   let post1 = new Post({
//     content: "hello world",
//     likes: 7,
//   });
//   post1.user = user1;
//   await user1.save();
//   await post1.save();
//   const user1 = await User.findOne({ username: "rahulKumar" });
//   const post2 = new Post({
//     content: "let's get work done",
//     likes: 7000000,
//   });
//   post2.user = user1;
//   await post2.save();
// };

// addData();

const getData = async () => {
  const result = await Post.findOne({ likes: { $gt: 10 } }).populate(
    "user",
    "username"
  );
  console.log(result);
};

getData();
