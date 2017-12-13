var mongoose = require('mongoose')
var Schema = mongoose.Schema

var NoteSchema = new Schema({
    content: String,
    created_at: Date
})

mongoose.model('Note', NoteSchema)