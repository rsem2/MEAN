var express = require('express')
var session = require('express-session')
var app = express()
var bp = require('body-parser')
var path = require('path')
var port = 8000;

app.use(express.static(path.join(__dirname, './client/dist')))
app.use(bp.json())
app.use(session({secret:'asdfghjkl'}))



app.listen(port,()=>{
    console.log('listening on port 8000')
})