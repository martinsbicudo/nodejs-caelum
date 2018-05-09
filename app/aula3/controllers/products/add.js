const products = require('../../models/products/')
    , { add } = products()
    , validations = require('../../validations/')

//GETTING PRODUCTS LIST
module.exports = (req, res, next) => {
    const book = req.body
        , validation = validations(req, 'products')

    validation()
        .catch(validationErrors => res.render('produtos/form', { validationErrors }))
        .then(() => add(book))
        .then(() => res.redirect('/produtos'))
        .catch(next)
}