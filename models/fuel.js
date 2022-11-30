const { ServerApiVersion } = require("mongodb")
const mongoose = require("mongoose")
const fuelSchema = mongoose.Schema({
    Category: {
        type: String, 
        required: [true, 'Name of the cateory should not be empty']
    },
    Color: {
        type: String, 
        required: [true, 'Color should be of type string']
    },
    Quantity: {
        type: Number,
        min: 1,
        max: 5
    }
})

module.exports = mongoose.model("Fuel", fuelSchema)