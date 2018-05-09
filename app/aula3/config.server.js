const queryString = require('query-string')
    , validations = require('./validations/')

//CONFIG FUNCTIONS TO SERVER
module.exports = server => ({
    body: (req, res, next) => {
        let Data = ''

        req.on('data', data => (Data += data))
        req.on('end', () => {
            if (req.headers['content-type'] == 'application/json')
                Data = JSON.parse(Data)
            else
                Data = queryString.parse(Data)            

            req.body = Data
            next()
        })
    },
    createRoute: ({ method, route, action, body = false }) => {
        !body || server[method](route, server.body)
        server[method](route, action)

        return server
    }
})