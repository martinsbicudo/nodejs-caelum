//ENV CONFIG
require('dotenv').config()

//SERVER
const server = require(`./app/aula${process.env.AULA || 1}/server`)
    , http = require('http').Server(server)

//SOCKET
require(`./app/aula${process.env.AULA || 1}/socket`)(http)

//START SERVER
http.listen(process.env.PORT || 3000)
