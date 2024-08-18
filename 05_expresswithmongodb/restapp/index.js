const express = require("express")
const app = express();
const {v4:uuidv4} = require("uuid")
const methodOverride = require("method-override") 
const path =require("path") 
const port = 3000;


app.use(express.static(path.join(__dirname,"public")))
// app.use(express.static(path.join(__dirname,"src")));
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}))
app.set("views",path.join(__dirname,"/views"))
app.use(methodOverride("_method"))

let posts = [
      {
        id: uuidv4(),
        username: "apnacollge",
        content: "we are just started let's see where we ended up",
      },
      {
        id: uuidv4(),
        username: "Royce",
        content: "Small things makes perfection but perfection is not small thing",
      },
      {
        id: uuidv4(),
        username: "Elonmusk",
        content:
          "If something is important to get done you should keep doing it or die trying",
      },
]

app.listen(port, ()=>{
    console.log(`listening on ${port}`)
})

app.get("/posts",(req, res)=>{
    res.render("index.ejs",{posts})
})
app.get("/new",(req, res)=>{
    res.render("new.ejs")
})

app.post("/posts",(req,res)=>{
    const {username, content} = req.body
    posts.push({id:uuidv4(),username, content})
    res.redirect("/posts")
})


// edit

app.get("/posts/:id/edit",(req, res)=>{
  const {id} = req.params
  const post =posts.find(item=>item.id ===id); 
  res.render("edit.ejs",{post})
})

app.patch("/posts/:id",(req,res)=>{
  const {content} = req.body
  const {id} = req.params
  const post = posts.find(item=>item.id ===id)
  post.content = content
  res.redirect("/posts")
})

app.delete("/posts/:id",(req, res)=>{
  const {id} = req.params
  posts = posts.filter(item=>item.id !==id)
  res.redirect("/posts")
 })