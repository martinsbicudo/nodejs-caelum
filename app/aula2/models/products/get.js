module.exports = connectionPromise =>
    new Promise((resolve, reject) => {
        connectionPromise
            .then(DB =>
                DB.query('SELECT * FROM livros', (e, books) => e ? reject(e) : resolve(books))
            )
    })