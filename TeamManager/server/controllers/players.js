var mongoose = require('mongoose')
var Player = mongoose.model('Player')

module.exports = {

    addPlayer: function(req,res){
        Player.create(req.body, function(err,player){
            console.log(player,'is created')
        })
    },

    getAll: function(req,res){
        Player.find({}, function(err, players){
            return res.json(players);
        })
    },

    removePlayer: function(req,res){
        Player.remove({_id:req.params.id}, function(err,target){
            if (err){console.log("failed grab")}
            else{
                res.json(target);
            }
        })
    },

    findPlayer: function(req, res){
        Player.find({_id: req.params.id}, function(err, player){
            console.log('final step... in the controller with the player:', player.name)
            return res.json(player);
        })
    },

    editPlayer: function(req,res){
        console.log('in controller before finding req')
        console.log(req.params.id)
        console.log(req.body)
        Player.findByIdAndUpdate(req.params.id, req.body, function(err, player){
            return res.json(player)
        })
        console.log('in the controller editing')
    }



}