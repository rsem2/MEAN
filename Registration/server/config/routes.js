var user = require('./../controllers/users')

module.exports = function(app){
    app.post('/adduser', function(req,res){
        player.addUser(req, res)
        return res.json(req.body)
    })
}