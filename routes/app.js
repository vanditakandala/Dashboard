var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
        res.render('index');
});

module.exports = router;


/* Nodejs Refresher code Below:
var User = require('../models/user');

router.get('/', function (req, res, next) {
    User.findOne({}, function (err, result) {
        if(err){
            return res.send('Error!');
        }
        res.render('node', {email:result.firstName});

    });

});


router.post('/', function (req, res, next) {
   var email = req.body.email;
   var user = new User({
       firstName: 'Vandita',
       lastName: 'Kandala',
       password: 'password',
       email: email
   });
   user.save(function (error, result) {
       console.log(result);
   });
   res.redirect('/');
});
*/
