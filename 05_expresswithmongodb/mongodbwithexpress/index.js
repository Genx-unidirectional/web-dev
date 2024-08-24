const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8080;
const path = require("path");
const Chat = require("./models/chat");
const methodOverride = require("method-override");
const ExpressError = require("./expressError.js")
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"))
async function main() {
  // await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
  await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
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


// using asyncWrap rather than try catch

function asyncWrap(fn){
  return function(req,res,next){
    fn(req,res,next).catch((err)=>next(err))
  }
}
app.get("/chats/new",(req, res) => {
  res.render("new.ejs")
})

app.get("/chats/:id",asyncWrap(async(req,res,next)=>{
    const {id} = req.params
      const user = await Chat.findById(id)
      if(!user){
        throw new ExpressError(404,"chat not found")
      }
      res.render("show.ejs",{user})
  
}))

//edit 

app.get("/chats/:id/edit",  asyncWrap(async(req, res) => {
  const {id} = req.params;
  const data = await Chat.findById(id)
  res.render("edit.ejs",{data})
}))

app.put("/chats/:id",asyncWrap(async(req, res) => {
  const {id} = req.params;
  const {message }= req.body
  await Chat.findByIdAndUpdate(id,{msg:message})
  res.redirect("/chats")
}))

//new chat








app.post("/chats",asyncWrap(async(req, res) => {
  const {from, to ,message} = req.body
  const newChat = new Chat({from,to,msg:message,created_at:new Date()})
  await newChat.save()
  res.redirect("chats")
}))


app.delete("/chats/:id/delete",asyncWrap(async(req,res)=>{
  const {id} = req.params;
  await Chat.findByIdAndDelete(id);
  res.redirect("/chats")
}))



app.use((err,req, res,next) => {
  console.log(err.name)
  console.dir(err)
  // if(err.name ===validationError){
  //   err = handleValidationErr(err)
  // }
  
  next(err)
})

app.use((err,req,res,next)=>{
  const {status=500,message="some error  occurred"} = err
    res.status(status).send(message)  
})
