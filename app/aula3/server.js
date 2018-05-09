const config = require('./config.server')
    , express = require('express')
    , path = require('path')
    , validator = require('express-validator')
    
let server = express()

//ADD CONFIG FUNCTIONS TO SERVER
Object.assign(server, config(server))

//CHANGE DEFAULT VIEWS FOLDER
server.set('views', path.join(__dirname, '/views'))
server.set('view engine', 'ejs')

//CALLBACK STATIC FILES
server.use(express.static(path.join(__dirname, '/public')))

//VALIDATION
server.use(validator())

//CREATING BODY DATA FOR ALL REQUESTS
//server.use(express.urlencoded())

//ALL ROUTES
require(path.join(__dirname, '/routes/'))(server)

//404 ERROR
server.use((req, res) => res.render('erros/500', { erro: '404 NOT FOUND' }))

//REQUEST ERROR USING CONTROLLERS NEXT
server.use((erro, req, res, next) => {
    //FORMATOS DE ERRO PARA RESPOSTA
    res.format({
        html: () => res.render('erros/500', { erro }),
        json: () => res.send(erro),
        default: () => res.send("Formato não suportado")
    })    
})

module.exports = server