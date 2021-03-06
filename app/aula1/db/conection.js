//ENV CONFIG
require('dotenv').config()

//CONECTION
const mysql = require('mysql')
    , DB = mysql.createPool({
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    })

//EXPORT
module.exports = DB