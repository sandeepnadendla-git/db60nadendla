const mongoose = require("mongoose")


const bearSchema = mongoose.Schema({
    Color: {
        type: String,
        minLength: 2,
        required: true
    },
    Bread: {
        type: String,
        minLength: 2,
        required: true
    },
    Age: {
        type: Number,
        min: [0, 'must be greater than 0'],
        max: 25,
    },
})

module.exports = mongoose.model("Bear", bearSchema)
