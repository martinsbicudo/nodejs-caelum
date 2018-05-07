const express = require('express')
    , server = express()

server.get('/', (req, res) => {
    return res.send('<h1>New Index</h1>')
})

module.exports = {
    start: () => server.listen(3000)
}