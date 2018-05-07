const express = require('express')
    , server = express()

server.get('/', (req, res) => {
    return res.send('<h1>index</h1>')
})

server.listen(3000)