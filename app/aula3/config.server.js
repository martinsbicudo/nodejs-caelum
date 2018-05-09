const queryString = require('query-string')

//CONFIG FUNCTIONS TO SERVER
module.exports = server => ({
    body: (req, res, next) => {
        let Data = ''

        req.on('data', data => (Data += data))
        req.on('end', () => {
            req.body = queryString.parse(Data)
            next()
        })
    },
    createRoute: ({ method, route, action, body = false }) => {
        !body || server[method](route, server.body)
        server[method](route, action)

        return server
    }
})