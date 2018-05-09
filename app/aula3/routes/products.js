const { get, form, body, add } = require('../controllers/products/index')

//CALLBACK REQUESTS
module.exports = server => {
    server
        .createRoute({
            method: 'get',
            route: '/produtos',
            action: get
        })
        .createRoute({
            method: 'get',
            route: '/produtos/form',
            action: form
        })
        .createRoute({
            method: 'post',
            route: '/produtos',
            action: add,
            body: true
        })
}