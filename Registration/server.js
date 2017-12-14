var express = require('express')
var app = express()
var session = require('express-session')
var path = require('path')
var bp = require('body-parser')
var port = 8000;

app.use(express.static(path.join(__dirname,'/client/dist')))
app.use(session({secret:'secret'}))
app.use(bp.json())

// require('./server/config/mongoose')
// require('./server/config/routes')(app)

app.listen(port)