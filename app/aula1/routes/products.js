const get = require('../controllers/products/get')

//CALLBACK REQUESTS
module.exports = (server, DB) => {
    server.get('/produtos', get(DB))
}