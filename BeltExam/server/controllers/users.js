var mongoose = require("mongoose");
var User = mongoose.model("User");//test without this 

module.exports ={
    getSession: function(req, res){
        console.log("User Controller")
        console.log("name", req.params.name);
        
        User.find({name: req.params.name}, function(err, users){
            console.log("in the controller find looking for users:", users)
            if (users.length < 1 ){
                
                User.create({name: req.params.name, bucketList: []}, function (err, user){
                    console.log(user)
                    console.log(user.name)
                    req.session.user_name = user.name;
                    console.log("Returning", req.session.user_name)
                    return res.json(req.session.user_name)
                    
                })
            } else {
                console.log("User already created", users[0])
                req.session.user_name = users[0].name
                console.log("Returning", req.session.user_name)                
                return res.json(req.session.user_name)        
            }
        })
    },

    getAll: function(req,res){
        User.find({}, function(err, users){
            return res.json(users);
        })
    },

    editUser: function(req,res){
        User.find({_id: req.params.id}, function(err, user){
            console.log("in the controller old user info:", user)
            console.log('info to be updated with this: ', req.body)
            User.findByIdAndUpdate(req.params.id, req.body, function(err, user){
                console.log('in the controller finished editing and about to return user')
                return res.json(user)
            })
            
        })
    }


}