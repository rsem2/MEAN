var user = require('./../controllers/users')

module.exports = function(app){

    app.get('/adduser/:name', function(req,res){
        console.log('adding user in routes')
        console.log(req.params.name)
        user.getSession(req,res)
        console.log('finished adding user in routes')
    })

    app.get('/allusers', function(req,res){
        console.log('in routes finding info on all users')
        user.getAll(req,res)
    })

    app.post('/edituser/:id',function(req,res){
        console.log('in routes editing')
        user.editUser(req,res)
    })

    // app.get('/loggedin', function(req,res){  
    //     console.log('in routes the logged in person is: ',req.session.user_name )
    //     if(req.session.user_name == undefined){
    //         return res.redirect('/')
    //     }
    //     else{
    //         return res.redirect('/dashboard')
    //     }
    // })

    app.get("*", function(req,res){
        res.redirect('/')
    })
}