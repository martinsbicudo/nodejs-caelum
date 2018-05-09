const { get, form, body, add } = require('../controllers/products/index')

//CALLBACK REQUESTS
module.exports = [
    {
        method: 'get',
        route: '/produtos',
        action: get
    },
    {
        method: 'get',
        route: '/produtos/form',
        action: form
    },
    {
        method: 'post',
        route: '/produtos',
        action: add,
        body: true
    }
]