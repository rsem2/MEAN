var player = require('./../controllers/players')

module.exports = function(app){
    app.post('/addplayer', function(req,res){
        player.addPlayer(req, res)
        return res.json(req.body)
    })

    app.post('/editplayer/:id', function(req,res){
        console.log('in routes editing')
        player.editPlayer(req,res)
    })

    app.get('/allplayers', function(req,res){
        console.log('in routes finding info on all players')
        player.getAll(req,res)
    })

    app.get('/removeplayer/:id', function(req,res){
        player.removePlayer(req, res)
    })

    app.get('/findplayer/:id', function(req,res){
        console.log('in the routes before going on to the controller')
        player.findPlayer(req, res)
        console.log('on the way back from the controller with the player', res.body)
    })

    app.get("*", function(req,res){
        res.redirect('/')
    })
}