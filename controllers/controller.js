const express = require('express');
const Car = require('../models/Car.js');
const db = require('../models/index.js');
const router = express.Router()


//index route
router.get('/', (req, res) => {
    db.Car.find({}, (err, allCars)=>{
        if (err) return console.log(err)

        res.render('index.ejs', {allCars: allCars})
    })
})

//CREATE ROUTE
router.get('/new', (req, res) => {
    res.render('new.ejs');
});

router.post('/', (req,res) => {
    db.Car.create(req.body, (err,output)=>{
        if (err) return console.log(err)
        res.redirect('/cars')
    })

 })

// //Show route, must go after the create route

router.get('/:id', (req, res)=> {
    console.log(req.params.id)
    db.Car.findById(req.params.id, (err, foundCar) =>{
        if (err) return console.log(err)
        // the first param of render() is the .ejs file that we want to inject data into
        // the second param is the data that we want to inject into the .ejs file (it must be an object)
        res.render('show.ejs', {vehicle: foundCar });
    })
});


// delete
router.delete('/:id', (req, res) => {
   db.Car.findByIdAndDelete(req.params.id, (err, deleted)=>{
       if (err) return console.log(err)
       res.redirect('/cars');
   });
});


// update
router.get('/:id/edit', (req,res) => {
    db.Car.findById(req.params.id, (err,foundCar)=> {
        if (err) return console.log(err)
        res.render('edit.ejs', { vehicle: foundCar})
    })
})

router.put('/:id', (req,res) => {
    // if(req.body.hybridAvailability === 'on'){
    //     req.body.hybridAvailability = true
    // } else {
    //     req.body.hybridAvailability = false
    // }
    db.Car.findByIdAndUpdate(req.params.id, req.body, (err, updatedCar)=>{
        if (err) return console.log(err)
        res.redirect(`/cars/${req.params.id}`)

    })
})




module.exports = router