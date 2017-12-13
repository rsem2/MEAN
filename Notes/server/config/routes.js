var note = require('./../controllers/notes')

module.exports = function(app){

    app.post('/addnote', function(req,res){
        console.log('in routes')
        console.log(req.body)
        note.addNote(req,res)
        return res.json(req.body)
    })

    app.get('/getall', function(req,res){
        console.log('in routes getting all')
        console.log(note.getAll(req,res))
    })

}