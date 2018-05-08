const { get } = require('../../models/products/')

//GETTING PRODUCTS LIST
module.exports = (req, res) => 
    get()
        .then(books => 
            res.render('produtos/lista', {
                msgErro: '',
                livros: books
            })
        )
        .catch(erro =>
            res.render('erros/500', { erro })
        )