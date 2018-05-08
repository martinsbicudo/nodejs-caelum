module.exports = (DB) =>
    () => new Promise((resolve, reject) =>
        DB.query('SELECT * FROM livros', (e, books) => e ? reject(e) : resolve(books)
    )
)