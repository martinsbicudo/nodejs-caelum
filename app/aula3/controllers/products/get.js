const products = require('../../models/products/')
    , { get } = products()

//GETTING PRODUCTS LIST
module.exports = (req, res, next) => 
    get()
        .then(books => 
            res.format({
                html: () => res.render('produtos/lista', {
                    msgErro: '',
                    livros: books
                }),
                json: () => res.send(books)
            })
        )
        .catch(next)