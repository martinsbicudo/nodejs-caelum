//IMPORT ROUTES
module.exports = (server, DB) => {
    require('./products')(server, DB)
}
