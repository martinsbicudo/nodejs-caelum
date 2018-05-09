module.exports = Connection =>
    new Promise((resolve, reject) =>
        Connection
            .then(DB =>
                DB.query('SELECT * FROM livros', (e, books) => 
                    e ? reject(e) : resolve(books)
                )
            )
            .catch(e => reject(e))
    )