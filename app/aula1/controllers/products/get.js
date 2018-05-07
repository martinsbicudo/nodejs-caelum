//GETTING PRODUCTS LIST
module.exports = (DB) =>
    (req, res) => {
        DB.query('SELECT * FROM livros', (e, books) => {
            e ? console.log(e) :
            res.render('produtos/lista.ejs', {
                msgErro: '',
                livros: books
            })
        })
    }