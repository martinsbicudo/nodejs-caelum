const { get, add } = require('../controllers/products/index')

//CALLBACK REQUESTS
module.exports = server => {
    server.get('/produtos', get)
}