// Here is where we import modules
// We begin by loading Express
require('dotenv').config();
require("./config/database");
const express = require("express");

const Fruit = require("./models/fruit");
const app = express();
const PORT = process.env.PORT ? process.env.PORT : '3000' ;

//middleware
app.use(express.urlencoded({ extended: false }));

// routes
app.get('/', async (req, res) => {
    res.render('index.ejs');
});
// setup a route to show a form to add a fruit
// server.js

app.get("/fruits", async (req, res) => {
  const allFruits = await Fruit.find();
  res.render("fruits/index.ejs", { fruits: allFruits });
});


// GET /fruits/new
app.get("/fruits/new", (req, res) => {
  res.render("fruits/new.ejs");
});

app.get("/fruits/:fruitId", async (req, res) => {
  const foundFruit = await Fruit.findById(req.params.fruitId);
  res.render("fruits/show.ejs", { fruit: foundFruit });
});



// POST /fruits
app.post("/fruits", async (req, res) => {
  if (req.body.isReadyToEat === "on") {
    req.body.isReadyToEat = true;
  } else {
    req.body.isReadyToEat = false;
  }
  await Fruit.create(req.body);
  res.redirect("/fruits"); // redirect to index fruits
});



// setup a route to show a form to update a fruit
//
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
