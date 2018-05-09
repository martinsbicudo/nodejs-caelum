const Products = require('./products')
    , Home = require('./home')

//IMPORT ROUTES
module.exports = server => {
    const routes = [
        ...Home,
        ...Products
    ]

    //CREATING ROUTES
    routes.forEach(route => server.createRoute(route))
}
