//ENV CONFIG
require('dotenv').config()

//SERVER
const server = require(`./app/aula${process.env.AULA}/server`)  

//ALL ROUTES
require(`./app/aula${process.env.AULA}/routes/index`)(server)

//START SERVER
server.listen(3000)