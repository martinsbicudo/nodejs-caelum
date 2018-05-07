//ENV CONFIG
require('dotenv').config()

//SERVER
const server = require(`./app/aula${process.env.AULA}/server.js`)

//ALL ROUTES
require(`./app/aula${process.env.AULA}/routes/index.js`)(server)

//START SERVER
server.listen(3000)