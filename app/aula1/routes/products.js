//CALLBACK REQUESTS
module.exports = (server, DB) => {
    server.get('/produtos', (req, res) => {
        DB.query('SELECT * FROM livros', (e, books) => {
            e ? console.log(e) :
            res.render('produtos/lista.ejs', {
                msgErro: '',
                livros: books
            })
        })
    })
}