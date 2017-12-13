var mongoose = require('mongoose')
var path = require('path')
var fs = require('fs')
var mp = path.join(__dirname,'./../models')

mongoose.connect('mongodb://localhost/bball_db', function(){
    console.log('mongoose connected')
})

fs.readdirSync(mp).forEach(function(file){
    console.log('in mongoose')
    if(file.indexOf('.js')>0){
        require(mp+'/'+file)
    }
})