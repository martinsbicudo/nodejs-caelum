//IMPORT ROUTES
module.exports = server => {
    require('./products')(server)
    require('./home')(server)
}
