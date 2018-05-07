//ENV CONFIG
require('dotenv').config()

//ALL ROUTES
require(`./app/aula${process.env.AULA}/routes/index.js`)

//SERVER
const server = require(`./app/aula${process.env.AULA}/server.js`)

//START SERVER
server.listen(3000)