var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
    name: String,
    bucketList: []
})

mongoose.model('User', UserSchema);