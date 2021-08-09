const mongoose = require('mongoose')

const connectionString = 'mongodb://localhost:27017/carsdb'

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

mongoose.connection.on('connected', () => {
    console.log(`mongoose is loose on ${connectionString}`)
})


module.exports = {
    Car: require('./Car.js')
}