const config = require('./config.server')
    , express = require('express')
    , path = require('path')
    
let server = express()

//ADD CONFIG FUNCTIONS TO SERVER
Object.assign(server, config(server))

//CHANGE DEFAULT VIEWS FOLDER
server.set('views', path.join(__dirname, '/views'))
server.set('view engine', 'ejs')

//CALLBACK STATIC FILES
server.use(express.static(path.join(__dirname, '/public')))

//CREATING BODY DATA FOR ALL REQUESTS
//server.use(express.urlencoded())

//ALL ROUTES
require(path.join(__dirname, '/routes/'))(server)

//404 ROUTE
server.use((req, res) => res.render('erros/500', { erro: '404 NOT FOUND' }))

module.exports = server