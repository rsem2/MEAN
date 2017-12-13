var mongoose = require('mongoose')
var Note = mongoose.model('Note')

module.exports = {
    addNote: function(req, res){
        Note.create(req.body, function(err, note){
            console.log(note, 'is created')
        })
    },
    getAll: function(req,res){
        Note.find({},function(err, notes){
            console.log('in controller')
            return res.json(notes)
        })
    }
}