const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/books");
}

main()
  .then((res) => console.log("connection in books successfully"))
  .then((err) => console.log(err));

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 20,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    min: [1, "price should be greater than "],
  },
  category: {
    type: String,
    enum: ["fiction", "non-fiction"],
  },
  genre: {
    type: String,
  },
});

const Book = mongoose.model("Book", bookSchema);

const book1 = new Book({
  title: "marvel comics",
  author: "jack",
  price: 20,
  category: "non-fiction",
  genre: "good",
});

book1
  .save()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
