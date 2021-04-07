const mongoose = require("mongoose")


const bearSchema = mongoose.Schema({
    color: String,
    bread: String,
    age: Number
})
module.exports = mongoose.model("Bear", bearSchema)
