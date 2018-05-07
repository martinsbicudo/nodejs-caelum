const http = require('http')
    , server = http.createServer((req, res) => {
        req.url === '/' ? res.end('index') : null
        req.url === '/home' ? res.end('home') : null
    })

server.listen(3000)