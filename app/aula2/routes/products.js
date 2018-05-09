const { get, form, add } = require('../controllers/products/index')

//CALLBACK REQUESTS
module.exports = server => {
    server
        .get('/produtos', get)
        .get('/produtos/form', form)

    server.post('/produtos', add)
}