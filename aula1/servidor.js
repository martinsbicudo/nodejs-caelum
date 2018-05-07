const express = require('express')
    , server = express()

server.get('/', (req, res) => {
    return res.end('index')
})

server.listen(3000)