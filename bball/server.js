var express = require('express');
var app = express();
var session = require('express-session');
var path = require('path')
var bp = require('body-parser')
var port = 8000

app.use(express.static(path.join(__dirname, './client/dist')))
app.use(bp.json())
app.use(session({secret:'topsecret'}))

require('./server/config/mongoose')
require('./server/config/routes')(app)

app.listen(port, function(){
    console.log('listening on port: '+port)
})