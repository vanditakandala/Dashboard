var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
    laptops: {type:Number, required:true},
    tablets: {type:Number, required:true},
    accessories: {type:Number, required:true},
    phones: {type:Number, required:true},
    televisions: {type:Number, required:true}
});

module.exports = mongoose.model('Sale', schema);