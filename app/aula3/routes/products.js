const { get, form, body, add } = require('../controllers/products/index')

//CALLBACK REQUESTS
module.exports = server => {
    server
        .get('/produtos', get)
        .get('/produtos/form', form)

    server
        //.use(body)
        .post('/produtos', add)
}