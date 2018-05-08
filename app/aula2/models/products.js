const DB = require('../db')

module.exports = () => 
    new Promise((resolve, reject) =>
        DB.query('SELECT * FROM livros', (e, books) => e ? reject(e) : resolve(books))
)