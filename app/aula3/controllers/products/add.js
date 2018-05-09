const products = require('../../models/products/')
    , { add } = products()

//GETTING PRODUCTS LIST
module.exports = (req, res, next) => {
    const book = req.body
        , validation = req.validations('products')()
        , callAdd = () =>
            add(book)
                .then(() => res.redirect('/produtos'))
                .catch(next)

    validation
        .then(() => callAdd())
        .catch(validationErrors => res.render('produtos/form', { validationErrors }))
}