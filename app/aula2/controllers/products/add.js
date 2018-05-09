const queryString = require('query-string')
    , products = require('../../models/products/')
    , { add } = products()

//GETTING PRODUCTS LIST
module.exports = (req, res) => {
    let Book = ''

    req.on('data', book => (Book += book))
    req.on('end', () => {
        const book = queryString.parse(Book)

        add(book)
            .then(() => res.redirect('/produtos'))
            .catch(erro => res.render('erros/500', { erro }))
    })
}