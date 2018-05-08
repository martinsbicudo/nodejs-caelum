const getBooks = require('../../models/products')

//GETTING PRODUCTS LIST
module.exports = (req, res) => 
    getBooks()
        .then(books => 
            res.render('produtos/lista.ejs', {
                msgErro: '',
                livros: books
            })
        )
        .catch(e => console.log(e))