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
        console.log('in controller')
        console.log(req.params.id)
        Player.remove({_id:req.params.id}, function(err,target){
            if (err){console.log("failed grab")}
            else{
                res.json(target);
            }
        })

    }



}