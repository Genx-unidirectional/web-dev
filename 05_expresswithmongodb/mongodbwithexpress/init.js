const mongoose = require("mongoose");
const Chat = require("./models/chat");
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
main()
  .then((res) => {
    console.log("connection successful at init.js");
  })
  .catch((err) => console.log(err));
const allChats = [
  {
    from: "alex",
    to: "bob",
    msg: "did you complete the assignment?",
    created_at: new Date(),
  },
  {
    from: "jane",
    to: "lisa",
    msg: "let’s meet for coffee later.",
    created_at: new Date(),
  },
  {
    from: "mike",
    to: "sam",
    msg: "can you send me the project files?",
    created_at: new Date(),
  },
  {
    from: "emily",
    to: "sara",
    msg: "don't forget the team meeting tomorrow.",
    created_at: new Date(),
  },
  {
    from: "dan",
    to: "leo",
    msg: "let’s review the code changes together.",
    created_at: new Date(),
  },
  {
    from: "nina",
    to: "chris",
    msg: "are you free for a call later?",
    created_at: new Date(),
  },
];

// Chat.deleteMany({})
Chat.insertMany(allChats)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
