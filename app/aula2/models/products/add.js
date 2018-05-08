module.exports = (Connection, book) =>
    new Promise((resolve, reject) => {
        Connection
            .then(DB =>
                DB.query('INSERT INTO livros SET ?', book, e => 
                    e ? reject(e) : resolve()
                )
            )
    })