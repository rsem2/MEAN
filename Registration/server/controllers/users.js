var mongoose = require('mongoose')
var User = mongoose.model('User')

module.exports = {

    addUser: function(req,res){
        User.create(req.body, function(err,player){
            console.log(user,'is created')
        })
    }
}