var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BucketListSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
    user: String,
    created: Date
})

mongoose.model('BucketList', BucketListSchema);