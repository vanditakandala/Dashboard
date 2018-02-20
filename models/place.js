var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    city: {type:String, required:true},
    sales: {type:Schema.Types.ObjectId, ref:'Sale'}
});

module.exports = mongoose.model('Place', schema);