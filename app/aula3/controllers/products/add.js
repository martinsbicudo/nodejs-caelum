const products = require('../../models/products/')
    , { add } = products()

//GETTING PRODUCTS LIST
module.exports = (req, res) => {
    let book = req.body

    add(book)
        .then(() => res.redirect('/produtos'))
        .catch(erro => res.render('erros/500', { erro }))
}