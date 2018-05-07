//CALLBACK REQUESTS
module.exports = (server) => {
    server.get('/produtos', (req, res) => {
        return res.render('produtos/lista.ejs', {
            msgErro: '',
            livros: [
                {
                    titulo: 'Android',
                    preco: 50,
                    descricao: "Livro de android"
                }
            ]
        })
    })
}