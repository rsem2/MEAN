var mongoose = require('mongoose')
var Schema = mongoose.Schema
var PlayerSchema = new Schema({
    name: String
})

mongoose.model('Player', PlayerSchema)