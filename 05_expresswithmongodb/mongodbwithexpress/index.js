const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8080;
const path = require("path");
const Chat = require("./models/chat");
const methodOverride = require("method-override");
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"))
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

main().then((res) =>
  console.log("connection successful at main index.js file")
);

// let chat1 = new Chat({
//   from: "gex",
//   to: "tim",
//   msg: "send me your exam sheets",
//   created_at: new Date(),
// });

// chat1
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

app.listen(port, () => {
  console.log(`listening on ${port}`);
});

app.get("/", (req, res) => {
  res.send("root user");
});

app.get("/chats", async (req, res) => {
  const chats = await Chat.find({});
  res.render("index.ejs", { chats });
});


//edit 

app.get("/chats/:id/edit",  async(req, res) => {
  const {id} = req.params;
  const data = await Chat.findById(id)
  res.render("edit.ejs",{data})
})

app.patch("/chats/:id",async(req, res) => {
  const {id} = req.params;
  const {message }= req.body
  await Chat.findByIdAndUpdate(id,{msg:message}).then((res)=>{
    console.log(res)
  }).catch((err)=>{
    console.log(err)
  });
  res.redirect("/chats")
})

//new chat

app.get("/chats/new",(req, res) => {
  res.render("new.ejs")
})

app.post("/chats",async(req, res) => {
  const {from, to ,message} = req.body
  const newChat = new Chat({from,to,msg:message,created_at:new Date()})
  newChat.save().then((res)=>{
    console.log(res)
  }).catch((err)=>{console.log(err)})
  res.redirect("chats")
})


app.delete("/chats/:id/delete",async(req,res)=>{
  const {id} = req.params;
  await Chat.findByIdAndDelete(id);
  res.redirect("/chats")
})