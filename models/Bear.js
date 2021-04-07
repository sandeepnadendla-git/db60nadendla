const mongoose = require("mongoose")


const bearSchema = mongoose.Schema({
    Color: String,
    Bread: String,
    Age: Number
})
module.exports = mongoose.model("Bear", bearSchema)
