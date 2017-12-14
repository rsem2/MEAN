var player = require('./../controllers/players')

module.exports = function(app){
    app.post('/addplayer', function(req,res){
        player.addPlayer(req, res)
        return res.json(req.body)
    })

    app.get('/allplayers', function(req,res){
        console.log('in routes')
        player.getAll(req,res)
    })

    app.get('/removeplayer/:id', function(req,res){
        player.removePlayer(req, res)
        // return res.json()
    })

    app.get("*", function(req,res){
        res.redirect('/')
    })
}