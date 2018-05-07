//ENV CONFIG
require('dotenv').config()

//SERVER
const server = require(`./app/aula${process.env.AULA}/server.js`)
    , DB = require(`./app/aula${process.env.AULA}/db/conection.js`)
    

//ALL ROUTES
require(`./app/aula${process.env.AULA}/routes/index.js`)(server, DB)

//START SERVER
server.listen(3000)