//ENV CONFIG
require('dotenv').config()

//SERVER
const server = require(`./app/aula${process.env.AULA}/server`)
    , http = require('http').Server(server)

//SOCKET
require(`./app/aula${process.env.AULA}/socket`)(http)

//START SERVER
http.listen(3000)
