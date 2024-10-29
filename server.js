// Here is where we import modules
// We begin by loading Express
require('dotenv').config();
require("./config/database");
const express = require("express");


const app = express();
const PORT = process.env.PORT ? process.env.PORT : '3000' ; 

app.get('/', async(req, res) => {
    res.render('index.ejs');
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
