const express = require("express");
const router = express.Router();

//get user
router.get("/", (req, res) => {
  res.send("this is users route");
});

//show route

router.get("/:id", (req, res) => {
  res.send(`this is user ${req.params.id}`);
});

//new
router.get("/new", (req, res) => {
  res.send("this is new route");
});

//delete
router.delete("/:id", (req, res) => {
  res.redirect("/users");
});

module.exports = router;
