// 1st define the schena, or the shame of the object we want to store.
// 2nd tell mongoode the model we want to generate is based on the schema and providea name to it. 
// mongoose.model("Name", schema)

//3rd share with the rest of our application
// module.exports = modelName

const mongoose = require('mongoose');

const fruitSchema = new mongoose.Schema({
    name: String,
    isReadyToEat: Boolean,
}); // create model schema

const Fruit = mongoose.model("Fruit", fruitSchema); //create model

module.exports = Fruit;