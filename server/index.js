var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')

var app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static('build'));


app.listen(4000);
console.log('listening at port 4000')