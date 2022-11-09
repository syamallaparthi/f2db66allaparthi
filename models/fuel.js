const { ServerApiVersion } = require("mongodb")
const mongoose = require("mongoose")
const fuelSchema = mongoose.Schema({
    Category: String, 
    Color: String, 
    Quantity: Number
})

module.exports = mongoose.model("Fuel", fuelSchema)