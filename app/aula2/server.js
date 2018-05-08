const express = require('express')
    , path = require('path')
    , server = express()

//CHANGE DEFAULT VIEWS FOLDER
server.set('views', path.join(__dirname, '/views'))

//CALLBACK STATIC FILES
server.use(express.static(
    path.join(__dirname, '/public')
))

module.exports = server