var user = require('./../controllers/players')
console.log('running')

module.exports = function(app){
    app.post('/addplayer', function(req,res){
        user.addPlayer(req, res)
        return res.json(req.body)
    })
    app.get('/getall', function(req,res){
        console.log('in routes')
        console.log(user.getAll(req,res))
    })
}