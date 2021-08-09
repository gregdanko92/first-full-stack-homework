const mongoose = require('mongoose')

//schema
const carSchema = new mongoose.Schema({
    carName: {type: String, required: true},
    colorName: {type: String, required: true},
    hybridAvailability: Boolean,
})

// car model
const Car = mongoose.model('Car', carSchema)

module.exports = Car

