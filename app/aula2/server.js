const express = require('express')
    , path = require('path')
    , server = express()

//CHANGE DEFAULT VIEWS FOLDER
server.set('views', path.join(__dirname, '/views'))
server.set('view engine', 'ejs')

//CALLBACK STATIC FILES
server.use(express.static(
    path.join(__dirname, '/public')
))

module.exports = server