const express = require('express')
    , path = require('path')
    , server = express()

//CHANGE DEFAULT VIEWS FOLDER
server.set('views', path.join(__dirname, '/views'))

//CALLBACK STATIC FILES
server.use(express.static(
    path.join(__dirname, '/public')
))

server.get('/produtos', (req, res) => {
    return res.render('produtos/lista.ejs', {
        msgErro: '',
        livros: []
    })
})

module.exports = {
    start: () => server.listen(3000)
}