//ENV CONFIG
require('dotenv').config()

//SERVER
const server = require(`./app/aula${process.env.AULA}/server.js`)
    , mysql = require('mysql')
    , DB = mysql.createPool({
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    })

//ALL ROUTES
require(`./app/aula${process.env.AULA}/routes/index.js`)(server, DB)

//START SERVER
server.listen(3000)