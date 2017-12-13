var mongoose = require('mongoose')
var Player = mongoose.model('Player')

module.exports = {
    addPlayer: function(req,res){
        Player.create({name: req.body.name}, function(err,user){
            console.log(user,'is created')
        })
    },
    getAll: function(req,res){
        Player.find({}, function(err,users){
            return res.json(users)
        })
    }
}