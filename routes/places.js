var express = require('express');
var Sale = require('../models/sale');
var Place = require('../models/place');
var router = express.Router();

router.get('/', function (req, res, next) {

    Place.find()
        .populate('sales')
        .exec(function (err, places) {
            if(err){
                return res.status(500).json({
                    title: 'Error occured',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: places
            });
        });
});

module.exports = router;

// var place = new Place({
//         city: 'New York',
//         sales: '5a8b993e059e9f80ebeb97ae'
//     });
//
// place.save();
//
// Place.find()
//     .populate('sales')
//     .exec(function (error, result) {
//         console.log(result);
//     })