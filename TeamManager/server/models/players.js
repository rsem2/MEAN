var mongoose = require('mongoose')
var Schema = mongoose.Schema
var PlayerSchema = new Schema({
    name: String,
    position: String,
    game1: String,
    game2: String,
    game3: String
})

mongoose.model('Player', PlayerSchema)