const queryString = require('query-string')

//CREATING BODY DATA
module.exports = (req, res, next) => {
    let Data = ''

    req.on('data', data => (Data += data))
    req.on('end', () => {
        req.body = queryString.parse(Data)
        next()
    })
}