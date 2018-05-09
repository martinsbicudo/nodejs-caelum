const { get } = require('../controllers/home/index')

module.exports = server => {
    server.get('/', get)
    server.get('/home', get)
}