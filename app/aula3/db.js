//ENV CONFIG
require('dotenv').config()

//CONECTION
const mysql = require('mysql')
    , config = {
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
    , pool = mysql.createPool(config)

//EXPORT
module.exports = () => 
    new Promise(resolve => {
        pool.getConnection((e, connection) => resolve(connection))
    })