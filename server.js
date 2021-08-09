
const express = require('express')
const methodOverride = require('method-override');
const app = express()
const PORT = 3000


// Middleware: sits in the middle of the request response cycle, to register use the .use method, you need this for the create route, when a req comes from a form, the request needs to be parsed, middleware does this. put this at the top of everything, at least this high up, otherwise stuff won't be defined. 
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:false}))
// registering methodOverride will allow us to add a query parameter called _method to our delete form



const carsController = require('./controllers/controller.js');
app.use('/cars', carsController);


app.listen(PORT, () => {
    console.log(`listening for requestions on port ${PORT}`)
    
})